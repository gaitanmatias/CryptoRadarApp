import { Link } from "react-router-dom";

import "./NotFoundPage.css";

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <Link to="/" className="not-found-page__brand">
        Crypto Radar
      </Link>
      <h1 className="not-found-page__title">404 - Página no encontrada</h1>
      <p className="not-found-page__message">La ruta que estás buscando no existe.</p>
      <Link to="/" className="not-found-page__link">
        Volver a la página principal
      </Link>
    </main>
  );
};

export default NotFoundPage;
