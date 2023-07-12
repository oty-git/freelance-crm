import Modal from "react-responsive-modal";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const ModalSuccess = ({modalShow, setModalShow,password}) => {


    const styles = {
        width: '100%',
        maxWidth: '700px',
        margin: '10px auto',
        borderRadius: '3px',
        padding: '60px 15px',
        boxShadow: '0px 4px 5px rgb(0 0 0 / 5%)',
    };



    const {t} = useTranslation();

    return <React.Fragment>

        <Modal
            open={modalShow}
            onClose={()=> setModalShow(false)}
            center
            showCloseIcon={false}
            focusTrapped={false}
            styles={{modal:styles}}
            classNames={{
                modal: 'password-change-success-modal',
            }}
        >
                <div className="modal__close" onClick={()=>setModalShow(false)} data-modal-close="password-change-success-modal">
                    <div className="close">
                        <svg className="svg-icon svg-icon--alto" width="20" height="20">
                            <use href="/images/svg/svg-sprite/symbol/sprite.svg#close" x="0" y="0"></use>
                        </svg>
                    </div>
                </div>
                <div className="password-change-success-modal__wrap">
                    <div className="password-change-success-modal__icon"><img src="/images/icons/check-circle.svg"
                                                                              alt="check"/></div>
                    <div className="password-change-success-modal__title">
                        <h3 className="text-surfie-green">{t('Password has been changed successfully')}</h3>
                    </div>
                    {!!password &&
                    <React.Fragment>
                        <div className="password-change-success-modal__text">
                            <p>{t('New password is:')}</p>
                        </div>
                        <div className="password-change-success-modal__password">
                            <div className="palette">
                                <p className="font-bold">{password}</p>
                            </div>
                        </div>
                    </React.Fragment>
                    }
                    <div className="password-change-success-modal__button">
                        <button onClick={()=>setModalShow(false)} className="button button--border-surfie-green" type="button"
                                data-modal-close="password-change-success-modal">{t("OK !")}
                        </button>
                    </div>
                </div>
        </Modal>
    </React.Fragment>

};

export default ModalSuccess;
