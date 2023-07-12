import {Trans} from 'react-i18next';

export default {


    id: {
        type: 'hidden',
        label:<Trans>ID</Trans>,
    },
    name: {
        type: 'text',
        label:<Trans>Name</Trans>,
    },
    label: {
        type: 'text',
        label:<Trans>Label</Trans>,
        translate:true
    },
    code: {
        type: 'text',
        label:<Trans>Code</Trans>,
    },



};
