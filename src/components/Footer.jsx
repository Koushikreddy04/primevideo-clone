export default function Footer() {
  return (
    <footer className="bg-[#0F171E] border-t border-[#1A242F] mt-16 py-10">

      <div className="flex flex-col items-center text-center space-y-4">

        {/* Logo Text */}
        <h2 className="text-xl font-semibold text-white tracking-wide">
          prime video
        </h2>

        {/* Links */}
        <div className="flex flex-wrap justify-center gap-6 text-sm text-blue-400">
          <a href="#" className="hover:underline">
            Terms and Privacy Notice
          </a>
          <a href="#" className="hover:underline">
            Send us feedback
          </a>
          <a href="#" className="hover:underline">
            Help
          </a>
        </div>

        {/* Copyright */}
        <p className="text-gray-500 text-sm mt-2">
          © 2026 Prime Video Clone. All rights reserved.
        </p>

      </div>

    </footer>
  )
}