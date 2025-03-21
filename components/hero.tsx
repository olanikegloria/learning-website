"use client"

import Link from "next/link"
import Image from "next/image"
import { Menu, X } from "lucide-react"
import { useState } from "react"

export default function Hero() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <section className="relative w-full h-[500px] md:h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image src="/images/hero.png" alt="Hero Background" fill priority className="object-cover" />
        <div className="absolute inset-0 bg-blue-900/60"></div>
      </div>

      {/* Navigation */}
      <div className="relative container mx-auto px-4 py-4 flex justify-end">
        <div className="hidden md:flex space-x-6">
          <Link href="/" className="text-white hover:text-orange-300">
            Home
          </Link>
          <Link href="/login" className="text-white hover:text-orange-300">
            Login
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden relative z-50">
          <div className="bg-white shadow-md absolute right-4 top-14 w-40 rounded-md">
            <div className="flex flex-col py-2">
              <Link href="/" className="px-4 py-2 text-gray-700 hover:bg-gray-100" onClick={() => setIsMenuOpen(false)}>
                Home
              </Link>
              <Link
                href="/login"
                className="px-4 py-2 text-gray-700 hover:bg-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                Login
              </Link>
            </div>
          </div>
        </div>
      )}

      {/* Hero Content */}
      <div className="relative h-full container mx-auto px-4 flex flex-col justify-center">
        <div className="max-w-3xl">
          <div className="inline-flex items-center bg-orange-500/90 text-white px-3 py-1 rounded-full text-sm mb-6">
            <span className="mr-2 bg-white rounded-full w-2 h-2"></span>
            ON-DEMAND ONLINE TRAINING
          </div>

          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Start. Learn. Grow</h1>

          <p className="text-white text-lg md:text-xl mb-8">Learn from industry leaders and experienced instructors.</p>

          <Link
            href="/courses"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium px-8 py-3 rounded-full transition-colors"
          >
            ALL COURSE
          </Link>
        </div>
      </div>

      {/* Curved Bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 100" className="w-full h-auto">
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,32L80,42.7C160,53,320,75,480,74.7C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,100L1360,100C1280,100,1120,100,960,100C800,100,640,100,480,100C320,100,160,100,80,100L0,100Z"
          ></path>
        </svg>
      </div>
    </section>
  )
}

