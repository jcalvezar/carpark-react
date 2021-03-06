import React, { createContext, useReducer } from 'react';

const initialState = {
  users: [
    { id: 1, firstname: 'Juan Carlos', lastname: 'Alvez', email: 'jcalvez@hotmail.com', role: 'admin' },
    { id: 2, firstname: 'Gabriel', lastname: 'Pardo', email: 'gpardo@hotmail.com', role: 'admin' },
    { id: 3, firstname: 'Erika', lastname: 'Mendez', email: 'emendez@hotmail.com', role: 'operador' },
    { id: 4, firstname: 'Patricia', lastname: 'Malgor', email: 'pmalgor@hotmail.com', role: 'visor' },
    { id: 5, firstname: 'Javier', lastname: 'Fernandez', email: 'jfernandez@hotmail.com', role: 'operador' },
  ],
  usersFields: [
    { name: 'id', label: 'ID', width: '8%', align: 'left', disablePadding: true },
    { name: 'lastname', label: 'Apellido', width: '21%', align: 'left', disablePadding: true },
    { name: 'firstname', label: 'Nombre', width: '25%', align: 'left', disablePadding: true },
    { name: 'email', label: 'Email', width: '26%', align: 'left', disablePadding: true },
    { name: 'acc', label: 'Acc.', width: '10%', align: 'right', disablePadding: true }
  ],
  parkings: [
    { id: 1, name: 'AUDEC', from: 200, to: 300 },
    { id: 2, name: 'DAZUR', from: 100, to: 199 },
    { id: 3, name: 'Ruta 12', from: 301, to: 400 },
  ],
  parkingsFields: [
    { name: 'id', label: 'ID', width: '10%', align: 'left', disablePadding: true },
    { name: 'name', label: 'Nombre', width: '50%', align: 'left', disablePadding: true },
    { name: 'from', label: 'Desde', width: '15%', align: 'right', disablePadding: true },
    { name: 'to', label: 'Hasta', width: '15%', align: 'right', disablePadding: true },
    { name: 'acc', label: 'Acc.', width: '10%', align: 'right', disablePadding: true }
  ],
  cars: [
    { id: 1, datein: '2017-05-24 10:30:45', vin: '6935364050559', place: 101 },
    { id: 2, datein: '2018-01-07 10:47:46', vin: '6935364050560', place: 151 },
    { id: 3, datein: '2018-01-08 10:47:46', vin: '6935364050561', place: 201 },
    { id: 4, datein: '2018-01-09 10:47:46', vin: '6935364050562', place: 251 },
    { id: 5, datein: '2018-01-10 10:47:46', vin: '6935364050563', place: 301 },
  ],
  carsFields: [
    { name: 'id', label: 'ID', width: '5%', align: 'left', disablePadding: true },
    { name: 'datein', label: 'Ingreso', width: '50%', align: 'left', disablePadding: true },
    { name: 'vin', label: 'VIN', width: '30%', align: 'right', disablePadding: true },
    { name: 'place', label: 'Puesto', width: '5%', align: 'right', disablePadding: true },
    { name: 'acc', label: 'Acc.', width: '10%', align: 'right', disablePadding: true }
  ],
  logs: [
    { id: 1, time: '10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
    { id: 2, time: '10:47:49', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log Out' },
    { id: 3, time: '10:47:55', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Cars' },
    { id: 4, time: '10:47:56', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
    { id: 5, time: '10:47:59', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
  ],
  logsFields: [
    { name: 'id', label: 'ID', width: '8%', align: 'left', disablePadding: true },
    { name: 'time', label: 'Hora', width: '22%', align: 'left', disablePadding: true },
    { name: 'origen', label: 'Origen', width: '12%', align: 'left', disablePadding: true },
    { name: 'lastname', label: 'Apellido', width: '19%', align: 'left', disablePadding: true },
    { name: 'firstname', label: 'Nombre', width: '19%', align: 'left', disablePadding: true },
    { name: 'action', label: 'Evento', width: '10%', align: 'right', disablePadding: true }
  ]
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'ADD_USER':
        return { ...state, users: [...state.users, { ...action.payload, id: state.users.length + 1 }] };

      //newState.users.push({ ...action.payload, id: state.users.length + 1 });
      //return newState;
      default:
        throw new Error();
    };
  }, initialState);

  const addUser = (data) => {
    console.log('addUser en STORE');
    dispatch({ type: 'ADD_USER', payload: data })
    console.log('payload: ', data);
  }

  return <Provider value={{ state, dispatch, addUser: (data) => addUser(data) }}>{children}</Provider>;
};

export { store, StateProvider }