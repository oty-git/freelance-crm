import FormErrors from "../blocks/FormErrors";
import React, {useEffect, useState} from "react";
import FormInput from "./FormInput";
import SelectInput from "../blocks/SelectInput";
import MultiSelectInput from "../blocks/MultiSelectInput";
import Checkbox from "./Checkbox";
import File from "./File";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import LanguageSelector from "./LanguageSeletor";
import Switch from "./Switch";
import groupObjectBy from "../../../functions/grouupObjectBy";
import _ from 'lodash';


const Form = ({onSubmit,action,className,errors, formConfig, showForm, data, formName}) => {


    const [configState, setConfigState] = useState(_.cloneDeep(formConfig));


    const {t,i18n} = useTranslation();

    const languages = useSelector(state => state.init.app_languages);

    const hasLanguage = Object.keys(formConfig).filter(key=>{
        return formConfig[key].translate;
    }).length;

    const [currentLang, setCurrentLang] = useState( i18n.options.defaultLng);

    // useEffect(()=>{
    //     console.log('new formConfig')
    //     setConfigState(Object.assign({}, formConfig))
    // },[formConfig]);


    return <React.Fragment>
        <a href="#" onClick={() => showForm(false)} style={{ opacity: 1 }}>
            <img src="/images/svg/svg-sprite/symbol/closemodal.svg" alt="closemodal" />
        </a>
        <div className="role__inner inner__modal" style={{ right: 0}}>
            <h2>{formName ? formName : (data ? t('EDIT') : t('CREATE'))}</h2>
            <form action={action} onSubmit={e =>onSubmit(e)} className={className} encType="multipart/form-data">
                {!!hasLanguage &&
                        <LanguageSelector currentLang={currentLang} setCurrentLang={setCurrentLang} languages={languages}/>
                }
                <FormFields
                    i18n={i18n}
                    currentLang={currentLang}
                    languages={languages}
                    data={data}
                    configState={configState}
                    setConfigState={setConfigState}
                    formConfig={Object.assign({}, formConfig)}
                />

                <div className={'column-group column-group--md column-group--justify-items-center'}>
                    <FormErrors errors={errors} />
                </div>
                <div className="role__controls">
                    <input type="submit" value={t("SAVE")} className="button button--fluid button--surfie-green" />
                    <a href="#" className="button button--border-surfie-green" onClick={e => showForm(false)}>{t("Cancel")}</a>
                </div>
            </form>
        </div>
    </React.Fragment>
};

export default Form;



const FormFields=({formConfig,i18n,currentLang,languages,configState,setConfigState,data})=>{

        let config  = groupObjectBy({...formConfig},'group','_group');
      return   !!formConfig &&
        Object.keys(config).map((key) => {
                if (key.indexOf('_group') !==-1) {
                    return <div className={"form-group mt-30"} key={key}>
                        {!!(config[key][Object.keys(config[key])[0]] && config[key][Object.keys(config[key])[0]].group_name) &&
                            <p className={"font-bold"}>{config[key][Object.keys(config[key])[0]].group_name}</p>
                        }
                        <div className="row " style={{minHeight:'100px'}}>
                            {Object.keys(config[key]).map((keyInner) =>
                                <div key={keyInner} className={`col-${config[key][keyInner].groupWidth || (12 / Object.keys(config[key]).length)}`}>
                                    <FormItemWithTranslations
                                        i18n={i18n}
                                        currentLang={currentLang}
                                        languages={languages}
                                        key={keyInner}
                                        config={config[key][keyInner]}
                                        column={keyInner}
                                        columnName={config[key][keyInner].name}
                                        dataName={config[key][keyInner].dataName}
                                        data={data}
                                        configState={configState}
                                        setConfigState={setConfigState}
                                    />
                                </div>
                            )}
                        </div>
                    </div>

                }


                return <FormItemWithTranslations
                    i18n={i18n}
                    currentLang={currentLang}
                    languages={languages}
                    key={key} config={config[key]}
                    column={key}
                    columnName={config[key].name}
                    dataName={config[key].dataName}
                    data={data}
                    configState={configState}
                    setConfigState={setConfigState}
                />
            }
        )
};


