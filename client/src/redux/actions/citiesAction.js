import { GET_CITIES, ADD_SUCCESS, GET_ERRORS } from "./types";

import axios from "axios";

export function fetchingCities() {
  return {
    type: GET_CITIES
  };
}

export function fetchingCitiesSuccess(cities) {
  return {
    type: ADD_SUCCESS,
    cities
  };
}

export function fetchingCitiesFailure(error) {
  return {
    type: GET_ERRORS,
    error
  };
}

export function fetchCities() {
  return dispatch => {
    dispatch(fetchingCities());
    axios
      .get("/api/cities")
      .then(res => {
        dispatch(fetchingCitiesSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchingCitiesFailure(err.response.statusText));
      });
  };
}
