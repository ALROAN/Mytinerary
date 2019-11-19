import { GET_CITIES, ADD_SUCCESS, GET_ERRORS } from "../actions/types";

const initialState = {
  isLoading: false,
  payload: [],
  error: {}
};

export default function citiesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_CITIES:
      return {
        ...state,
        isLoading: true
      };
    case ADD_SUCCESS:
      return {
        ...state,
        payload: action.cities,
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
