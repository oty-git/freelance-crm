import React from "react";
import TdItem from "./TdItem";

const TableRow=({data,formConfig})=>{
    return <div className="roles__table--row">
        {!!formConfig
            ?
            Object.keys(formConfig).map((key)=>
                <TdItem key={key} column={key} config={formConfig[key]} data={data} />
            )
            :
            data && Object.keys(data).map((key)=>
                <div className="elem__roles--table" key={key}><p>{data[key]}</p></div>
            )
        }
        <div className="elem__roles--table">
            <div className="action__roles--buttons">
                <div className="edit__button">
                    <a href="#">
                        <img src="/images/editgreen.svg" alt="editgreen"/>
                    </a>
                </div>
                <div className="remove__button">
                    <a href="#">
                        <img src="/images/trashicon.svg" alt="trashicon"/>
                    </a>
                </div>
            </div>
        </div>
    </div>
};



export default TableRow;
