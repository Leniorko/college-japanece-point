import { useEffect, useState } from "react";
import GameCardComponent from "../components/GameCard/GameCard";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GameSearchbarComponent from "../components/Searchbar/GameSearchbar";
import { gameDummyData } from "../gameDummyData";
import "./Search.css";

export default function SearchPage() {
  const [gamesDummyData, setGamesData] = useState(gameDummyData);
  const [searchString, setSearchString] = useState("");
  const [searchedGames, setSearchedGames] = useState(gameDummyData);

  useEffect(() => {
    const filteredGames = gameDummyData.filter((game) => {
      const lowerGameName = game.gameName.toLowerCase();
      const lowerSearchString = searchString.toLowerCase();

      if (lowerGameName.includes(lowerSearchString)) return game;
    });
    setSearchedGames(filteredGames);
  }, [searchString]);

  let games = searchedGames.map((game) => {
    return (
      <GameCardComponent
        key={game.gameName}
        gameName={game.gameName}
        gameDescription={game.gameDescription}
        gameDeveloper={game.developer}
        newPrice={game.gameSalePrice!!}
        oldPrice={game.gamePrice}
      />
    );
  });

  return (
    <div>
      <NavigationBarComponent />
      <div className="search-page-container">
        <GameSearchbarComponent
          searchbarString={searchString}
          setSearchString={setSearchString}
        />
        <div className="game-list">{games}</div>
      </div>
    </div>
  );
}
