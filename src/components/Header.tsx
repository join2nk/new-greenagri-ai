'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-200/50' 
        : 'bg-black/20 backdrop-blur-md'
    }`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="flex items-center">
            <div className={`font-bold text-2xl transition-colors duration-300 ${
              isScrolled ? 'text-green-600' : 'text-white'
            }`}>
              <span className={
                    isScrolled?
                    "bg-gradient-to-r from-green-700 to-green-800 bg-clip-text text-transparent "
                :
                "bg-gradient-to-r from-green-200 to-green-100 bg-clip-text text-transparent "}>
                Green Agri Corp
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8 items-center">
            <Link href="#home" className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              Home
            </Link>
            <Link href="#about" className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              About
            </Link>
            <Link href="#products" className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              Products
            </Link>
            <Link href="#services" className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              Services
            </Link>
            <Link href="#sustainability" className={`font-medium transition-all duration-300 hover:scale-105 ${
              isScrolled 
                ? 'text-gray-700 hover:text-green-600' 
                : 'text-white/90 hover:text-white'
            }`}>
              Sustainability
            </Link>
            <Link href="#contact" className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${
              isScrolled
                ? 'bg-green-600 text-white hover:bg-green-700 shadow-lg'
                : 'bg-white/20 backdrop-blur-sm text-white hover:bg-white/30 border border-white/30'
            }`}>
              Contact
            </Link>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2 rounded-lg transition-colors duration-300 focus:outline-none ${
                isScrolled
                  ? 'text-gray-700 hover:bg-gray-100'
                  : 'text-white hover:bg-white/20'
              }`}
              aria-label="Toggle menu"
            >
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md rounded-2xl shadow-xl border border-gray-200/50 mb-4">
              <Link href="#home" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors font-medium">
                Home
              </Link>
              <Link href="#about" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors font-medium">
                About
              </Link>
              <Link href="#products" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors font-medium">
                Products
              </Link>
              <Link href="#services" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors font-medium">
                Services
              </Link>
              <Link href="#sustainability" className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-xl transition-colors font-medium">
                Sustainability
              </Link>
              <Link href="#contact" className="block px-4 py-3 bg-green-600 text-white hover:bg-green-700 rounded-xl transition-colors font-medium text-center">
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
