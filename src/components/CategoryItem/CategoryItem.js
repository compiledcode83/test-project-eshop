import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Rating } from "@material-ui/lab";
import { useEffect } from "react";

export default function CategoryItem(props) {
  const [buttonState, setButtonState] = useState(props.isAdded);

  useEffect(() => {
    setButtonState(props.isAdded);
  }, [props]);

  function HandleAddToCart() {
    let items = JSON.parse(localStorage.getItem("cartItems"));
    items.push({ Name: props.Name, Price: props.Price, Seller: props.Seller });
    localStorage.setItem("cartItems", JSON.stringify(items));
    setButtonState(!buttonState);
    window.location.reload();
  }

  function HandleRemoveFromCart() {
    let items = JSON.parse(localStorage.getItem("cartItems")),
      index = 0;

    items.forEach((item, idx) => {
      if (item.Name === props.Name) index = idx;
    });

    items.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(items));
    setButtonState(!buttonState);
    window.location.reload();
  }

  return (
    <div className="row CategoryHeadingRow">
      <div className="col-3 p-0">
        <Link to={props.path}>
          <img src={props.img} alt="" width={200} height={200} />
        </Link>
      </div>
      <div className="col-9 d-flex align-items-center">
        <div className="row CategoryHeadingRow">
          <div className="d-flex flex-column justify-content-between">
            <Link to={props.path}>
              <span>
                {props.Name}: {props.Seller}
              </span>
            </Link>

            <Rating name="read-only" value={+props.Rating} readOnly />
          </div>
        </div>
        <br />
        <div className="row CategoryHeadingRow">
          <div className="d-flex flex-column justify-content-between">
            <span>{props.Price} EGP</span>

            {buttonState === false ? (
              <button className="btn btn-primary" onClick={HandleAddToCart}>
                Add to cart
              </button>
            ) : (
              <button className="btn btn-primary" onClick={HandleRemoveFromCart}>
                remove from cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
