import { Link } from "react-router-dom";
import "./NavigationBar.css";

export default function NavigationBarComponent() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item1">
          <Link to="/">Japanece Point</Link>
        </li>

        <li className="navigation__item2">
          <Link to="/">Home</Link>
        </li>

        <li className="navigation__item3">
          <Link to="/search">Search for games</Link>
        </li>

        <li className="navigation__item4">
          <Link to="/library">Library</Link>
        </li>

        <li className="navigation__item5">
          <Link to="/cart">Cart Icon</Link>
        </li>

        <li className="navigation__item6">
          <Link to="/profile">User Icon</Link>
        </li>
      </ul>
    </nav>
  );
}
