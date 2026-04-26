import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from "react-router-dom"
import { movies } from "../data/movies"

// This component renders the home page of the Prime Video app
// It displays a welcome message and a grid of movie previews
export default function Home() {

  // Get the first 6 movies from the data for the preview grid
  const previewMovies = movies.slice(0, 6)

  return (
    <div className="bg-black text-white min-h-screen">

      <Navbar />

      <div className="pt-[80px]">

        {/* Main content section with left and right sides */}
        <div className="flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-16 gap-12">

          {/* Left side: Welcome text and sign-in button */}
          <div className="max-w-xl space-y-6">

            <h2 className="text-2xl font-semibold text-gray-200">
              Hi!
            </h2>

            <h1 className="text-4xl md:text-5xl font-bold leading-tight">
              Welcome to Prime Video
            </h1>

            <p className="text-lg text-gray-300">
              Join Prime to watch the latest movies, TV shows and award-winning Originals.
            </p>

            <Link
              to="/login"
              className="inline-block bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-300 transition"
            >
              Sign in to join Prime
            </Link>

          </div>

          {/* Right side: Movie preview grid */}
          <div className="grid grid-cols-2 gap-4">

            {/* Loop through preview movies and render each one */}
            {previewMovies.map((movie) => (
              <div
                key={movie.id}
                className="w-[260px] h-[160px] rounded-xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-[0_0_20px_#00A8E1]"
              >
                <img
                  src={movie.backdropUrl}
                  alt={movie.title}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}

          </div>

        </div>

      </div>

      <Footer />

    </div>
  )
}