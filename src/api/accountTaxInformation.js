// AccountTaxInformation API

const {ApiCore} = require("./utilities/api-core");
const url = 'account_tax_information';
const plural = 'account_tax_information';
const single = 'account_tax_information';

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAccountTaxInformation = new ApiCore({
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

export default apiAccountTaxInformation;