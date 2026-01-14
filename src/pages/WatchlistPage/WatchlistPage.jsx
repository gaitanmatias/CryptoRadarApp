import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import "./WatchlistPage.css";
import { getFavorites } from "../../services/favoritesService";
import CryptoList from "../../components/CryptoList/CryptoList";
import SearchBar from "../../components/SearchBar/SearchBar";
import { getCryptosByIds } from "../../services/cryptoService";

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
      <h1 className="watchlist-title">Accedé a tus criptomonedas favoritas más rápido</h1>
      <SearchBar cryptos={coins} />
      <CryptoList loading={false} cryptos={coins} />
    </main>
  );
}

export default WatchlistPage;
