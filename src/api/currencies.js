const { ApiCore } = require("./utilities/api-core");
const url = "directory/currencies";
const plural = "currencies";
const single = "currency";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiCurrencies = new ApiCore({
  getAll: true,
  getSingle: true,
  post: true,
  put: true,
  patch: true,
  remove: true,
  url: url,
  plural: plural,
  single: single,
});

export default apiCurrencies;
