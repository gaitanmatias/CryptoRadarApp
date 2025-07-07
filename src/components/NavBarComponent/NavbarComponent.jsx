import { NavLink } from 'react-router-dom';
import './NavBarComponent.css';

export default function NavBarComponent() {
  const getNavLinkClass = ({ isActive }) => 
    `nav-link ${isActive ? 'nav-link-active' : ''}`;

  return (
    <header className="navbar-header">
      <nav className="navbar">
        <NavLink to="/" className='navbar-brand'>Crypto Radar</NavLink>
      
        <ul className="navbar-nav">
          <li className="nav-item">
            <NavLink to="/" className={getNavLinkClass}>Inicio</NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/watchlist" className={getNavLinkClass}>Favoritos</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}
