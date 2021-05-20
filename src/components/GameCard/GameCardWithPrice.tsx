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
}

export default function GameCardWithPriceComponent(props: CardProps) {
  const currentPage = useLocation();

  if (currentPage.pathname.length == 1) {
    currentPage.pathname = "";
  }

  return (
    <Link className="game-card" to={currentPage.pathname + "/" + props.gameId}>
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_200x250.png"}
          alt=""
        />
      </div>
      <div className="game-card__content-container">
        <div className="game-card__name">{props.gameName}</div>
        <div className="game-card__developer">{props.gameDeveloper}</div>
        <div className="game-card__description">{props.gameDescription}</div>
        <div className="price-container">
          <div className={props.newPrice ? "old-price" : "current-price"}>
            {props.oldPrice}
          </div>
          <div className="new-price">{props.newPrice}</div>
        </div>
      </div>
    </Link>
  );
}
