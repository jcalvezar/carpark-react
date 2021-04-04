import { AUTH_LOGIN, AUTH_LOGOUT } from "./actionTypes";

const initialState = {
  loggedIn: false,
  user: {},
  appName: "CarPark",
};

export default function authReducer(state = initialState, action) {
  switch (action.type) {
    case AUTH_LOGIN: {
      return {
        ...state,
        loggedIn: true,
        user: { ...action.payload },
      };
    }
    case AUTH_LOGOUT: {
      return {
        ...state,
        loggedIn: false,
        user: {},
      };
    }
    default:
      return state;
  }
}
