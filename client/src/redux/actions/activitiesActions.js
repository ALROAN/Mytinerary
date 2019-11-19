import { GET_ACTIVITIES, ADD_AC_SUCCESS, GET_ERRORS } from "./types";

import axios from "axios";

export function fetchingActivities() {
  return {
    type: GET_ACTIVITIES
  };
}

export function fetchingActivitiesSuccess(activities) {
  return {
    type: ADD_AC_SUCCESS,
    activities
  };
}

export function fetchingActivitiesFailure(error) {
  return {
    type: GET_ERRORS,
    error
  };
}

export function fetchActivities(itineraryId) {
  return dispatch => {
    dispatch(fetchingActivities());
    axios
      .get("/api/activities/" + itineraryId)
      .then(res => {
        dispatch(fetchingActivitiesSuccess(res.data));
      })
      .catch(err => {
        console.log(err);
        dispatch(fetchingActivitiesFailure(err.response.statusText));
      });
  };
}
