import { NavLink } from "react-router-dom";

import ThemeToggleButton from "../ThemeToggleButton/ThemeToggleButton";

import "./NavBar.css";

export default function NavBar() {
  const getNavLinkClass = ({ isActive }) =>
    `nav-link ${isActive ? "nav-link-active" : ""}`;

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <NavLink to="/" className="navbar-brand">
          CryptoRadar
        </NavLink>

        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={getNavLinkClass}>
              Inicio
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/watchlist" className={getNavLinkClass}>
              Favoritos
            </NavLink>
          </li>
          <ThemeToggleButton />
        </ul>
      </nav>
    </header>
  );
}
