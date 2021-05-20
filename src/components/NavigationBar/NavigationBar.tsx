import { Link, NavLink } from "react-router-dom";
import "./NavigationBar.css";

// TODO Make it transform in mobile into hamburger menu

export default function NavigationBarComponent() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <NavLink className="deactive" exact to="/">
          <li className="navigation__item1">Japanece Point</li>
        </NavLink>
        <NavLink activeClassName="active" exact to="/">
          <li className="navigation__item2">Home</li>
        </NavLink>
        <NavLink activeClassName="active" to="/search">
          <li className="navigation__item3">Search for games</li>
        </NavLink>
        <NavLink activeClassName="active" to="/library">
          <li className="navigation__item4">Library</li>
        </NavLink>
        <NavLink
          activeClassName="active"
          to="/cart"
          className="navigation__item5"
        >
          <li>Cart Icon</li>
        </NavLink>
        <NavLink activeClassName="active" to="/profile">
          <li className="navigation__item6">User Icon</li>
        </NavLink>
      </ul>
    </nav>
  );
}
