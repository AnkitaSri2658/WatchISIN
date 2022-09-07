import { useContext } from "react";
import { NavLink } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import WatchlistContext from "../../store/watchlist-context";

function MainNavigation() {
  const watchlistCtx = useContext(WatchlistContext);

  return (
    <header className={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink
              style={({ isActive }) => ({
                borderColor: isActive ? "#ff4e4ecc" : "",color: isActive ? "#ff4e4ecc" : ""
              })}
              to="/"
            >
              Add New ISIN
            </NavLink>
          </li>

          <li>
            <NavLink
               style={({ isActive }) => ({
                borderColor: isActive ? "#ff4e4ecc" : "",color: isActive ? "#ff4e4ecc" : ""
              })}
              to="/web"
            >
              Watch ISIN
            </NavLink>
            <span className={classes.badge}>{watchlistCtx.totalFavorites}</span>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;
