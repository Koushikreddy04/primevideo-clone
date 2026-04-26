// Movies page component that displays movie listings with filtering by language
import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import MovieRow from "../components/MovieRow"
import Footer from "../components/Footer"
import { movies } from "../data/movies"

// Main movies listing page (note: function named Home but it's the Movies page)
export default function Home() {

  // Get URL parameters for language filtering
  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const selectedLang = params.get("lang")

  // Filter movies based on selected language or show all
  const filteredMovies = selectedLang
    ? movies.filter(m => m.language === selectedLang)
    : movies

  return (
    <div className="bg-[#0F171E] min-h-screen text-white">

      <Navbar />

      <div className="pt-[80px]">

        {/* Display hero banner for the first movie in filtered list */}
        {filteredMovies.length > 0 && (
          <HeroBanner movie={filteredMovies[0]} />
        )}

        {/* Render movie rows based on language filter */}
        {selectedLang ? (
          <MovieRow
            title={`${selectedLang} Movies`}
            movies={filteredMovies}
          />
        ) : (
          <>
            <MovieRow
              title="Telugu Movies"
              movies={movies.filter(m => m.language === "Telugu")}
            />
            <MovieRow
              title="Hindi Movies"
              movies={movies.filter(m => m.language === "Hindi")}
            />
            <MovieRow
              title="Tamil Movies"
              movies={movies.filter(m => m.language === "Tamil")}
            />
            <MovieRow
              title="Malayalam Movies"
              movies={movies.filter(m => m.language === "Malayalam")}
            />
            <MovieRow
              title="Kannada Movies"
              movies={movies.filter(m => m.language === "Kannada")}
            />
          </>
        )}

        <Footer />

      </div>
    </div>
  )
}