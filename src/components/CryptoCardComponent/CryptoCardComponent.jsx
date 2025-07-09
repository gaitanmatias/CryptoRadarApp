import { Link } from "react-router-dom";
import "./CryptoCardComponent.css";

const CryptoCard = ({ id, name, image, symbol, price, priceChange }) => {
  const priceChangeClass = priceChange >= 0 ? " positive" : " negative";

  return (
    <Link to={`/detail/${id}`}>
      <div className="crypto-card">
        <div className="crypto-header">
          <img src={image} alt={name} className="crypto-image" />
          <h3 className="crypto-name">
            {name} ({symbol.toUpperCase()})
          </h3>
        </div>
        <p className="crypto-price">${price}</p>
        <p className={`crypto-price-change ${priceChangeClass}`}>
          {priceChange >= 0 ? "+" : ""}
          {priceChange}%
        </p>
      </div>
    </Link>
  );
};

export default CryptoCard;
