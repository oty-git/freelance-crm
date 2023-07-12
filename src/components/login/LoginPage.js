import LoginFormWrapper from "./LoginFormWrapper";
import SelectInput from "../common/blocks/SelectInput";
import { useSelector } from "react-redux";
import React, { useEffect } from "react";
import { withRouter } from "react-router-dom";
import Languages from "../layout/main/header/Languages";

const LoginPage = (props) => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
  }, [isAuthenticated]);

  return (
    <div className="login-page">
      <div className="container">
        <div className="login-page__lang">
          <Languages />
        </div>
        <LoginFormWrapper />
      </div>
    </div>
  );
};

export default withRouter(LoginPage);
