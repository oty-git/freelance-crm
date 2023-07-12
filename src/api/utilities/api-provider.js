import axios from "axios";
import { handleResponse, handleError } from "./response";

// Define your api url from any source.
// Pulling from your .env file when on the server or from localhost when locally
const BASE_URL = process.env.REACT_APP_URL;
let button = false;
let loading = false;
const getAll = (resource, config = {}) => {
  return axios
    .get(`${BASE_URL}/${resource}`, config)
    .then(handleResponse)
    .catch(handleError);
};

const getSingle = (resource, id) => {
  return axios
    .get(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

const post = (resource, model, event) => {
  beforeSubmitLoader(event);

  return axios
    .post(`${BASE_URL}/${resource}`, model)
    .then((res) => {
      afterSubmitLoader();
      return handleResponse(res);
    })
    .catch((error) => {
      afterSubmitLoader();
      return handleError(error);
    });
};

const put = (resource, model, event) => {
  beforeSubmitLoader(event);

  return axios
    .put(`${BASE_URL}/${resource}`, model)
    .then((res) => {
      afterSubmitLoader();
      return handleResponse(res);
    })
    .catch((error) => {
      afterSubmitLoader();
      return handleError(error);
    });
};

const patch = (resource, model) => {
  return axios
    .patch(`${BASE_URL}/${resource}`, model)
    .then(handleResponse)
    .catch(handleError);
};

const remove = (resource, id) => {
  return axios
    .delete(`${BASE_URL}/${resource}/${id}`)
    .then(handleResponse)
    .catch(handleError);
};

const beforeSubmitLoader = (event) => {
  if (
    (event && event.nativeEvent) ||
    event?.target?.tagName.toLowerCase() === "button"
  ) {
    button =
      event.nativeEvent && event.nativeEvent.submitter
        ? event.nativeEvent.submitter
        : event.target.tagName.toLowerCase() === "button"
        ? event.target
        : false;

    if (button) {
      button.classList.add("loading-button");
      button.disabled = true;
      loading = document.createElement("div");
      loading.className = "loader";
      button.appendChild(loading);
    }

    if (event.target.tagName.toLowerCase() === "input") {
      button = event.target;
      button.classList.add("loading-button");
      button.disabled = true;
    }

    event.persist();
  }
};

const afterSubmitLoader = () => {
  if (button) {
    button.disabled = false;
    button.classList.remove("loading-button");
    button.removeChild(loading);
    button = false;
  }
};

export const apiProvider = {
  getAll,
  getSingle,
  post,
  put,
  patch,
  remove,
};
