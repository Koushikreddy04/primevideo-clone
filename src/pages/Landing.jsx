// Landing page component for user authentication
import { useNavigate } from "react-router-dom"
import { useState } from "react"

// Component for the login/sign-in page
export default function Landing() {

  // Hook for navigation
  const navigate = useNavigate()
  // State for email and password inputs
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  // Handle form submission for login
  const handleLogin = (e) => {
    e.preventDefault()

    if (email && password) {
      navigate("/movies")
    } else {
      alert("Please enter email and password")
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0F171E] text-white">

      <div className="bg-[#1A242F] p-10 rounded-lg shadow-2xl w-[400px]">

        <h1 className="text-3xl font-bold mb-8 text-center">
          Prime Video
        </h1>

        <form onSubmit={handleLogin} className="flex flex-col gap-4">

          <input
            type="email"
            placeholder="Email"
            className="p-3 rounded-md bg-[#243447] outline-none focus:ring-2 focus:ring-[#00A8E1]"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Password"
            className="p-3 rounded-md bg-[#243447] outline-none focus:ring-2 focus:ring-[#00A8E1]"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-[#00A8E1] hover:bg-[#0093c4] transition duration-300 p-3 rounded-md font-semibold"
          >
            Sign In
          </button>

        </form>

        <div className="mt-6 text-center text-sm">
          <p className="mb-3 text-gray-400">
            New to Prime?
          </p>

          <button
            className="w-full bg-[#243447] hover:bg-[#2d3e50] transition duration-300 p-3 rounded-md font-semibold"
          >
            Join Now
          </button>
        </div>

      </div>
    </div>
  )
}