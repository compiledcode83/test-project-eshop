import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/navbar";
import { UserContextProvider } from "../../Context/UserContext";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/Home" component={null} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
}
