import React, { createContext, useReducer } from 'react';

const initialState = {
    users: [
        { id: 1, firstname: 'Juan Carlos', lastname: 'Alvez', email: 'jcalvez@hotmail.com', role: 'admin' },
        { id: 2, firstname: 'Gabriel', lastname: 'Pardo', email: 'gpardo@hotmail.com', role: 'admin' },
        { id: 3, firstname: 'Erika', lastname: 'Mendez', email: 'emendez@hotmail.com', role: 'operador' },
        { id: 4, firstname: 'Patricia', lastname: 'Malgor', email: 'pmalgor@hotmail.com', role: 'visor' },
        { id: 5, firstname: 'Javier', lastname: 'Fernandez', email: 'jfernandez@hotmail.com', role: 'operador' },
    ],
    parkings: [
        { id: 1, name: 'AUDEC', from: 200, to: 300 },
        { id: 2, name: 'DAZUR', from: 100, to: 199 },
        { id: 3, name: 'Ruta 12', from: 301, to: 400 },
    ],
    cars: [
        { id: 1, datein: '2018-01-06 10:47:46', vin: '6935364050559', place: 101 },
        { id: 2, datein: '2018-01-07 10:47:46', vin: '6935364050560', place: 151 },
        { id: 3, datein: '2018-01-08 10:47:46', vin: '6935364050561', place: 201 },
        { id: 4, datein: '2018-01-09 10:47:46', vin: '6935364050562', place: 251 },
        { id: 5, datein: '2018-01-10 10:47:46', vin: '6935364050563', place: 301 },
    ],
    logs: [
        { id: 1, time: '2018-01-06 10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
        { id: 2, time: '2018-01-06 10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
        { id: 3, time: '2018-01-06 10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
        { id: 4, time: '2018-01-06 10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
        { id: 5, time: '2018-01-06 10:47:46', origen: 'PC', lastname: 'jj', firstname: 'aa', action: 'Log In' },
    ]
};
const store = createContext(initialState);
const { Provider } = store;

const StateProvider = ({ children }) => {
    const [state, dispatch] = useReducer((state, action) => {
        switch (action.type) {
            case 'action description':
                const newState = state; // do something with the action
                return newState;
            default:
                throw new Error();
        };
    }, initialState);

    return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider }