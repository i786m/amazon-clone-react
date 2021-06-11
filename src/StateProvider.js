import React, { createContext, useContext, useReducer } from 'react';

// prepare the data layer
export const StateContext = createContext();

//Wrap our app and provides the data layer to every component
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

//pull info from the data layer
export const useStateValue = () => useContext(StateContext);
