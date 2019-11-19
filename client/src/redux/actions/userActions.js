import { ADD_USER, ADD_USER_SUCCESS, GET_ERRORS } from "./types";

import axios from "axios";

export function postUser() {
    return {
        type: ADD_USER
    };
}

export function postUserSuccess(userInfo) {
    return {
        type: ADD_USER_SUCCESS,
        userInfo
    };
}

export function postUserFailure(error) {
    return {
        type: GET_ERRORS,
        error
    };
}

export function createUser(body) {
    return dispatch => {
        dispatch(postUser());
        axios
            .post("/api/user", body)
            .then(res => {
                dispatch(postUserSuccess(res.data));
                console.log(res.data);

            })
            .catch(err => {
                console.log(err);
                dispatch(postUserFailure(err.response.statusText));
            });
    };
}
