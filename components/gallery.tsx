"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

const galleryItems = [
  {
    before: "/cluttered-garage-before-junk-removal.jpg",
    after: "/clean-empty-garage-after-junk-removal.jpg",
    title: "Garage Cleanup",
  },
  {
    before: "/messy-yard-debris-before-removal.jpg",
    after: "/clean-yard-after-debris-removal.jpg",
    title: "Yard Cleanup",
  },
  {
    before: "/construction-debris-pile-before.jpg",
    after: "/clean-construction-site-after.jpg",
    title: "Construction Debris",
  },
]

export default function Gallery() {
  const [activeIndex, setActiveIndex] = useState(0)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    const element = document.getElementById("gallery-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="gallery-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Before & After <span className="text-orange-500">Gallery</span>
          </h2>
          <p className="text-gray-400 text-lg">See the transformation we deliver</p>
        </div>

        {/* Main Gallery */}
        <div className="mb-12">
          <div
            className={`relative rounded-xl overflow-hidden shadow-2xl transform transition-all duration-1000 ${
              isVisible ? "scale-100 opacity-100" : "scale-95 opacity-0"
            }`}
          >
            <div className="grid grid-cols-2 gap-4 bg-black p-4">
              {/* Before */}
              <div className="relative group">
                <Image
                  src={galleryItems[activeIndex].before || "/placeholder.svg"}
                  alt={`Before - ${galleryItems[activeIndex].title}`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">BEFORE</span>
                </div>
              </div>

              {/* After */}
              <div className="relative group">
                <Image
                  src={galleryItems[activeIndex].after || "/placeholder.svg"}
                  alt={`After - ${galleryItems[activeIndex].title}`}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover rounded-lg"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold text-lg">AFTER</span>
                </div>
              </div>
            </div>

            {/* Title */}
            <div className="bg-gradient-to-r from-orange-500 to-blue-600 p-4 text-center">
              <h3 className="text-white font-bold text-xl">{galleryItems[activeIndex].title}</h3>
            </div>
          </div>
        </div>

        {/* Thumbnails */}
        <div className="flex gap-4 justify-center flex-wrap">
          {galleryItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`px-6 py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                activeIndex === index
                  ? "bg-orange-500 text-white shadow-lg shadow-orange-500/50"
                  : "bg-gray-800 text-gray-300 hover:bg-gray-700"
              }`}
            >
              {item.title}
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
