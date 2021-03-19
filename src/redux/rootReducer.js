import { combineReducers } from "redux";
import usersReducer from "./users/reducer";
import carsReducer from "./cars/reducer";
import parkingsReducer from "./parkings/reducer";
import logsReducer from "./logs/reducer";

export default combineReducers({
  usersReducer,
  carsReducer,
  parkingsReducer,
  logsReducer,
});
