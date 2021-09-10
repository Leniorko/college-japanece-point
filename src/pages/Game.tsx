import { useEffect, useState } from "react";
import { RouteComponentProps, useParams } from "react-router";
import NavigationBarComponent from "../components/NavigationBar/NavigationBar";
import GamePageSlideshowComponent from "../components/Slideshow/GamePageSlideshow";
import "./Game.css";
import { GameInterface } from "./Search";

// TODO Split file into components
// TODO Make component out of a price

interface GamePageParam {
  gameId: string;
}

export default function GamePage(props: RouteComponentProps) {
  const curLoc: GamePageParam = useParams();
  const [gameData, setGameData] = useState<Array<GameInterface>>();

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{"id": "${curLoc.gameId}"}`,
    })
      .then((response) => response.json())
      .then((data) => setGameData(data));
  }, [gameData, curLoc.gameId]);

  return (
    <div className="game-page">
      <NavigationBarComponent />
      <div className="game-page__content">
        <div className="game-page__nav-line">
          <div className="game-page__come-back">
            <img src="#" alt="" className="game-page__back-arrow" />
            <p className="game-page__back-text">Return</p>
          </div>
          <div className="game-page__text-separator"></div>
          <div className="game-page__current-game">
            {gameData?.[0].gameName}
          </div>
        </div>
        <div className="game-page__game-title">{gameData?.[0].gameName}</div>
        <div className="game-page__main-info">
          <div className="game-page__slideshow-container">
            <GamePageSlideshowComponent
              horizontal={gameData?.[0].images.horizontal!!}
              videos={gameData?.[0].videos!!}
            />
          </div>
          <div className="game-page__buy-info">
            <img
              src={gameData?.[0].images.logo}
              alt=""
              className="game-page__logo"
            />
            <div className="price-container">
              {gameData?.[0].gameSalePrice ? (
                <div className="game-card__discount-percent">
                  {"-" +
                    new Intl.NumberFormat("en-GB", {
                      style: "percent",
                    }).format(
                      gameData?.[0].gameSalePrice / gameData?.[0].gamePrice
                    )}
                </div>
              ) : (
                <></>
              )}

              <div
                className={
                  gameData?.[0].gameSalePrice ? "old-price" : "current-price"
                }>
                {gameData?.[0].gamePrice === 0
                  ? "Free"
                  : gameData?.[0].gamePrice + " rub"}
              </div>
              {gameData?.[0].gameSalePrice ? (
                <div className="new-price">
                  {gameData?.[0].gameSalePrice + " rub"}
                </div>
              ) : (
                <></>
              )}
            </div>
            {gameData?.[0].isInCart ? (
              <button className="game-page__buy-button">Already in cart</button>
            ) : (
              <button
                className="game-page__buy-button"
                onClick={() => {
                  fetch("https://japanese-point.herokuapp.com/api/v1/update/", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: `{"id": "${curLoc.gameId}", "isInCart":true}`,
                  }).then((data) => {
                    let curData = gameData;
                    curData![0].isInCart = true;
                    setGameData(curData);
                  });
                }}>
                Add to cart
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
