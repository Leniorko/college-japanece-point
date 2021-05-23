import { useEffect, useState } from "react";
import GameCardWithPriceComponent from "../components/GameCard/GameCardWithPrice";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GameSearchbarComponent from "../components/Searchbar/GameSearchbar";
import { gameDummyData } from "../gameDummyData";
import "./Search.css";

export interface GameInterface {
  gameName: string;
  id: string;
  developer: string;
  gameDescription: string;
  gamePrice: number;
  currency: string;
  isInSale: boolean;
  gameSalePrice: number | null;
  bought: boolean;
  hoursInGame: number | null;
  images: Array<string>;
  videos: Array<string>;
}

export default function SearchPage() {
  const [searchString, setSearchString] = useState("");
  const [fetchedGames, setFetchedGames] = useState<Array<GameInterface>>([]);

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"gameName": {"$regex": ".*${searchString}.*"  }}`,
    })
      .then((responce) => responce.json())
      .then((data) => setFetchedGames(data));
  }, [searchString]);

  let games = fetchedGames!!.map((game) => {
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
