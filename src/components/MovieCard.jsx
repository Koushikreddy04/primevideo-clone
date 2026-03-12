import { Link } from "react-router-dom"
import { useState, useEffect } from "react"

export default function MovieCard({ movie }) {

  const [watchlist, setWatchlist] = useState([])

  useEffect(() => {
    try {
      const saved = localStorage.getItem("watchlist")
      if (saved) {
        setWatchlist(JSON.parse(saved))
      }
    } catch {
      setWatchlist([])
    }
  }, [])

  const toggleWatchlist = () => {
    let updated

    if (watchlist.includes(movie.id)) {
      updated = watchlist.filter(id => id !== movie.id)
    } else {
      updated = [...watchlist, movie.id]
    }

    setWatchlist(updated)

    try {
      localStorage.setItem("watchlist", JSON.stringify(updated))
    } catch {}
  }

  return (
    <div className="relative group w-[200px] flex-shrink-0">

      {/* Poster */}
      <div className="overflow-hidden rounded-xl transition-all duration-300 group-hover:scale-110 group-hover:z-50 group-hover:shadow-2xl">

        <img
          src={movie.posterUrl}
          alt={movie.title}
          className="w-full h-[300px] object-cover"
        />

        {/* Hover Info Panel */}
        <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black via-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 p-4 rounded-xl">

          <h3 className="font-semibold text-sm mb-2">
            {movie.title}
          </h3>

          <div className="flex flex-wrap gap-2 text-xs text-gray-300 mb-2">
            <span>⭐ {movie.rating}</span>
            <span>{movie.year}</span>
            <span>{movie.duration}</span>
            <span>{movie.genre}</span>
          </div>

          <p className="text-xs text-gray-400 line-clamp-3">
            {movie.description}
          </p>

          <div className="flex gap-2 mt-3">
            <Link
              to={`/player/${movie.id}`}
              className="px-3 py-1 bg-[#00A8E1] hover:bg-[#0093c4] text-xs rounded-md transition"
            >
              ▶ Play
            </Link>

            <button
              onClick={toggleWatchlist}
              className="px-3 py-1 bg-gray-700 hover:bg-gray-600 text-xs rounded-md transition"
            >
              {watchlist.includes(movie.id)
                ? "Remove"
                : "Watchlist"}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}