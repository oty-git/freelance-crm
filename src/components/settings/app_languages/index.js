import React from "react";
import MainExpandableTableWrapper from "../../layout/main/MainExpandableTableWrapper";
import Table from "../../common/table/Table";
import apiAppLanguages from "../../../api/app_languages";
import {useTranslation} from "react-i18next";


const AppLanguagesSettings=({})=>{

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



    return  <MainExpandableTableWrapper title={t('App Languages')}>
                    <Table api={apiAppLanguages} formConfig={getFormConfig()} />
                </MainExpandableTableWrapper>
};
export default AppLanguagesSettings;
