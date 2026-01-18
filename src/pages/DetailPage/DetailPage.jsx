// React
import { useEffect, useState } from "react";

// Librerías
import { useParams } from "react-router-dom";

// Componentes
import Loader from "../../components/Loader/Loader";
import CryptoChart from "../../components/CryptoChart/CryptoChart";

// Servicios
import { getCryptoById } from "../../services/cryptoService";
import {
  isFavorite,
  addFavorite,
  removeFavorite,
} from "../../services/favoritesService";

// Estilos
import "./DetailPage.css";

const DetailPage = () => {
  const { id: coinId } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);
  const [favorite, setFavorite] = useState(false);

  const priceChangeClass =
    crypto?.market_data.price_change_percentage_24h >= 0
      ? " positive"
      : " negative";

  useEffect(() => {
    setFavorite(isFavorite(coinId));
  }, [coinId]);

  useEffect(() => {
    const fetchCrypto = async () => {
      const data = await getCryptoById(coinId);
      setCrypto(data);
      setLoading(false);
    };

    fetchCrypto();
  }, [coinId]);

  if (loading)
    return (
      <main className="detail-page">
        <Loader />
      </main>
    );

  if (!crypto)
    return (
      <main className="detail-page detail-page__error">
        <h2 className="detail-page__error-title">Error</h2>
        <p className="detail-page__error-text">
          No se pudo cargar la información.
        </p>
      </main>
    );

  return (
    <main className="detail-page">
      <section className="detail-page__content">
        <section className="detail-page__favorite">
        <button
          className="detail-page__favorite-btn"
          onClick={() => {
            if (favorite) {
              removeFavorite(coinId);
              setFavorite(false);
            } else {
              addFavorite(coinId);
              setFavorite(true);
            }
          }}
        >
          {favorite ? "Eliminar de favoritos" : "Agregar a favoritos"}
        </button>
      </section>

      <h1 className="detail-page__title">{crypto.name}</h1>

      <div className="detail-page__content">
        <div className="detail-page__header">
          <img
            className="detail-page__image"
            src={crypto.image.large}
            alt={crypto.name}
          />
          <h2 className="detail-page__name">
            {crypto.name}{" "}
            <span className="detail-page__symbol">({crypto.symbol})</span>
          </h2>
        </div>

        <div className="detail-page__info">
          <p className="detail-page__info-item detail-page__price">
            <span className="detail-page__info-label">Precio actual:</span>$
            {crypto.market_data.current_price.usd.toLocaleString()}
          </p>

          <p
            className={`detail-page__info-item detail-page__change${priceChangeClass}`}
          >
            <span className="detail-page__info-label">Cambio 24h:</span>
            {crypto.market_data.price_change_percentage_24h > 0
              ? "+"
              : crypto.market_data.price_change_percentage_24h < 0
              ? ""
              : ""}
            {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>

          <p className="detail-page__info-item">
            <span className="detail-page__info-label">Capitalización:</span>$
            {crypto.market_data.market_cap.usd.toLocaleString()}
          </p>

          <p className="detail-page__info-item">
            <span className="detail-page__info-label">Volumen 24h:</span>$
            {crypto.market_data.total_volume.usd.toLocaleString()}
          </p>

          <p className="detail-page__info-item">
            <span className="detail-page__info-label">Ranking:</span>#
            {crypto.market_cap_rank}
          </p>
        </div>

        <CryptoChart coinId={coinId} className="detail-page__chart" />
      </div>
      </section>
    </main>
  );
};

export default DetailPage;
