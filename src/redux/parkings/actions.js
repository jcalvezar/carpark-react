import {
  SET_PARKINGS,
  ADD_PARKING,
  UPDATE_PARKING,
  DELETE_PARKING,
} from "./actionTypes";

export const setParkings = (parkings) => {
  console.log("SET PARKINGS: ", parkings);
  return { type: SET_PARKINGS, payload: { parkings } };
};

export const addParking = (parking) => {
  return { type: ADD_PARKING, payload: { parking } };
};

export const updateParking = (index, parking) => {
  return { type: UPDATE_PARKING, payload: { index, parking } };
};

export const deleteParking = (index) => {
  return { type: DELETE_PARKING, payload: { index } };
};
