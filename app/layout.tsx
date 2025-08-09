import type { Metadata } from 'next'
import { Inter, Poppins, Single_Day } from 'next/font/google'
import './globals.css'
import { Toaster } from 'react-hot-toast'
import { SidebarProvider } from '@/components/providers/SidebarProvider'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
})

export const metadata: Metadata = {
  title: 'BASE44 - AI-Powered Sports & Forex Tipster Platform',
  description: 'Get accurate betting suggestions, smart betslip builder, forex signals, and join the ultimate tipster community. Data-driven insights for smart betting.',
  keywords: 'betting tips, forex signals, sports betting, tipster platform, betting predictions, live odds',
  authors: [{ name: 'BASE44 Team' }],
  creator: 'BASE44',
  publisher: 'BASE44',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://base44.com'),
  openGraph: {
    title: 'BASE44 - Smart Betting Tips & Forex Signals',
    description: 'AI-powered sports betting tips and forex signals with data-driven insights',
    url: 'https://base44.com',
    siteName: 'BASE44',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'BASE44 Platform',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'BASE44 - Smart Betting Tips & Forex Signals',
    description: 'AI-powered sports betting tips and forex signals with data-driven insights',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <head>
        <meta name="theme-color" content="#0ea5e9" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="BASE44" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="msapplication-TileColor" content="#0ea5e9" />
        <meta name="msapplication-tap-highlight" content="no" />
      </head>
      <body className={`${inter.className} antialiased bg-gray-50 text-gray-900`}>
        
          {children}
          <Toaster
            position="top-right"
            toastOptions={{
              duration: 4000,
              style: {
                background: '#363636',
                color: '#fff',
              },
              success: {
                duration: 3000,
                iconTheme: {
                  primary: '#22c55e',
                  secondary: '#fff',
                },
              },
              error: {
                duration: 5000,
                iconTheme: {
                  primary: '#ef4444',
                  secondary: '#fff',
                },
              },
            }}
          />
      </body>
    </html>
  )
} 