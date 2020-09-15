import React from "react";
import ItemsTable from "../../components/ItemsTable/ItemsTable";

export default function Cart() {
  function HandleClear(e) {
    localStorage.setItem("cartItems", JSON.stringify([]));
  }

  function HandlePayment(e) {
    // ...
  }

  return (
    <div className="container">
      <span className="navbar-brand">Cart ({JSON.parse(localStorage.getItem("cartItems")).length}) items</span>
      <br />
      <ItemsTable
        headers={["Name", "Price", "Seller"]}
        rows={JSON.parse(localStorage.getItem("cartItems"))}
        Tax={0.14}
      />
      <br />
      <div className="row d-flex justify-content-around">
        <button type="button" className="btn btn-success col-3" onClick={HandlePayment}>
          Pay
        </button>

        <button type="button" className="btn btn-danger col-3" onClick={HandleClear}>
          Clear Cart
        </button>
      </div>
      <br />
      <div class="row">
        <p>
          Note: If you want to remove any item from your cart, you can go to the item's page and click remove from cart
        </p>
      </div>
    </div>
  );
}
