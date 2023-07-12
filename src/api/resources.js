// resources API

const {ApiCore} = require("./utilities/api-core");
const url = 'directory/get-resources';
const plural = 'resources';
const single = 'resource';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiResources = new ApiCore({
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

export default apiResources;
