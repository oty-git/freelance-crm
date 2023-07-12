import {Link} from "react-router-dom";
import FormErrors from "../common/blocks/FormErrors";
import FormInput from "../common/form/FormInput";
import React, {useState} from "react";
import SubmitButton from "../common/blocks/SubmitButton";
import {login} from "../../store/actions/authentication";
import store from "../../store/store";
import {withRouter} from "react-router-dom";
import ModalChangePassword from "../common/modals/password/ModalChangePassword";
import {useTranslation} from "react-i18next";

const LoginForm = (props) => {

    const [errors, setErrors] = useState(false);
    const [modalChangePassword, setModalChangePassword] = useState(false);

    const signIn = (e) => {
        e.preventDefault();
        store.dispatch(login(e, props, setErrors));
    };
    const {t} = useTranslation();

    return (
        <div className="form-box__form">
            <form className="form" onSubmit={e => signIn(e)}>
                <div className="form__line">
                    <div className="form-group">
                        <FormInput autocomplete={"off"} type={'email'} label={t('Email')} name={'email'}/>
                    </div>
                </div>
                <div className="form__line">
                    <div className="form-group">
                        <FormInput autocomplete={"off"} type={'password'} label={t('Password')} name={'password'}/>
                    </div>
                </div>
                <div className="form__line">
                    <div className="column-group column-group--md column-group--justify-items-center">
                        <SubmitButton/>
                        {errors && <FormErrors errors={errors}/>}
                        <div className="column-group__item">
                            <a className="link" href={''} onClick={(e)=>{
                                e.preventDefault();
                                setModalChangePassword(true)
                            }}>{t("Forgot password?")}</a>
                        </div>
                    </div>
                </div>
            </form>
            <ModalChangePassword user={false}   showEmail={true} showForgotButton={false} modalShow={modalChangePassword} setModalShow={setModalChangePassword}/>
        </div>
    );
}

export default withRouter(LoginForm);
