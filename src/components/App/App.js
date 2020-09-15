import React from "react";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";

// components loading
import Navbar from "../Navbar/Navbar";
import Login from "../Login/Login";
import Register from "../Register/Register";
import Footer from "../Footer/Footer";

// pages loading
import Home from "../../pages/Home/Home";
import Help from "../../pages/Help/Help";
import About from "../../pages/About/About";
import Cart from "../../pages/Cart/Cart";
import AccountOverview from "../../pages/Account/AccountOverview";
import AccountEdit from "../../pages/Account/AccountEdit";
import Category from "../../pages/Category/Category";

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/register" component={Register} />

        <Route exact path="/login">
          {localStorage.getItem("isLoggedIn") === "false" ? <Login /> : <Redirect to="/" />}
        </Route>

        <Route exact path="/">
          {localStorage.getItem("isLoggedIn") === "true" ? <Home /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/help">
          {localStorage.getItem("isLoggedIn") === "true" ? <Help /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/about">
          {localStorage.getItem("isLoggedIn") === "true" ? <About /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/cart">
          {localStorage.getItem("isLoggedIn") === "true" ? <Cart /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/categories/:catId">
          {localStorage.getItem("isLoggedIn") === "true" ? <Category /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/categories/:catId/item/:itemId">
          {localStorage.getItem("isLoggedIn") === "true" ? null : <Redirect to="/login" />}
        </Route>

        <Route exact path="/account/overview">
          {localStorage.getItem("isLoggedIn") === "true" ? <AccountOverview /> : <Redirect to="/login" />}
        </Route>

        <Route exact path="/account/edit">
          {localStorage.getItem("isLoggedIn") === "true" ? <AccountEdit /> : <Redirect to="/login" />}
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
