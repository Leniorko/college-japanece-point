import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./pages/Home";
import SearchPage from "./pages/Search";
import LibraryPage from "./pages/Library";
import CartPage from "./pages/Cart";
import ProfilePage from "./pages/Profile";
import GamePage from "./pages/Game";

ReactDOM.render(
  <React.StrictMode>
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
      </Switch>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
