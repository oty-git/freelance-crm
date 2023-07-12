import Modal from "react-responsive-modal";
import FormInput from "../../form/FormInput";
import apiUsers from "../../../../api/users";
import FormErrors from "../../blocks/FormErrors";
import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";
import { useTranslation } from "react-i18next";

const ModalConfirmEmail = ({ modalShow, setModalShow, user }) => {
  const styles = {
    width: "100%",
    maxWidth: "700px",
    margin: "10px auto",
    borderRadius: "3px",
    padding: "60px 15px",
    boxShadow: "0px 4px 5px rgb(0 0 0 / 5%)",
  };

  const [password, setPassword] = useState(false);
  const [modalSuccessShow, setModalSuccessShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setPassword(false);
    let formData = new FormData(e.target);

    if (user) {
      formData.append("id", user.id);
    }

    apiUsers.post(formData, "/reset-confirm").then((res) => {
      if (res.success) {
        if (res.password) {
          setPassword(res.password);
        }
        setModalSuccessShow(true);
        setModalShow(false);
      }
    });
  };
  const { t } = useTranslation();

  return (
    <React.Fragment>
      <Modal
        open={modalShow}
        onClose={() => setModalShow(false)}
        center
        showCloseIcon={false}
        focusTrapped={false}
        styles={{ modal: styles }}
        classNames={{
          modal: "password-change-modal",
        }}
      >
        <div className="password-change-modal__wrap">
          <div className="password-change-modal__title">
            <h3>{t("Recover password")}</h3>
          </div>
          <div className="password-change-modal__text">
            <p>{t("Recover password information.")}</p>
          </div>
          <div className="password-change-modal__form">
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              <>
                <div className="form__line">
                  <div className="input-animation js-input-animation input-animation--required">
                    <FormInput
                      name={"reset_token"}
                      label={t("Enter code from email")}
                      id={"reset_token"}
                      type={"text"}
                      isRequired={true}
                    />
                  </div>
                </div>
                <div className="form__line">
                  <div className="input-animation js-input-animation input-animation--required">
                    <FormInput
                      name={"password"}
                      label={t("New password")}
                      id={"newPassword"}
                      type={"password"}
                      isRequired={true}
                    />
                  </div>
                </div>
                <div className="form__line">
                  <div className="input-animation js-input-animation input-animation--required">
                    <FormInput
                      name={"repassword"}
                      label={t("Repeat new password")}
                      id={"repeatPassword"}
                      type={"password"}
                      isRequired={true}
                    />
                  </div>
                </div>
              </>

              <div
                className={
                  "column-group column-group--md column-group--justify-items-center"
                }
              >
                <FormErrors />
              </div>
              <div className="form__line">
                <div className="password-change-modal__buttons">
                  <div className="button-group button-group--column">
                    <button
                      className="button button--surfie-green button-group__button"
                      type="submit"
                      data-modal-open="password-change-success-modal"
                    >
                      {t("Show my password")}
                    </button>
                    <button
                      className="button button--transparent button-group__button"
                      type="button"
                      data-modal-close="password-change-modal"
                      onClick={(e) => setModalShow(false)}
                    >
                      {t("Cancel")}
                    </button>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </Modal>
      {!!password && (
        <ModalSuccess
          modalShow={modalSuccessShow}
          setModalShow={setModalSuccessShow}
          password={password}
        />
      )}
    </React.Fragment>
  );
};

export default ModalConfirmEmail;
