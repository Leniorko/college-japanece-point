import { useState } from "react";
import GameCardComponent from "../components/GameCard/GameCard";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import SecondHeadingComponent from "../components/Headings/SecondHeading";
import SpotlightSlideshowComponent from "../components/Slideshow/SpotlightSlideshow";
import { gameDummyData } from "../gameDummyData";
import "./Home.css";

export default function HomePage() {
  const [gameData, setGameData] = useState(gameDummyData);

  const gamesInSale = gameData
    .map((gameInfo) => {
      if (gameInfo.isInSale) {
        return (
          <GameCardComponent
            key={gameInfo.gameName}
            gameDescription={gameInfo.gameDescription}
            gameDeveloper={gameInfo.developer}
            gameName={gameInfo.gameName}
            newPrice={gameInfo.gameSalePrice!!}
            oldPrice={gameInfo.gamePrice}
          />
        );
      }
    })
    .filter((value) => value !== undefined);

  console.log(gamesInSale);

  return (
    <div className="main-page">
      <NavigationBarComponent />
      <div className="slideshow-layout">
        <SpotlightSlideshowComponent />
      </div>
      <SecondHeadingComponent headingText="Скидки" />
      <div className="main-page__sales-wrapper">
        <div className="main-page__sales-spotlight-list">
          {/* It will take only firs four games */}
          {gamesInSale.slice(0, 4)}
        </div>
      </div>
    </div>
  );
}
