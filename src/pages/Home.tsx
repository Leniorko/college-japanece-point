import { useState } from "react";
import GameCardWithPriceComponent from "../components/GameCard/GameCardWithPrice";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import SecondHeadingComponent from "../components/Headings/SecondHeading";
import SpotlightSlideshowComponent from "../components/Slideshow/SpotlightSlideshow";
import { gameDummyData } from "../gameDummyData";
import "./Home.css";
import HomeSlideshowComponent from "../components/Slideshow/HomeSlideshow";

export default function HomePage() {
  const [gameData, setGameData] = useState(gameDummyData);

  const gamesInSale = gameData
    .map((gameInfo) => {
      if (gameInfo.isInSale) {
        return (
          <GameCardWithPriceComponent
            key={gameInfo.gameName}
            gameId={gameInfo.id}
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

  return (
    <div className="main-page">
      <div className="main-page__content">
        <NavigationBarComponent />
        <div className="slideshow-layout">
          <HomeSlideshowComponent />
        </div>
        <SecondHeadingComponent headingText="Скидки" />
        <div className="main-page__sales-wrapper">
          <div className="main-page__sales-spotlight-list">
            {/* It will take only firs four games */}
            {gamesInSale.slice(0, 4)}
          </div>
        </div>
      </div>
    </div>
  );
}
