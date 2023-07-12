import React from "react";
import RegistrationFormFreelancer from "./freelancer/RegistrationFormFreelancer";
import RegistrationFormEmployee from "./employee/RegistrationFormEmployee";

const RegistrationFormWrapper = ({ type }) => {
  const renderSwitch = () => {
    switch (type) {
      case "freelancer":
        return <RegistrationFormFreelancer />;
      case "employee":
        return <RegistrationFormEmployee />;
    }
  };

  return <div className="form__wrapper">{renderSwitch()}</div>;
};

export default RegistrationFormWrapper;
