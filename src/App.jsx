// This file defines the main App component for the Prime Video clone
// It sets up the routing for different pages using React Router
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Movies from "./pages/Movies"
import MovieDetail from "./pages/MovieDetail"
import Player from "./pages/Player"
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"

// Main App component that handles all the routing
export default function App() {
  // Return the Routes component with all the defined paths
  return (
    <Routes>
      {/* Home page route */}
      <Route path="/" element={<Home />} />
      {/* Login/landing page */}
      <Route path="/login" element={<Landing />} />
      {/* Movies listing page */}
      <Route path="/movies" element={<Movies />} />
      {/* Individual movie detail page */}
      <Route path="/movie/:id" element={<MovieDetail />} />
      {/* Video player page */}
      <Route path="/player/:id" element={<Player />} />
      {/* Search page */}
      <Route path="/search" element={<Search />} />
      {/* Watchlist page */}
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  )
}