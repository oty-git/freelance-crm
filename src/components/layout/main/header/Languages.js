import SelectInput from "../../../common/blocks/SelectInput";
import { useSelector } from "react-redux";
import { withTranslation } from "react-i18next";

const Languages = ({
  i18n,
  className = "select--transparent header__dropdown-lang",
}) => {
  const app_languages = useSelector((state) => state.init.app_languages);

  const changeLanguage = (value, name, arrayName, arrayIndex) => {
    let language = app_languages.find((item) => item.id === value);

    if (language) i18n.changeLanguage(language.code);

    window.location.reload();
  };

  return (
    <div className="language__picker">
      {!!app_languages && (
        <>
          <SelectInput
            value={app_languages.find((item) => item.code === i18n.language)}
            name={"language"}
            changeHandler={changeLanguage}
            labelImg={"/images/icons/planet.svg"}
            options={app_languages}
            className={className}
          />
        </>
      )}
    </div>
  );
};
export default withTranslation()(Languages);
