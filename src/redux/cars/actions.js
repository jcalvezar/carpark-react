import { SET_CARS, ADD_CAR, UPDATE_CAR, DELETE_CAR } from "./actionTypes";

export const setCars = (cars) => {
  console.log("SET CARS: ", cars);
  return { type: SET_CARS, payload: { cars } };
};

export const addCar = (car) => {
  return { type: ADD_CAR, payload: { car } };
};

export const updateCar = (index, car) => {
  return { type: UPDATE_CAR, payload: { index, car } };
};

export const deleteCar = (index) => {
  return { type: DELETE_CAR, payload: { index } };
};
