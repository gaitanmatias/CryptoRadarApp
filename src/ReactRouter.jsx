import { Routes, Route } from 'react-router-dom'
import Layout from './layouts/Layout'
import HomePage from './pages/HomePage'
import DetailPage from './pages/DetailPage'
import WatchListPage from './pages/WatchlistPage'

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="crypto/:id" element={<DetailPage />} />
        <Route path="watchlist" element={<WatchListPage />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;