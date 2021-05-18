import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBarComponent() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <Link to="/">
          <li className="navigation__item1">Japanece Point</li>
        </Link>
        <Link to="/">
          <li className="navigation__item2">Home</li>
        </Link>
        <Link to="/search">
          <li className="navigation__item3">Search for games</li>
        </Link>
        <Link to="/library">
          <li className="navigation__item4">Library</li>
        </Link>
        <Link to="/cart" className="navigation__item5">
          <li>Cart Icon</li>
        </Link>
        <Link to="/profile">
          <li className="navigation__item6">User Icon</li>
        </Link>
      </ul>
    </nav>
  );
}
