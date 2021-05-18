import { useState } from "react";
import SlideshowItemComponent from "./SlideshowItem";
import "./SpotlightSlideshow.css";

export default function SpotlightSlideshowComponent() {
  const [slidesNames, setSlidesNames] = useState([
    "Final Fantasy",
    "Dragon ball",
    "Naruto",
  ]);
  const [active, setActive] = useState(slidesNames[0]);

  function nextSlide() {
    const current = slidesNames.findIndex((name) => name === active);
    setActive(slidesNames[(current + 1) % 3]);
  }

  function previousSlide() {
    const current = slidesNames.findIndex((name) => name === active);
    setActive(
      current - 1 < 0
        ? slidesNames[slidesNames.length - 1]
        : slidesNames[current - 1]
    );
  }

  let slides = slidesNames.map((name) => {
    return (
      <SlideshowItemComponent key={name} gameName={name} active={active} />
    );
  });

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow">
        {slides}
        <div className="left-btn" onClick={previousSlide}>
          {"<"}
        </div>
        <div className="right-btn" onClick={nextSlide}>
          {">"}
        </div>
      </div>
    </div>
  );
}
