import RadioButton from "../../common/blocks/RadioButton";
import React, { useState } from "react";
import DiplomaExpanded from "./diplomaBlock/DiplomaExpanded";
import { useTranslation } from "react-i18next";

const DiplomaBlock = ({ parentState, setParentState }) => {
  const [expanded, setExpanded] = useState(parentState["AccountDiplomas"][0]);
  const [selectedRadio, setSelectedRadio] = useState(
    parentState["AccountDiplomas"][0]
      ? "1"
      : parentState["AccountDiplomas"][0] === null
      ? false
      : "0",
  );

  const changeValue = (e) => {
    let newParentState = { ...parentState };
    if (e.target.value === "1") {
      setExpanded(true);
      newParentState["AccountDiplomas"] = [{ name: false, category: false }];
    } else {
      newParentState["AccountDiplomas"] = [];
      setExpanded(false);
    }
    setParentState(newParentState);
    setSelectedRadio(e.target.value);
  };

  const { t } = useTranslation();

  return (
    <div className="application-form__item">
      <div
        className={
          "application-form__card" +
          (parentState.AccountDiplomas[0]?.error
            ? " application-form__card--danger"
            : "")
        }
      >
        {!!parentState.AccountDiplomas[0]?.error && (
          <div className="application-form__card-line">
            <p className="text-brick-red font-semibold">
              {parentState.AccountDiplomas[0].error}
            </p>
          </div>
        )}
        <div className="application-form__card-line">
          <div className="form-group">
            <div className="form-group__header">
              <h5>{t("Do you have a diploma?")}</h5>
            </div>
            <div className="row-group">
              <div className="row-group__item">
                <RadioButton
                  name={"diploma"}
                  value={1}
                  label={t("Yes")}
                  changeValue={changeValue}
                  selected={selectedRadio}
                />
              </div>
              <div className="row-group__item">
                <RadioButton
                  name={"diploma"}
                  value={0}
                  label={t("No")}
                  changeValue={changeValue}
                  selected={selectedRadio}
                />
              </div>
            </div>
          </div>
        </div>
        {expanded && (
          <DiplomaExpanded
            parentState={parentState}
            setParentState={setParentState}
          />
        )}
      </div>
    </div>
  );
};

export default DiplomaBlock;
