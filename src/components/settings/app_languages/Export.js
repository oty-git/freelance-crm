import React from "react";
import apiAppLanguages from "../../../api/app_languages";


const Export=({data})=>{

    const exportLanguage=(e)=>{
        e.preventDefault();

        apiAppLanguages.getAll(`/export/${data.code}`,{
            responseType: 'blob',
        }).then(res=>{

            let filename = `translation_${data.code}.xlsx`;
            const url = window.URL.createObjectURL(new Blob([res]));
            const link = document.createElement('a');
            link.href = url;
            link.setAttribute('download', filename);
            document.body.appendChild(link);
            link.click();
        })


    };

    return <button onClick={exportLanguage}><img src={require(`../../../images/fileIcons/XLSX.svg`).default} alt=""/></button>
};
export default Export;
