import RadioButton from "../../common/blocks/RadioButton";
import FormItemExpanded from "./formItem/FormItemExpanded";
import { useState} from "react";
import {useSelector} from "react-redux";
import priceTypes from "../../../constants/priceTypes";
import {useTranslation} from "react-i18next";

const FormItem = ({service, parentState, setParentState, index}) => {

    const [expanded, setExpanded] = useState(parentState.AccountToServices[index]?.AccountServicesLanguages);
    const languages = useSelector(state => state.init.languages);

    const changeValue = (e) => {
        if (e.target.value === '1') {
            let obj = {};
            obj['account_services_id'] = service.id;
            obj['max_price'] = service.max_price;
            obj['min_price'] = service.min_price;
            obj['price_calculation_type'] = service.price_calculation_type;
            obj['AccountServicesLanguages'] = [{languages_from_id: languages[0].id,languages_to_id: service.interpreting ? languages[0].id :  null, price: 0}];

            let tmp = {...parentState};
            tmp['AccountToServices'][index] = obj;
            setParentState(tmp);
            setExpanded(true);

        } else {
            let tmp = {...parentState};
            tmp['AccountToServices'][index] = false;
            setParentState(tmp);
            setExpanded(false);
        }

        setSelectedRadio(e.target.value);
    };

    const [selectedRadio, setSelectedRadio] = useState(parentState['AccountToServices'][index]?.AccountServicesLanguages ? '1' : (parentState['AccountToServices'][index]===false ? '0' : false) );
    const {t} = useTranslation();

    return <div className="application-form__item">
        <div className={"application-form__card" +(parentState.AccountToServices[index]?.error ?  ' application-form__card--danger' : '')}>
            {!!parentState.AccountToServices[index]?.error&&
            <div className="application-form__card-line">
                <p className="text-brick-red font-semibold">{parentState.AccountToServices[index].error}</p>
            </div>
            }

            <div className="application-form__card-line">
                <div className="form-group">
                    <div className="form-group__header">
                        <h5>{service.name}</h5>
                    </div>
                    <div className="row-group" onChange={e => changeValue(e)}>
                        <div className="row-group__item">
                            <RadioButton name={service.name} value={1} label={t('Yes')} changeValue={changeValue} selected={selectedRadio} />
                        </div>
                        <div className="row-group__item">
                            <RadioButton name={service.name} value={0} label={t('No')} changeValue={changeValue} selected={selectedRadio} />
                        </div>
                    </div>
                </div>
            </div>
            {expanded &&
                <FormItemExpanded service={service}  parentState={parentState} setParentState={setParentState} priceTypes={priceTypes} serviceIndex={index}
            />}
        </div>
    </div>;
}

export default FormItem;
