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
      <Slider
        Imgs={[imgs.Food[0], imgs.Food[1], imgs.Labtops[0], imgs.Labtops[1]]}
      />
      <hr />
      <MultipleCards
        content={[
          items.Food[0],
          items.Food[1],
          items.Labtops[0],
          items.Labtops[1],
        ]}
        Imgs={[imgs.Food[0], imgs.Food[1], imgs.Labtops[0], imgs.Labtops[1]]}
        Txt="Recommended for you"
      />
    </div>
  );
}
