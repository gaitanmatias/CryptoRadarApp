import { handleApiError } from "../utils/apiErrorHandler";

const API_URL = "https://api.coingecko.com/api/v3";

const getCache = (key) => {
  const cached = sessionStorage.getItem(key);
  return cached ? JSON.parse(cached) : null;
};

const setCache = (key, data) => {
  sessionStorage.setItem(key, JSON.stringify(data));
};

export const getTopCryptos = async () => {
  const cacheKey = "top_100_cryptos";
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
    );
    if (!res.ok) {
      throw new Error("Error en la api");
    }

    const data = await res.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    handleApiError();
    console.error("Error en getTopCryptos:", error);
    return [];
  }
};

export const getCryptoById = async (id) => {
  const cacheKey = `crypto_${id}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(`${API_URL}/coins/${id}`);
    if (!res.ok) {
      throw new Error("Error en la api");
    }

    const data = await res.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    handleApiError();
    console.error("Error en getCryptoById:", error);
    return null;
  }
};

export const getCryptoChart = async (id, days) => {
  const cacheKey = `chart_${id}_${days}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(
      `${API_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    if (!res.ok) {
      throw new Error("Error en la api");
    }
    
    const data = await res.json();
    setCache(cacheKey, data.prices);
    return data.prices;
  } catch (error) {
    handleApiError();
    console.error("Error en getCryptoChart:", error);
    return [];
  }
};

export const searchCryptos = async (query) => {
  const cacheKey = `search_${query.toLowerCase()}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(`${API_URL}/search?query=${query}`);
    if (!res.ok) {
      throw new Error("Error en la api");
    }

    const data = await res.json();
    const ids = data.coins.map((coin) => coin.id).join(",");
    if (!ids) return [];

    const marketRes = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&ids=${ids}`
    );

    const result = await marketRes.json();
    setCache(cacheKey, result);
    return result;
  } catch (error) {
    handleApiError();
    console.error("Error en searchCryptos:", error);
    return [];
  }
};

export const getCryptosByIds = async (ids) => {
  if (!ids.length) return [];

  const cacheKey = `favorites_${ids.slice().sort().join(",")}`;
  const cached = getCache(cacheKey);
  if (cached) return cached;

  try {
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&ids=${ids.join(",")}`
    );
    if (!res.ok) {
      throw new Error("Error en la api");
    }

    const data = await res.json();
    setCache(cacheKey, data);
    return data;
  } catch (error) {
    handleApiError();
    console.error("Error en getCryptosByIds:", error);
    return [];
  }
};
