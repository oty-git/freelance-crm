import {SET_CURRENCIES, SET_LANGUAGES, SET_SERVICES, SET_SHOW_MODAL_FORM,SET_APP_LANGUAGES} from "./types";
import apiDirectory from "../../api/directory";


export const getLanguages = () => dispatch => {
    return apiDirectory.getAll('/languages').then(res => {
        if (!(res.response && res.response.data))
            dispatch(setLanguages(res));
    })
};
export const getAppLanguages = () => dispatch => {
    return apiDirectory.getAll('/app_languages').then(res => {
        if (!(res.response && res.response.data))
            dispatch(setAppLanguages(res));
    })
};
export const getCurrencies = () => dispatch => {
    return apiDirectory.getAll('/currencies').then(res => {
        if (!(res.response && res.response.data))
            dispatch(setCurrencies(res));
    })
};
export const getServices = () => dispatch => {
    return apiDirectory.getAll('/services').then(res => {
        if (!(res.response && res.response.data))
            dispatch(setServices(res));
    })
};

export const setLanguages = languages => {
    return {
        type: SET_LANGUAGES,
        payload: languages
    }
};
export const setAppLanguages = languages => {
    return {
        type: SET_APP_LANGUAGES,
        payload: languages
    }
};
export const setCurrencies = payload => {
    return {
        type: SET_CURRENCIES,
        payload: payload
    }
};
export const setServices = payload => {
    return {
        type: SET_SERVICES,
        payload: payload
    }
};
export const setShowModalForm = payload => {
    return {
        type: SET_SHOW_MODAL_FORM,
        payload: payload
    }
};
