import { useEffect, useState } from "react";
import GameCardWithHoursComponent from "../components/GameCard/GameCardWithHours";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GameSearchbarComponent from "../components/Searchbar/GameSearchbar";
import { gameDummyData } from "../gameDummyData";
import "./Library.css";
import { GameInterface } from "./Search";

export default function LibraryPage() {
  const [searchString, setSearchString] = useState("");
  const [fetchedGames, setFetchedGames] = useState<Array<GameInterface>>([]);

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"gameName": {"$regex": ".*${searchString}.*"  },
              "bought": true}`,
    })
      .then((responce) => responce.json())
      .then((data) => setFetchedGames(data));
  }, [searchString]);

  let games = fetchedGames.map((game) => {
    if (game.bought)
      return (
        <GameCardWithHoursComponent
          key={game.gameName}
          gameName={game.gameName}
          gameDescription={game.gameDescription}
          gameDeveloper={game.developer}
          hoursInGame={game.hoursInGame!!}
          gameId={game.id}
        />
      );
  });

  return (
    <div className="library">
      <NavigationBarComponent />
      <div className="library-page-container">
        <GameSearchbarComponent
          searchbarString={searchString}
          setSearchString={setSearchString}
        />
        <GameListComponent games={games} />
      </div>
    </div>
  );
}
