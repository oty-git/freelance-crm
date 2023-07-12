import {useEffect, useState} from "react";
import apiExpertises from "../../../api/expertises";
import Checkbox from "../../common/blocks/Checkbox";
import FormInput from "../../common/form/FormInput";
import {useTranslation} from "react-i18next";

const ExpertisesBlock = ({parentState, setParentState}) => {

    const [expertises, setExpertises] = useState(false);

    useEffect(() => {
        getExpertises();
    }, []);

    const getExpertises = () => {
        apiExpertises.getAll().then(res => {
            if (!(res.response && res.response.data))
                setExpertises(res);
        });
    }

    const handlerChange = (e, value) => {
        if (e.target.checked) {
            parentState['AccountExpertises'].push({expertises_id: value});
        } else {
            parentState['AccountExpertises'] = parentState['AccountExpertises'].filter((obj) => {
                return obj.expertises_id !== value;
            })
        }
        setParentState(parentState);
    }
    const {t} = useTranslation();

    return <div className="application-form__item">
        <div className="application-form__card">
            <div className="application-form__card-line">
                <div className="row">
                    <div className="col-12 col-md-10 col-lg-7">
                        <div className="form-group">
                            <div className="form-group__header">
                                <h5>{t("Please select your strongest fields:")}</h5>
                            </div>
                            <div className="row mb-15">
                                <div className="col-12 col-xs-6 mb-10 mb-xs-0">
                                    <div className="column-group column-group--sm">
                                        {expertises && expertises.map((item, index) => {
                                            return <div key={index} className="column-group__item">
                                                <Checkbox label={item.name} name={item.name} index={index} value={item.id} changeHandler={handlerChange}/>
                                            </div>;
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12 col-md-6">

                                    <FormInput type={'text'} label={t('Custom')} name={'custom'}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default ExpertisesBlock;
