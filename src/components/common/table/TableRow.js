import React from "react";
import TdItem from "./TdItem";

const TableRow=({data,formConfig, showForm, deleteItem})=>{
    return <tr>
        {!!formConfig
            ?
            Object.keys(formConfig).map((key)=>
               {
                   if(formConfig[key].table===false)
                       return null;

                   return  <TdItem key={key} column={formConfig[key].name || key} config={formConfig[key]} data={data} />}
            )
            :
            data && Object.keys(data).map((key)=>
                <td key={key}><p>{data[key]}</p></td>
            )
        }
        <td className="action__small">
            <div className="action--buttons">
                <div className="edit__button edit__roles" >
                    <a href="#" onClick={e =>
                    {
                        e.preventDefault();
                        showForm(true, data)
                    }
                    }>
                        <img src="/images/editgreen.svg" alt="editgreen"   />
                    </a>
                </div>
                <div className="remove__button">
                    <a href="#"  onClick={e =>{
                        e.preventDefault();
                        deleteItem(data.id)}}>
                        <img src="/images/trashicon.svg" alt="trashicon"/>
                    </a>
                </div>
            </div>
        </td>
    </tr>
};



export default TableRow;
