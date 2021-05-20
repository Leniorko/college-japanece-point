import { useEffect, useState } from "react";
import GameCardWithHoursComponent from "../components/GameCard/GameCardWithHours";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GameSearchbarComponent from "../components/Searchbar/GameSearchbar";
import { gameDummyData } from "../gameDummyData";
import "./Library.css";

export default function LibraryPage() {
  const [searchString, setSearchString] = useState("");
  const [searchedGames, setSearchedGames] = useState(gameDummyData);

  useEffect(() => {
    const filteredGames = gameDummyData.filter((game) => {
      const lowerGameName = game.gameName.toLowerCase();
      const lowerSearchString = searchString.toLowerCase();

      if (lowerGameName.includes(lowerSearchString)) return game;
      return false;
    });
    setSearchedGames(filteredGames);
  }, [searchString]);

  let games = searchedGames
    .map((game) => {
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
    })
    .filter((game) => game !== undefined);

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
