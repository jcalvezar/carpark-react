import { SET_LOGS, ADD_LOG } from "./actionTypes";

export const setLogs = (logs) => {
  console.log("SET_LOGS: ", logs);
  return { type: SET_LOGS, payload: { logs } };
};

export const addLog = (log) => {
  return { type: ADD_LOG, payload: { log } };
};
