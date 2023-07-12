const Checkbox = ({label, name, changeHandler, index, value, defaultChecked = false}) => {

    const handlerChange = (e) => {
        if (changeHandler)
            changeHandler(e, value);
    }

    return <label className="checkbox">
        <div className="checkbox__box">
            <input className="checkbox__input" type="checkbox" name={name} defaultChecked={defaultChecked} onChange={e => handlerChange(e)}/>
            <span className="checkbox__checkmark"/>
        </div>
        <span className="checkbox__name">{label}</span>
    </label>;
}

export default Checkbox;