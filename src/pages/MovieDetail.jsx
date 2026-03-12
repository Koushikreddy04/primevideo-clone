import { useParams } from "react-router-dom"
import Navbar from "../components/Navbar"
import { movies } from "../data/movies"

export default function MovieDetail() {
  const { id } = useParams()
  const movie = movies.find(m => m.id === Number(id))

  return (
    <div>
      <Navbar />

      <div
        className="h-[400px] bg-cover bg-center p-10"
        style={{ backgroundImage: `url(${movie.backdropUrl})` }}
      >
        <h1 className="text-4xl font-bold">{movie.title}</h1>
      </div>

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