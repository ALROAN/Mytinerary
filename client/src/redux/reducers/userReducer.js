import { ADD_USER, ADD_USER_SUCCESS, WITH_AUTH, WITH_AUTH_SUCCES, GET_ERRORS, IS_LOGOUT, VIEW_LOGIN } from "../actions/types";

const initialState = {
    isLogin: false,
    payload: [],
    error: {}
};

export default function userReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_USER:
            return {
                ...state,
            };
        case ADD_USER_SUCCESS:
            return {
                ...state,
                payload: action.userInfo,
                error: {},
            };
        case GET_ERRORS:
            return {
                ...state,
                error: action.error,
            };
        case WITH_AUTH:
            return {
                ...state,

            };
        case WITH_AUTH_SUCCES:
            return {
                ...state,
                payload: action.data
            };
        case IS_LOGOUT:
            return {
                ...state,
                payload: [],
            };
        case VIEW_LOGIN:
            return {
                ...state,
                isLogin: action.isLogin

            };
        default:
            return state;
    }
}


