import "./GameCardWithHours.css";
import "./GameCard.css";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";

interface CardProps {
  gameName: string;
  gameId: string;
  gameDeveloper: string;
  gameDescription: string;
  minutesInGame: number;
}

export default function GameCardWithHoursComponent(props: CardProps) {
  const [totalPlayedParsed, setTotalPlayed] = useState({
    minutes: props.minutesInGame % 60,
    hours: props.minutesInGame / 60 >> 0,
    days: props.minutesInGame / 1440 >> 0,
  })
  const currentPage = useLocation();
  

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
        {/* <div className="game-card__description">{props.gameDescription}</div> */}

          {/* TODO convert time to months + days + ... etc. */}
          <div className="time-container">{`${totalPlayedParsed.days} days ${totalPlayedParsed.hours} hours ${totalPlayedParsed.minutes} minutes`}</div>
      </div>
    </Link>
  );
}
