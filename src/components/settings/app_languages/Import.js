import React, {useRef} from "react";
import apiAppLanguages from "../../../api/app_languages";
import {toast} from "react-toastify";
import {useTranslation} from "react-i18next";


const Import=({data})=>{

    const {t} = useTranslation();
    const ref = useRef();
    const submitButton = useRef();

    const openFileInput=(e)=>{
        e.preventDefault();
        ref.current.click()
    };

    const save=()=>{
        submitButton.current.click()
    };
    const submitForm=(e)=>{
        e.preventDefault();

        let formData = new FormData(e.target);

        apiAppLanguages.put(formData, `/import/${data.code}`,e).then(response => {
            if(response.success){
                toast.success(t('Successfully imported'));
            }
        })

    };

    return <>
            <form action="" onSubmit={submitForm}>
                <button className="edit-avatar" onClick={openFileInput}>
                    <img width={30} src="/images/icons/import.png" alt=""/>
                </button>
                <input style={{display:"none"}} type="file" name="photo" ref={ref} accept="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel" onChange={save}/>
                <button type="submit" ref={submitButton}/>
            </form>
        </>
};
export default Import;
