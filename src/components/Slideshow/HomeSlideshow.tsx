import { useEffect, useState } from "react";
import { GameInterface } from "../../pages/Search";
import "./HomeSlideshow.css";
import HomeSlideshowItemComponent from "./HomeSlideshowItem";
import HomeSlideshowSidebarItemComponent from "./HomeSlideshowSidebarItem";

export default function HomeSlideshowComponent() {
  const [gamesInSpotlight, setGamesInSpotlight] =
    useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"isInSale": true}`,
    })
      .then((response) => response.json())
      .then((data) => setGamesInSpotlight(data));
  }, []);

  let spotlightGames = gamesInSpotlight?.map((game) => {
    return (
      <HomeSlideshowSidebarItemComponent
        key={game.gameName}
        gameName={game.gameName}
      />
    );
  });

  return (
    <div className="home-slideshow">
      <div className="home-slideshow__active">
        <HomeSlideshowItemComponent />
      </div>
      <div className="home-slideshow__sidebar">{spotlightGames}</div>
    </div>
  );
}
