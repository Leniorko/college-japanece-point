import "./GameCardWithDeleteButton.css";
import "./GameCard.css";

interface CardProps {
  gameName: string;
  gameId: string;
  gameDeveloper: string;
  gameDescription: string;
  oldPrice: number;
  newPrice: number;
  vertical: Array<string>;
  magicCounter: number;
  magiCounterSet: (number: number) => void;
}

export default function GameCardWithDeleteButtonComponent(props: CardProps) {
  return (
    <div className="game-card">
      <div className="game-card__overlay"></div>

      <div className="img-container">
        <img className="game-card__img" src={props.vertical[0]} alt="" />
        <img
          className="delete-button"
          src={process.env.PUBLIC_URL + "/resources/delete.svg"}
          // type=""
          width="24"
          height="24"
          onClick={() => {
            fetch("https://japanese-point.herokuapp.com/api/v1/update/", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: `{"id": "${props.gameId}", "isInCart":false}`,
            }).then((data) => props.magiCounterSet(props.magicCounter + 1));
          }}
        ></img>
      </div>
      <div className="game-card__content-container">
        <div className="game-card__name">{props.gameName}</div>
        <div className="game-card__developer">{props.gameDeveloper}</div>
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
    </div>
  );
}
