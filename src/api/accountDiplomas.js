// AccountDiplomas API

const {ApiCore} = require("./utilities/api-core");
const url = 'account_diplomas';
const plural = 'account_diplomas';
const single = 'account_diploma';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAccountDiplomas = new ApiCore({
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

export default apiAccountDiplomas;