import { ADD_USER, ADD_USER_SUCCESS, WITH_AUTH, WITH_AUTH_SUCCES, GET_ERRORS, IS_LOGOUT } from "../actions/types";

const initialState = {
    isLoading: false,
    payload: [],
    error: {}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
                isLoading: true
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                payload: action.userInfo,
                error: {},
                isLoading: false
            };
        case GET_ERRORS:
            return {
                ...state,
                error: action.error,
                isLoading: false
            };
        case WITH_AUTH:
            return {
                ...state,
                isLoading: true

            };
        case WITH_AUTH_SUCCES:
            return {
                ...state,
                isLoading: false,
                payload: action.data
            };
        case IS_LOGOUT:
            return {
                ...state,
                payload: []
            };
        default:
            return state;
    }
}


