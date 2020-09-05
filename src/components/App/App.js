import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Navbar from "../Navbar/Navbar";
import { UserContextProvider } from "../../Context/UserContext";
import Home from "../../pages/Home/Home";
import Login from "../../pages/Login/Login";
import Register from "../../pages/Register/Register";

export default function App() {
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/cart" component={null} />
          <Route exact path="/help" component={null} />

          <Route exact path="/categories/:catId" component={null} />
          <Route exact path="/item/:itemId" component={null} />
          <Route exact path="/account/:userId/overview" component={null} />
          <Route exact path="/account/:userId/edit" component={null} />
        </Switch>
      </BrowserRouter>
    </UserContextProvider>
  );
}
