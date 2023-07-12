import {useEffect, useState} from "react";

const Checkbox = ({label, name, changeHandler,value}) => {



    let [currentValue,setCurrentValue] = useState(value ? value.toString() : '0' );


    const setValue=(e)=>{
        // e.preventDefault();

        let value = parseInt(currentValue)===1 ? '0' : '1'
        console.log('valuevalue',value)
        setCurrentValue(value);
        if(changeHandler){
            changeHandler(e,parseInt(value));
        }
    };


    useEffect(()=>{
        if(value){
            setCurrentValue(value.toString());
        }
    },[value]);



    return <label className="checkbox">
        <div className="checkbox__box">
            <input type={'hidden'} name={name} value={currentValue}/>
            <input className="checkbox__input" type="checkbox" checked={parseInt(currentValue)===1}  value={currentValue}  onChange={e => setValue(e)}/>
            <span className="checkbox__checkmark"/>
        </div>
        <span className="checkbox__name">{label}</span>
    </label>;
}

export default Checkbox;
