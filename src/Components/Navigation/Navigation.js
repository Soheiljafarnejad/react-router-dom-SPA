import style from "./Navigation.module.css";
import { Link } from "react-router-dom";
const Navigation = () => {
  return (
    <nav className={style.nav}>
      <ul>
        <li>
          <Link to="/">Home page</Link>
        </li>
        <li>
          <Link to="/about-us">AboutUs page</Link>
        </li>
        <li>
          <Link to="/blogs">blogs page</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
