import React, { createContext, useReducer } from "react";
import initialState from "./data";

const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "ADD_USER":
        return {
          ...state,
          users: [
            ...state.users,
            { ...action.payload, id: state.users.length + 1 },
          ],
        };

      //newState.users.push({ ...action.payload, id: state.users.length + 1 });
      //return newState;
      default:
        throw new Error();
    }
  }, initialState);

  const addUser = (data) => {
    console.log("addUser en STORE");
    dispatch({ type: "ADD_USER", payload: data });
    console.log("payload: ", data);
  };

  return (
    <Provider value={{ state, dispatch, addUser: (data) => addUser(data) }}>
      {children}
    </Provider>
  );
};

export { store, StateProvider };
