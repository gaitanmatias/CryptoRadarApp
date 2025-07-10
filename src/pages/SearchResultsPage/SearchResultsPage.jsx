import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import CryptoList from "../../components/CryptoList/CryptoList";
import "./SearchResultsPage.css";

const SearchResults = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const res = await fetch(`https://api.coingecko.com/api/v3/search?query=${searchTerm}`);
        const data = await res.json();

        const ids = data.coins.map((coin) => coin.id).join(",");
        if (!ids) {
          setResults([]);
          return;
        }

        const marketRes = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${ids}`
        );
        const marketData = await marketRes.json();
        setResults(marketData);
      } catch (error) {
        console.error("Error al buscar:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <main className="search-results">
      <div className="search-results__container">
        <section className="search-results__header">
          <h1 className="search-results__header-title">Buscaste: 
            <span className="search-results__header-highlight">
              "{searchTerm.toLocaleUpperCase()}"
            </span>
          </h1>
          <p className="search-results__header-description">Mostramos los resultados más relevantes relacionados con tu búsqueda.</p>
        </section>
        
        {loading ? (
          <p className="search-results__loading">Cargando...</p>
        ) : results.length === 0 ? (
          <p className="search-results__empty">No se encontraron resultados.</p>
        ) : (
          <section className="search-results__body">
            <h2 className="search-results__body-title">Resultados encontrados ({results.length})</h2>
            <CryptoList cryptos={results} className="search-results__list"/>
          </section>
        )}
      </div>
    </main>
  );
};

export default SearchResults;
