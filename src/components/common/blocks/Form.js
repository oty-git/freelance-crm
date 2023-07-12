import React from "react";
import FormErrors from "./FormErrors";

const Form = ({ children, onSubmit, action, className, errors }) => {
  return (
    <form action={action} onSubmit={(e) => onSubmit(e)} className={className}>
      {children}
      <div
        className={
          "column-group column-group--md column-group--justify-items-center"
        }
      >
        <FormErrors errors={errors} />
      </div>
    </form>
  );
};

Form.defaultProps = {
  action: "",
  className: "",
  errors: false,
};

export default Form;
