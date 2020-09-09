import React from "react";
import "./Home.css";
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
      <MultipleCards contents={[main1, main2, main3, main4]} />
      <hr />
      <MultipleCards contents={[main1, main2, main3, main4]} />
      <hr />
      <MultipleCards contents={[main1, main2, main3, main4]} />
      <hr />
      <MultipleCards contents={[main1, main2, main3, main4]} />
    </div>
  );
}
