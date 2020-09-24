import React from "react";
import items from "../../mock/items.json";
// ----------- slider loaders
import imgs from "../../mock/itemsImgs";
import Slider from "../../components/ImgSlider/Slider";

// ----------- multiple cards in row loaders
import MultipleCards from "../../components/MultipleCards/MultipleCards";

export default function Home() {
  return (
    <div className="container">
      <Slider Imgs={[imgs.Food.Tuna, imgs.Food.Rice, imgs.Labtops["Inspiron 15-3593"], imgs.Labtops["15-da1885ne"]]} />
      <hr />
      <MultipleCards
        content={[items.Food[0], items.Food[1], items.Labtops[0], items.Labtops[1]]}
        Imgs={[imgs.Food.Tuna, imgs.Food.Rice, imgs.Labtops["Inspiron 15-3593"], imgs.Labtops["15-da1885ne"]]}
        Txt="Recommended for you"
      />
      <hr />
      <MultipleCards
        content={[items.Food[2], items.Labtops[0], items.Labtops[1]]}
        Imgs={[imgs.Food.YelloRice, imgs.Labtops["Inspiron 15-3593"], imgs.Labtops["15-da1885ne"]]}
        Txt="Most selling"
      />
    </div>
  );
}
