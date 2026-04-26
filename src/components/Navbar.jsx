// Navbar component with search, language filter, and profile menu
 import { Link, useNavigate, useLocation } from "react-router-dom"
import { useState, useEffect, useRef } from "react"
import { Search, User } from "lucide-react"
import { movies } from "../data/movies"

// Main navigation bar component
export default function Navbar() {

  // State for search functionality
  const [searchTerm, setSearchTerm] = useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSearch, setShowSearch] = useState(false)
  // State for dropdown menus
  const [langOpen, setLangOpen] = useState(false)
  const [profileOpen, setProfileOpen] = useState(false)

  // Hooks for navigation and location
  const navigate = useNavigate()
  const location = useLocation()

  // Refs for detecting outside clicks
  const searchRef = useRef(null)
  const langRef = useRef(null)
  const profileRef = useRef(null)

  // Available languages for filtering
  const languages = ["Telugu", "Hindi", "Tamil", "Malayalam", "Kannada"]

  /* ---------------- Search Suggestions ---------------- */
  // Update suggestions based on search term
  useEffect(() => {
    if (!searchTerm.trim()) {
      setSuggestions([])
      return
    }

    const filtered = movies.filter(movie =>
      movie.title.toLowerCase().includes(searchTerm.toLowerCase())
    )

    setSuggestions(filtered.slice(0, 5))
  }, [searchTerm])

  // Handle search form submission
  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`)
      setShowSearch(false)
    }
  }

  /* ---------------- Close On Outside Click ---------------- */
  // Effect to close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {

      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setShowSearch(false)
      }

      if (
        langRef.current &&
        !langRef.current.contains(event.target)
      ) {
        setLangOpen(false)
      }

      if (
        profileRef.current &&
        !profileRef.current.contains(event.target)
      ) {
        setProfileOpen(false)
      }

    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  // Helper function to create navigation items with active state
  const navItem = (name, path) => {
    const active = location.pathname === path
    return (
      <Link
        to={path}
        className={`px-3 py-2 text-sm font-medium transition
          ${active ? "text-white border-b-2 border-[#00A8E1]" : "text-gray-300 hover:text-white"}
        `}
      >
        {name}
      </Link>
    )
  }

  return (
    <div className="fixed top-0 left-0 w-full z-50 bg-[#0F171E] backdrop-blur-md shadow-md">

      <div className="flex items-center justify-between px-8 py-4 text-white">

        {/* LEFT SIDE: Logo and navigation links */}
        <div className="flex items-center gap-6">
          <Link to="/" className="text-xl font-bold">
            prime video
          </Link>

          {navItem("Home", "/")}
          {navItem("Movies", "/movies")}
          {navItem("Watchlist", "/watchlist")}
        </div>

        {/* RIGHT SIDE: Search, language, profile */}
        <div className="flex items-center gap-6 relative">

          {/* SEARCH SECTION */}
          <div ref={searchRef} className="relative">

            <button
              onClick={() => setShowSearch(!showSearch)}
              className="p-2 hover:bg-white/10 rounded-full transition"
            >
              <Search size={20} />
            </button>

            {showSearch && (
              <form
                onSubmit={handleSearch}
                className="absolute right-0 mt-2 bg-[#1A242F] p-3 rounded-lg shadow-lg w-64"
              >
                <input
                  autoFocus
                  type="text"
                  placeholder="Search movies..."
                  className="w-full bg-transparent outline-none text-sm text-white border-b border-gray-600 pb-1"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                {suggestions.length > 0 && (
                  <div className="mt-2">
                    {suggestions.map(movie => (
                      <div
                        key={movie.id}
                        className="px-2 py-1 hover:bg-[#243447] cursor-pointer text-sm rounded transition"
                        onClick={() => {
                          navigate(`/movie/${movie.id}`)
                          setShowSearch(false)
                          setSearchTerm("")
                        }}
                      >
                        {movie.title}
                      </div>
                    ))}
                  </div>
                )}
              </form>
            )}
          </div>

          {/* LANGUAGE DROPDOWN */}
          <div ref={langRef} className="relative">
            <button
              onClick={() => setLangOpen(!langOpen)}
              className="hover:bg-white/10 px-3 py-2 rounded-md transition"
            >
              EN
            </button>

            {langOpen && (
              <div className="absolute right-0 mt-2 w-40 bg-[#1A242F] rounded-md shadow-lg">
                {languages.map(lang => (
                  <div
                    key={lang}
                    className="px-4 py-2 hover:bg-[#243447] cursor-pointer transition"
                    onClick={() => {
                      navigate(`/movies?lang=${lang}`)
                      setLangOpen(false)
                    }}
                  >
                    {lang}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* PROFILE MENU */}
          <div ref={profileRef} className="relative">
            <User
              size={22}
              className="cursor-pointer hover:scale-110 transition"
              onClick={() => setProfileOpen(!profileOpen)}
            />

            {profileOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-[#1A242F] rounded-md shadow-lg">
                <div className="px-4 py-2 hover:bg-[#243447] cursor-pointer">
                  Account & Settings
                </div>
                <div className="px-4 py-2 hover:bg-[#243447] cursor-pointer">
                  Help
                </div>
                <div className="border-t border-gray-600"></div>
                <Link
                  to="/"
                  className="block px-4 py-2 hover:bg-[#243447]"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>

        </div>

      </div>
    </div>
  )
}