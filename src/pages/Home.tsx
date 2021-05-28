import { useState } from "react";
import GameCardWithPriceComponent from "../components/GameCard/GameCardWithPrice";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import SecondHeadingComponent from "../components/Headings/SecondHeading";
import GamePageSlideshowComponent from "../components/Slideshow/GamePageSlideshow";
import { gameDummyData } from "../gameDummyData";
import "./Home.css";
import HomeSlideshowComponent from "../components/Slideshow/HomeSlideshow";
import { useEffect } from "react";
import { GameInterface } from "./Search";

export default function HomePage() {
  const [gamesInSale, setGamesInSale] = useState<Array<JSX.Element>>();

  const [fetchedGames, setFetchedGames] = useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"isInSale": true }`,
    })
      .then((responce) => responce.json())
      .then((data) => setFetchedGames(data));
  }, []);

  useEffect(() => {
    const gamessInSale = fetchedGames?.map((gameInfo) => {
      return (
        <GameCardWithPriceComponent
          key={gameInfo.id}
          gameId={gameInfo.id}
          gameDescription={gameInfo.gameDescription}
          gameDeveloper={gameInfo.developer}
          gameName={gameInfo.gameName}
          newPrice={gameInfo.gameSalePrice!!}
          oldPrice={gameInfo.gamePrice}
          vertical={gameInfo.images.vertical}
        />
      );
    });
    setGamesInSale(gamessInSale);
  }, [fetchedGames]);

  return (
    <div className="main-page">
      <div className="main-page__content">
        <NavigationBarComponent />
        <div className="slideshow-layout">
          <HomeSlideshowComponent />
        </div>
        <div className="main-page__sales-block">
          <SecondHeadingComponent headingText="Скидки" />
          <div className="main-page__sales-wrapper">
            <div className="main-page__sales-spotlight-list">
              {/* It will take only firs four games */}
              {gamesInSale?.slice(0, 4)}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
