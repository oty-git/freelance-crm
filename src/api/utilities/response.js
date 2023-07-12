import { setApiErrors, setApiSuccess } from "../../store/actions/responses";
import store from "../../store/store";
import { toast } from "react-toastify";

export function handleResponse(response) {
  store.dispatch(setApiErrors(false));
  store.dispatch(setApiSuccess(response.results || response.data || response));

  if (response.results) {
    return response.results;
  }

  if (typeof response.data !== "undefined") {
    return response.data;
  }

  return response;
}

export function handleError(error) {
  if (error?.response?.status === 401) {
    toast.error(
      error?.response?.data
        ? error.response.data.error || error.response.data
        : error?.message || "There was an error with your request",
    );
  }
  if (error?.response?.status === 403) {
    toast.error(
      error?.response?.data
        ? error.response.data.error || error.response.data
        : error?.message || "There was an error with your request",
    );
  }

  store.dispatch(
    setApiErrors(
      error?.response?.data
        ? error.response.data.errors || error.response.data
        : error?.message || "There was an error with your request",
    ),
  );
  return false;
}
