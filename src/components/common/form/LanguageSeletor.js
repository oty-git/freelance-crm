import React from "react";


const LanguageSelector=({languages,setCurrentLang,currentLang})=>{

    return <div className="mb-30">
        {
            languages.map(lang=>
                <button
                    className={"button mr-5"+ (lang.code===currentLang ? ' button--surfie-green ' : ' button--alabaster')   }
                    key={lang.code}
                    onClick={(e)=>{
                        e.preventDefault();
                        setCurrentLang(lang.code)
                    }}>
                    {lang.label}
                </button>
            )
        }
    </div>
};
export default LanguageSelector;
