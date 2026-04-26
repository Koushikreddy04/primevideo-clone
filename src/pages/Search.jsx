// Search page component that displays search results based on query parameter
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import { movies } from "../data/movies"

// Component for the search results page
export default function Search() {
  // Get search query from URL parameters
  const query = new URLSearchParams(useLocation().search)
  const searchText = query.get("q")?.toLowerCase() || ""

  // Filter movies that match the search text in title
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText)
  )

  return (
    <div className="bg-[#0F171E] min-h-screen text-white">
      <Navbar />

      <div className="pt-[80px] px-8">

        <h2 className="text-2xl font-bold mb-6">
          Results for "{searchText}"
        </h2>

        {/* Display search results or no results message */}
        {filteredMovies.length > 0 ? (
          <MovieRow title="Search Results" movies={filteredMovies} />
        ) : (
          <p>No movies found.</p>
        )}

      </div>
    </div>
  )
}