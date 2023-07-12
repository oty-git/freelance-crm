import React, {useEffect, useState} from "react";
import Thead from "./Thead";
import Tbody from "./Tbody";
import Form from "../form/Form";
import SideModalWrapper from "../modals/SideModalWrapper";
import {useDispatch, useSelector} from "react-redux";
import {setShowModalForm} from "../../../store/actions/init";
import IsJsonString from "../../../functions/isJson";
import FormLoading from "../blocks/FormLoading";
import {useTranslation} from "react-i18next";
import {mergeDeep} from "../../../functions/mergeObject";

const Table=({api,formConfig,formToJson=false})=>{

    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [loading,setLoading] = useState();

    const [data,setData] = useState([]);
    const showModal = useSelector(state => state.init.showModalForm);
    const [row, setRow] = useState(false);

    const getData=()=>{
        setLoading(true);
        api.getAll().then(res=>{
            setLoading(false);

            if (res.rows)
                setData(res.rows);
            else setData(res);
        })
    };

    useEffect(()=>{
        getData();
    },[]);

    const showForm = (showModal, row = false) => {
        dispatch(setShowModalForm(showModal));
        setRow(row);
    };

    const deleteItem = (id) => {
        api.remove(id).then(res => {
            getData();
        })
    };

    const submit = (e) => {
        e.preventDefault();
        let formData = new FormData(e.target);

        if(formToJson){
            let object = {};
            formData.forEach(function(value, key){

                if(key.indexOf('[')!==-1 && key.indexOf(']')!==-1){
                    let subkey = key.split('[').map(item=>item.replace(']',''));
                    let subObj = subkey.reverse().reduce((res, key) => ({[key]: res}), IsJsonString(value) ? JSON.parse(value) : value);

                    object = mergeDeep(object,subObj);
                }else{
                    object[key] = IsJsonString(value) ? JSON.parse(value) : value;

                }
            });
            formData = object;


            /**
             * Check defaultHiddenValues
             */
                for (let formKey in formData){
                    if(formConfig && formConfig[formKey] && formConfig[formKey].showHidden){
                        let showHiddenKey = formConfig[formKey].showHidden;
                        if(Array.isArray(showHiddenKey)){
                            showHiddenKey.forEach((showHiddenKeyInner)=>{

                                if(formConfig[showHiddenKeyInner] && typeof formData[showHiddenKeyInner] ==='undefined' ){
                                    formData[showHiddenKeyInner] = formConfig[formKey].type==='checkbox' ? 0 :  null
                                }
                            })
                        }else{
                            if(formConfig[showHiddenKey] && typeof formData[showHiddenKey] ==='undefined' ){
                                formData[showHiddenKey] = formConfig[formKey].type==='checkbox' ? 0 :  null
                            }
                        }
                    }
                }


        }else{
            formData.forEach(function(value, formKey){
                if(formConfig && formConfig[formKey] && formConfig[formKey].showHidden){
                    let showHiddenKey = formConfig[formKey].showHidden;
                    if(Array.isArray(showHiddenKey)){
                        showHiddenKey.forEach((showHiddenKeyInner)=>{
                            if(formConfig[showHiddenKeyInner] && formData.get(showHiddenKeyInner) ==null){
                                formData.append(showHiddenKeyInner,formConfig[formKey].type==='checkbox' ? 0 :  '')
                            }
                        })
                    }else{
                        if(formConfig[showHiddenKey] && formData.get(showHiddenKey) ==null){

                            formData.append(showHiddenKey,formConfig[formKey].type==='checkbox' ? 0 :  '')
                        }
                    }
                }
            })
        }





        api.put(formData, row ? `/${row.id}` : '',e).then(response => {
            if (response && response.success) {
                dispatch(setShowModalForm(false));
                getData();
            }
        })
    };

    return <div className="catalog">
        <div className="permissions__catalog">
            <div className="catalog__right roles__right">
                {/*<button className="button button--white button__filter" type="button"*/}
                {/*        data-content-toggle-button="filters">*/}
                {/*    <svg className="svg-icon svg-icon--surfie-green button__icon" width="14" height="14">*/}
                {/*        <use href="/images/svg/svg-sprite/symbol/sprite.svg#filter" x="0" y="0"></use>*/}
                {/*    </svg>*/}
                {/*</button>*/}
                <div className="new__button">
                    <a href="#" onClick={e=>{
                        e.preventDefault();
                        showForm(true)
                    }}>
                        <span><img src="/images/plus.svg" alt="plus"/></span> {t("New")}
                    </a>
                </div>
                {/*<div className="export__button">*/}
                {/*    <a href="#">*/}
                {/*        <span><img src="/images/downloadicon.svg" alt="download"/></span> Export*/}
                {/*    </a>*/}
                {/*</div>*/}
            </div>
        </div>
        <div className="catalog__box">
            <div className="catalog__content">
                <div className={'catalog__content-item tabs__content js-tabs-content is-active'}>

                        <div className={'table__wrapper'}>
                            {loading
                                ?
                                <FormLoading/>
                                :
                            <table className="table__common transparent__table padding-start  table__lines top__table">
                                <Thead data={data} formConfig={formConfig}/>
                                <Tbody data={data} formConfig={formConfig} showForm={showForm} deleteItem={deleteItem}/>
                            </table>
                            }
                        </div>
                </div>
            </div>
        </div>
        <SideModalWrapper
            showModal={!!showModal}
            setShowModal={showForm}
            modalClass={'modal__role permissions__modal'}
        >
            {!!showModal &&
                <Form onSubmit={submit} formConfig={formConfig} showForm={showForm} data={row}/>
            }
        </SideModalWrapper>
    </div>
};
export default Table;
