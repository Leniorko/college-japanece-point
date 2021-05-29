import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CartPage from "./pages/Cart";
import GamePage from "./pages/Game";
import HomePage from "./pages/Home";
import LibraryPage from "./pages/Library";
import LoadingScreen from "./pages/LoadingScreen";
import ProfilePage from "./pages/Profile";
import SearchPage from "./pages/Search";

export default function App() {
  const [isFirstLoad, setFirstLoad] = useState(true);
  const [isLoadingEnded, setLoadingEnded] = useState(!isFirstLoad);

  useEffect(() => {
    fetch("https://japanese-point.herokuapp.com/api/v1/search", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: `{}`,
    }).then((responce) => {
      setTimeout(() => {
        responce.json();
        setLoadingEnded(true);
        setTimeout(() => setFirstLoad(false), 3000);
      }, 3000);
    });
  }, []);

  return isFirstLoad ? (
    <LoadingScreen isEnding={isLoadingEnded} />
  ) : (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/search/:gameId" component={GamePage} />
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/library/:gameId" component={GamePage} />
        <Route path="/library">
          <LibraryPage />
        </Route>
        <Route path="/cart">
          <CartPage />
        </Route>
        <Route path="/profile">
          <ProfilePage />
        </Route>
        <Route path="/:gameId" component={GamePage} />
      </Switch>
    </BrowserRouter>
  );
}
