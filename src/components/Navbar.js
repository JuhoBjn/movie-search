import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <Link to="/">Movie Search</Link>
          </li>
          <li>
            <Link to="/watchlist">Watchlist</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
