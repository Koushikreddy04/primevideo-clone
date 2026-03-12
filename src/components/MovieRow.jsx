import MovieCard from "./MovieCard"

export default function MovieRow({ title, movies }) {
  return (
    <div className="px-6 mt-8">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>

      <div className="flex gap-5 overflow-x-auto pb-4">
        {movies.map(movie => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  )
}