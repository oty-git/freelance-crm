// Employees API

const {ApiCore} = require("./utilities/api-core");
const url = 'employees';
const plural = 'employees';
const single = 'employee';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiEmployees = new ApiCore({
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

export default apiEmployees;