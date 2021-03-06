import "./GameCardWithPrice.css";
import "./GameCard.css";
import { Link, useLocation } from "react-router-dom";

interface CardProps {
  gameName: string;
  gameId: string;
  gameDeveloper: string;
  gameDescription: string;
  oldPrice: number;
  newPrice: number;
  vertical: Array<string>;
}

export default function GameCardWithPriceComponent(props: CardProps) {
  const currentPage = useLocation();

  if (currentPage.pathname.length === 1) {
    currentPage.pathname = "";
  }

  return (
    <Link className="game-card" to={currentPage.pathname + "/" + props.gameId}>
      <div className="img-container">
        <img src={props.vertical[0]} alt="" />
      </div>
      <div className="game-card__content-container">
        <div className="game-card__name">{props.gameName}</div>
        <div className="game-card__developer">{props.gameDeveloper}</div>
        {/* <div className="game-card__description">{props.gameDescription}</div> */}
        <div className="price-container">
          {props.newPrice ? (
            <div className="game-card__discount-percent">
              {"-" +
                new Intl.NumberFormat("en-GB", {
                  style: "percent",
                }).format(props.newPrice / props.oldPrice)}
            </div>
          ) : (
            <></>
          )}

          <div className={props.newPrice ? "old-price" : "current-price"}>
            {props.oldPrice === 0 ? "Free" : props.oldPrice + " rub"}
          </div>
          {props.newPrice ? (
            <div className="new-price">{props.newPrice + " rub"}</div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </Link>
  );
}
