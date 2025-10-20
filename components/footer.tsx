import Image from "next/image"

export default function Footer() {
  return (
    <footer className="bg-black border-t-2 border-orange-500 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand with Logo */}
          <div>
            <div className="mb-4 h-20 w-20 relative">
              <Image
                src="/murray-removebg-preview.png"
                alt="Murray's Junk Removal Logo"
                fill
                className="object-contain"
              />
            </div>
            <p className="text-gray-400">Louisville's trusted junk removal and trailer rental service.</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Junk Removal
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Trailer Rental
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Sand & Mulch
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-bold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Contact
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-orange-500 transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-bold mb-4">Contact</h4>
            <p className="text-gray-400 mb-2">📞 502-558-3275</p>
            <p className="text-gray-400 mb-4">Louisville, KY & Southern Indiana</p>
            <div className="flex gap-4">
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-xl">
                f
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-xl">
                𝕏
              </a>
              <a href="#" className="text-orange-500 hover:text-orange-400 transition-colors text-xl">
                in
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2025 Murray's Junk Removal & Trailer Rentals. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
