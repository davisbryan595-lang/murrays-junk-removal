"use client"

import { useEffect, useState } from "react"
import Image from "next/image"

export default function About() {
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

    const element = document.getElementById("about-section")
    if (element) observer.observe(element)

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about-section" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-black to-gray-900">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <div
            className={`transform transition-all duration-1000 ${
              isVisible ? "translate-x-0 opacity-100" : "-translate-x-12 opacity-0"
            }`}
          >
            <Image
              src="/professional-junk-removal-crew-working.jpg"
              alt="Murray's professional junk removal crew at work"
              width={500}
              height={400}
              className="rounded-lg shadow-2xl border-4 border-orange-500"
              loading="lazy"
            />
          </div>

          {/* Right: Content */}
          <div
            className={`transform transition-all duration-1000 delay-200 ${
              isVisible ? "translate-x-0 opacity-100" : "translate-x-12 opacity-0"
            }`}
          >
            <h2 className="text-4xl font-bold text-white mb-6">
              Local, Reliable, <span className="text-orange-500">Professional</span>
            </h2>
            <p className="text-gray-300 text-lg mb-4 leading-relaxed">
              For over a decade, Murray's has been Louisville's go-to junk removal and trailer rental service. We pride
              ourselves on fast, affordable, and professional service that you can trust.
            </p>
            <p className="text-gray-300 text-lg mb-6 leading-relaxed">
              Same-day service available. Serving Louisville, KY and Southern Indiana within 50 miles.
            </p>

            {/* Features */}
            <div className="space-y-4">
              {[
                "✓ Same-Day Service Available",
                "✓ Licensed & Insured",
                "✓ Transparent Pricing",
                "✓ Family-Owned Since 2014",
              ].map((feature, i) => (
                <div
                  key={i}
                  className="flex items-center gap-3 text-white transform transition-all duration-500"
                  style={{ transitionDelay: `${i * 100}ms` }}
                >
                  <span className="text-orange-500 text-2xl">•</span>
                  <span className="text-lg">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
