import DiplomaRow from "./DiplomaRow";
import React from "react";
import {useTranslation} from "react-i18next";

const DiplomaExpanded = ({parentState, setParentState}) => {


    const handleAddRow = (e) => {
        e.preventDefault();

        let newParentState={...parentState};
        newParentState['AccountDiplomas'].push({name: false, category: false});
        setParentState(newParentState);

    };
    const deleteRow = (e,type,index) => {
        e.preventDefault();

        let newParentState = {...parentState};
        if(newParentState[type].filter(item=>item).length===1){
            return;
        }
        delete newParentState[type][index];
        setParentState(newParentState);

    };

    let rows = (parentState && parentState['AccountDiplomas'] ) ?  parentState['AccountDiplomas']: [];
    const {t} = useTranslation();

    let number = 0;
    return <div data-radio-toggle-content="diploma">
        <div className="application-form__card-line">
            <div className="row">
                <div className="col-12 col-lg-8">
                    {
                        rows.map((item, index) =>{
                            number++;
                            return <DiplomaRow rows={rows} deleteRow={deleteRow} key={index} number={number} index={index} parentState={parentState} setParentState={setParentState}/>
                        }
                    )}
                </div>
            </div>
        </div>
        <div className="application-form__card-line">
            <button className="button button--border-surfie-green" type="button" onClick={e => handleAddRow(e)}><span>{t("One more")}</span>
                <svg className="svg-icon svg-icon--surfie-green button__icon" width="10" height="10">
                    <use href="/images/svg/svg-sprite/symbol/sprite.svg#plus" x="0" y="0"></use>
                </svg>
            </button>
        </div>
    </div>;
}

export default DiplomaExpanded;
