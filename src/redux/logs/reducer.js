import { ADD_LOG } from "./actionTypes";
import initialState from "./data";

export default function logssReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_LOG: {
      const { log } = action.payload;
      return { ...state, logs: [...state.logs, log] };
    }
    default:
      return state;
  }
}
