import React, {useEffect, useState} from "react";

const Switch = ({ name, changeHandler,value,data,label}) => {



    let [currentValue,setCurrentValue] = useState(value ? value.toString() : data[0].value );


    const setValue=(e)=>{
        console.log('setValue',e.target.value);
        setCurrentValue(currentValue===data[0].value ? data[1].value : data[0].value);
        if(changeHandler){
            changeHandler(e,currentValue===data[0].value ? data[1].value : data[0].value);
        }
    };


    useEffect(()=>{
        if(value){
            setCurrentValue(value);
        }
    },[value]);



    return <div className="elem__advanced--picker ">
                {!!label &&
                <p>{label}</p>
                }
                <div className="switch__adv--elem">
                    <input type={'hidden'} name={name} value={currentValue}/>
                    <p className={"switch__left " +(currentValue===data[0].value ? " active__switch--adv" : "")}>{data[0].label}</p>
                    <label className="switch">
                        <input type="checkbox" checked={currentValue===data[1].value}  onChange={e => setValue(e)}/>
                            <span className="slider"></span>
                    </label>
                    <p className={"switch__right " +(currentValue===data[1].value ? " active__switch--adv" : "")}>{data[1].label}</p>
                </div>
        </div>
}

export default Switch;
