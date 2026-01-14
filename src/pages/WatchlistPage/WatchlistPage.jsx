// React
import { useEffect, useState } from "react";

// Servicios
import { getFavorites } from "../../services/favoritesService";
import { getCryptosByIds } from "../../services/cryptoService";

// Componentes
import CryptoList from "../../components/CryptoList/CryptoList";
import Loader from "../../components/Loader/Loader";
import SearchBar from "../../components/SearchBar/SearchBar";

// Estilos
import "./WatchlistPage.css";

function WatchlistPage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      const favorites = getFavorites();
      const data = await getCryptosByIds(favorites);
      setCoins(data);
      setLoading(false);
    };

    loadFavorites();
  }, []);

  if (loading) {
    return (
      <main className="watchlist-container">
        <Loader />
      </main>
    );
  }

  return (
    <main className="watchlist-container">
      <h1 className="watchlist-title">
        Accedé a tus criptomonedas favoritas más rápido
      </h1>
      <SearchBar cryptos={coins} />
      <CryptoList loading={false} cryptos={coins} />
    </main>
  );
}

export default WatchlistPage;
