import "./GameCardWithDeleteButton.css";
import "./GameCard.css";

export default function GameCardWithDeleteButtonComponent() {
  return (
    <div className="game-card">
      <div className="img-container">
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_200x250.png"}
          alt=""
        />
      </div>
      <div className="game-card__content-container">
        <div>{}</div>
        <div className="game-card__developer">{}</div>
        <div className="game-card__description">{}</div>
        <div className="price-container">
          <div className="old-price">{}</div>
          <div className="new-price">{}</div>
        </div>
      </div>
    </div>
  );
}
