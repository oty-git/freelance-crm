import FormQuestion from "./FormQuestion";
import FormItem from "./FormItem";
import React, { useEffect, useState } from "react";
import apiDirectory from "../../../api/directory";
import DiplomaBlock from "./DiplomaBlock";
import ExpertisesBlock from "./ExpertisesBlock";
import PersonInputsBlock from "../PersonInputsBlock";
import BankDetailsBlock from "./BankDetailsBlock";
import Checkbox from "../../common/blocks/Checkbox";
import FileUploadBlock from "./FileUploadBlock";
import { useTranslation } from "react-i18next";

const FormBlocksWrapper = ({ step, parentState, setParentState, errors }) => {
  const [services, setServices] = useState();

  useEffect(() => {
    getServices();
  }, []);
  const { t } = useTranslation();

  const getServices = () => {
    apiDirectory.getAll("/services").then((res) => {
      if (!(res.response && res.response.data)) setServices(res);
    });
  };

  const firstStep = () => {
    return (
      <React.Fragment>
        <FormQuestion question={t("What kind of services do you provide?")} />
        {services
          ? services.map((service, index) => {
              return (
                <FormItem
                  key={index}
                  service={service}
                  index={index}
                  parentState={parentState}
                  setParentState={setParentState}
                />
              );
            })
          : ""}
      </React.Fragment>
    );
  };

  const secondStep = () => {
    return (
      <React.Fragment>
        <FormQuestion question={t("What education do you have?")} />
        <DiplomaBlock
          parentState={parentState}
          setParentState={setParentState}
        />
        <FileUploadBlock
          parentState={parentState}
          setParentState={setParentState}
        />
        <ExpertisesBlock
          parentState={parentState}
          setParentState={setParentState}
        />
      </React.Fragment>
    );
  };

  const thirdStep = () => {
    return (
      <React.Fragment>
        <FormQuestion question={t("Please add your contact information")} />
        <div className="application-form__item">
          <div className="application-form__card">
            <div className="application-form__card-line">
              <div className="row">
                <div className="col-12 col-md-6">
                  <PersonInputsBlock
                    parentState={parentState}
                    setParentState={setParentState}
                    errors={errors}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="application-form__item">
          <div className="application-form__card">
            <div className="application-form__card-line">
              <BankDetailsBlock
                parentState={parentState}
                setParentState={setParentState}
              />
            </div>
          </div>
        </div>
        <div className="application-form__item">
          <div className="application-form__card application-form__card--sm">
            <Checkbox
              label={t("I confirm that my details is correct")}
              name={"confirm-details"}
            />
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderSwitch = () => {
    switch (step) {
      case 1:
        return firstStep();
      case 2:
        return secondStep();
      case 3:
        return thirdStep();
    }
  };

  return <React.Fragment>{renderSwitch()}</React.Fragment>;
};

export default FormBlocksWrapper;
