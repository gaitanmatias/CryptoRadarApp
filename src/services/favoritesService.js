const FAVORITES_KEY = "favoriteCoins";

export const getFavorites = () => {
  return JSON.parse(localStorage.getItem(FAVORITES_KEY)) || [];
};

export const isFavorite = (coinId) => {
  const favorites = getFavorites();
  return favorites.includes(coinId);
};

export const addFavorite = (coinId) => {
  const favorites = getFavorites();

  if (!favorites.includes(coinId)) {
    const updated = [...favorites, coinId];
    localStorage.setItem(FAVORITES_KEY, JSON.stringify(updated));
  }
};

export const removeFavorite = (coinId) => {
  const favorites = getFavorites().filter((id) => id !== coinId);
  localStorage.setItem(FAVORITES_KEY, JSON.stringify(favorites));
};
