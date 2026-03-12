import MovieCard from "./MovieCard"

export default function MovieRow({ title, movies }) {
  return (
    <div className="px-4 md:px-6 mt-6 md:mt-8">

      {/* Title */}
      <h2 className="text-lg md:text-2xl font-bold mb-3 md:mb-4">
        {title}
      </h2>

      {/* Mobile Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 md:hidden">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

      {/* Desktop Scroll Row */}
      <div className="hidden md:flex gap-5 overflow-x-auto pb-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>

    </div>
  )
}