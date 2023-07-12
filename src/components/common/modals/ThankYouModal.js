import Modal from "react-responsive-modal";
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
const ThankYouModal = ({ modalShow, setSuccessModal }) => {
  const history = useHistory();
  const styles = {
    width: "100%",
    maxWidth: "700px",
    margin: "10px auto",
    borderRadius: "3px",
    padding: "60px 15px",
    boxShadow: "0px 4px 5px rgb(0 0 0 / 5%)",
  };
  const { t } = useTranslation();

  return (
    <Modal
      open={modalShow}
      onClose={(e) => setSuccessModal(false)}
      center
      showCloseIcon={false}
      focusTrapped={false}
      styles={{ modal: styles }}
      classNames={{
        modal: "registration-success-modal",
      }}
    >
      <div className="registration-success-modal__wrap">
        <div className="registration-success-modal__icon">
          <img src="/images/icons/check-circle.svg" alt="check" />
        </div>
        <div className="registration-success-modal__title">
          <h3>{t("Thank you, registration successful.")}</h3>
        </div>
        <div className="registration-success-modal__text">
          <p>
            {t(
              "You will be noticed by email when your account will be activated.",
            )}
          </p>
        </div>
        <div className="registration-success-modal__button">
          <button
            onClick={() => {
              history.push("/");
            }}
            className="button button--border-surfie-green"
            type="button"
            data-modal-close="registration-success-modal"
          >
            {t("Back to home page")}
          </button>
        </div>
      </div>
    </Modal>
  );
};

export default ThankYouModal;
