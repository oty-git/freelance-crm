import MainWrapper from "../../layout/main/MainWrapper";
import Table from "../../common/table/Table";
import apiPermissions from "../../../api/permissions";
import React from "react";
import { useTranslation } from "react-i18next";

const PermissionsSettings = ({}) => {
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
    <MainWrapper title={t("Permissions")}>
      <Table api={apiPermissions} formConfig={getFormConfig()} />
    </MainWrapper>
  );
};
export default PermissionsSettings;
