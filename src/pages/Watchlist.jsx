// Watchlist page component that displays user's saved movies
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import { movies } from "../data/movies"

// Component for the user's watchlist page
export default function Watchlist() {

  // Get watchlist IDs from localStorage
  const watchlistIds =
    JSON.parse(localStorage.getItem("watchlist")) || []

  // Filter movies that are in the watchlist
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

        {/* Display watchlist movies or empty message */}
        {watchlistMovies.length > 0 ? (
          <MovieRow title="Saved Movies" movies={watchlistMovies} />
        ) : (
          <p>No movies in watchlist.</p>
        )}

      </div>
    </div>
  )
}