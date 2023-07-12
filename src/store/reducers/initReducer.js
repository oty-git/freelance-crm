import {
    SET_LANGUAGES,
    SET_CURRENCIES,
    SET_SERVICES,
    SET_SHOW_MODAL_FORM,
    SET_APP_LANGUAGES,
} from "../actions/types";

const initialState = {
    languages: false,
    app_languages: false,
    currencies: false,
    services: false,
    showModalForm: false,
};

export default function(state = initialState, action ) {
    switch (action.type) {
        case SET_LANGUAGES:
            return {
                ...state,
                languages: action.payload
            };
        case SET_APP_LANGUAGES:
            return {
                ...state,
                app_languages: action.payload
            };
        case SET_CURRENCIES:
            return {
                ...state,
                currencies: action.payload
            };
        case SET_SERVICES:
            return {
                ...state,
                services: action.payload
            };
        case SET_SHOW_MODAL_FORM:
            return {
                ...state,
                showModalForm: action.payload
            };
        default:
            return state;
    }
}
