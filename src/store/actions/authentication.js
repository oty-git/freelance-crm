import axios from "axios";
import { SET_CURRENT_USER } from "./types";
import jwt_decode from "jwt-decode";

const apiUrl = process.env.REACT_APP_URL;

export const login = (e, props, setErrors) => (dispatch) => {
  axios
    .post(apiUrl + "/login", new FormData(e.target), e)
    .then((res) => {
      const { token } = res.data;
      setAuthToken(token);
      localStorage.setItem("userToken", token);
      props.history.push("/");
    })
    .catch((err) => {
      if (err.response && err.response.data && err.response.data.errors) {
        setErrors(err.response.data.errors);
      }
    });
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("userToken");
  setAuthToken(false);
  dispatch(setUser({}));
  window.location.href = "/login";
};

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

export const setUserFromLocalStorage = () => (dispatch) => {
  if (typeof Storage !== "undefined") {
    if (localStorage.userToken) {
      setAuthToken(localStorage.userToken);
      const decoded = jwt_decode(localStorage.userToken);
      const currentTime = Date.now() / 1000;
      if (decoded.exp < currentTime) {
        dispatch(logoutUser());
        return false;
      } else {
        return decoded;
      }
    }
  }
  return false;
};
export const setCurrentUser = (decoded) => (dispatch) => {
  return axios
    .get(apiUrl + "/users/" + decoded.id)
    .then((res) => {
      if (res && res.data) {
        return dispatch(setUser(res.data));
      }
    })
    .catch((err) => {
      console.log("err", err);
    });
};

export const setUser = (decoded) => {
  return {
    type: SET_CURRENT_USER,
    payload: decoded,
  };
};
