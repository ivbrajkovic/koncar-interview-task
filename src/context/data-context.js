// Data context
import React, { createContext, useReducer, useContext } from "react";

// Data
import data from "../data/list.json";

const DataStateContext = createContext();
const DataDispatchContext = createContext();

// Dummy data id
let lastId = 777;

// Reducer
const dataReducer = (state, action) => {
  switch (action.type) {
    case "ADD_CHAKER": {
      return [...state, { ...action.payload, id: ++lastId }];
    }
    default: {
      throw new Error(`Unhandled action type: ${action.type}`);
    }
  }
};

// Context provider
const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, data);

  return (
    <DataStateContext.Provider value={state}>
      <DataDispatchContext.Provider value={dispatch}>
        {children}
      </DataDispatchContext.Provider>
    </DataStateContext.Provider>
  );
};

// Data state
const useDataState = () => {
  const context = useContext(DataStateContext);
  if (context === undefined) {
    throw new Error("useDataState must be used within a DataProvider");
  }
  return context;
};

// Data dispatch
const useDataDispatch = () => {
  const context = useContext(DataDispatchContext);
  if (context === undefined) {
    throw new Error("useDataDispatch must be used within a DataProvider");
  }
  return context;
};

export { DataProvider, useDataState, useDataDispatch };
