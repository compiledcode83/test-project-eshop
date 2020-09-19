import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { ButtonGroup, Button, Badge } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import items from "../../mock/items.json";
import { ShoppingCart, ExitToApp, Help, Info } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginLeft: theme.spacing(3),
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();

  function HandleLogout(e) {
    localStorage.setItem("isLoggedIn", false);
    window.location.reload();
  }

  return (
    <header className="container-fluid NavbarCustomized">
      <Sidebar categories={items.categories} />

      <Link to="/" id="logo">
        <img alt="" src={logo} className="navbar-brand" />
      </Link>

      {localStorage.getItem("isLoggedIn") === "true" ? (
        <>
          <span className="GreetingTxt">
            Hello, {localStorage.getItem("userName")}
          </span>
          <div className={classes.root}>
            <ButtonGroup color="primary">
              <Button onClick={HandleLogout}>
                logout
                <ExitToApp />
              </Button>
            </ButtonGroup>
          </div>
        </>
      ) : (
        <>
          <div className={classes.root}>
            <Link to="/login" className="nav-link">
              <ButtonGroup color="primary">
                <Button>login</Button>
              </ButtonGroup>
            </Link>
          </div>
          <div className={classes.root}>
            <Link to="/register" className="nav-link">
              <ButtonGroup color="primary">
                <Button>register</Button>
              </ButtonGroup>
            </Link>
          </div>
        </>
      )}

      <div className={classes.root}>
        <Link to="/cart" className="nav-link">
          <ButtonGroup color="primary">
            <Button>
              Cart
              <Badge
                badgeContent={
                  JSON.parse(localStorage.getItem("cartItems")).length
                }
                color="primary">
                <ShoppingCart />
              </Badge>
            </Button>
          </ButtonGroup>
        </Link>
      </div>

      <div className={classes.root}>
        <div className="btn-group">
          <button
            type="button"
            className="btn btn-outline-primary dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false">
            Account Management
          </button>
          <div className="dropdown-menu">
            <Link className="dropdown-item" to="/account/overview">
              Overview
            </Link>
            <Link className="dropdown-item" to="/account/edit">
              Edit Info
            </Link>
          </div>
        </div>
      </div>

      <div className={classes.root}>
        <Link to="/help" className="nav-link">
          <ButtonGroup color="primary">
            <Button>
              help
              <Help />
            </Button>
          </ButtonGroup>
        </Link>
      </div>

      <div className={classes.root}>
        <Link to="/about" className="nav-link">
          <ButtonGroup color="primary">
            <Button>
              About
              <Info />
            </Button>
          </ButtonGroup>
        </Link>
      </div>
    </header>
  );
}
