/*eslint react-hooks/exhaustive-deps: 0 */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";

import Database from "../../mock/items.json";
import imgs from "../../mock/itemsImgs";

import { Paper, Box, Divider, makeStyles } from "@material-ui/core";
import { Rating } from "@material-ui/lab";

const useStyles = makeStyles((theme) => ({
  reviewsPaper: {
    borderRadius: "7rem",
  },
}));

export default function Item() {
  const [catName, itemId] = [
    window.location.pathname.split("/")[2],
    window.location.pathname.split("/")[4],
  ];
  const [ItemData, setItemData] = useState({ Reviews: [] });
  const [isAdded, setIsAdded] = useState(false);
  const history = useHistory();
  const classes = useStyles();

  useEffect(() => {
    let notExist = true;

    Database[catName].forEach((item) => {
      if (item["ItemId"] === itemId) {
        notExist = false;
      }
    });

    if (Database.categories.includes(catName) === false || notExist) {
      history.push("/notfound");
    } else {
      let flag = false;
      let elementData = {};
      Database[catName].forEach((item) => {
        if (item["ItemId"] === itemId) {
          elementData = item;
        }
      });

      JSON.parse(localStorage.getItem("cartItems")).forEach((element) => {
        if (element["Name"] === elementData["Name"]) {
          flag = true;
        }
      });
      setItemData(elementData);
      setIsAdded(flag);
    }
  }, []);

  function HandleAddToCart() {
    let items = JSON.parse(localStorage.getItem("cartItems"));
    items.push({
      Name: ItemData.Name,
      Price: ItemData.Price,
      Seller: ItemData.Brand,
    });
    localStorage.setItem("cartItems", JSON.stringify(items));
    setIsAdded(!isAdded);
    window.location.reload();
  }

  function HandleRemoveFromCart() {
    let items = JSON.parse(localStorage.getItem("cartItems")),
      index = 0;

    items.forEach((item, idx) => {
      if (item.Name === ItemData.Name) index = idx;
    });

    items.splice(index, 1);
    localStorage.setItem("cartItems", JSON.stringify(items));
    setIsAdded(!isAdded);
    window.location.reload();
  }

  return (
    <div className="container pt-5 pb-5">
      <Paper elevation={7}>
        <div className="row m-0  p-3">
          <div className="col-5">
            <img
              src={imgs[catName][ItemData["Name"]]}
              alt=""
              width={400}
              height={400}
            />
          </div>
          <div className="col-5 d-flex flex-column align-self-center">
            <div className="row CategoryHeadingRow flex-fill">
              <div className="d-flex align-items-center flex-column">
                <span>
                  <strong>Name:</strong> {ItemData.Name}
                </span>
                <span>
                  <strong>Brand:</strong> {ItemData.Brand}
                </span>
              </div>
            </div>
            <div className="row CategoryHeadingRow flex-fill">
              <div className="d-flex align-items-center flex-column">
                <strong>
                  <span>{ItemData.Price} EGP</span>
                </strong>
                <Box component="fieldset">
                  <Rating value={+ItemData.Rating} readOnly />
                </Box>
              </div>
            </div>
          </div>
          <div className="col-2 d-flex align-items-center p-0">
            <div className="row CategoryHeadingRow">
              <div className="d-flex align-items-center flex-column">
                {isAdded ? (
                  <button
                    className="btn btn-primary w-100"
                    onClick={HandleRemoveFromCart}>
                    Remove from cart
                  </button>
                ) : (
                  <button
                    className="btn btn-primary w-100"
                    onClick={HandleAddToCart}>
                    Add to cart
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        <br />
        <Divider />
        <br />

        <div className="row m-0  p-3 d-flex flex-column">
          <div className="d-flex align-self-center">
            <h3>Reviews</h3>
          </div>
          <Paper elevation={15} className={classes.reviewsPaper}>
            {ItemData.Reviews.map((obj, idx) => (
              <div key={idx}>
                <div className="d-flex p-5">
                  <div className="col-2">
                    <strong>
                      <span>{obj.Reviewer}</span>
                    </strong>
                  </div>
                  <div className="col-10">
                    <h6>{obj.Review}</h6>
                  </div>
                </div>
                {idx === ItemData.Reviews.length - 1 ? null : <Divider />}
              </div>
            ))}
          </Paper>
        </div>
      </Paper>
    </div>
  );
}
