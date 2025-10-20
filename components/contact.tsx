"use client"

import type React from "react"

import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "junk-removal",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formData)
    alert("Thank you! We'll contact you soon.")
    setFormData({ name: "", phone: "", service: "junk-removal", message: "" })
  }

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            Ready to Get <span className="text-orange-500">Started?</span>
          </h2>
          <p className="text-gray-400 text-lg">Book your service or get a free estimate today</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-white font-bold mb-2">Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Phone</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
                placeholder="502-555-0000"
              />
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Service Type</label>
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors"
              >
                <option value="junk-removal">Junk Removal</option>
                <option value="trailer-rental">Trailer Rental</option>
                <option value="sand-mulch">Sand & Mulch Delivery</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block text-white font-bold mb-2">Message</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={4}
                className="w-full px-4 py-3 bg-gray-900 border-2 border-gray-800 rounded-lg text-white focus:border-orange-500 focus:outline-none transition-colors resize-none"
                placeholder="Tell us about your project..."
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-gradient-to-r from-orange-500 to-blue-600 text-white font-bold text-lg rounded-lg hover:shadow-lg hover:shadow-orange-500/50 transition-all duration-300 transform hover:scale-105"
            >
              Book My Service
            </button>
          </form>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="p-8 bg-gray-900 border-2 border-orange-500 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Call Us Now</h3>
              <p className="text-5xl font-bold text-orange-500 mb-2">502-558-3275</p>
              <p className="text-gray-400">Available 7 days a week, 8am - 6pm</p>
            </div>

            <div className="p-8 bg-gray-900 border-2 border-blue-600 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Service Area</h3>
              <p className="text-gray-300 leading-relaxed">
                Louisville, KY & Southern Indiana
                <br />
                Within 50 miles of Louisville
              </p>
            </div>

            <div className="p-8 bg-gray-900 border-2 border-gray-800 rounded-xl">
              <h3 className="text-2xl font-bold text-white mb-4">Why Choose Us?</h3>
              <ul className="space-y-2 text-gray-300">
                <li>✓ Same-day service</li>
                <li>✓ Licensed & insured</li>
                <li>✓ Transparent pricing</li>
                <li>✓ Professional crew</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Call Button */}
      <a
        href="tel:502-558-3275"
        className="fixed bottom-8 right-8 w-16 h-16 bg-orange-500 text-white rounded-full flex items-center justify-center text-2xl shadow-lg hover:shadow-orange-500/50 hover:shadow-2xl transition-all duration-300 transform hover:scale-110 z-40 md:hidden"
        title="Call Murray's Junk Removal"
      >
        📞
      </a>
    </section>
  )
}
