import style from "./Navigation.module.css";
import { Link, NavLink } from "react-router-dom";
const Navigation = () => {
  const items = [
    { to: "/", title: "Home" },
    { to: "/about-us", title: "aboutUs" },
    { to: "/blogs", title: "blogs" },
    { to: "/post", title: "post" },
  ];

  return (
    <nav className={style.nav}>
      <ul>
        {items.map((item) => {
          return (
            <li>
              <NavLink
                className={(e) => e.isActive && `${style.activeLink}`}
                to={item.to}
              >
                {item.title}
              </NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navigation;
