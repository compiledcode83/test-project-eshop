import React from "react";
import items from "../../mock/items.json";
// ----------- slider loaders
import main1 from "../../assets/images/Items/Food/tuna/main.jpg";
import main2 from "../../assets/images/Items/Food/rice/main.jpg";
import main3 from "../../assets/images/Items/Labtops/DELL/main.jpg";
import main4 from "../../assets/images/Items/Labtops/HP/main.jpg";
import Slider from "../../components/ImgSlider/Slider";

// ----------- multiple cards in row loaders
import MultipleCards from "../../components/MultipleCards/MultipleCards";

export default function Home() {
  return (
    <div className="container">
      <Slider Imgs={[main1, main2, main3, main4]} />
      <hr />
      <MultipleCards
        content={[
          items.Food[0],
          items.Food[1],
          items.Labtops[0],
          items.Labtops[1],
        ]}
        Imgs={[main1, main2, main3, main4]}
        Txt="Recommended for you"
      />
    </div>
  );
}
