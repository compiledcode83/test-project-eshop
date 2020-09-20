/*eslint no-extend-native: 0 */
/*eslint react-hooks/exhaustive-deps: 0 */
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

export default function Category() {
  const [SortByState, setSortByState] = useState(true);

  const [MinMax, setMinMax] = useState([10000, 0]);

  const [DisplayArray, setDisplayArray] = useState([]);

  const [categoryName, setCategoryName] = useState(
    window.location.pathname.split("/")[2]
  );
  const [params, setParams] = useState(
    new URLSearchParams(window.location.search)
  );

  function HandleSorting() {
    Array.prototype.sortBy = function (p = "Price") {
      return this.slice(0).sort(function (a, b) {
        return +a[p] - +b[p];
      });
    };

    let tmpArray = Database[categoryName];
    tmpArray = tmpArray.sortBy();
    console.log(tmpArray);
    setDisplayArray([...tmpArray]);
  }

  useEffect(() => {
    setParams(new URLSearchParams(window.location.search));

    setCategoryName(window.location.pathname.split("/")[2]);

    setDisplayArray(Database[categoryName]);

    if (params.get("sortBy") === "price") {
      HandleSorting();
      setSortByState(false);
    } else setSortByState(true);

    let val = [1000000, 0];
    DisplayArray.forEach((item) => {
      val[0] = Math.min(val[0], +item["Price"]);
      val[1] = Math.max(val[1], +item["Price"]);
    });
    if (val[0] === 10000 || val[1] === 0) val = [0, 0];
    setMinMax([...val]);
  }, [DisplayArray]);

  return (
    <div className="container pt-3 pb-3">
      <div className="row">
        <div className="col-3">
          <SidebarCategory initialRange={MinMax} />
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
                          HandleSorting();
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
                          setDisplayArray(Database[categoryName]);
                        }}>
                        sort by newest
                      </Link>
                    </li>
                  )}
                </div>
              </div>
            </div>
            <Divider />
            {DisplayArray.map((item, idx) => (
              <div key={idx}>
                {params.get("filterBy") === "null" ||
                (params.get("filterBy") === "Rating" &&
                  +params.get("value") === +item.Rating) ||
                (params.get("filterBy") === "price" &&
                  +item.Price >= +params.get("value").split(",")[0] &&
                  +item.Price <= +params.get("value").split(",")[1]) ? (
                  <CategoryItem
                    path={`/categories/${categoryName}/item/${idx}`}
                    img={imgs[categoryName][item.Name]}
                    Name={item.Name}
                    Price={item.Price}
                    Seller={item.Brand}
                    Rating={item.Rating}
                    isAdded={localStorage.getItem("cartItems").includes(
                      JSON.stringify({
                        Name: item.Name,
                        Price: item.Price,
                        Seller: item.Brand,
                      })
                    )}
                  />
                ) : null}
                <Divider />
              </div>
            ))}
          </Paper>
        </div>
      </div>
    </div>
  );
}
