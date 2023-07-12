import React from "react";
import MainWrapper from "../../layout/main/MainWrapper";
import Table from "../../common/table/Table";
import apiServices from "../../../api/services";
import { useTranslation } from "react-i18next";

const ServicesSettings = ({}) => {
  const { t } = useTranslation();

  const getFormConfig = () => {
    try {
      return require("./formConfig").default;
    } catch (e) {
      console.log("e", e);
      /**
       * no form config
       */
      return false;
    }
  };

  return (
    <MainWrapper title={t("Services")}>
      <Table api={apiServices} formConfig={getFormConfig()} />
    </MainWrapper>
  );
};
export default ServicesSettings;
