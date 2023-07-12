import { useTranslation } from "react-i18next";

const FormButtons = ({ handleNext, handlePrev, handleDiscard }) => {
  const { t } = useTranslation();

  return (
    <div className="application-form__item">
      <div className="button-group">
        <button
          className="button button--white button-group__button"
          onClick={(e) => handlePrev(e)}
        >
          {t("Back")}
        </button>
        <button
          className="button button--surfie-green button-group__button"
          onClick={(e) => handleNext(e)}
        >
          {t("Next")}
        </button>
        <button
          className="button button--transparent button-group__button"
          onClick={(e) => handleDiscard(e)}
        >
          {t("Discard")}
        </button>
      </div>
    </div>
  );
};

export default FormButtons;
