import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import "./WatchlistPage.css";
import { getFavorites } from "../../services/favoritesService";
import CryptoList from "../../components/CryptoList/CryptoList";
import SearchBar from "../../components/SearchBar/SearchBar";

function WatchlistPage() {
  const [coins, setCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadFavorites = async () => {
      const favorites = getFavorites();

      if (favorites.length === 0) {
        setCoins([]);
        setLoading(false);
        return;
      }

      try {
        const res = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${favorites.join(",")}`
        );
        const data = await res.json();
        setCoins(data);
      } catch (error) {
        console.error("Error al cargar favoritos:", error);
      } finally {
        setLoading(false);
      }
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
