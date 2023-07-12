const FormTitle = ({title,activeStep, className}) => {

    return <div className="application-form__title">
        <h2 className={className}>
            {title} {activeStep ? <span className="text-surfie-green">{activeStep}/3</span> : ''}
        </h2>
    </div>;
}

export default FormTitle;