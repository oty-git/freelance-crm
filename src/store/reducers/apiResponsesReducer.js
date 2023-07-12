import { SET_API_ERRORS, SET_API_SUCCESS } from "../actions/types";

const initialState = {
  apiErrors: false,
  apiSuccess: false,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_API_ERRORS:
      return {
        ...state,
        apiErrors: action.payload,
      };
    case SET_API_SUCCESS:
      return {
        ...state,
        apiSuccess: action.payload,
      };
    default:
      return state;
  }
}
