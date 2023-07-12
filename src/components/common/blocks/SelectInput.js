import { useEffect, useRef, useState } from "react";
import { getLabelFromString } from "../../../functions/functions";
import SelectInputOption from "./SelectInputOption";
import useOutsideClick from "../../../utils/useOutsideClick";
import { useTranslation } from "react-i18next";

const SelectInput = ({
  options,
  className,
  name,
  changeHandler,
  arrayName,
  arrayIndex,
  value,
  labelImg,
  placeholder,
  search,
}) => {
  const [items, setItems] = useState(options);
  const [isOpenSelect, setIsOpenSelect] = useState(false);
  const [selected, setSelected] = useState(
    value
      ? items.findIndex((item) => {
          return (
            (item.id && item.id === value) ||
            item === value ||
            (item.value && item.value === value)
          );
        })
      : -1,
  );

  useEffect(() => {
    setSelected(
      value
        ? items.findIndex((item) => {
            return (
              (item.id && item.id === value) ||
              item === value ||
              (item.value && item.value === value)
            );
          })
        : -1,
    );
  }, [value]);

  const handlerChange = (name, index, value) => {
    if (changeHandler) {
      changeHandler(value, name, arrayName, arrayIndex);
    }
    if (index || parseInt(index) === 0) setSelected(index);
  };
  const node = useRef();

  useOutsideClick(node, () => {
    toggleSelect(false);
  });

  const filterItems = (e) => {
    let newItems = options.filter((option) => {
      return (
        option.name.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1
      );
    });
    setItems(newItems);
  };

  const toggleSelect = (value, e) => {
    if (!e || !e.target || !e.target.classList.contains("js-select-search"))
      setIsOpenSelect(value);
  };

  const { t } = useTranslation();

  return (
    <div
      className={
        "select js-select " + className + (isOpenSelect ? " is-expanded" : "")
      }
      onClick={(e) => toggleSelect(!isOpenSelect, e)}
      ref={node}
    >
      <button
        className="select__label js-select-label"
        type="button"
        data-selected={
          items[selected]?.id ||
          items[selected]?.value ||
          (items[selected] ?? t("Please select"))
        }
      >
        {labelImg ? (
          <img src={labelImg} alt="" />
        ) : (
          items[selected]?.img && <img src={items[selected]?.img} alt="" />
        )}
        <span>
          {placeholder ||
            items[selected]?.label ||
            items[selected]?.name ||
            getLabelFromString(items[selected] ?? t("Please select"))}
        </span>
      </button>
      <div
        className="select__dropdown js-select-dropdown"
        style={{ display: isOpenSelect ? "block" : "" }}
      >
        {search && (
          <div className="select__search">
            <input
              className="input input--border-alto input--sm js-select-search"
              type="text"
              placeholder={t("Type something")}
              onKeyUp={(e) => filterItems(e)}
            />
          </div>
        )}
        {items.length > 0 && (
          <div className="custom-scroll select__dropdown-scroll">
            <div className="select__options js-select-options">
              {/*<SelectInputOption*/}
              {/*    index={-1}*/}
              {/*    item={{*/}
              {/*        label:t('Please select'),*/}
              {/*        value:null*/}
              {/*    }}*/}
              {/*    selected={!selected}*/}
              {/*    handlerChange={handlerChange}*/}
              {/*    name={name}*/}
              {/*/>*/}
              {items.map((item, index) => {
                return (
                  <SelectInputOption
                    key={index}
                    index={index}
                    item={item}
                    selected={selected}
                    handlerChange={handlerChange}
                    name={name}
                  />
                );
              })}
            </div>
          </div>
        )}
      </div>
      <input
        className="select__input js-select-input"
        name={name}
        type="hidden"
        value={
          items[selected]?.id ||
          items[selected]?.value ||
          (items[selected] ?? "")
        }
      />
    </div>
  );
};

export default SelectInput;
