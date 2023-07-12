import React from "react";
import { useTranslation } from "react-i18next";

const Main = ({}) => {
  const { t } = useTranslation();
  return <React.Fragment>{t("Dashboard")}</React.Fragment>;
};

export default Main;
