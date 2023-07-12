import MainWrapper from "../../layout/main/MainWrapper";
import Table from "../../common/table/Table";
import apiRoles from "../../../api/roles";
import React from "react";
import { useTranslation } from "react-i18next";

const RolesSettings = ({}) => {
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
    <MainWrapper title={t("Roles")}>
      <Table api={apiRoles} formConfig={getFormConfig()} formToJson={true} />
    </MainWrapper>
  );
};
export default RolesSettings;
