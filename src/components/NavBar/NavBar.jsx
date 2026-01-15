import { NavLink } from "react-router-dom";

import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

import "./NavBar.css";

export default function NavBar() {
  const getNavLinkClass = ({ isActive }) =>
    `navbar__link ${isActive ? "navbar__link--active" : ""}`;

  return (
    <header className="navbar__header">
      <nav className="navbar__container">
        <NavLink to="/" className="navbar__brand">
          CryptoRadar
        </NavLink>

        <ul className="navbar__list">
          <li className="navbar__item">
            <NavLink to="/" className={getNavLinkClass}>
              Inicio
            </NavLink>
          </li>
          <li className="navbar__item">
            <NavLink to="/watchlist" className={getNavLinkClass}>
              Favoritos
            </NavLink>
          </li>
          <ThemeToggleButton className="navbar__theme-toggle-button"/>
        </ul>
      </nav>
    </header>
  );
}
