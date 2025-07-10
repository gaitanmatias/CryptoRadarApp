import { Link } from "react-router-dom";
import "./CryptoCard.css";

const CryptoCard = ({ id, name, image, symbol, price, priceChange }) => {
  const priceChangeClass = priceChange >= 0 ? " positive" : " negative";

  const formatPrice = (price) => {
    const decimals = price < 0.99 ? 4 : price >= 1000 ? 0 : 2;
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }).format(price);
  };


  const formatPriceChange = (change) => {
    if (Math.abs(change) < 0.01) return "<0.01%";
    return change.toFixed(2) + "%";
  };

  return (
    <Link to={`/crypto/${id}`}>
      <div className="crypto-card">
        <div className="crypto-header" title={name  + " - " + symbol.toUpperCase()}>
          <img src={image} alt={name} className="crypto-image" />
          <h3 className="crypto-name">
            ({symbol.toUpperCase()}) - {name} 
          </h3>
        </div>
        <p className="crypto-price">${formatPrice(price)}</p>
        <p className={`crypto-price-change ${priceChangeClass}`}>
          {priceChange >= 0 ? "+" : ""}
          {formatPriceChange(priceChange)}
        </p>
      </div>
    </Link>
  );
};

export default CryptoCard;
