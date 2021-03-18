import { ADD_CAR, UPDATE_CAR, DELETE_CAR } from "./actionTypes";

export const addUser = (car) => {
  return { type: ADD_CAR, payload: { car } };
};

export const updateUser = (index, car) => {
  return { type: UPDATE_CAR, payload: { index, car } };
};

export const deleteUser = (index) => {
  return { type: DELETE_CAR, payload: { index } };
};
