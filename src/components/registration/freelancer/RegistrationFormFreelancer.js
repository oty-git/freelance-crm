import FormSteps from "./FormSteps";
import React, { useState } from "react";
import FormTitle from "./FormTitle";
import FormBlocksWrapper from "./FormBlocksWrapper";
import apiFreelancers from "../../../api/freelancers";
import FormButtons from "./FormButtons";
import ThankYouModal from "../../common/modals/ThankYouModal";
import isEmpty from "../../../functions/is-empty";
import { useTranslation } from "react-i18next";

const RegistrationFormFreelancer = () => {
  const [activeStep, setActiveStep] = useState(1);
  const [successModal, setSuccessModal] = useState(false);
  const [errors, setErrors] = useState(false);

  const defaultState = {
    AccountToServices: [null, null, null, null, null, null],
    AccountDiplomas: [null],
    AccountExpertises: [],
  };

  const [state, setState] = useState({ ...defaultState });
  const { t } = useTranslation();

  const steps = {
    1: {
      label: t("Services & Prices"),
      stateItems: ["AccountToServices"],
    },
    2: {
      label: t("Education & Legal"),
      stateItems: ["AccountDiplomas"],
    },
    3: {
      label: t("Contact information"),
    },
  };

  const signUp = (e) => {
    e.preventDefault();
    let tmpState = { ...state };
    tmpState["AccountToServices"] = state["AccountToServices"].filter(
      (item) => {
        return !isEmpty(item);
      },
    );

    let formData = new FormData();

    if (tmpState.files) {
      for (let file of tmpState.files) {
        formData.append("education_file", file.data);
      }
    }

    apiFreelancers.put(tmpState, "/signup", e).then((r) => {
      if (r && r.success) {
        if (tmpState.files && tmpState.files.length) {
          apiFreelancers
            .put(formData, `/updateAfterSignUp/${r.profile.id}`)
            .then((r) => {
              console.log(r);
              if (r && r.success) {
                setErrors(false);
                setSuccessModal(true);
                setState(defaultState);
              }
            });
        } else {
          setErrors(false);
          setSuccessModal(true);
          setState(defaultState);
        }
      }
    });
  };

  const handleNext = (e) => {
    e.preventDefault();

    let nextStep = activeStep + 1;

    if (steps[activeStep] && steps[activeStep].stateItems) {
      let newState = { ...state };
      let error = false;
      for (let stateItem of steps[activeStep].stateItems) {
        if (newState.hasOwnProperty(stateItem)) {
          newState[stateItem] = newState[stateItem].map((currentItem) => {
            if (currentItem === null) {
              error = true;
              currentItem = { error: t("*Choose Yes or No to continue") };
            }
            if (currentItem.price_calculation_type === null) {
              currentItem = {
                ...currentItem,
                error: t("*Select price calculation type to continue"),
              };
            } else if (currentItem.AccountServicesLanguages?.length) {
              for (let language of currentItem.AccountServicesLanguages) {
                // if(!service.language_selection)
                //     break;
                let price = language.price || currentItem.price;
                if (!price) {
                  console.log(price, currentItem);
                  currentItem = {
                    ...currentItem,
                    error: t("*Please fill price"),
                  };
                } else if (
                  currentItem.max_price &&
                  (parseFloat(price) > parseFloat(currentItem.max_price) ||
                    parseFloat(price) < parseFloat(currentItem.min_price))
                ) {
                  currentItem = {
                    ...currentItem,
                    error:
                      t("*The price should be between") +
                      ` ${currentItem.min_price} - ${currentItem.max_price}`,
                  };
                }
              }
            }

            if (currentItem.error) {
              error = true;
            }
            return currentItem;
          });
        }
      }
      setState(newState);

      if (error) {
        return;
      }
    }

    setActiveStep(nextStep);
  };
  const handlePrev = (e) => {
    e.preventDefault();
    let step = activeStep > 1 ? activeStep - 1 : activeStep;
    setActiveStep(step);
  };
  const handleDiscard = (e) => {
    e.preventDefault();
    window.location.reload();
  };

  return (
    <div className="content__form">
      <div className="container">
        <div className="application-page__row">
          <div className="application-page__form">
            <FormTitle title={t("Application form")} activeStep={activeStep} />
            <FormSteps steps={steps} activeStep={activeStep} />
            <FormBlocksWrapper
              setParentState={setState}
              parentState={state}
              step={activeStep}
              errors={errors}
            />
            {activeStep !== 3 ? (
              <FormButtons
                handleNext={handleNext}
                handlePrev={handlePrev}
                handleDiscard={handleDiscard}
              />
            ) : (
              <div className="application-form__item">
                <button
                  className="button button--fluid button--surfie-green"
                  type="button"
                  onClick={(e) => signUp(e)}
                >
                  {t("Complete application")}
                </button>
                <ThankYouModal
                  modalShow={successModal}
                  setSuccessModal={setSuccessModal}
                />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationFormFreelancer;
