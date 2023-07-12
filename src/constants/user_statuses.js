import React from "react";
import { Trans } from "react-i18next";

export default {
  approved: { label: <Trans>Approved</Trans>, class: "text-approved" },
  temporary_approve: {
    label: <Trans>Temporary Approved</Trans>,
    class: "text-temporary",
  },
  waiting_for_approval: {
    label: <Trans>Waiting for approval</Trans>,
    class: "text-whating-yellow",
  },
  rejected: { label: <Trans>Rejected</Trans>, class: "text-suspended" },
  suspended: { label: <Trans>Suspended</Trans>, class: "text-suspended" },
  archived: { label: <Trans>Archived</Trans>, class: "text-suspended" },
};
