'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

export default function Header({ nav = true }: {
  nav?: boolean
}) {
  const [mobileNavOpen, setMobileNavOpen] = useState(false)

  return (
    <header className="absolute w-full z-30">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Site branding */}
          <div className="shrink-0 mr-4">
            {/* Logo */}
            <Link className="block group" href="/" aria-label="EmpowHer Choices">
              <Image src="/logo/EMPOWHER.png" width={48} height={48} className="object-contain transition-transform duration-200 group-hover:scale-105" alt="EmpowHer Choices Logo" priority />
            </Link>
          </div>

          {/* Desktop navigation */}
          {nav && (
            <nav className="hidden md:flex md:grow">
              <ul className="flex grow justify-end flex-wrap items-center">
                <li>
                  <Link
                    className="font-medium text-gray-600 decoration-purple-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/about-us"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-gray-600 decoration-purple-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/#ourstory"
                  >
                    Our Story
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-gray-600 decoration-purple-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/contact-us"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    className="font-medium text-gray-600 decoration-purple-500 decoration-2 underline-offset-2 hover:underline px-3 lg:px-5 py-2 flex items-center transition duration-150 ease-in-out"
                    href="/get-involved"
                  >
                    Volunteer
                  </Link>
                </li>
                <li className="ml-3">
                  <Link className="btn-sm text-white bg-purple-500 hover:bg-purple-600 w-full shadow-sm" href="/donate">
                    Donate
                  </Link>
                </li>
              </ul>
            </nav>
          )}

          {/* Mobile menu toggle */}
          {nav && (
            <div className="flex md:hidden">
              <button
                className={`hamburger z-50 p-2 text-gray-600 hover:text-purple-600 transition-colors focus:outline-none`}
                aria-controls="mobile-nav"
                aria-expanded={mobileNavOpen}
                onClick={() => setMobileNavOpen(!mobileNavOpen)}
              >
                <span className="sr-only">Menu</span>
                <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  {mobileNavOpen ? (
                    <path fillRule="evenodd" clipRule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.828 4.829 4.829-4.829a1 1 0 0 1 1.414 1.414l-4.829 4.828 4.829 4.829z" />
                  ) : (
                    <path fillRule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z" />
                  )}
                </svg>
              </button>
            </div>
          )}

          {/* Mobile navigation drawer */}
          {nav && (
            <div className="md:hidden">
              {/* Backdrop blur overlay */}
              <div 
                className={`fixed inset-0 z-40 bg-black/25 backdrop-blur-sm transition-opacity duration-300 ${
                  mobileNavOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
                onClick={() => setMobileNavOpen(false)}
                aria-hidden="true"
              />
              
              {/* Sidebar Menu Panel */}
              <nav
                id="mobile-nav"
                className={`fixed top-0 right-0 bottom-0 z-50 w-64 max-w-xs bg-white/95 backdrop-blur-lg shadow-2xl p-6 transition-transform duration-300 ease-out transform ${
                  mobileNavOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
              >
                {/* Header details inside mobile menu */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-100">
                  <Link href="/" onClick={() => setMobileNavOpen(false)}>
                    <Image src="/logo/EMPOWHER.png" width={40} height={40} className="object-contain" alt="EmpowHer Choices Logo" />
                  </Link>
                  <button 
                    onClick={() => setMobileNavOpen(false)}
                    className="text-gray-400 hover:text-purple-600 focus:outline-none"
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="w-6 h-6 fill-none stroke-current stroke-2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>

                {/* Mobile Links */}
                <ul className="space-y-4">
                  <li>
                    <Link
                      className="flex font-semibold text-gray-700 hover:text-purple-600 text-lg py-1 transition duration-150 ease-in-out"
                      href="/about-us"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex font-semibold text-gray-700 hover:text-purple-600 text-lg py-1 transition duration-150 ease-in-out"
                      href="/#ourstory"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Our Story
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex font-semibold text-gray-700 hover:text-purple-600 text-lg py-1 transition duration-150 ease-in-out"
                      href="/contact-us"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Contact Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      className="flex font-semibold text-gray-700 hover:text-purple-600 text-lg py-1 transition duration-150 ease-in-out"
                      href="/get-involved"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Volunteer
                    </Link>
                  </li>
                  <li className="pt-4 border-t border-gray-100">
                    <Link 
                      className="btn text-white bg-purple-600 hover:bg-purple-700 w-full shadow-md text-center py-2.5 rounded-xl font-bold block"
                      href="/donate"
                      onClick={() => setMobileNavOpen(false)}
                    >
                      Donate Now
                    </Link>
                  </li>
                </ul>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  )
}
