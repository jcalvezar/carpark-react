import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";
import { setCars } from "../cars/actions";
import { setUsers } from "../users/actions";
import { setParkings } from "../parkings/actions";
import { setLogs } from "../logs/actions";

const authLogin = (user) => {
  return { type: AUTH_LOGIN, payload: { ...user } };
};

export const tryLogin = (userInfo) => async (dispatch) => {
  const response = await fetch(`http://jcalvez.info/apps/carpark/login/`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(userInfo),
  });

  const res = await response.json();

  if (Object.keys(res.user).length > 0) {
    dispatch(authLogin(res.user));
    dispatch(setCars(res.cars));
    dispatch(setUsers(res.users));
    dispatch(setParkings(res.parkings));
    dispatch(setLogs(res.logs));
  } else {
    console.log("Login Faliure");
  }
};

export const authLogout = () => {
  return { type: AUTH_LOGOUT, payload: {} };
};
