import { SET_USERS, ADD_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";

export const setUsers = (users) => {
  console.log("SET_USERS: ", users);
  return { type: SET_USERS, payload: { users } };
};

export const addUser = (user) => {
  return { type: ADD_USER, payload: { user } };
};

export const updateUser = (index, user) => {
  return { type: UPDATE_USER, payload: { index, user } };
};

export const deleteUser = (index) => {
  return { type: DELETE_USER, payload: { index } };
};
