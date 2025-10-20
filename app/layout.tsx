import type React from "react"
import type { Metadata, Viewport } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import { SpeedInsights } from "@vercel/speed-insights/next"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Murray's Junk Removal & Trailer Rentals | Louisville, KY",
  description:
    "Professional junk removal and trailer rental services in Louisville, KY and Southern Indiana. Same-day service available. Call 502-558-3275.",
  generator: "v0.app",
  keywords: [
    "junk removal",
    "trailer rental",
    "Louisville",
    "Kentucky",
    "junk hauling",
    "debris removal",
    "sand delivery",
    "mulch delivery",
  ],
  authors: [{ name: "Murray's Junk Removal" }],
  creator: "Murray's Junk Removal",
  publisher: "Murray's Junk Removal",
  formatDetection: {
    email: false,
    address: false,
    telephone: true,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://murrays-junk-removal.com",
    siteName: "Murray's Junk Removal & Trailer Rentals",
    title: "Murray's Junk Removal & Trailer Rentals | Louisville, KY",
    description:
      "Professional junk removal and trailer rental services in Louisville, KY and Southern Indiana. Same-day service available.",
    images: [
      {
        url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/murray-Yrs4dLBrpYbZB8Lr8IPd80Ia6AanTU.jpg",
        width: 1200,
        height: 630,
        alt: "Murray's Junk Removal Logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Murray's Junk Removal & Trailer Rentals",
    description: "Professional junk removal and trailer rental services in Louisville, KY",
    images: ["https://hebbkx1anhila5yf.public.blob.vercel-storage.com/murray-Yrs4dLBrpYbZB8Lr8IPd80Ia6AanTU.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://murrays-junk-removal.com",
  },
}

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  themeColor: "#000000",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
        <link rel="dns-prefetch" href="https://hebbkx1anhila5yf.public.blob.vercel-storage.com" />
      </head>
      <body className={`font-sans antialiased`}>
        {children}
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
