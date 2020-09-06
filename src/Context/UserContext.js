import React, { useReducer, createContext } from "react";

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

    case "Login":
      return {
        ...state,
        isLoggedIn: action.payload,
      };

    default:
      break;
  }
};

export const UserContextProvider = (props) => {
  const [userState, dispatch] = useReducer(UserReducer, initialState);

  return (
    <UserContext.Provider value={[userState, dispatch]}>
      {props.children}
    </UserContext.Provider>
  );
};
