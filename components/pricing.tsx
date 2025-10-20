"use client"

import { useEffect, useState } from "react"

const pricingTiers = [
  {
    name: "Small Haul",
    price: "$99",
    description: "Perfect for small cleanups",
    items: ["Up to 1/4 truck load", "Same-day service", "Professional crew"],
  },
  {
    name: "Medium Haul",
    price: "$249",
    description: "Most popular choice",
    items: ["Up to 1/2 truck load", "Same-day service", "Professional crew", "Furniture removal"],
    featured: true,
  },
  {
    name: "Full Haul",
    price: "$399",
    description: "Complete cleanup",
    items: ["Full truck load", "Same-day service", "Professional crew", "Heavy debris", "Yard cleanup"],
  },
]

export default function Pricing() {
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

    const element = document.getElementById("pricing-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="pricing-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Simple, Transparent <span className="text-orange-500">Pricing</span>
          </h2>
          <p className="text-gray-400 text-lg">No hidden fees, no surprises</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {pricingTiers.map((tier, index) => (
            <div
              key={index}
              className={`relative transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              } ${tier.featured ? "md:scale-105" : ""}`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {tier.featured && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-10">
                  <span className="bg-orange-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                    MOST POPULAR
                  </span>
                </div>
              )}

              <div
                className={`h-full p-8 rounded-xl border-2 transition-all duration-300 ${
                  tier.featured
                    ? "bg-gradient-to-br from-orange-500/10 to-blue-600/10 border-orange-500 shadow-lg shadow-orange-500/20"
                    : "bg-gray-900 border-gray-800 hover:border-orange-500"
                }`}
              >
                <h3 className="text-2xl font-bold text-white mb-2">{tier.name}</h3>
                <p className="text-gray-400 mb-6">{tier.description}</p>

                <div className="mb-8">
                  <span className="text-5xl font-bold text-orange-500">{tier.price}</span>
                  <span className="text-gray-400 ml-2">+ tax</span>
                </div>

                <ul className="space-y-3 mb-8">
                  {tier.items.map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-300">
                      <span className="text-orange-500">✓</span>
                      {item}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 rounded-lg font-bold transition-all duration-300 transform hover:scale-105 ${
                    tier.featured
                      ? "bg-orange-500 text-white hover:bg-orange-600 shadow-lg shadow-orange-500/30"
                      : "bg-gray-800 text-white hover:bg-gray-700"
                  }`}
                >
                  Request Custom Quote
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-400 text-lg mb-4">
            Need a custom quote? We offer flexible pricing for large projects.
          </p>
          <button className="px-8 py-3 bg-blue-600 text-white font-bold rounded-lg hover:bg-blue-700 transition-all duration-300 transform hover:scale-105">
            Get a Free Estimate
          </button>
        </div>
      </div>
    </section>
  )
}
