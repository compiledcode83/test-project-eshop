import React, { useContext, useReducer, createContext } from "react";

const initialState = {
  isLoggedIn: false,
  numberOfOrders: 0,
  userInfo: {
    userName: "",
    Email: "",
    Password: "",
    Phone: "",
    Address: "",
  },
};

export const UserContext = createContext();

const UserReducer = (state, action) => {
  switch (action.type) {
    case "EditUserInfo":
      return {
        ...state,
        userData: action.payload,
      };

    case "Register":
      return {
        ...state,
        userData: action.payload,
      };

    default:
      break;
  }
};

export const UserContextProvider = (props) => {
  const [appState, dispatch] = useReducer(UserReducer, initialState);

  return (
    <useContext.Provider value={[appState, dispatch]}>
      {props.children}
    </useContext.Provider>
  );
};
