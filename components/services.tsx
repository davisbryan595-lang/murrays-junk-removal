"use client"

import { useEffect, useState } from "react"

const services = [
  {
    title: "Junk Removal",
    description: "We haul it all — fast, affordable, professional. From furniture to construction debris.",
    icon: "🚚",
    color: "from-orange-500 to-orange-600",
  },
  {
    title: "Trailer Rental",
    description: "Rent high-quality trailers for any project. Flexible terms and competitive rates.",
    icon: "🛞",
    color: "from-blue-500 to-blue-600",
  },
  {
    title: "Sand & Mulch Delivery",
    description: "Bulk landscape materials delivered on time. Perfect for landscaping projects.",
    icon: "🏗️",
    color: "from-orange-600 to-red-600",
  },
]

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
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

    const element = document.getElementById("services-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="services-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Our <span className="text-orange-500">Services</span>
          </h2>
          <p className="text-gray-400 text-lg">Everything you need for junk removal and hauling</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className={`relative group cursor-pointer transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } ${hoveredIndex === index ? "scale-105" : "scale-100"}`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              {/* Card Background */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${service.color} rounded-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
              />

              {/* Card Content */}
              <div className="relative p-8 bg-gray-900 border-2 border-gray-800 rounded-xl hover:border-orange-500 transition-all duration-300">
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-2xl font-bold text-white mb-3">{service.title}</h3>
                <p className="text-gray-400 leading-relaxed">{service.description}</p>

                {/* Glow effect on hover */}
                <div
                  className={`absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none`}
                  style={{
                    boxShadow: `inset 0 0 20px rgba(255, 140, 0, 0.2)`,
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
