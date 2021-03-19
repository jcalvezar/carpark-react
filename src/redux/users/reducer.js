import { ADD_USER, UPDATE_USER, DELETE_USER } from "./actionTypes";
import initialState from "./data";

export default function usersReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_USER: {
      const { user } = action.payload;
      const newId = Math.max(...state.users.map((user) => user.id)) + 1;
      return { ...state, users: [...state.users, { ...user, id: newId }] };
    }
    case UPDATE_USER: {
      const { index, user } = action.payload;
      return {
        ...state,
        users: [
          ...state.users.slice(0, index),
          user,
          ...state.users.slice(index + 1),
        ],
      };
    }
    case DELETE_USER: {
      const { index } = action.payload;
      return {
        ...state,
        users: [
          ...state.users.slice(0, index),
          ...state.users.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
