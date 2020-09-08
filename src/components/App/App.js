import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import { UserContextProvider } from "../../Context/UserContext";
// components loading
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";

// pages loading
import Home from "../../pages/Home/Home";

export default function App() {
  console.log(localStorage.getItem("isLoggedIn"));
  return (
    <UserContextProvider>
      <BrowserRouter>
        <Navbar />
        <Switch>
          <Route exact path="/register" component={Register} />

          <Route exact path="/login">
            {localStorage.getItem("isLoggedIn") === "false" ? (
              <Login />
            ) : (
              <Redirect to="/" />
            )}
          </Route>

          <Route exact path="/">
            {localStorage.getItem("isLoggedIn") === "true" ? (
              <Home />
            ) : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/cart">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/help">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/categories/:catId">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/item/:itemId">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/account/:userId/overview">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>

          <Route exact path="/account/:userId/edit">
            {localStorage.getItem("isLoggedIn") === "true" ? null : (
              <Redirect to="/login" />
            )}
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </UserContextProvider>
  );
}
