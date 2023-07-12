// AccountExpertises API

const {ApiCore} = require("./utilities/api-core");
const url = 'account_expertises';
const plural = 'account_expertises';
const single = 'account_expertise';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAccountExpertises = new ApiCore({
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

export default apiAccountExpertises;