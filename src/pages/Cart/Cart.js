import React from "react";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import { useHistory } from "react-router-dom";

export default function Cart() {
  const history = useHistory();

  function HandleClear() {
    localStorage.setItem("cartItems", JSON.stringify([]));
    history.push("/");
    window.location.reload();
  }

  function HandlePayment() {
    // add the modal...
    localStorage.setItem("cartItems", JSON.stringify([]));
    history.push("/");
  }

  return (
    <div className="container">
      <span className="navbar-brand">
        Cart ({JSON.parse(localStorage.getItem("cartItems")).length}) items
      </span>
      <br />
      <ItemsTable
        headers={["Name", "Price", "Seller"]}
        rows={JSON.parse(localStorage.getItem("cartItems"))}
        Tax={0.14}
      />
      <br />
      <div className="row d-flex justify-content-around">
        <button
          type="button"
          className="btn btn-success col-3"
          onClick={HandlePayment}>
          Pay
        </button>

        <button
          type="button"
          className="btn btn-danger col-3"
          onClick={HandleClear}>
          Clear Cart
        </button>
      </div>
      <br />
      <div className="row">
        <p>
          Note: If you want to remove any item from your cart, you can go to the
          item's page and click remove from cart
        </p>
      </div>
    </div>
  );
}
/* modal configured
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { Button } from "@material-ui/core";
const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();

  return (
    <div>
      <Modal className={classes.modal} open={1}>
        <div className={classes.paper}>
          <h2>Transition modal</h2>
          <Button variant="contained" color="primary">
            Ok
          </Button>
        </div>
      </Modal>
    </div>
  );
}

*/
