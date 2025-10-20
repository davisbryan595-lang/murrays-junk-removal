"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-black pt-20">
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black/60 z-10" />
        <Image
          src="/orange-dump-truck-junk-removal-action-shot.jpg"
          alt="Orange dump truck in action"
          fill
          className="object-cover"
          priority
          quality={85}
        />
      </div>

      {/* Floating particles effect */}
      <div className="absolute inset-0 z-5 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-orange-500 rounded-full opacity-30 animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${3 + Math.random() * 4}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Headline */}
        <h1
          className={`text-4xl sm:text-5xl lg:text-7xl font-bold text-white mb-6 transform transition-all duration-1000 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
          style={{
            textShadow: "0 0 30px rgba(255, 140, 0, 0.5)",
          }}
        >
          Hauling Made Easy
        </h1>

        {/* Tagline */}
        <p
          className={`text-lg sm:text-xl lg:text-2xl text-gray-200 mb-12 transform transition-all duration-1000 delay-300 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          Louisville's Trusted Junk Removal & Trailer Rental Pros
        </p>

        {/* CTA Buttons */}
        <div
          className={`flex flex-col sm:flex-row gap-4 justify-center transform transition-all duration-1000 delay-500 ${
            isLoaded ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
          }`}
        >
          <button
            className="px-8 py-4 bg-orange-500 text-white font-bold text-lg rounded-lg hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-orange-500/50 hover:shadow-2xl transform hover:scale-105 border-2 border-orange-400"
            style={{
              boxShadow: "0 0 20px rgba(255, 140, 0, 0.3)",
            }}
          >
            Book a Service
          </button>
          <button
            className="w-full py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105">
            Call Now: 502-558-3275
          </button>

        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          50% {
            transform: translateY(-20px) translateX(10px);
          }
        }
      `}</style>
    </section>
  )
}
