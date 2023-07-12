import SelectInput from "../../../common/blocks/SelectInput";
import Button from "./Button";
import {useSelector} from "react-redux";
import React, {useState} from "react";
import DeleteRowBtn from "../../../account/settings/tabsBlocks/services/ServiceModalContent/DeleteRowBtn";
import {useTranslation} from "react-i18next";

const FormItemExpanded = ({service, parentState, setParentState, priceTypes,serviceIndex}) => {
    const languages = useSelector(state => state.init.languages);
    const currencies = useSelector(state => state.init.currencies);
    const [isCalculationType, setIsCalculationType] = useState(!!service.price_calculation_type);

    const handleAddRow = (e) => {
        e.preventDefault();
        let newParentState={...parentState};
        newParentState['AccountToServices'][serviceIndex]['AccountServicesLanguages'].push({languages_from_id: languages[0].id,languages_to_id: service.interpreting ? languages[0].id : null, price: 0});
        setParentState(newParentState);
    };
    const deleteRow = (e,type,index) => {
        e.preventDefault();
        let newParentState = {...parentState};

        if(newParentState['AccountToServices'][serviceIndex][type].length===1){
            return;
        }
        delete newParentState['AccountToServices'][serviceIndex][type][index];
        setParentState(newParentState);
    };

    const handleChange = (value, name) => {
        let tmpState = {...parentState};
        tmpState['AccountToServices'][serviceIndex][name] = value;
        delete tmpState['AccountToServices'][serviceIndex].error;
        setParentState(tmpState);
        setIsCalculationType(true);
    };

    let rows = (parentState && parentState['AccountToServices'] && parentState['AccountToServices'][serviceIndex]) ?  parentState['AccountToServices'][serviceIndex]['AccountServicesLanguages'] : [];
    const {t} = useTranslation();

    return <div>

        {(!service.price_calculation_type || !service.language_selection) &&
            <div className="application-form__card-line">
                <div className="row">
                    {!service.price_calculation_type &&
                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <div className="form-group__header">
                                <p>{t("How do you calculate the price?")}</p>
                            </div>
                            <SelectInput
                                options={priceTypes}
                                name={'price_calculation_type'}
                                changeHandler={handleChange}
                                placeholder={!isCalculationType ? t('Please select price calculation type') : false}
                            />
                        </div>
                    </div>
                    }

                    {!service.language_selection &&

                    <div className="col-12 col-md-6">
                        <div className="form-group">
                            <div className="form-group__header">
                                <p>{(service.price_calculation_units || parentState['AccountToServices'][serviceIndex]['price_calculation_type'])
                                ?
                                <>
                                    {t("Your preferred price per")}
                                    <span className="font-bold"> {service.price_calculation_units} {t(service.price_calculation_type||parentState['AccountToServices'][serviceIndex]['price_calculation_type'])}:</span>
                                </>
                                    :
                                   t("Your preferred price:")
                                }
                                </p>
                            </div>
                            <input className="input input--alabaster"
                                   type="number"
                                   name={'price'}
                                   placeholder="0.00"
                                    onChange={e => handleChange(e.target.value, 'price')}
                                   min={service.min_price}
                                   max={service.max_price}
                            />
                        </div>
                    </div>
                    }
                </div>
            </div>
        }

        {((service.price_calculation_type || isCalculationType) && service.language_selection) ?
            <React.Fragment>
                {rows.map((item, index) => {
                    return <FormItemRow service={service} deleteRow={deleteRow} value={item} key={index}
                                        languages={languages} currencies={currencies} serviceIndex={serviceIndex}
                                        index={index} parentState={parentState} setParentState={setParentState}/>
                })}
                <input className="input input--alabaster" type="hidden" name={'account_services_id'} value={service.id}/>
                <div className="application-form__card-line">
                    <Button text={t('Add combination')} handleClick={handleAddRow}/>
                </div>
            </React.Fragment> : ''
        }

    </div>;
};

export default FormItemExpanded;

const FormItemRow = ({languages,currencies, index,serviceIndex, value, setParentState,parentState,deleteRow,service}) => {

    const [state, setState] = useState({});

    const changeHandler = (value, name) => {
        let tmpState = state;
        tmpState[name] = value;
        setState(tmpState);

        let newParentState={...parentState};

        newParentState['AccountToServices'][serviceIndex]['AccountServicesLanguages'][index][name] = value;
        delete newParentState['AccountToServices'][serviceIndex].error;
        setParentState(newParentState);
    };

    const {t} = useTranslation();




    return <div className="application-form__card-line">
        <div className="row">
            <div className="col-12 col-md-6 col-lg-7 mb-25 mb-md-0">
                <div className="form-group">
                    <div className="form-group__header">
                        <p>
                            {service.interpreting
                                ?
                                t('What combinations do you translate?')
                                :
                                t('What languages do you write?')
                            }
                        </p>
                    </div>
                    <div className="row">
                        <div className="col-12 col-lg-6 mb-15 mb-lg-0">
                            <div className="row-group row-group--align-center row-group--sm">
                                {!!service.interpreting &&
                                    <div className="row-group__item">
                                        <p>{t("From")}</p>
                                    </div>
                                }
                                <div className="row-group__item row-group__item--flex-1">
                                    <SelectInput
                                        value={value["languages_from_id"]}
                                        options={languages}
                                        name={'languages_from_id'}
                                        changeHandler={changeHandler}
                                        search={!!languages}
                                    />
                                </div>
                            </div>
                        </div>
                        {!!service.interpreting &&
                        <div className="col-12 col-lg-6">
                            <div className="row-group row-group--align-center row-group--sm">
                                <div className="row-group__item">
                                    <p>{t("To")}</p>
                                </div>
                                <div className="row-group__item row-group__item--flex-1">
                                    <SelectInput
                                        value={value["languages_to_id"]}
                                        options={languages}
                                        name={'languages_to_id'}
                                        changeHandler={changeHandler}
                                        search={!!languages}
                                    />
                                </div>
                            </div>
                        </div>
                        }
                    </div>
                </div>
            </div>
            <div className="col-12 col-md-6 col-lg-5">
                <div className="form-group">
                    <div className="form-group__header">
                        <p>{(service.price_calculation_units || parentState['AccountToServices'][serviceIndex]['price_calculation_type'])
                            ?
                            <>
                                {t("Your preferred price per")}
                                <span className="font-bold"> {service.price_calculation_units} {t(service.price_calculation_type||parentState['AccountToServices'][serviceIndex]['price_calculation_type'])}:</span>
                            </>
                            :
                            t("Your preferred price:")
                        }
                        </p>
                    </div>
                    <div className="row-group row-group--align-center row-group--0 no-wrap">
                        <div className="row-group__item">
                            <input className="input input--alabaster"
                                   type="number"
                                   name={'price'}
                                   placeholder="0.00"
                                   onChange={e => changeHandler(e.target.value, 'price')}
                                   min={service.min_price}
                                   max={service.max_price}
                            />
                        </div>
                        <div className="row-group__item">
                            <SelectInput options={currencies} name={"currencies_id"} className={'select--transparent'} changeHandler={changeHandler}/>
                        </div>
                        {index>0 &&
                        <div className="row-group__item">
                            <DeleteRowBtn handleClick={deleteRow} index={index} type={'AccountServicesLanguages'}/>
                        </div>
                        }
                    </div>
                </div>
            </div>
        </div>
    </div>
};
