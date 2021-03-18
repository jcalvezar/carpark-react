import { createStore, combineReducers } from "redux";
import usersReducer from "./users/reducer";
import carsReducer from "./cars/reducer";
import parkingsReducer from "./parkings/reducer";
import logsReducer from "./logs/reducer";

export default createStore(
  combineReducers({
    usersReducer,
    carsReducer,
    parkingsReducer,
    logsReducer,
  })
);
