import React from "react";
import "./Slider.css";

export default function Slider(props) {
  return (
    <div className="slider">
      <div
        id="carousel"
        className="carousel slide carousel-fade"
        data-ride="carousel">
        <div className="carousel-inner">
          {props.Imgs.map((img, idx) =>
            idx === 0 ? (
              <div
                className="carousel-item active"
                data-interval="5000"
                key={idx}>
                <img src={img} className="d-block" alt="" />
              </div>
            ) : (
              <div className="carousel-item " data-interval="5000" key={idx}>
                <img src={img} className="d-block" alt="" />
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
}
