// HeroBanner component displays a featured movie with backdrop, title, description, and play button
import { Link } from "react-router-dom"

// Component takes a movie prop to display its details
export default function HeroBanner({ movie }) {
  return (
    <div
      className="h-[500px] bg-cover bg-center flex items-end p-8"
      style={{ backgroundImage: `url(${movie.backdropUrl})` }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-5 rounded-xl max-w-md shadow-2xl">
        
        <h1 className="text-2xl md:text-3xl font-semibold leading-tight">
          {movie.title}
        </h1>

        <p className="mt-2 text-sm text-gray-300 line-clamp-3">
          {movie.description}
        </p>

        <div className="mt-4">
          <Link
            to={`/player/${movie.id}`}
            className="px-5 py-2 bg-[#00A8E1] hover:bg-[#0093c4] transition duration-300 rounded-md text-sm font-medium"
          >
            ▶ Play
          </Link>
        </div>

      </div>
    </div>
  )
}