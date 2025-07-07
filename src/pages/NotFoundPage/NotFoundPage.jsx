import React from 'react';
import { Link } from 'react-router-dom';
import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <main className="not-found-page">
      <h1 className="not-found-title">404 - Página no encontrada</h1>
      <p className="not-found-message">La ruta que estás buscando no existe.</p>
      <Link to="/" className="not-found-link">Volver a la página principal</Link>
    </main>
  );
};

export default NotFoundPage;