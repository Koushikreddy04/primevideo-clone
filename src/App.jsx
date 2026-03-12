import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Landing from "./pages/Landing"
import Movies from "./pages/Movies"
import MovieDetail from "./pages/MovieDetail"
import Player from "./pages/Player"
import Search from "./pages/Search"
import Watchlist from "./pages/Watchlist"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Landing />} />
      <Route path="/movies" element={<Movies />} />
      <Route path="/movie/:id" element={<MovieDetail />} />
      <Route path="/player/:id" element={<Player />} />
      <Route path="/search" element={<Search />} />
      <Route path="/watchlist" element={<Watchlist />} />
    </Routes>
  )
}