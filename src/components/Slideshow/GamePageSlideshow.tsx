import { useEffect, useState } from "react";
import GamePageSlideshowItemComponent from "./GamePageSlideshowItem";
import "./GamePageSlideshow.css";

interface GamePageSlideshowProps {
  horizontal: Array<string>;
  videos: Array<string>;
}

export default function GamePageSlideshowComponent(
  props: GamePageSlideshowProps
) {
  const [fetchedSlides, setFetchedSlides] = useState([""]);

  const [active, setActive] = useState("");
  const [slides, setSlides] = useState<Array<JSX.Element>>();

  useEffect(() => {
    setFetchedSlides(props.videos?.concat(props.horizontal));
  }, [props]);

  useEffect(() => {
    if (!active) setActive(fetchedSlides?.[0]);
    let sslides = fetchedSlides?.map((name) => {
      return (
        <GamePageSlideshowItemComponent
          isVideo={fetchedSlides[0] === name}
          key={name}
          gameName={name}
          active={active}
        />
      );
    });

    setSlides(sslides);
  }, [fetchedSlides, active]);

  function nextSlide() {
    const current = fetchedSlides.findIndex((name) => name === active);
    setActive(fetchedSlides[(current + 1) % 3]);
  }

  function previousSlide() {
    const current = fetchedSlides.findIndex((name) => name === active);
    setActive(
      current - 1 < 0
        ? fetchedSlides[fetchedSlides.length - 1]
        : fetchedSlides[current - 1]
    );
  }

  return (
    <div className="slideshow-wrapper">
      <div className="slideshow">{slides}</div>
      <div className="slideshow-controls">
        <div className="left-btn" onClick={previousSlide}>
          {"<"}
        </div>
        <div className="slideshow-controls__dots">
          {fetchedSlides?.map((name, index) => {
            return (
              <div
                className={name === active ? "active-dot" : "notactive-dot"}
                onClick={() => {
                  setActive(fetchedSlides?.[index]);
                }}></div>
            );
          })}
        </div>
        <div className="right-btn" onClick={nextSlide}>
          {">"}
        </div>
      </div>
    </div>
  );
}
