const API_URL = "https://api.coingecko.com/api/v3";

export const getTopCryptos = async () => {
  try {
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
    );
    if (!res.ok) throw new Error("Error al obtener datos");
    return await res.json();
  } catch (error) {
    console.error("Error en getTopCryptos:", error);
    return [];
  }
};

export const getCryptoById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/coins/${id}`);
    if (!res.ok) throw new Error("Cripto no encontrada");
    return await res.json();
  } catch (error) {
    console.error("Error en getCryptoById:", error);
    return null;
  }
};

export const getCryptoChart = async (id, days) => {
  try {
    const res = await fetch(
      `${API_URL}/coins/${id}/market_chart?vs_currency=usd&days=${days}`
    );
    if (!res.ok) throw new Error("Error al obtener gráfico");
    const data = await res.json();
    return data.prices;
  } catch (error) {
    console.error("Error en getCryptoChart:", error);
    return [];
  }
};

export const searchCryptos = async (query) => {
  try {
    const res = await fetch(`${API_URL}/search?query=${query}`);
    if (!res.ok) throw new Error("Error en búsqueda");
    const data = await res.json();

    const ids = data.coins.map((coin) => coin.id).join(",");
    if (!ids) return [];

    const marketRes = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&ids=${ids}`
    );
    return await marketRes.json();
  } catch (error) {
    console.error("Error en searchCryptos:", error);
    return [];
  }
};

export const getCryptosByIds = async (ids) => {
  try {
    if (!ids.length) return [];
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&ids=${ids.join(",")}`
    );
    if (!res.ok) throw new Error("Error al obtener favoritos");
    return await res.json();
  } catch (error) {
    console.error("Error en getCryptosByIds:", error);
    return [];
  }
};
