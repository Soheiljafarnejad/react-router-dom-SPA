import style from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <NavLink
            to="/"
            className={(e) => e.isActive && `${style.activeLink}`}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/about-us"
            className={(e) => e.isActive && `${style.activeLink}`}
          >
            about-us
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/blogs"
            className={(e) => e.isActive && `${style.activeLink}`}
          >
            blogs
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
