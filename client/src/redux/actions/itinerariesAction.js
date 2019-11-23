import { GET_ITINERARIES, ADD_IT_SUCCESS, GET_ERRORS } from "./types";

import axios from "axios";

export function fetchingItineraries() {
  return {
    type: GET_ITINERARIES
  };
}

export function fetchingItinerariesSuccess(itineraries) {

  return {
    type: ADD_IT_SUCCESS,
    itineraries

  };
}

export function fetchingItinerariesFailure(error) {
  return {
    type: GET_ERRORS,
    error
  };
}

export function fetchItineraries(cityId) {
  return dispatch => {
    dispatch(fetchingItineraries());
    axios
      .get("/api/itineraries/" + cityId)
      .then(res => {
        dispatch(fetchingItinerariesSuccess(res.data));

      })
      .catch(err => {
        console.log(err);
        dispatch(fetchingItinerariesFailure(err.response.statusText));
      });
  };
}
