// Subscribe page component for handling user subscription and payment
import { useNavigate } from "react-router-dom"

// Component for the subscription page
export default function Subscribe() {

  // Hook for navigation after payment
  const navigate = useNavigate()

  // Handle payment and update user subscription status
  const handlePayment = () => {
    const user = JSON.parse(localStorage.getItem("user"))

    if (user) {
      user.isSubscribed = true
      localStorage.setItem("user", JSON.stringify(user))
      alert("Payment Successful 🎉 Subscription Activated!")
      navigate("/movies")
    }
  }

  return (
    <div className="min-h-screen bg-[#0F171E] text-white flex items-center justify-center">

      <div className="bg-[#1A242F] p-10 rounded-lg w-[400px] text-center space-y-6">

        <h1 className="text-2xl font-bold">
          Prime Subscription
        </h1>

        <p className="text-gray-400">
          Subscribe for ₹499/year and enjoy unlimited streaming.
        </p>

        <button
          onClick={handlePayment}
          className="w-full bg-[#00A8E1] hover:bg-[#0093c4] p-3 rounded-md font-semibold transition"
        >
          Pay ₹499
        </button>

      </div>

    </div>
  )
}