const FormItemWithTranslations=({config, column, data, dataName, columnName,languages,i18n,currentLang,configState,setConfigState})=>{
    return config.translate ?
        <React.Fragment>
            {
                languages.map((language,index)=>{
                    const defaultLang = i18n.options.defaultLng;
                    const appLang = i18n.options.language;
                    let name = (config.translate && language.code!==defaultLang) ? "translations"+'['+column+']'+'['+language.code+']'  : column;
                    let value = ((config.translate && language.code!==defaultLang)||appLang!==defaultLang) ?
                        ((data.translations && data.translations[column]&& data.translations[column][language.code]) ?  data.translations[column][language.code] : '' )
                        : data[column];

                    if(!value){
                        value = data[column];
                    }

                    return <div className={(currentLang!==language.code) ?"form-group d-none" :'form-group'} key={language.code}>
                        <FormItem
                            languages={languages}
                            config={config}
                            column={name}
                            columnName={columnName}
                            dataName={dataName}
                            data={data}
                            value={value}
                            configState={configState}
                            setConfigState={setConfigState}
                        />
                    </div>
                })
            }
        </React.Fragment>
        :
        <div className="form-group">
            <FormItem
                languages={languages}
                config={config}
                column={column}
                columnName={columnName}
                dataName={dataName}
                data={data}
                value={data[column]}
                configState={configState}
                setConfigState={setConfigState}
            />
        </div>
};




const FormItem = ({config, column, data, dataName, columnName,value,configState,setConfigState}) => {

    const [options, setOptions] = useState([]);
    useEffect(() => {
        if (config?.api){
            config.api.getAll().then(response => {
                if (response.rows)
                    setOptions(response.rows);
                else setOptions(response);
            });
        }else{
            setOptions(config.options);
        }


    }, []);


    useEffect(()=>{
        if(config.showHidden && value===1){
            showHidden(value);
        }
    },[config]);

    const showHidden=(e,newValue)=>{

        let valueSet = (typeof newValue!=='undefined') ? newValue :  ( e.target ?  parseInt(e.target.value) : e);


        if(config.showHidden){
            let newState = {...configState};


            if(Array.isArray(config.showHidden)){
                config.showHidden.forEach(item=>{
                    newState[item].defaultHidden = valueSet!==1;
                });
            }else{
                newState[config.showHidden].defaultHidden = valueSet!==1;
            }

            setConfigState(newState);
        }
    };



    if(config.form===false || (configState[column] && configState[column].defaultHidden))
        return null;

    if(config.formComponent ){
        let Field = config.formComponent;
        return <Field name={column}  label={config.label} value={data[column]}/>;
    }






    switch (config?.type) {
        case 'hidden':
            return '';
        case 'checkbox':
            return <Checkbox changeHandler={showHidden} name={column}  label={config.label} value={data[column]} />;
        case 'switch':
            return <Switch changeHandler={showHidden} name={column}  label={config.label} value={data[column]} data={config.data}/>;
        case 'file':
            return <File name={column}  label={config.label} value={data[column]} multiple={config.multiple}/>;
        case 'select':
        case 'array':
            return <>
                <div className="form-group__header"><p>{config.label}</p></div>
                    {options && options.length > 0 ?
                        config.multiple ?
                            <MultiSelectInput name={column} options={options} value={data[columnName || column] || data} inputName={dataName} placeholder={config.placeholder}/>
                            :
                            <SelectInput name={column} options={options} value={data[column]}/>
                        : ''
                    }</>;
        default:
            return  <FormInput disabled={!!config.disabled} name={column} type={'text'} label={config.label} data={value} placeholder={config.placeholder}/>
    }
};
