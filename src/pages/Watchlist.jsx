import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import { movies } from "../data/movies"

export default function Watchlist() {

  const watchlistIds =
    JSON.parse(localStorage.getItem("watchlist")) || []

  const watchlistMovies = movies.filter((movie) =>
    watchlistIds.includes(movie.id)
  )

  return (
    <div className="bg-[#0F171E] min-h-screen text-white">

      <Navbar />

      <div className="pt-[80px] px-8">

        <h2 className="text-2xl font-bold mb-6">
          My Watchlist
        </h2>

        {watchlistMovies.length > 0 ? (
          <MovieRow title="Saved Movies" movies={watchlistMovies} />
        ) : (
          <p>No movies in watchlist.</p>
        )}

      </div>
    </div>
  )
}