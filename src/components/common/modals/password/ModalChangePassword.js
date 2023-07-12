import Modal from "react-responsive-modal";
import FormInput from "../../form/FormInput";
import apiUsers from "../../../../api/users";
import FormErrors from "../../blocks/FormErrors";
import React, { useState } from "react";
import ModalSuccess from "./ModalSuccess";
import ModalConfirmEmail from "./ModalConfirmEmail";
import { useTranslation } from "react-i18next";

const ModalChangePassword = ({
  modalShow,
  setModalShow,
  user,
  showEmail = false,
  showForgotButton = false,
}) => {
  const [email, setEmail] = useState(!!showEmail);

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
  const [modalConfirmShow, setModalConfirmShow] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    setPassword(false);
    let formData = new FormData(e.target);

    if (user) {
      formData.append("id", user.id);
    }

    apiUsers.post(formData, "/reset", e).then((res) => {
      if (res.success) {
        if (res.password) {
          setPassword(res.password);
          setModalSuccessShow(true);
        } else {
          setModalConfirmShow(true);
        }
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
            <h3>{email ? t("Reset password") : t("Change password")}</h3>
          </div>
          <div className="password-change-modal__text">
            <p>
              {email
                ? t("Reset password information.")
                : t("Changing password information.")}
            </p>
          </div>
          <div className="password-change-modal__form">
            <form className="form" onSubmit={(e) => onSubmit(e)}>
              {!email && (
                <>
                  <div className="form__line">
                    <div className="input-animation js-input-animation input-animation--required">
                      <FormInput
                        name={"current_password"}
                        label={t("Old password")}
                        id={"oldPassword"}
                        type={"password"}
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
              )}

              {!!email && (
                <div className="form__line">
                  <div className="input-animation js-input-animation input-animation--required">
                    <FormInput
                      name={"email"}
                      label={t("Email")}
                      id={"Email"}
                      type={"text"}
                      isRequired={true}
                    />
                  </div>
                </div>
              )}

              {!!showForgotButton && (
                <div className="form__line">
                  <a
                    className="link"
                    href="#"
                    onClick={(e) => {
                      e.preventDefault();
                      setEmail(!email);
                    }}
                  >
                    {email ? t("Go to change password") : t("Forgot password?")}
                  </a>
                </div>
              )}
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
                      {email
                        ? t("Confirm password reset")
                        : t("Confirm new password")}
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
      <ModalConfirmEmail
        modalShow={modalConfirmShow}
        setModalShow={setModalConfirmShow}
        user={user}
      />
    </React.Fragment>
  );
};

export default ModalChangePassword;
