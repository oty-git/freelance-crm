import priceTypes from "../../../constants/priceTypes";
import {Trans} from 'react-i18next';

export default {


    id: {
        type: 'hidden',
        label:<Trans>ID</Trans>,
    },
    name: {
        type: 'text',
        label:<Trans>Service name</Trans>,
        translate:true
    },
    matt_selection: {
        type: 'switch',
        data:[
            {
                value:0,
                label:<Trans>Let choose</Trans>,
            },
            {
                value:1,
                label:<Trans>Set default</Trans>,
            },
        ],
        label:<Trans>Matt selection</Trans>,
        showHidden:["price_calculation_type"],
        group:'matt_selection',
        groupWidth:6,
    },

    price_calculation_type: {
        type: 'array',
        options: priceTypes ?  priceTypes.map(item=>{
            return {
                name:item.value,
                value:item.value,
                label:item.label,
            }
        }) : [],
        multiple:false,
        label:<Trans>Matt Name</Trans>,
        defaultHidden:true,
        group:'matt_selection',
        groupWidth:3,
    },
    price_calculation_units: {
        type: 'number',
        label:<Trans>Unit Count</Trans>,
        defaultHidden:false,
        placeholder:'1700',
        group:'matt_selection',
        groupWidth:3,

    },
    language_selection: {
        type: 'checkbox',
        label:<Trans>Languages selection</Trans>,
        showHidden:"interpreting"
    },
    interpreting: {
        type: 'switch',
        label:<Trans>Interpreting</Trans>,
        data:[
            {
                value:0,
                label:<Trans>1 language</Trans>,
            },
            {
                value:1,
                label:<Trans>2 languages</Trans>,
            },
        ],
        defaultHidden:true,
        table:false
    },


    min_price: {
        type: 'number',
        label:<Trans>Minimum price</Trans>,
        placeholder:'0.00',
        group:'price',
        group_name:<Trans>Price options</Trans>,
    },

    max_price: {
        type: 'number',
        label:<Trans>Maximum price</Trans>,
        placeholder:'0.00',
        group:'price',
        group_name:<Trans>Price options</Trans>,
    },
    icon: {
        type: 'file',
        label:<Trans>Icon</Trans>,
        multiple:false
    },


};
