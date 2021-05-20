import { useEffect, useState } from "react";
import {
  Redirect,
  RouteComponentProps,
  useLocation,
  useParams,
} from "react-router";
import SecondHeadingComponent from "../components/Headings/SecondHeading";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import SpotlightSlideshowComponent from "../components/Slideshow/SpotlightSlideshow";
import { gameDummyData } from "../gameDummyData";
import "./Game.css";

// TODO Split file into components
// TODO Change layout a bit. (Look into EGS)

interface GamePageParam {
  gameId: string;
}

export default function GamePage(props: RouteComponentProps) {
  const curLoc: GamePageParam = useParams();

  const [currentPlace, setCurrentPlace] = useState(
    props.match.path.split("/")[1]
  );
  const [gamesInPlace, setGamesInPlace] = useState(
    gameDummyData.reduce((prev, cur) => {
      let curId = cur.id;
      let newArr = prev;
      newArr.push(curId);
      return newArr;
    }, Array<string>())
  );
  const [games, setGames] = useState(gameDummyData);

  if (!gamesInPlace.includes(curLoc.gameId)) {
    return <Redirect to={`/${currentPlace}`} />;
  }
  return (
    <div className="game-page">
      <NavigationBarComponent />
      <div className="game-page-content">
        <SecondHeadingComponent headingText="PLACEHOLDER GAME NAME" />
        <img
          src={process.env.PUBLIC_URL + "/resources/placeholder_250x250png"}
          alt=""
          className="game-page__logo"
        />
        <button className="game-page__button">Add to cart</button>

        <SpotlightSlideshowComponent />

        <SecondHeadingComponent headingText="Description" />
        <p className="game-page__description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae ducimus
          asperiores nulla necessitatibus recusandae nobis architecto
          voluptatibus sequi rem veniam cumque vero iste vel, velit fuga non eos
          dignissimos repellat.
        </p>
      </div>
    </div>
  );
}
