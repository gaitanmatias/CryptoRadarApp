import { Link } from 'react-router-dom'

export default function NavBarComponent() {
  return (
    <nav>
      <Link to="/">Home</Link> |{' '}
      <Link to="/crypto/bitcoin">Detalle</Link> |{' '}
      <Link to="/watchlist">Watchlist</Link>
    </nav>
  );
}
