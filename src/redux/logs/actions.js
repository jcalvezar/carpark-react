import { ADD_LOG } from "./actionTypes";

export const addLog = (log) => {
  return { type: ADD_LOG, payload: { log } };
};
