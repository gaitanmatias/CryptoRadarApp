import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./DetailPage.css";
import CryptoChart from "../../components/CryptoChart/CryptoChart";

const DetailPage = () => {
  const { id } = useParams();
  const [crypto, setCrypto] = useState(null);
  const [loading, setLoading] = useState(true);

  const priceChangeClass = crypto?.market_data.price_change_percentage_24h >= 0 ? " positive" : " negative";

  useEffect(() => {
    const fetchCrypto = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`);
        const data = await res.json();
        setCrypto(data);
      } catch (error) {
        console.error("Error al cargar los datos de la criptomoneda:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchCrypto();
  }, [id]);

  if (loading) return <p>Cargando detalles...</p>;

  if (!crypto) return <p>No se pudo cargar la información.</p>;

  return (
    <main className="crypto-detail-container">
      <h1 className="crypto-detail-name">{crypto.name}</h1>
      
      <div className="crypto-detail-info-container">
        <div className="crypto-detail-header">
          <img className="crypto-detail-image" src={crypto.image.large} alt={crypto.name}/>
          <h2 className="crypto-detail-title">{crypto.name} <span className="crypto-detail-symbol">({crypto.symbol})</span></h2>
        </div>
        
        <div className="crypto-details">
          <p className="crypto-detail-price detail">
            <span className="crypto-details-title">Precio actual:</span>
             ${crypto.market_data.current_price.usd.toLocaleString()}
          </p>
          <p className={`crypto-detail-change detail${priceChangeClass}`}>
            <span className="crypto-details-title">Cambio 24h:</span>
            {crypto.market_data.price_change_percentage_24h > 0 ? ("+") : crypto.market_data.price_change_percentage_24h < 0 ? "-" : ""}
            {crypto.market_data.price_change_percentage_24h.toFixed(2)}%
          </p>
          <p className="crypto-detail-market-cap detail">
            <span className="crypto-details-title">Capitalización:</span>
            ${crypto.market_data.market_cap.usd.toLocaleString()}
          </p>
          <p className="crypto-detail-volume detail">
            <span className="crypto-details-title">Volumen 24h:</span>
            ${crypto.market_data.total_volume.usd.toLocaleString()}
          </p>
          <p className="crypto-detail-rank detail">
            <span className="crypto-details-title">Ranking:</span>
            #{crypto.market_cap_rank}
          </p>
        </div>

        <CryptoChart coinId={id} className="crypto-detail-chart" />
      </div>
    </main>
  );
};

export default DetailPage;
