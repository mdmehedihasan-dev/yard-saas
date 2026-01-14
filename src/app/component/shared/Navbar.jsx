'use client'
import Link from "next/link"

export default function Navbar() {
  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex h-16 items-center justify-between">

          {/* Left: Logo */}
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-green-800 text-white flex items-center justify-center rounded-md font-bold">
              YH
            </div>
            <span className="font-semibold text-lg text-gray-900">
              YardHeroes
            </span>
          </div>

          {/* Center: Nav Links */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/how-it-works" className="hover:text-green-700">How It Works</Link>
            <Link href="/pricing" className="hover:text-green-700">Pricing</Link>
            <Link href="/book" className="hover:text-green-700">Book</Link>
            <Link href="/about" className="hover:text-green-700">About</Link>
            <Link href="/contact" className="hover:text-green-700">Contact</Link>
          </div>

          {/* Right: Actions */}
          <div className="flex items-center gap-4">
            <Link
              href="/login"
              className="text-sm font-medium text-gray-700 hover:text-green-700"
            >
              Login
            </Link>

            <Link
              href="/signup"
              className="px-4 py-2 border border-gray-300 rounded-md text-sm font-medium hover:bg-gray-100"
            >
              Sign Up
            </Link>

            <Link
              href="/book"
              className="px-5 py-2 bg-green-900 text-white rounded-md text-sm font-semibold hover:bg-green-800 transition"
            >
              Book Yard Work
            </Link>
          </div>

        </div>
      </div>
    </nav>
  )
}
