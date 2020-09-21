import React, { useState } from "react";
import ItemsTable from "../../components/ItemsTable/ItemsTable";
import { useHistory } from "react-router-dom";
import { Modal, Fade, Backdrop, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

export default function Cart() {
  const history = useHistory();
  const classes = useStyles();
  const [open, setOpen] = useState(false);

  function HandleClear() {
    localStorage.setItem("cartItems", JSON.stringify([]));
    history.push("/");
    window.location.reload();
  }

  function HandleNotAllowed() {
    if (localStorage.getItem("cartItems") === "[]") {
      alert("Add items to your cart first");
      history.push("/");
    } else {
      setOpen(true);
    }
  }

  function HandlePayment() {
    setOpen(false);
    alert("Payment operation is done successfully!");
    localStorage.setItem("cartItems", JSON.stringify([]));
    history.push("/");
    window.location.reload();
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
          onClick={HandleNotAllowed}>
          Pay
        </button>
        <Modal
          aria-labelledby="transition-modal-title"
          aria-describedby="transition-modal-description"
          className={classes.modal}
          open={open}
          onClose={() => {
            setOpen(false);
          }}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 500,
          }}>
          <Fade in={open}>
            <div className={classes.paper}>
              <h2 id="transition-modal-title">
                Are you sure you want to buy items in your cart?
              </h2>
              <button
                className="btn btn-outline-primary"
                onClick={HandlePayment}>
                Yes
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => {
                  setOpen(false);
                }}>
                Close
              </button>
            </div>
          </Fade>
        </Modal>

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
