import React from "react";
import {useSelector} from "react-redux";

const FormErrors = ({errors,success}) => {


    const apiErrors = useSelector(state => state.responses.apiErrors);

    return <div className={'mb-10 mt-10'}>
        {!!errors &&
        (
            typeof errors==='string'
            ?
            <ErrorItem error={errors}/>
            :
            <ErrorsItems errors={errors}/>
        )
        }


        {!!apiErrors &&
        (
            typeof apiErrors==='string'
                ?
                <ErrorItem error={apiErrors}/>
                :
                <ErrorsItems errors={apiErrors}/>
        )
        }

        {!!success && <SuccessItems success={success}/>}
    </div>
};



const ErrorsItems=({errors})=>{

    return <React.Fragment>
        {
            errors && Object.keys(errors).map((index) => {
                return <ErrorItem key={index} error={errors[index]}/>
            })}
    </React.Fragment>

};


const ErrorItem=({error})=>{
    return <div  className="column-group__item">
        <div  className="status-message status__login">
            <div className="status-message__icon">
                <img src="/images/icons/incorrect.svg" alt="incorrect"/>
            </div>
            <div className="status-message__info">
                            <span className="status-message__title">{
                                error === Object(error) ?
                                    <ErrorsItems errors={error}/>
                                    : error
                            }</span>
            </div>
        </div>
    </div>
}


const SuccessItems=({success})=>{
    return <React.Fragment>
        {
            success && Object.keys(success).map((index) => {
                return <div key={index} className="column-group__item">
                    <div  className="status-message status__login">
                        <div className="status-message__icon">
                            <img src="/images/icons/check.svg" alt="check"/>
                        </div>
                        <div className="status-message__info">
                            <span className="status-message__link">{success[index] || success}</span>
                        </div>
                    </div>
                </div>
            })}
    </React.Fragment>

};

export default FormErrors;
