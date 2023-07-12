import React from "react";

const ModalFormInput = ({
  styles,
  placeholder,
  name,
  className,
  handlerChange,
  arrayIndex,
  arrayName,
  value,
  disabled = false,
  required = true,
}) => {
  const onChange = (e) => {
    if (handlerChange)
      handlerChange(e.target.value, name, arrayName, arrayIndex);
  };

  return (
    <input
      className={"input input--alabaster " + (className ? className : "")}
      name={name}
      type="text"
      defaultValue={value}
      placeholder={placeholder}
      onChange={(e) => onChange(e)}
      style={styles}
      required={required}
      disabled={disabled}
    />
  );
};

export default ModalFormInput;
