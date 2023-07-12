// Freelancers API

const { ApiCore } = require("./utilities/api-core");
const url = "freelancers";
const plural = "freelancers";
const single = "freelancer";

// plural and single may be used for message logic if needed in the ApiCore class.

const apiFreelancers = new ApiCore({
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

export default apiFreelancers;
