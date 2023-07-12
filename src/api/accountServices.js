// AccountServices API

const { ApiCore } = require("./utilities/api-core");
const url = "account_services";
const plural = "account_services";
const single = "account_services";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiAccountServices = new ApiCore({
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

export default apiAccountServices;
