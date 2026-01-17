'use client'
import { useState } from "react"
import Link from "next/link"
import { MdClose, MdMenu } from "react-icons/md"

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center">
            <img src="/Logo.png" alt="Logo" className="h-10 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-700">
            <Link href="/" className="hover:text-green-700">Home</Link>
            <Link href="/how-to-work" className="hover:text-green-700">How It Works</Link>
            <Link href="/pricing" className="hover:text-green-700">Pricing</Link>
            <Link href="/book" className="hover:text-green-700">Book</Link>
            <Link href="/about" className="hover:text-green-700">About</Link>
            <Link href="/contact" className="hover:text-green-700">Contact</Link>
          </div>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-4">
            <Link href="/login" className="text-sm font-medium text-gray-700 hover:text-green-700">
              Login
            </Link>

            <Link href="/signup" className="px-4 py-2 border border-gray-300 text-gray-700 rounded-md text-sm font-medium hover:bg-gray-100">
              Sign Up
            </Link>

            <Link href="/book" className="px-5 py-2 bg-green-900 text-white rounded-md text-sm font-semibold hover:bg-green-800 transition">
              Book Yard Work
            </Link>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-gray-700"
          >
            {open ? <MdClose size={28} /> : <MdMenu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden bg-white border-t px-4 py-6 space-y-5 text-sm font-medium text-gray-700">

          <Link href="/" onClick={() => setOpen(false)} className="block">Home</Link>
          <Link href="/how-it-works" onClick={() => setOpen(false)} className="block">How It Works</Link>
          <Link href="/pricing" onClick={() => setOpen(false)} className="block">Pricing</Link>
          <Link href="/book" onClick={() => setOpen(false)} className="block">Book</Link>
          <Link href="/about" onClick={() => setOpen(false)} className="block">About</Link>
          <Link href="/contact" onClick={() => setOpen(false)} className="block">Contact</Link>

          <div className="pt-4 border-t space-y-3">
            <Link href="/login" onClick={() => setOpen(false)} className="block">Login</Link>

            <Link href="/signup" onClick={() => setOpen(false)} className="block border px-4 py-2 rounded-md">
              Sign Up
            </Link>

            <Link
              href="/book"
              onClick={() => setOpen(false)}
              className="block bg-green-900 text-white text-center px-4 py-2 rounded-md"
            >
              Book Yard Work
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}
