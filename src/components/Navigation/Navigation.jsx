import { NavLink } from "react-router-dom";
import css from "./Navigation.module.css"
import clsx from "clsx";



const activeLinks = ({ isActive }) => {
    return clsx(css.navLink, isActive && css.active)
}

const Navigation = () => {




  return (
    <div>
      <nav className={css.nav}>
        <NavLink to="/" className={activeLinks}>
          Home
        </NavLink>
        <NavLink to="/movies" className={activeLinks}>
          Movies
        </NavLink>
      </nav>
    </div>
  );
};

export default Navigation;
