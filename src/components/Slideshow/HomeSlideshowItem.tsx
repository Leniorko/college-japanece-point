import { useEffect, useState } from "react";
import { GameInterface } from "../../pages/Search";
import "./HomeSlideshowItem.css";

interface HomeSlideshowProps {
  activeGameName: string;
}

export default function HomeSlideshowItemComponent(props: HomeSlideshowProps) {
  const [gameToDisplay, setImg] = useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"gameName": "${props.activeGameName}"}`,
    })
      .then((response) => response.json())
      .then((data) => {
        setImg(data);
      });
  }, [props]);

  return (
    <div className="home-slideshow-item">
      <img
        src={gameToDisplay?.[0]?.images?.horizontal[0]}
        alt=""
        className="home-slideshow-item__image"
      />
    </div>
  );
}
