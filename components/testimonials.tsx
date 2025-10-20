"use client"

import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "John Smith",
    role: "Homeowner",
    text: "Murray's team was incredibly professional and efficient. They cleared out my entire garage in just 2 hours!",
    rating: 5,
    avatar: "👨‍💼",
  },
  {
    name: "Sarah Johnson",
    role: "Property Manager",
    text: "We use Murray's for all our junk removal needs. Reliable, affordable, and always on time. Highly recommended!",
    rating: 5,
    avatar: "👩‍💼",
  },
  {
    name: "Mike Davis",
    role: "Contractor",
    text: "Best trailer rental service in Louisville. Great equipment, fair prices, and excellent customer service.",
    rating: 5,
    avatar: "👨‍🔧",
  },
]

export default function Testimonials() {
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

    const element = document.getElementById("testimonials-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="testimonials-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What Our Customers <span className="text-orange-500">Say</span>
          </h2>
          <p className="text-gray-400 text-lg">Trusted by hundreds of satisfied clients</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group transform transition-all duration-500 ${
                isVisible ? "translate-y-0 opacity-100" : "translate-y-12 opacity-0"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="h-full p-8 bg-gray-900 border-2 border-gray-800 rounded-xl hover:border-orange-500 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <span key={i} className="text-orange-500 text-xl">
                      ★
                    </span>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-gray-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>

                {/* Author */}
                <div className="flex items-center gap-4">
                  <div className="text-4xl">{testimonial.avatar}</div>
                  <div>
                    <p className="text-white font-bold">{testimonial.name}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
