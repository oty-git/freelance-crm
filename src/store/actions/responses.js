import { SET_API_ERRORS, SET_API_SUCCESS } from "./types";

export const setApiErrors = (payload) => {
  return {
    type: SET_API_ERRORS,
    payload: payload,
  };
};
export const setApiSuccess = (payload) => {
  return {
    type: SET_API_SUCCESS,
    payload: payload,
  };
};
