// Services API

const { ApiCore } = require("./utilities/api-core");
const url = "directory";
const plural = "directory";
const single = "directory";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiDirectory = new ApiCore({
  getAll: true,
  getSingle: true,
  post: false,
  put: false,
  patch: false,
  remove: false,
  url: url,
  plural: plural,
  single: single,
});

export default apiDirectory;
