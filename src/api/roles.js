// Roles API

const {ApiCore} = require("./utilities/api-core");
const url = 'roles';
const plural = 'roles';
const single = 'role';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiRoles = new ApiCore({
    getAll: true,
    getSingle: true,
    post: true,
    put: true,
    patch: true,
    remove: true,
    url: url,
    plural: plural,
    single: single
});

export default apiRoles;
