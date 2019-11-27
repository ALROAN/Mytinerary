import { ADD_USER, ADD_USER_SUCCESS, GET_ERRORS, WITH_AUTH_SUCCES, WITH_AUTH, IS_LOGOUT } from "./types";
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


export function withAuthStart() {
    return {
        type: WITH_AUTH
    }
}
export function withAuthSucces(data) {
    return {
        type: WITH_AUTH_SUCCES,
        data
    }
}

export function withAuthFailure(error) {
    return {
        type: GET_ERRORS,
        error
    };
}
export function isLogout() {
    console.log("IS_LOGOUT");

    // return {
    //     type: IS_LOGOUT
    // };
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



export function logIn(state) {

    return fetch('/api/user/authenticate', {
        method: 'POST',
        body: JSON.stringify(state),
        headers: {
            'Content-Type': 'application/json'
        }
    })
        .then(res => {
            if (res.status === 200) {
            } else {
                const error = new Error(res.error);
                throw error;
            }
        })
        .catch(err => {
            console.error(err);
            alert('Error logging in, please try again');
        });
}

export function logout() {
    return console.log("logout")
}

export function withAuth() {
    return dispatch => {
        dispatch(withAuthStart());
        axios
            .get('/checkToken')
            .then(res => {
                if (res.status === 200) {
                    dispatch(withAuthSucces(res.data))

                    // return res.json()
                } else {
                    const error = new Error(res.error);
                    throw error;
                }
            })
            .catch(err => {
                console.error(err);
                dispatch(withAuthFailure(err.response.statusText));
            })
    }

}


