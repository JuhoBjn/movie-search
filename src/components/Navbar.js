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
      <h2>Movie Search</h2>
    </header>
  );
};

export default Navbar;
