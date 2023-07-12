import React, { useState } from "react";
import LoginForm from "./LoginForm";
import { Link } from "react-router-dom";
import SocialAuth from "./SocialAuth";
import FormLoading from "../common/blocks/FormLoading";
import { useTranslation } from "react-i18next";

const LoginFormWrapper = () => {
  const [loading] = useState(false);
  const { t } = useTranslation();

  return (
    <div className="login-page__box">
      <div className="form-box">
        <div className="form-box__header">
          <div className="form-box__icon">
            <img src="/images/logo.svg" alt="logo" />
          </div>
          <div className="form-box__title">
            <h2 className="text-surfie-green">{t("Log in")}</h2>
          </div>
        </div>
        {loading ? (
          <FormLoading loadingText={"Signing in"} />
        ) : (
          <React.Fragment>
            <LoginForm />
            <div className="form-box__divider">
              <div className="form-divider">
                <div className="form-divider__text">{t("Or")}</div>
              </div>
            </div>
            <SocialAuth />
            <div className="form-box__footer">
              <Link
                to={"/registration/freelancer"}
                className={"link link--underline"}
              >
                {t("Create an account")}
              </Link>
            </div>
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default LoginFormWrapper;
