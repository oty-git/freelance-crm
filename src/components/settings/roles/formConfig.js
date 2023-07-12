import apiPermissions from "../../../api/permissions";
import {Trans} from 'react-i18next';

export default {

    id: {
        type: 'hidden',
        label:<Trans>ID</Trans>,
    },
    name: {
        type: 'text',
        label:<Trans>Name</Trans>,
        translate:true
    },
    description: {
        type: 'text',
        label:<Trans>Description</Trans>,
        translate:true
    },
    permission_id: {
        type: 'select',
        name: 'Permissions',
        dataName: 'RolePermissions',
        api: apiPermissions,
        multiple: true,
        placeholder: 'Permissions',
        label:<Trans>Guard Permissions</Trans>,
    },
};
