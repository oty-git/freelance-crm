import Export from "./Export";
import Import from "./Import";
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
    },
    code: {
        type: 'text',
        label:<Trans>Code</Trans>,
    },
    icon: {
        type: 'file',
        label:<Trans>Icon</Trans>,
    },
    export: {
        type: 'text',
        tableComponent:Export,
        label:<Trans>Export</Trans>,
        form:false
    },
    import: {
        type: 'text',
        tableComponent:Import,
        label:<Trans>Import</Trans>,
        form:false
    },

};
