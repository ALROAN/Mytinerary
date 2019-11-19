import { ADD_USER, ADD_USER_SUCCESS, GET_ERRORS } from "../actions/types";

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
        default:
            return state;
    }
}
