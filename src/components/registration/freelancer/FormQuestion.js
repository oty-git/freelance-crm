const FormQuestion = ({question}) => {

    return <div className="application-form__item">
        <div className="application-form__card application-form__card--sm">
            <h5 className="text-surfie-green">{question}</h5>
        </div>
    </div>
}
export default FormQuestion;