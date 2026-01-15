// React
import { useEffect, useState } from "react";

// Librías
import { useParams } from "react-router-dom";

// Servicios
import { searchCryptos } from "../../services/cryptoService";

// Componentes
import CryptoList from "../../components/CryptoList/CryptoList";
import Loader from "../../components/Loader/Loader";

// Estilos
import "./SearchResultsPage.css";

const SearchResultsPage = () => {
  const { searchTerm } = useParams();
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSearchResults = async () => {
      setLoading(true);
      const data = await searchCryptos(searchTerm);
      setResults(data);
      setLoading(false);
    };

    fetchSearchResults();
  }, [searchTerm]);

  return (
    <main className="search-results-page">
      <div className="search-results-page__content">
        <section className="search-results-page__header">
          <h1 className="search-results-page__title">
            Buscaste:
            <span className="search-results-page__title--highlight">
              "{searchTerm.toLocaleUpperCase()}"
            </span>
          </h1>
          <p className="search-results-page__description">
            Mostramos los resultados más relevantes relacionados con tu
            búsqueda.
          </p>
        </section>

        {loading ? (
          <Loader />
        ) : results.length === 0 ? (
          <p className="search-results-page__body--empty">No se encontraron resultados.</p>
        ) : (
          <section className="search-results-page__body">
            <h2 className="search-results-page__subtitle">
              Resultados encontrados ({results.length})
            </h2>
            <CryptoList className="search-results-page__crypto-list" cryptos={results} />
          </section>
        )}
      </div>
    </main>
  );
};

export default SearchResultsPage;
