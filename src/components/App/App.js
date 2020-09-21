import React, { useEffect } from "react";
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
import Item from "../../pages/Item/Item";
import NotFound from "../../pages/NotFound/NotFound";

export default function App() {
  useEffect(() => {
    [
      "isLoggedIn",
      "userName",
      "Password",
      "Phone",
      "Address",
      "Email",
      "numberOfOrders",
      "cartItems",
    ].forEach((key) => {
      if (!localStorage.getItem(key)) {
        if (key === "isLoggedIn") localStorage.setItem(key, false);
        else if (key === "numberOfOrders") localStorage.setItem(key, 0);
        else if (key === "cartItems")
          localStorage.setItem(key, JSON.stringify([]));
        else localStorage.setItem(key, "");
      }
    });
  });

  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route
          path="/register"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Redirect to="/" />
            ) : (
              <Register />
            )
          }
        />
        <Route
          path="/login"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Redirect to="/" />
            ) : (
              <Login />
            )
          }
        />

        <Route
          exact
          path="/"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Home />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          path="/help"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Help />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          path="/about"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <About />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          path="/cart"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Cart />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          exact
          path="/categories/:catName"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Category />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          exact
          path="/categories/:catName/item/:itemId"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <Item />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          exact
          path="/account/overview"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <AccountOverview />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route
          exact
          path="/account/edit"
          render={() =>
            localStorage.getItem("isLoggedIn") === "true" ? (
              <AccountEdit />
            ) : (
              <Redirect to="/register" />
            )
          }
        />

        <Route component={NotFound} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
}
