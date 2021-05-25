import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import SecondHeadingComponent from "../components/Headings/SecondHeading";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import SpotlightSlideshowComponent from "../components/Slideshow/SpotlightSlideshow";
import "./Game.css";
import { GameInterface } from "./Search";

// TODO Split file into components
// TODO Change layout a bit. (Look into EGS)

interface GamePageParam {
  gameId: string;
}

export default function GamePage(props: RouteComponentProps) {
  const curLoc: GamePageParam = useParams();
  const [gameData, setGameData] = useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"id": "${curLoc.gameId}"}`,
    })
      .then((response) => response.json())
      .then((data) => setGameData(data));
  }, []);

  return (
    <div className="game-page">
      <NavigationBarComponent />
      <div className="game-page-content">
        <SecondHeadingComponent
          headingText={gameData ? gameData[0].gameName : ""}
        />
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_250x250png"}
          alt=""
          className="game-page__logo"
        />
        <button className="game-page__button">Add to cart</button>

        <SpotlightSlideshowComponent />

        <SecondHeadingComponent headingText="Description" />
        <p className="game-page__description">
          {gameData ? gameData[0].gameDescription : ""}
        </p>
      </div>
    </div>
  );
}
