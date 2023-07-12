import React, {useEffect, useRef, useState} from "react";

const  FormInput = ({type, label, name, id, isRequired, handlerChange, data,disabled,autocomplete,placeholder,initFocus=false}) => {

    const [focus, setFocus] = useState(initFocus);
    const [value, setValue] = useState(data ?? '');

    const inputRef = useRef();

    const onChange = (e, name) => {
        if(!!handlerChange)
            handlerChange(e, name);
        setValue(e.target.value);
    };

    useEffect(() => {
        if (!id)
            id = type;
    }, []);
    let autocompleteProps = {};
    if(typeof autocomplete !=='undefined'){
        autocompleteProps.autocomplete = autocomplete;
    }

    return <div className={"input-animation js-input-animation" + (focus || value ? ' is-active' : '') + (isRequired ? ' input-animation--required' : '')}>
        {
            (placeholder && label) ?
                <div className={"form-group__header"}><p>{label}</p></div>

            :
            <label onClick={()=>{
                inputRef.current.focus()
            }} className="input-animation__label" htmlFor={id}>{label}</label>
        }

        <input  {...autocompleteProps}
                ref={inputRef}
                className={ (placeholder && label) ?  "input input--alabaster" : "input input--border-alto"}
                type={type} id={id}
                name={(name ? name : type)}
                onFocus={() => setFocus(true)}
                onBlur={() => setFocus(false)}
                onChange={e => onChange(e, name)}
                required={isRequired}
                defaultValue={value}
                disabled={!!disabled}
                placeholder={placeholder || ''}
        />
    </div>
};
export default FormInput;
