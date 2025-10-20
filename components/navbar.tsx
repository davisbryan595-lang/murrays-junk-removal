"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-black/95 backdrop-blur-md border-b border-orange-500/30" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 group">
            <div className="relative h-16 w-16 transition-all duration-300 group-hover:scale-110">
              <div
                className="absolute inset-0 bg-orange-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  animation: "float 3s ease-in-out infinite",
                }}
              />
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/murray-Yrs4dLBrpYbZB8Lr8IPd80Ia6AanTU.jpg"
                alt="Murray's Junk Removal Logo"
                fill
                className="object-contain drop-shadow-lg group-hover:drop-shadow-[0_0_15px_rgba(255,140,0,0.6)] transition-all duration-300"
                priority
              />
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection("about")}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="text-gray-300 hover:text-orange-500 transition-colors duration-300 font-medium"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="px-6 py-2 bg-orange-500 text-white font-bold rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/50"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden text-orange-500 hover:text-orange-400 transition-colors"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-black/95 border-t border-orange-500/30 py-4 space-y-3">
            <button
              onClick={() => scrollToSection("about")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("services")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection("gallery")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors"
            >
              Gallery
            </button>
            <button
              onClick={() => scrollToSection("pricing")}
              className="block w-full text-left px-4 py-2 text-gray-300 hover:text-orange-500 hover:bg-orange-500/10 rounded transition-colors"
            >
              Pricing
            </button>
            <button
              onClick={() => scrollToSection("contact")}
              className="block w-full text-left px-4 py-2 bg-orange-500 text-white font-bold rounded hover:bg-orange-600 transition-colors"
            >
              Contact
            </button>
          </div>
        )}
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </nav>
  )
}
