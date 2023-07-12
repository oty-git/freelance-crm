import React from "react";
import {useHistory} from "react-router";

const MainExpandableTableWrapper=({children,title})=>{

    const history  = useHistory();

    return <div className="permissions-page__wrap">
        <div className="container">
            <div className="permissions-page__heading">
                <div className="permissions-page__heading-title">
                    <a href="#" onClick={(e)=>{
                        e.preventDefault();
                        history.goBack()
                    }}>
                        <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M-0.000112319 6L6.46143 0L6.46143 12L-0.000112319 6Z" fill="#0E7D7D"/>
                        </svg>
                    </a>
                    <h2 className="text-surfie-green">{title}</h2>
                </div>
            </div>
            {children}
        </div>
    </div>
};
export default MainExpandableTableWrapper;
