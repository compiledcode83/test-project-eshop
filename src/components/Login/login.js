import React from "react";
import { Paper, TextField, makeStyles, Button } from "@material-ui/core";
import { useState } from "react";
import { useContext } from "react";
import { UserContext } from "../../Context/UserContext";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";

// styling material-ui elements
const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    margin: "120px 50px 50px 50px",
    padding: "20px",
  },
  inputField: {
    width: "60%",
    marginBottom: "60px",
  },
}));

export default function Login() {
  const classes = useStyles();
  const history = useHistory();
  const [data, setData] = useState({ email: "", password: "" });
  const [userState, dispatch] = useContext(UserContext);

  useEffect(() => {
    if (userState.isLoggedIn) {
      history.push("/");
    }
  });

  function HandleChange(e) {
    data[e.target.getAttribute("id")] = e.target.value;
    setData({ ...data });
  }

  function HandleSubmit(e) {
    e.preventDefault();
    dispatch({
      type: "Login",
      payload: true,
    });
    history.push("/");
  }

  return (
    <form onSubmit={HandleSubmit}>
      <Paper elevation={3} className={classes.root}>
        <TextField
          className={classes.inputField}
          label="Email"
          required
          type="email"
          id="email"
          variant="filled"
          onChange={HandleChange}
        />
        <TextField
          className={classes.inputField}
          label="Password"
          required
          type="password"
          id="password"
          variant="filled"
          onChange={HandleChange}
        />
        <Button
          type="submit"
          className={classes.inputField}
          variant="contained"
          color="primary">
          Login
        </Button>
      </Paper>
    </form>
  );
}
