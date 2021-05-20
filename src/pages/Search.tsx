import { useEffect, useState } from "react";
import GameCardWithPriceComponent from "../components/GameCard/GameCardWithPrice";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GameSearchbarComponent from "../components/Searchbar/GameSearchbar";
import { gameDummyData } from "../gameDummyData";
import "./Search.css";

export default function SearchPage() {
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

  let games = searchedGames.map((game) => {
    return (
      <GameCardWithPriceComponent
        gameId={game.id}
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
        <GameListComponent games={games} />
      </div>
    </div>
  );
}
