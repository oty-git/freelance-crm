import { getLabelFromString } from "../../../functions/functions";
import { useTranslation } from "react-i18next";
import React from "react";

const SelectInputOption = ({ item, selected, handlerChange, index, name }) => {
  const { t } = useTranslation();

  let labelValue = item.label || item.name || getLabelFromString(item);

  if (
    typeof labelValue === "object" &&
    !React.isValidElement(labelValue) &&
    (typeof item.label !== "undefined" || typeof item.name !== "undefined")
  )
    labelValue = t("Not set");

  return (
    <div
      className={
        "select__option js-select-option" +
        (Array.isArray(selected)
          ? selected.includes(item)
            ? " is-selected"
            : ""
          : selected === index
          ? " is-selected"
          : "")
      }
      data-option={item.id}
      onClick={(e) => handlerChange(name, index, item.value || item.id || item)}
    >
      {item.img && <img src={item.img.disk_name || item.img} alt="" />}
      {item.icon && <img src={item.icon.disk_name || item.icon} alt="" />}
      <span>{labelValue}</span>
    </div>
  );
};

export default SelectInputOption;
