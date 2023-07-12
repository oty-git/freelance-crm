const RadioButton = ({name, value, label, selected, changeValue}) => {

    return <label className="radio">
        <div className="radio__box">
            <input className="radio__input" type="radio"
                   checked={value === parseInt(selected)}
                   value={value}
                   name={name}
                   onChange={e => changeValue(e)}
            />
            <span className="radio__checkmark"/>
        </div>
        <span className="radio__name">{label}</span>
    </label>;
}

export default RadioButton;