import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import items from "../../mock/items.json";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginLeft: theme.spacing(6),
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

      <div className="form-check-inline">
        <input
          className="form-control mr-2"
          type="text"
          placeholder="Type category name"
        />
        <Button color="primary" variant="outlined">
          Search
        </Button>
      </div>

      {localStorage.getItem("isLoggedIn") === "true" ? (
        <>
          <span className="NavbarLink">
            Welcome {localStorage.getItem("userName")}
          </span>
          <div className={classes.root}>
            <ButtonGroup color="primary">
              <Button onClick={HandleLogout}>logout</Button>
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
            <Button>Cart</Button>
          </ButtonGroup>
        </Link>
      </div>

      <div className={classes.root}>
        <Link to="/help" className="nav-link">
          <ButtonGroup color="primary">
            <Button>help</Button>
          </ButtonGroup>
        </Link>
      </div>
    </header>
  );
}
