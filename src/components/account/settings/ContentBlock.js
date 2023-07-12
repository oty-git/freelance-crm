import React from "react";
import ColumnHeader from "./ColumnHeader";
import InfoListItem from "./tabsBlocks/InfoListItem";
import isEmpty from "../../../functions/is-empty";
import {useParams} from "react-router";
import {useTranslation} from "react-i18next";

const ContentBlock = ({title, items, user, userType, accountType, headerButton}) => {
    const {type, id} = useParams();
    const {t} = useTranslation();

    return <React.Fragment>
        <ColumnHeader title={title} button={headerButton}/>
        <div className="info-list">
            {accountType && <InfoListItem user={user}  userType={userType} label={t('Account type:')} value={t(userType)}/>}
            {user && items && !isEmpty(items) && user[userType] && Object.keys(items).map((key, index) => {
                return <InfoListItem user={user} userType={userType}  key={index} inputName={key} label={items[key].label} value={user[userType][key]} editable={items[key].editable && type && id}/>
            })}
        </div>
    </React.Fragment>
};
export default ContentBlock;
