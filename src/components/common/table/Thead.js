import React from "react";
import {useTranslation} from "react-i18next";

const Thead=({data,formConfig})=>{

    const {t} = useTranslation();

    return <thead>
            <tr>
                {!!formConfig
                    ?
                    Object.keys(formConfig).map((key)=>{


                        if(formConfig[key].table===false)
                            return null;

                        return <th key={key}><h5>{formConfig[key].label || key}:</h5></th>

                        }
                    )
                    :
                    data && data[0]&& Object.keys(data[0]).map((key)=>
                        <th key={key}><h5>{key}:</h5></th>
                    )
                }
                <th><h5>{t("Actions:")}</h5></th>
                </tr>
            </thead>
};
export default Thead;
