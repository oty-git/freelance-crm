import React, { useState } from "react";
import Autocomplete from "react-autocomplete";
import {
  capitalizeFirstLetter,
  getLabelFromString,
  removeFromArrayByValue,
} from "../../../functions/functions";

const MultiSelectInput = ({ options, name, value, inputName, placeholder }) => {
  const [selected, setSelected] = useState(value ? value : []);
  const [inputValue, setInputValue] = useState("");

  const select = (value) => {
    let tmp = [...selected];
    if (!tmp.includes(value)) tmp.push(value);
    setSelected(tmp);
  };

  const remove = (value) => {
    let tmp = [...selected];
    if (tmp.includes(value)) removeFromArrayByValue(tmp, value);
    setSelected(tmp);
  };

  const selectedArray = () => {
    return JSON.stringify(
      selected.map((item) => {
        if (typeof item === "object") {
          let obj = {};
          obj[name] = item.id;
          return obj;
        }
        return item;
      }),
    );
  };

  if (!options || !options.length) return null;

  return (
    <div className="permissions__field">
      <div className="permissions__field--inner">
        {selected &&
          selected.length > 0 &&
          selected.map((item) => {
            return (
              <div
                className="el__field--permissions"
                key={item.name ? item.name : item}
              >
                <p>
                  {typeof item === "object"
                    ? capitalizeFirstLetter(item.name)
                    : getLabelFromString(item)}
                </p>
                <a href="#">
                  <img
                    src="/images/permremove.svg"
                    alt="perm"
                    onClick={(e) => remove(item)}
                  />
                </a>
                {!inputName && (
                  <input
                    name={`${name}[]`}
                    type="hidden"
                    value={typeof item === "object" ? item.id : item}
                  />
                )}
              </div>
            );
          })}
        <Autocomplete
          getItemValue={(item) => (typeof item === "object" ? item.name : item)}
          shouldItemRender={(item, value) => {
            if (typeof item === "object")
              return (
                item?.name
                  .toLowerCase()
                  .indexOf(
                    value && value.name ? value.name.toLowerCase() : "",
                  ) > -1
              );
            return item.toLowerCase().indexOf(value.toLowerCase()) > -1;
          }}
          items={options}
          renderItem={(item, isHighlighted) => (
            <li key={item.name}>
              <a href="#">
                {typeof item === "object"
                  ? capitalizeFirstLetter(item.name)
                  : getLabelFromString(item)}
              </a>
            </li>
          )}
          renderMenu={(items, value, style) => {
            return (
              <div
                className="permissions__dropdown"
                style={{ display: "block" }}
              >
                <ul children={items} />
              </div>
            );
          }}
          value={inputValue}
          renderInput={(props) => {
            return <input {...props} type="text" placeholder={placeholder} />;
          }}
          onChange={(e) => setInputValue(e.target.value)}
          onSelect={(val, item) => {
            if (typeof item === "object") select(item);
            else select(val);
          }}
          wrapperProps={{ className: "new__permissions" }}
        />
        {inputName && (
          <input type="hidden" name={inputName} value={selectedArray()} />
        )}
      </div>
    </div>
  );
};

export default MultiSelectInput;
