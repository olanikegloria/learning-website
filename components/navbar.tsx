"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <div className="relative h-10 w-40">
            <Image src="/images/logo.png" alt="Live Your Dreams Africa" fill className="object-contain" />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-orange-500">
            Home
          </Link>
          <Link href="/login" className="text-gray-700 hover:text-orange-500">
            Login
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="container mx-auto px-4 py-3 flex flex-col space-y-3">
            <Link href="/" className="text-gray-700 hover:text-orange-500 py-2" onClick={() => setIsMenuOpen(false)}>
              Home
            </Link>
            <Link
              href="/login"
              className="text-gray-700 hover:text-orange-500 py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Login
            </Link>
          </div>
        </div>
      )}
    </header>
  )
}

