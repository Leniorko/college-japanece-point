import { useEffect, useState } from "react";
import { GameInterface } from "../../pages/Search";
import "./HomeSlideshow.css";
import HomeSlideshowItemComponent from "./HomeSlideshowItem";
import HomeSlideshowSidebarItemComponent from "./HomeSlideshowSidebarItem";

export default function HomeSlideshowComponent() {
  const [gamesInSpotlight, setGamesInSpotlight] = useState<
    Array<GameInterface>
  >([]);
  const [currentActiveGameCounter, setActiveGameCouner] = useState<number>(0);
  const [currentActiveGame, setActiveGame] = useState<string>("");

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"isInSale": true}`,
    })
      .then((response) => response.json())
      .then((data) => {
        setGamesInSpotlight(data);
        // setActiveGame(data[currentActiveGameCounter].gameName);
      });
  }, []);

  useEffect(() => {
    setTimeout(() => {
      setActiveGameCouner(currentActiveGameCounter + 1);
      setActiveGame(gamesInSpotlight[currentActiveGameCounter % 4]?.gameName);
    }, 5000);
  }, [currentActiveGameCounter, gamesInSpotlight]);

  let spotlightGames = gamesInSpotlight?.map((game) => {
    return (
      <HomeSlideshowSidebarItemComponent
        key={game.gameName}
        gameName={game.gameName}
        activeSlideName={currentActiveGame}
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
