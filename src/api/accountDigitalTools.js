// AccountDigitalTools API

const {ApiCore} = require("./utilities/api-core");
const url = 'account_digital_tools';
const plural = 'account_digital_tools';
const single = 'account_digital_tool';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAccountDigitalTools = new ApiCore({
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

export default apiAccountDigitalTools;