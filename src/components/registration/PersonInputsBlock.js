import FormInput from "../common/form/FormInput";
import Datepicker from "../common/blocks/Datepicker";
import React from "react";
import { useSelector } from "react-redux";
import SelectInput from "../common/blocks/SelectInput";
import FormErrors from "../common/blocks/FormErrors";
import { useTranslation } from "react-i18next";

const PersonInputsBlock = ({ parentState, setParentState, errors }) => {
  const languages = useSelector((state) => state.init.languages);

  const handlerChange = (e, name) => {
    let newState = { ...parentState };

    if (e && e.target) {
      newState[name] = e.target.value;
    } else {
      newState[name] = e;
    }
    setParentState(newState);
  };

  const { t } = useTranslation();

  return (
    <div className="column-group column-group--md">
      <div className="column-group__item">
        <FormInput
          type={"text"}
          label={t("Name, surname")}
          id={"name"}
          name={"name"}
          isRequired={true}
          handlerChange={handlerChange}
        />
      </div>
      <div className="column-group__item">
        <div className="row-group row-group--flex-1">
          <div className="row-group__item">
            <FormInput
              type={"email"}
              label={t("Email")}
              id={"email"}
              name={"email"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
          <div className="row-group__item">
            <FormInput
              type={"phone"}
              label={t("Phone")}
              id={"phone"}
              name={"phone"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
        </div>
      </div>
      <div className="column-group__item">
        <div className="row-group row-group--flex-1">
          <div className="row-group__item">
            <FormInput
              type={"password"}
              label={t("Password")}
              id={"password"}
              name={"password"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
          <div className="row-group__item">
            <FormInput
              type={"password"}
              label={t("Confirm Password")}
              id={"repassword"}
              name={"repassword"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
        </div>
      </div>
      <div className="column-group__item">
        <FormInput
          type={"text"}
          label={t("Address #1")}
          id={"address"}
          name={"address"}
          isRequired={true}
          handlerChange={handlerChange}
        />
      </div>
      <div className="column-group__item">
        <div className="row-group row-group--flex-1">
          <div className="row-group__item">
            <FormInput
              type={"text"}
              label={t("Zip code")}
              id={"zip"}
              name={"zip_code"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
          <div className="row-group__item">
            <FormInput
              type={"text"}
              label={t("City")}
              id={"city"}
              name={"city"}
              isRequired={true}
              handlerChange={handlerChange}
            />
          </div>
        </div>
      </div>
      <div className="column-group__item">
        <div className="row-group row-group--flex-1">
          <div className="row-group__item">
            <label htmlFor="">{t("Native language")}</label>
            {languages && (
              <SelectInput
                options={languages}
                name={"languages_id"}
                changeHandler={handlerChange}
                setDefault={true}
              />
            )}
          </div>
          <div className="row-group__item">
            <label htmlFor="">{t("Birthday")}</label>
            <Datepicker
              name={"date_of_birth"}
              label={t("Birthday")}
              handlerChange={handlerChange}
            />
          </div>
        </div>
      </div>
      <div className="column-group__item">
        <FormInput
          type={"text"}
          label={t("Additional info")}
          id={"info"}
          name={"info"}
          handlerChange={handlerChange}
        />
      </div>
      <div
        className={
          "column-group column-group--md column-group--justify-items-center"
        }
      >
        <FormErrors errors={errors} />
      </div>
    </div>
  );
};

export default PersonInputsBlock;
