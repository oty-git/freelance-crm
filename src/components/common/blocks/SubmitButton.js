import { useTranslation } from "react-i18next";

const SubmitButton = () => {
  const { t } = useTranslation();

  return (
    <div className="column-group__item">
      <button
        className="button button--fluid button--surfie-green"
        type="submit"
      >
        {t("Sign in")}
      </button>
    </div>
  );
};

export default SubmitButton;
