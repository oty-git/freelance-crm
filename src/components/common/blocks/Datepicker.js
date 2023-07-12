import {useEffect, useState} from "react";
import Flatpickr from "react-flatpickr";

const Datepicker = ({label, id, isRequired, name, handlerChange}) => {

    const [date, setDate] = useState('');

    const changeHandler = (e, dateStr) => {
        setDate(dateStr);
    };

    useEffect(()=>{
        if (handlerChange){
            handlerChange(date, name);
        }
    },[date]);

    return <div className="datepicker">
        <div className={"input-animation js-input-animation" + (isRequired ? ' input-animation--required' : '')}>
            <label className="input-animation__label" htmlFor={id}>{label}</label>
            <Flatpickr
                placeholder={label}
                className={'input input--border-alto datepicker__input js-datepicker-input'}
                name={name}
                value={date}
                onChange={(e, dateStr) => changeHandler(e, dateStr)}
                id={id}
            />
        </div>
    </div>
}

export default Datepicker;
