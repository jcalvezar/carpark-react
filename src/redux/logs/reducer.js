import { SET_LOGS, ADD_LOG } from "./actionTypes";
import initialState from "./data";

export default function logssReducer(state = initialState, action) {
  switch (action.type) {
    case SET_LOGS: {
      const { logs } = action.payload;
      return { ...state, logs: [...logs] };
    }
    case ADD_LOG: {
      const { log } = action.payload;
      return { ...state, logs: [...state.logs, log] };
    }
    default:
      return state;
  }
}
