import "./GameCard.css";

interface CardProps {
  gameName: string;
  gameDeveloper: string;
  gameDescription: string;
  oldPrice: number;
  newPrice: number;
}

export default function GameCardComponent(props: CardProps) {
  return (
    <div className="game-card">
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_200x250.png"}
          alt=""
        />
      </div>
      <div className="game-card__content-container">
        <div>{props.gameName}</div>
        <div className="game-card__developer">{props.gameDeveloper}</div>
        <div className="game-card__description">{props.gameDescription}</div>
        <div className="price-container">
          <div className="old-price">{props.oldPrice}</div>
          <div className="new-price">{props.newPrice}</div>
        </div>
      </div>
    </div>
  );
}
