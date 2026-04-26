// MovieDetail page component for displaying detailed information about a specific movie
import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { movies } from "../data/movies"

// Component to show movie details based on ID from URL
export default function MovieDetail() {
  // Get movie ID from URL parameters
  const { id } = useParams()
  // Find the movie object by ID
  const movie = movies.find(m => m.id === Number(id))

  return (
    <div>
      <Navbar />

      {/* Backdrop image with title overlay */}
      <div
        className="h-[400px] bg-cover bg-center p-10"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <h1 className="text-4xl font-bold">{movie.title}</h1>
      </div>

      {/* Movie details section */}
      <div className="p-10">
        <p>{movie.description}</p>

        <div className="mt-4 flex gap-2">
          <span className="badge badge-primary">{movie.genre}</span>
          <span className="badge badge-outline">{movie.year}</span>
          <span className="badge badge-outline">{movie.duration}</span>
        </div>
      </div>
    </div>
  )
}