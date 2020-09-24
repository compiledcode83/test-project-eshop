import React, { useState, useEffect } from "react";
import "./SidebarCategory.css";
import { Divider, Paper, Button, TextField } from "@material-ui/core";
import { Star } from "@material-ui/icons";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: "10px",
  },
  divider: {
    margin: "15px 0",
  },
  input: {
    margin: "0 15px",
    maxWidth: "50%",
  },
  filterButtons: {
    backgroundColor: "#44216b",
    color: "white",
    "&:hover": {
      backgroundColor: "#44216b",
      color: "white",
    },
  },
}));

export default function SidebarCategory(props) {
  const classes = useStyles();
  const [priceRange, setPriceRange] = useState([0, 0]);
  const params = new URLSearchParams(window.location.search);

  useEffect(() => {
    setPriceRange(props.initialRange);
  }, [props.initialRange]);

  return (
    <>
      <Paper elevation={5} className={classes.root}>
        <div className="d-flex justify-content-between">
          <h3>Filter by</h3>
          <a href={`?sortBy=${params.get("sortBy")}&filterBy=null&value=null`}>
            <Button variant="contained" className={classes.filterButtons}>
              Clear
            </Button>
          </a>
        </div>

        <Divider className={classes.divider} />

        <div>
          <h4 className="SidebarHeading">Rating</h4>
          <ul className="SidebarList">
            <li className="SidebarListItem">
              <a href={`?sortBy=${params.get("sortBy")}&filterBy=Rating&value=${5}`}>
                <Star />
                <Star />
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a href={`?sortBy=${params.get("sortBy")}&filterBy=Rating&value=${4}`}>
                <Star />
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a href={`?sortBy=${params.get("sortBy")}&filterBy=Rating&value=${3}`}>
                <Star />
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a href={`?sortBy=${params.get("sortBy")}&filterBy=Rating&value=${2}`}>
                <Star />
                <Star />
              </a>
            </li>
            <li className="SidebarListItem">
              <a href={`?sortBy=${params.get("sortBy")}&filterBy=Rating&value=${1}`}>
                <Star />
              </a>
            </li>
          </ul>
        </div>

        <Divider className={classes.divider} />

        <div>
          <div className="d-flex justify-content-between">
            <h4 className="SidebarHeading">Price</h4>
            <a href={`?sortBy=${params.get("sortBy")}&filterBy=price&value=${priceRange[0]},${priceRange[1]}`}>
              <Button variant="contained" className={classes.filterButtons}>
                Filter
              </Button>
            </a>
          </div>

          <div>
            <div className="d-flex justify-content-center mt-2">
              <TextField
                type="number"
                label="min price"
                className={classes.input}
                value={priceRange[0]}
                onChange={(e) => {
                  setPriceRange([e.target.value, priceRange[1]]);
                }}
              />

              <TextField
                type="number"
                label="max price"
                className={classes.input}
                value={priceRange[1]}
                onChange={(e) => {
                  setPriceRange([priceRange[0], e.target.value]);
                }}
              />
            </div>
          </div>
        </div>
      </Paper>

      <br />

      <Paper elevation={5} className={classes.root}>
        <h3>Current Offers</h3>
        {props.offers.map((offer, idx) => (
          <div className="offerTxt" key={idx}>
            <span>{offer.offerTxt}</span>
            <br />
            <span className="offerTime">Time remaining: {offer.offerEndAt}</span>
            <Divider className={classes.divider} />
          </div>
        ))}
      </Paper>
    </>
  );
}
