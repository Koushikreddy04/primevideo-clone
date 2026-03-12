import { useParams } from "react-router-dom"
import { movies } from "../data/movies"
import VideoPlayer from "../components/VideoPlayer"

export default function Player() {
  const { id } = useParams()
  const movie = movies.find(m => m.id === Number(id))

  return <VideoPlayer movie={movie} />
}