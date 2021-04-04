import { combineReducers } from "redux";
import authReducer from "./auth/reducer";
import usersReducer from "./users/reducer";
import carsReducer from "./cars/reducer";
import parkingsReducer from "./parkings/reducer";
import logsReducer from "./logs/reducer";

export default combineReducers({
  authReducer,
  usersReducer,
  carsReducer,
  parkingsReducer,
  logsReducer,
});
