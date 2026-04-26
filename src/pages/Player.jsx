// Player page component that renders the video player for a selected movie
import { useParams } from "react-router-dom"
import { movies } from "../data/movies"
import VideoPlayer from "../components/VideoPlayer"

// Component to display the video player page
export default function Player() {
  // Get movie ID from URL
  const { id } = useParams()
  // Find the movie by ID
  const movie = movies.find(m => m.id === Number(id))

  // Render the VideoPlayer component with the movie
  return <VideoPlayer movie={movie} />
}