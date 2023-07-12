const FormSteps = ({ steps, activeStep }) => {
  return (
    <div className="application-form__item">
      <div className="form-steps">
        {Object.keys(steps).map((index) => {
          return (
            <div
              key={index}
              className={
                "form-steps__step" +
                (activeStep === parseInt(index) ? " is-active" : "")
              }
            >
              <div className="form-steps__title">
                <span className="form-steps__title-number">{index}.&nbsp;</span>
                <span className="form-steps__title-text">
                  {steps[index].label}
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default FormSteps;
