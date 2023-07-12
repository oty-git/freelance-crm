import {useTranslation} from "react-i18next";

const SocialAuth = () => {
    const {t} = useTranslation();

    return <div className="form-box__buttons">
        <div className="button-group button-group--column">
            <button className="button button--fluid button--cornflower-blue button-group__button" type="button">
                <div className="button__prepend">
                    <img src="/images/icons/googleicon.svg" alt="googleicon"/>
                </div>
                <span>{t('Sign in with Google')}</span>
            </button>
        </div>
    </div>;
}

export default SocialAuth;