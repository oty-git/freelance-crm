import React from "react";
import Header from "./Header";
import RegistrationFormWrapper from "./RegistrationFormWrapper";

const RegistrationPage = (props) => {
  return (
    <React.Fragment>
      <Header />
      <RegistrationFormWrapper type={props.match.params.type} />
    </React.Fragment>
  );
};

export default RegistrationPage;
