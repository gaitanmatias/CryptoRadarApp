import CryptoCard from "../CryptoCard/CryptoCard";
import "./CryptoList.css";

const CryptoList = ({ cryptos }) => {
  return (
    <div className="crypto-list">
      <div className="crypto-list-header">
        <span className="crypto-list-header-title">Criptomoneda</span>
        <span className="crypto-list-header-title">Precio</span>
        <span className="crypto-list-header-title">Cambio</span>
      </div>

      {cryptos.map((crypto) => (
        <CryptoCard
          key={crypto.id}
          id={crypto.id}
          name={crypto.name}
          image={crypto.image}
          symbol={crypto.symbol}
          price={crypto.current_price}
          priceChange={crypto.price_change_percentage_24h}
        />
      ))}
    </div>
  );
};

export default CryptoList;
