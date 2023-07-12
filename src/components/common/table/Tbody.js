import React from "react";
import TableRow from "./TableRow";

const Tbody=({data,formConfig, showForm, deleteItem})=>{
    return <tbody>
                {
                    data && data.map((item,index)=>
                        <TableRow key={index} data={item} formConfig={formConfig} showForm={showForm} deleteItem={deleteItem}/>
                    )
                }

            </tbody>
};



export default Tbody;
