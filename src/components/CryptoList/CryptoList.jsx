import CryptoCard from "../CryptoCard/CryptoCard";
import Loader from "../Loader/Loader";

import "./CryptoList.css";

const CryptoList = ({ cryptos, loading }) => {
  return (
    <div className="crypto-list">
      <div className="crypto-list__header">
        <span className="crypto-list__title">Criptomoneda</span>
        <span className="crypto-list__title">Precio</span>
        <span className="crypto-list__title">Cambio</span>
      </div>

      {loading ? (
        <Loader />
      ) : (
        cryptos.map((crypto) => (
          <CryptoCard
            key={crypto.id}
            id={crypto.id}
            name={crypto.name}
            image={crypto.image}
            symbol={crypto.symbol}
            price={crypto.current_price}
            priceChange={crypto.price_change_percentage_24h}
          />
        ))
      )}
    </div>
  );
};

export default CryptoList;
