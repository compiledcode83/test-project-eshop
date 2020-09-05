import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import "./Navbar.css";
import Sidebar from "./Sidebar";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { ButtonGroup, Button } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    "& > *": {
      marginLeft: theme.spacing(10),
    },
  },
}));

export default function Navbar() {
  const [userState] = useContext(UserContext);
  const classes = useStyles();

  return (
    <header className="container-fluid fixed-top NavbarCustomized">
      <Sidebar
        categories={["Food", "Men Wear", "Accessories", "Electronics"]}
      />

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

      {userState.isLoggedIn === true ? (
        <span className="NavbarLink">
          Welcome {userState.userInfo.userName}
        </span>
      ) : (
        <div className={classes.root}>
          <ButtonGroup
            color="primary"
            aria-label="outlined primary button group">
            <Button>
              <Link to="/login" className="nav-link">
                login
              </Link>
            </Button>
            <Button>
              <Link to="/register" className="nav-link">
                register
              </Link>
            </Button>
          </ButtonGroup>
        </div>
      )}

      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <Link to="/cart" className="nav-link">
              Cart
            </Link>
          </Button>
        </ButtonGroup>
      </div>

      <div className={classes.root}>
        <ButtonGroup color="primary" aria-label="outlined primary button group">
          <Button>
            <Link to="/help" className="nav-link">
              help
            </Link>
          </Button>
        </ButtonGroup>
      </div>
    </header>
  );
}
