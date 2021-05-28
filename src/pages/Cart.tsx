import { useEffect, useState } from "react";
import GameCardWithDeleteButtonComponent from "../components/GameCard/GameCardWithDeleteButton";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import { gameDummyData } from "../gameDummyData";
import "./Cart.css";
import { GameInterface } from "./Search";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [gamesInCart, setGamesInCart] = useState(
    gameDummyData.filter((game) => {
      if (!game.bought) {
        return game;
      }
      return false;
    })
  );

  const [fetchedGames, setFetchedGames] = useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"bought": true }`,
    })
      .then((responce) => responce.json())
      .then((data) => setFetchedGames(data));
  }, []);

  useEffect(() => {
    let totalCost = 0;
    totalCost = gamesInCart.reduce((previous, current) => {
      let curPrice = current.isInSale
        ? current.gameSalePrice!!
        : current.gamePrice!!;
      return previous + curPrice!!;
    }, 0);
    setTotalPrice(totalCost);
  }, [gamesInCart]);

  const games = fetchedGames?.map((game) => {
    return (
      <GameCardWithDeleteButtonComponent
        gameDescription={game.gameDescription}
        gameDeveloper={game.developer}
        gameName={game.gameName}
        newPrice={game.gameSalePrice!!}
        oldPrice={game.gamePrice}
        key={game.gameName}
        vertical={game.images.vertical}
      />
    );
  });

  return (
    <div className="cart-page">
      <NavigationBarComponent />
      <div className="cart-page-container">
        <GameListComponent games={games} />
        <div className="order-final">
          <p className="cart-page__price-container">
            {"Total price: "}
            <span className="cart-page__price">{totalPrice}</span>
          </p>
          <button className="order-button">ORDER</button>
        </div>
      </div>
    </div>
  );
}
