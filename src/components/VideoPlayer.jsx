// VideoPlayer component for playing movies with basic controls
import { useState } from "react"

// Component that displays a simple video player interface
export default function VideoPlayer({ movie }) {
  // State for play/pause
  const [playing, setPlaying] = useState(false)

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-white">
      {/* Movie title display */}
      <h1 className="absolute top-4 left-4 text-lg">{movie.title}</h1>

      {/* Video area placeholder */}
      <div className="w-3/4 h-1/2 bg-gray-800 flex items-center justify-center">
        <button
          className="btn btn-primary"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      {/* Progress slider */}
      <div className="w-3/4 mt-4">
        <input type="range" className="range range-primary" />
      </div>
    </div>
  )
}