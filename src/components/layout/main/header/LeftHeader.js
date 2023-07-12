import {useTranslation} from "react-i18next";

const LeftHeader = () => {
    return <div className="left__header">
        <LogoWrapper />
        <SearchHeader />
    </div>;
}
export default LeftHeader;

const LogoWrapper = () => {
    return <div className="logo__wrapper">
        <a href="#">
            <img src="/images/logo.svg" alt="logo"/>
            KoT CLOUD
        </a>
    </div>;
}

const SearchHeader = () => {

    const {t} = useTranslation();

    return <div className="search__header">
        <form action="">
            <input type="text" placeholder={t("Search in CRM")}/>
            <input type="submit" value=""/>
        </form>
    </div>
};
