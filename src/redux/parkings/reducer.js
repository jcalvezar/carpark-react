import { ADD_PARKING, UPDATE_PARKING, DELETE_PARKING } from "./actionTypes";
import initialState from "./data";

export default function parkingsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_PARKING: {
      const { parking } = action.payload;
      return { ...state, parkings: [...state.parkings, parking] };
    }
    case UPDATE_PARKING: {
      const { index, parking } = action.payload;
      return {
        ...state,
        parkings: [
          ...state.parkings.slice(0, index),
          parking,
          ...state.parkings.slice(index + 1),
        ],
      };
    }
    case DELETE_PARKING: {
      const { index } = action.payload;
      return {
        ...state,
        parkings: [
          ...state.parkings.slice(0, index),
          ...state.parkings.slice(index + 1),
        ],
      };
    }
    default:
      return state;
  }
}
