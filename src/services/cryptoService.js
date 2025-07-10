const API_URL = "https://api.coingecko.com/api/v3";

export const getTopCryptos = async () => {
  try {
    const res = await fetch(
      `${API_URL}/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1`
    );
    if (!res.ok) throw new Error("Error al obtener datos");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en getTopCryptos:", error);
    return [];
  }
};

export const getCryptoById = async (id) => {
  try {
    const res = await fetch(`${API_URL}/coins/${id}`);
    if (!res.ok) throw new Error("Cripto no encontrada");
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error en getCryptoById:", error);
    return null;
  }
};
