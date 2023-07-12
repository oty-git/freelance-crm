import React from "react";
import { useHistory } from "react-router";

const MainWrapper = ({ children, title }) => {
  const history = useHistory();

  return (
    <div className="permissions-page__wrap">
      <div className="container-fluid">
        {/*<div className="employers-page__heading">*/}
        {/*    <div className="employers-page__heading-title">*/}
        {/*        <h2 className="text-surfie-green"><a href="my-projects.html">{title}</a></h2>*/}
        {/*    </div>*/}
        {/*    <a href="#" className="create__project  button button--fluid button--surfie-green" onClick={e => dispatch(setShowModalForm(true))}>*/}
        {/*        <svg width="14" height="14" viewBox="0 0 26 24" fill="none" xmlns="http://www.w3.org/2000/svg">*/}
        {/*            <path d="M11.4348 0H14.6522V23.4667H11.4348V0Z" fill="#0E7D7D"></path>*/}
        {/*            <path d="M25.913 10.2667L25.913 13.2001L0.17391 13.2001L0.17391 10.2667L25.913 10.2667Z" fill="#0E7D7D"></path>*/}
        {/*        </svg>*/}
        {/*        <span className="">{t('Create')}</span>*/}
        {/*    </a>*/}
        {/*</div>*/}
        <div className="permissions-page__heading">
          <div className="permissions-page__heading-title">
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                history.goBack();
              }}
            >
              <svg
                width="7"
                height="12"
                viewBox="0 0 7 12"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M-0.000112319 6L6.46143 0L6.46143 12L-0.000112319 6Z"
                  fill="#0E7D7D"
                />
              </svg>
            </a>
            <h2 className="text-surfie-green">{title}</h2>
          </div>
        </div>
        <div className="permissions-page__catalog">{children}</div>
      </div>
    </div>
  );
};
export default MainWrapper;
