import FormInput from "../../common/form/FormInput";
import {useTranslation} from "react-i18next";

const BankDetailsBlock = ({parentState, setParentState}) => {

    const handlerChange = (e, name) => {
        if (e && e.target) {
            parentState[name] = e.target.value;
            setParentState(parentState);
        }
    }
    const {t} = useTranslation();

    return <div className="form-group">
        <div className="form-group__header">
            <h5>{t("Bank details for payout:")}</h5>
        </div>
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="column-group column-group--md">
                    <div className="column-group__item">
                        <FormInput type={'text'} name={'bank_account_holder'} id={'holder'} label={t('Account holder')} isRequired={true} handlerChange={handlerChange}/>
                    </div>
                    <div className="column-group__item">
                        <FormInput type={'text'} name={'bank_name'} id={'bankName'} label={t('Bank name')} isRequired={true} handlerChange={handlerChange}/>
                    </div>
                    <div className="column-group__item">
                        <FormInput type={'text'} name={'bank_account_number'} id={'bankAccount'} label={t('Bank account no')} isRequired={true} handlerChange={handlerChange}/>
                    </div>
                    <div className="column-group__item">
                        <FormInput type={'text'} name={'swift_number'} id={'swiftNumber'} label={t('Swift Number')} isRequired={true} handlerChange={handlerChange}/>
                    </div>
                    <div className="column-group__item">
                        <FormInput type={'text'} name={'bank_code'} id={'bankCode'} label={t('Bank code')} isRequired={true} handlerChange={handlerChange}/>
                    </div>
                    <div className="column-group__item">
                        <FormInput type={'email'} name={'paypal_email'}  label={t('Paypal email if avaliable:')} id={'paypalEmail'} handlerChange={handlerChange}/>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default BankDetailsBlock;
