import React from "react";
import {capitalizeFirstLetter, getLabelFromString} from "../../../functions/functions";

const TdItem=({data,config,column})=>{


    let value = data[column];



    if(config.tableComponent ){
        let Field = config.tableComponent;
        return <td ><Field  data={data} /></td>;
    }

    switch (config?.type) {
        case 'image':
            return <td><p><img  width={50} src={data[column]?.disk_name || data[column]} alt=""/></p></td>;
        case 'file':
            return <td><p>
                {(value && value.content_type && value.content_type.indexOf('image')!==-1)
                    ?
                    <img width={50} src={value ?( value.disk_name || value) : ''} alt=""/>
                    :
                    <a href={value ?( value.disk_name || value): ''}>{value ?( value.file_name || value): ''}</a>
                }
            </p>
            </td>;
        case 'checkbox':
            return <td><p>{parseInt(data[column])===1
                ?
                <img src="/images/icons/check-caribbean-green.svg" alt="check-caribbean-green"/>
                    :
                <img src="/images/icons/close-brick-red.svg" alt="close-brick-red"/>
                    }</p>
            </td>
        case 'switch':
            return <td><p>{(parseInt(data[column])===1
                &&
                <img src="/images/icons/check-caribbean-green.svg" alt="check-caribbean-green"/>)
                    ||
                    (
                        parseInt(data[column])===0
                        &&
                        <img src="/images/icons/close-brick-red.svg" alt="close-brick-red"/>
                    )
                    ||
                    data[column]

                    }</p>
            </td>
        case 'array':
            return getSelectColumnData(data[column]);
        case 'select':
            if (Array.isArray(data[column])) {
                return getSelectColumnData(data[column], 'name');
            }
            return <td><p>{getLabelFromString(data[column])}</p></td>
        default:
            return <td><p>{data[column]}</p></td>
    }


};
export default TdItem;

const getSelectColumnData = (data, field) => {
    return <td>
        <div className={'permissions__list'}>
            {
                Array.isArray(data) ? data.map(item => {
                    return <div key={field ? item[field] : item} className={'elem__permission'}><p>{capitalizeFirstLetter(field ? item[field] : item)}</p></div>
                }) :
                    data
            }
        </div>
    </td>
}
