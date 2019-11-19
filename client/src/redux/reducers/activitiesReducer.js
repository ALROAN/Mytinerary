import { GET_ACTIVITIES, ADD_AC_SUCCESS, GET_ERRORS } from "../actions/types";

const initialState = {
  isLoading: false,
  payload: [],
  error: {}
};

export default function activitiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ACTIVITIES:
      return {
        ...state,
        isLoading: true
      };
    case ADD_AC_SUCCESS:
      return {
        ...state,
        payload: action.activities,
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
