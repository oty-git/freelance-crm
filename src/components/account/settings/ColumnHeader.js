import React from "react";

const ColumnHeader = ({title, button, setModalShow}) => {

    return <div className="column-heading">
        <h5>{title}</h5>
        {button &&
        <div className="dropdown__toggle manage-skills-dropdown__toggle" data-dropdown-toggle="manage-skills-dropdown">
            <button className="button button--border-surfie-green button--size-20" type="button" onClick={e => setModalShow(true)}>
                <svg className="svg-icon svg-icon--surfie-green" width="10" height="10">
                    <use href="/images/svg/svg-sprite/symbol/sprite.svg#plus" x="0" y="0"></use>
                </svg>
            </button>
        </div>}
    </div>;
}

export default ColumnHeader;
