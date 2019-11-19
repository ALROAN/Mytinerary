import { GET_ITINERARIES, ADD_IT_SUCCESS, GET_ERRORS } from "../actions/types";

const initialState = {
  isLoading: false,
  payload: [],
  error: {}
};

export default function itinerariesReducer(state = initialState, action) {
  switch (action.type) {
    case GET_ITINERARIES:
      return {
        ...state,
        isLoading: true
      };
    case ADD_IT_SUCCESS:
      return {
        ...state,
        payload: action.itineraries,
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
