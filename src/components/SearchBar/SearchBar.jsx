import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Icons from "../../icons/icons"; 
import "./SearchBar.css";

const SearchBar = ({ cryptos = [] }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const navigate = useNavigate();
  const wrapperRef = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    const regex = /^[a-zA-Z]*$/;
    if (regex.test(value)) {
      setSearchTerm(value);
      setShowDropdown(value.length > 0);
    }
  };

  const lowerTerm = searchTerm.toLowerCase();

  const matchBoth = cryptos.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerTerm) &&
      c.symbol.toLowerCase().includes(lowerTerm)
  );

  const matchSymbol = cryptos.filter(
    (c) =>
      c.symbol.toLowerCase().includes(lowerTerm) &&
      !matchBoth.includes(c)
  );

  const matchName = cryptos.filter(
    (c) =>
      c.name.toLowerCase().includes(lowerTerm) &&
      !matchBoth.includes(c) &&
      !matchSymbol.includes(c)
  );

  const filteredCryptos = [...matchSymbol, ...matchBoth, ...matchName];

  const handleSearch = () => {
    if (!searchTerm.trim()) return;
    setShowDropdown(false);
    navigate(`/search/${searchTerm.trim().toLowerCase()}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  // Cerrar dropdown si se clickea afuera
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target)) {
        setShowDropdown(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Limpiar input y cerrar dropdown
  const clearSearch = () => {
    setSearchTerm("");
    setShowDropdown(false);
  };

  return (
    <div className="search-bar" ref={wrapperRef}>
      <div className="search-bar__input-wrapper">
        <Icons.Search className="search-bar__icon" />
        <input
          type="text"
          className="search-bar__input"
          placeholder="Buscar criptomoneda"
          value={searchTerm}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
          onFocus={() => {
            if (searchTerm.trim()) {
              setShowDropdown(true);
            }
          }}
          autoComplete="off"
          pattern="[a-zA-Z]*"
          title="Solo se permiten letras"
        />
        {searchTerm && (
          <Icons.Close className="search-bar__clear-btn"
          onClick={clearSearch}
          aria-label="Limpiar búsqueda" />
        )}
      </div>

      {showDropdown && (
        <ul className="search-bar__dropdown">
          {filteredCryptos.length > 0 ? (
            filteredCryptos.map((crypto) => (
              <li
                key={crypto.id}
                className="search-bar__dropdown-item"
                onClick={() => {
                  setShowDropdown(false);
                  navigate(`/crypto/${crypto.id}`);
                }}
              >
                <img src={crypto.image} alt={crypto.name} className="crypto-image" />
                <p className="crypto-info">
                  ({crypto.symbol.toUpperCase()}) - {crypto.name}
                </p>
              </li>
            ))
          ) : (
            <li
              className="search-bar__dropdown-item search-bar__dropdown-item--search"
              onClick={handleSearch}
            >
              Buscar "{searchTerm}"
            </li>
          )}
        </ul>
      )}
    </div>
  );
};

export default SearchBar;
