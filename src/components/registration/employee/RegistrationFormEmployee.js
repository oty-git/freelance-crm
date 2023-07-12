import React, {useState} from "react";
import ThankYouModal from "../../common/modals/ThankYouModal";
import FormTitle from "../freelancer/FormTitle";
import PersonInputsBlock from "../PersonInputsBlock";
import Checkbox from "../../common/blocks/Checkbox";
import apiEmployees from "../../../api/employees";
import {setAuthToken} from "../../../store/actions/authentication";
import {useTranslation} from "react-i18next";

const RegistrationFormEmployee = () => {

    const [successModal, setSuccessModal] = useState(false);
    const [errors, setErrors] = useState(false);
    const [state, setState] = useState({});

    const signUp = (e) => {
        e.preventDefault();
        apiEmployees.put(state, '/signup',e).then(r => {
            if (r){
                if(r.token){
                    setAuthToken(r.token);
                    localStorage.setItem('userToken', r.token);
                }
                setErrors(false);
                setSuccessModal(true)
            }

        });
    };
    const {t} = useTranslation();

    return <div className="employer-application-page__form">
        <form className={'application-form'} onSubmit={e => signUp(e)}>
            <FormTitle title={t('Employee registration form')} className={'text-surfie-green text-center'}/>
            <div className="application-form__item">
                <div className="application-form__card">
                    <div className="application-form__card-line">
                        <PersonInputsBlock parentState={{...state}} setParentState={setState} errors={errors}/>
                    </div>
                </div>
            </div>
            <div className="application-form__item">
                <div className="application-form__card application-form__card--sm">
                    <Checkbox label={t('I confirm that my details is correct')} name={'confirm-details'}/>
                </div>
            </div>
            <div className="application-form__item">
                <button className="button button--fluid button--surfie-green" type="submit">
                    {t("Complete application")}
                </button>
                <ThankYouModal modalShow={successModal} setSuccessModal={setSuccessModal}/>
            </div>
        </form>
    </div>
}

export default RegistrationFormEmployee;
