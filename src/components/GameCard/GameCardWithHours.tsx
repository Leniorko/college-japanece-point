import "./GameCardWithHours.css";
import "./GameCard.css";

interface CardProps {
  gameName: string;
  gameDeveloper: string;
  gameDescription: string;
  hoursInGame: number;
}

export default function GameCardWithHoursComponent(props: CardProps) {
  return (
    <div className="game-card">
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
          {/* TODO convert time to months + days + ... etc. */}
          <div className="time-container">{`${props.hoursInGame} часов`}</div>
        </div>
      </div>
    </div>
  );
}
