import { ADD_CAR, UPDATE_CAR, DELETE_CAR } from "./actionTypes";
import initialState from "./data";

export default function carsReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_CAR: {
      const { car } = action.payload;
      return { ...state, cars: [...state.cars, car] };
    }
    case UPDATE_CAR: {
      const { index, car } = action.payload;
      return {
        ...state,
        cars: [
          ...state.cars.slice(0, index),
          car,
          ...state.cars.slice(index + 1),
        ],
      };
    }
    case DELETE_CAR: {
      const { index } = action.payload;
      return {
        ...state,
        cars: [...state.cars.slice(0, index), ...state.cars.slice(index + 1)],
      };
    }
    default:
      return state;
  }
}
