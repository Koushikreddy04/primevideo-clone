import { useState } from "react"

export default function VideoPlayer({ movie }) {
  const [playing, setPlaying] = useState(false)

  return (
    <div className="h-screen bg-black flex flex-col justify-center items-center text-white">
      <h1 className="absolute top-4 left-4 text-lg">{movie.title}</h1>

      <div className="w-3/4 h-1/2 bg-gray-800 flex items-center justify-center">
        <button
          className="btn btn-primary"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? "Pause" : "Play"}
        </button>
      </div>

      <div className="w-3/4 mt-4">
        <input type="range" className="range range-primary" />
      </div>
    </div>
  )
}