import { Link } from "react-router-dom"

export default function HeroBanner({ movie }) {
  return (
    <div
      className="h-[280px] sm:h-[360px] md:h-[500px] bg-cover bg-center flex items-end p-4 sm:p-6 md:p-8"
      style={{ backgroundImage: `url(${movie.backdropUrl})` }}
    >
      <div className="bg-black/60 backdrop-blur-sm p-4 sm:p-5 rounded-xl max-w-xs sm:max-w-sm md:max-w-md shadow-2xl">

        <h1 className="text-lg sm:text-xl md:text-3xl font-semibold leading-tight">
          {movie.title}
        </h1>

        <p className="mt-2 text-xs sm:text-sm text-gray-300 line-clamp-3">
          {movie.description}
        </p>

        <div className="mt-3 sm:mt-4">
          <Link
            to={`/player/${movie.id}`}
            className="px-4 sm:px-5 py-2 bg-[#00A8E1] hover:bg-[#0093c4] transition duration-300 rounded-md text-xs sm:text-sm font-medium"
          >
            ▶ Play
          </Link>
        </div>

      </div>
    </div>
  )
}