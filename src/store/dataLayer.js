import React, { useContext, createContext, useReducer } from "react";

const StateContext = createContext();

//  data layer
const DataLayer = ({ initialState, reducer, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useDataLayer = () => useContext(StateContext);

export default DataLayer;
