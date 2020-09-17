import React from "react";
//
import "./Category.css";
import SidebarCategory from "../../components/Sidebar/SidebarCategory";
import CategoryItem from "../../components/CategoryItem/CategoryItem";
import Database from "../../mock/items.json";
import imgs from "../../mock/itemsImgs";
//
import { useEffect, useState } from "react";
import { Paper, Divider } from "@material-ui/core";
import { Link } from "react-router-dom";

export default function Category(props) {
  const [categoryName, setCategoryName] = useState(
    window.location.pathname.split("/")[2]
  );
  const [params, setParams] = useState(
    new URLSearchParams(window.location.search)
  );
  const [SortByState, setSortByState] = useState(true);

  useEffect(() => {
    if (params.get("sortBy") === "price") setSortByState(false);
    else setSortByState(true);
    setParams(new URLSearchParams(window.location.search));
    setCategoryName(window.location.pathname.split("/")[2]);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="container pt-3 pb-3">
      <div className="row">
        <div className="col-3">
          <SidebarCategory initialRange={[1, 2000]} />
        </div>
        <div className="col-9">
          <Paper elevation={5}>
            <div className="row CategoryHeadingRow">
              <div className="d-flex justify-content-between CategoryCheckDiv">
                <span>Order {window.location.pathname.split("/")[2]}</span>
                <div className="form-check-inline">
                  {SortByState ? (
                    <li className="SidebarListItem">
                      <Link
                        to={`?sortBy=price&filterBy=${params.get(
                          "filterBy"
                        )}&value=${params.get("value")}`}
                        onClick={() => {
                          setSortByState(!SortByState);
                        }}>
                        sort by price
                      </Link>
                    </li>
                  ) : (
                    <li className="SidebarListItem">
                      <Link
                        to={`?sortBy=newest&filterBy=${params.get(
                          "filterBy"
                        )}&value=${params.get("value")}`}
                        onClick={() => {
                          setSortByState(!SortByState);
                        }}>
                        sort by newest
                      </Link>
                    </li>
                  )}
                </div>
              </div>
            </div>
            <Divider />
            {Database[categoryName].map((item, idx) => (
              <div key={idx}>
                <CategoryItem
                  path={`/categories/${categoryName}/item/${idx}`}
                  img={imgs[categoryName][idx]}
                  Name={item.Name}
                  Price={item.Price}
                  Seller={item.Brand}
                  Rating={item.Rating}
                />
                <Divider />
              </div>
            ))}
          </Paper>
        </div>
      </div>
    </div>
  );
}
