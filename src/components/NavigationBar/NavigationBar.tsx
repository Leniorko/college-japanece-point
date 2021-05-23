import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

// TODO Make it transform in mobile into hamburger menu

export default function NavigationBarComponent() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavLink className="deactive" exact to="/">
          <li className="navigation__logo-container">
            <img
              className="navigation__logo"
              src={process.env.PUBLIC_URL + "/resources/Logo.svg"}
              alt=""
            />
          </li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/">
          <li className="navigation__item2">Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/search">
          <li className="navigation__item3">Search</li>
        </NavLink>
        <NavLink activeClassName="active" to="/library">
          <li className="navigation__item4">Library</li>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/cart"
          className="navigation__item5"
        >
          <li className="navigation__cart-container">
            <img
              className="cart"
              src={process.env.PUBLIC_URL + "/resources/cart.svg"}
              alt=""
            />
          </li>
        </NavLink>
        <NavLink activeClassName="active" to="/profile">
          <li className="navigation__user-container">
            <img src={process.env.PUBLIC_URL + "/resources/user.svg"} alt="" />
          </li>
        </NavLink>
      </ul>
    </nav>
  );
}
