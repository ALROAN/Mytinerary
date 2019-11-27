import { combineReducers } from "redux";
import citiesReducer from "./citiesReducer";
import itinerariesReducer from "./itinerariesReducer";
import activitiesReducer from "./activitiesReducer";
import userReducer from "./userReducer"

export default combineReducers({
  cities: citiesReducer,
  itineraries: itinerariesReducer,
  activities: activitiesReducer,
  //   comments: commentsReducer,
  user: userReducer,
  //   favorites: favoritesReducer
});
