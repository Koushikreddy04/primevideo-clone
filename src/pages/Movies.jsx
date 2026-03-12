import { useLocation } from "react-router-dom"
import Navbar from "../components/Navbar"
import HeroBanner from "../components/HeroBanner"
import MovieRow from "../components/MovieRow"
import Footer from "../components/Footer"
import { movies } from "../data/movies"

export default function Home() {

  const location = useLocation()
  const params = new URLSearchParams(location.search)
  const selectedLang = params.get("lang")

  const filteredMovies = selectedLang
    ? movies.filter(m => m.language === selectedLang)
    : movies

  return (
    <div className="bg-[#0F171E] min-h-screen text-white">

      <Navbar />

      <div className="pt-[80px]">

        {/* Banner updates automatically */}
        {filteredMovies.length > 0 && (
          <HeroBanner movie={filteredMovies[0]} />
        )}

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