'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-sm">
      <nav className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <div className="hidden lg:flex items-center gap-8">
            <Link 
              href="/" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Home
              {pathname === '/' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link 
              href="/destinations" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/destinations' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Destinations
              {pathname === '/destinations' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link 
              href="/offers" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/offers' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Offers & Promotions
              {pathname === '/offers' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link 
              href="/rewards" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/rewards' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Rewards Program
              {pathname === '/rewards' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
          </div>

          <button
            className="lg:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-3 absolute left-1/2 transform -translate-x-1/2 hover:opacity-80 transition-opacity">
            <div className="w-10 h-10 bg-teal-600 rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">CB</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-sm font-light tracking-wider text-gray-800 uppercase">Casa Bella</span>
              <span className="text-xs font-semibold tracking-widest text-gray-800 uppercase text-center">HOTELS</span>
            </div>
          </Link>

          <div className="hidden lg:flex items-center gap-6">
            <Link 
              href="/brands" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/brands' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Our Brands
              {pathname === '/brands' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link 
              href="/contact" 
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/contact' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Contact
              {pathname === '/contact' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="/login"
              className={`relative font-medium transition-all duration-300 group ${
                pathname === '/login' 
                  ? 'text-teal-600' 
                  : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Sign In
              {pathname === '/login' && (
                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full"></span>
              )}
              <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-teal-600 rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></span>
            </Link>
            <Link
              href="/book"
              className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              Book Now
            </Link>
          </div>
        </div>

        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col gap-4">
              <Link 
                href="/" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Home
              </Link>
              <Link 
                href="/destinations" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/destinations' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Destinations
              </Link>
              <Link 
                href="/offers" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/offers' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Offers & Promotions
              </Link>
              <Link 
                href="/rewards" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/rewards' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Rewards Program
              </Link>
              <Link 
                href="/brands" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/brands' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Our Brands
              </Link>
              <Link 
                href="/contact" 
                className={`font-medium transition-all duration-300 ${
                  pathname === '/contact' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Contact
              </Link>
              <Link
                href="/login"
                className={`font-medium transition-all duration-300 ${
                  pathname === '/login' 
                    ? 'text-teal-600 border-l-4 border-teal-600 pl-3' 
                    : 'text-gray-700 hover:text-teal-600 hover:border-l-4 hover:border-teal-600 hover:pl-3'
                }`}
              >
                Sign In
              </Link>
              <Link
                href="/book"
                className="bg-teal-600 text-white px-6 py-2 rounded-full hover:bg-teal-700 transition-all duration-300 font-medium text-center transform hover:scale-105 shadow-md hover:shadow-lg"
              >
                Book Now
              </Link>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}

