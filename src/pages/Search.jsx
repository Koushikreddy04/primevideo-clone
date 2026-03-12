import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import MovieRow from "../components/MovieRow"
import { movies } from "../data/movies"

export default function Search() {
  const query = new URLSearchParams(useLocation().search)
  const searchText = query.get("q")?.toLowerCase() || ""

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

        {filteredMovies.length > 0 ? (
          <MovieRow title="Search Results" movies={filteredMovies} />
        ) : (
          <p>No movies found.</p>
        )}

      </div>
    </div>
  )
}