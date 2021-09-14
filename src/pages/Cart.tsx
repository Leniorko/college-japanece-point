import { useEffect, useState } from "react";
import GameCardWithDeleteButtonComponent from "../components/GameCard/GameCardWithDeleteButton";
import GameListComponent from "../components/Lists/GameList";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import { useGetGamesInCart } from "../redux/cartSlice";
import "./Cart.css";
import { GameInterface } from "./Search";

export default function CartPage() {
  const [totalPrice, setTotalPrice] = useState(0);
  const [fetchedGames, setFetchedGames] = useState<Array<GameInterface>>();
  const [magicCounter, setMagicCouner] = useState(0);

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"isInCart": true }`,
    })
      .then((responce) => responce.json())
      .then((data) => setFetchedGames(data));
  }, [magicCounter]);

  useEffect(() => {
    let totalCost = 0;
    totalCost = fetchedGames
      ? fetchedGames.reduce((previous, current) => {
          let curPrice = current.isInSale
            ? current.gameSalePrice!!
            : current.gamePrice!!;
          return previous + curPrice!!;
        }, 0)
      : 0;
    setTotalPrice(totalCost);
  }, [fetchedGames]);

  const aaa = useGetGamesInCart("");
  console.log(aaa);

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
        gameId={game.id}
        magicCounter={magicCounter}
        magiCounterSet={setMagicCouner}
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
