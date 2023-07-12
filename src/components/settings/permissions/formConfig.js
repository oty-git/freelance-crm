import apiResources from "../../../api/resources";
import { Trans } from "react-i18next";

export default {
  id: {
    type: "hidden",
    label: <Trans>ID</Trans>,
  },
  name: {
    type: "text",
    label: <Trans>Name</Trans>,
    translate: true,
  },
  description: {
    type: "text",
    label: <Trans>Description</Trans>,
    translate: true,
  },
  resource: {
    type: "select",
    api: apiResources,
    label: <Trans>Resource</Trans>,
  },
  action: {
    type: "array",
    options: ["view", "create", "delete", "update", "*"],
    multiple: true,
    placeholder: "Actions",
    label: <Trans>Action</Trans>,
  },
};
