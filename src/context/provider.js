import React, { createContext, useReducer } from 'react';
import authInitialState from './initialStates/authInitialState';
import auth from './reducers/auth';

const GlobalContext = createContext({});

const GlobalProvider = ({children}) => {

    const [authState, authDispatch] = useReducer(auth, authInitialState);

    return <GlobalContext.Provider value={{ authState, authDispatch }}>
        {children}
    </GlobalContext.Provider>
}

export default GlobalProvider;