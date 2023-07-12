import Spinner from "./Spinner";

const FormLoading = ({loadingText}) => {

    return <div className="form-box__loading">
        <div className="form-box__loading-spinner">
            <Spinner />
        </div>
        <div className="form-box__loading-text">
            <p>{loadingText}</p>
        </div>
    </div>;
};

export default FormLoading;
