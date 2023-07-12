import React from "react";
import apiLanguages from "../../../api/languages";
import MainExpandableTableWrapper from "../../layout/main/MainExpandableTableWrapper";
import Table from "../../common/table/Table";
import {useTranslation} from "react-i18next";


const LanguagesSettings=({})=>{
    const {t} = useTranslation();


    const getFormConfig=()=>{
        try {
            return  require('./formConfig').default;
        }catch (e) {
            console.log('e',e)
            /**
             * no form config
             */
            return false;
        }
    };



    return <MainExpandableTableWrapper title={t('Languages')}>
                    <Table api={apiLanguages} formConfig={getFormConfig()} />
                </MainExpandableTableWrapper>
};
export default LanguagesSettings;
