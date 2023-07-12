import FormInput from "../../../common/form/FormInput";
import React, {useState} from "react";
import DeleteRowBtn from "../../../account/settings/tabsBlocks/services/ServiceModalContent/DeleteRowBtn";
import {useTranslation} from "react-i18next";

const DiplomaRow = ({number, setParentState, parentState, index,deleteRow,rows}) => {

    const [state, setState] = useState({name: false, category: false});


    const handlerChange = (e,name) => {
        let tmpState = state;
        tmpState[name] = e.target.value;
        setState(tmpState);

        parentState['AccountDiplomas'][index] = state;
        setParentState(parentState);
    };


    const {t} = useTranslation();


    return <div className="form-group mb-15">
        <div className="form-group__header">
            <p><span className="h3 text-surfie-green">#{number}</span> {t("Your diploma:")}</p>
        </div>
        <div className="row">
            <div className="col-12 col-md-6 mb-15 mb-md-0">
                <input className="input input--border-alto" type="text" name={'name'}
                       placeholder={t("Diploma type (ex. bacaular)")} onChange={e => handlerChange(e, 'name')}/>
            </div>
            <div className="col-12 col-md-4">
                <FormInput type={'text'} label={t('Category:')} name={'category'} handlerChange={handlerChange} />
            </div>
            {index>0 &&
            <div className="col-12 col-md-2 align-items-center justify-content-center d-flex">
                <div className="row-group__item">
                    <DeleteRowBtn handleClick={deleteRow} type={"AccountDiplomas"} index={index}/>
                </div>
            </div>
            }

        </div>
    </div>
};

export default DiplomaRow;
