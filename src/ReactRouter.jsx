import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage/HomePage'
import DetailPage from './pages/DetailPage/DetailPage'
import WatchListPage from './pages/WatchlistPage/WatchlistPage'
import NotFoundPage from './pages/NotFoundPage/NotFoundPage'
import SearchResults from './pages/SearchResultsPage/SearchResultsPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="crypto/:id" element={<DetailPage />} />
        <Route path="watchlist" element={<WatchListPage />} />
        <Route path="/search/:searchTerm" element={<SearchResults />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;