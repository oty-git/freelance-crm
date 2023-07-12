// Services API

const { ApiCore } = require("./utilities/api-core");
const url = "permissions";
const plural = "permissions";
const single = "permission";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiPermissions = new ApiCore({
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

export default apiPermissions;
