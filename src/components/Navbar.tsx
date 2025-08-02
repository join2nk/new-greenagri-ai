"use client";

import React, { useState, useEffect } from 'react';
import QuoteDialog from '@/components/landing/Quote';
import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Logo } from './Logo';
import { Mail, MapPin } from 'lucide-react';
const navigationItems = [
  { name: 'Home', href: '/' },
  // { name: 'About', href: '#about' },
  // { name: 'Products', href: '#products' },
  { name: 'Services', href: '/services' },
  { name: 'Quality', href: '/quality' },
  { name: 'Contact', href: '/contact' }
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-white backdrop-blur-lg  shadow-lg"
          : "bg-white/90 backdrop-blur-sm"
      )}
    >
      <div
        className={cn(
          " bg-gradient-to-br from-emerald-900/95 via-green-800/90 to-teal-900/95 text-white text-sm py-2 transition-all duration-300 z-10",
          isScrolled ? "block" : "block"
        )}
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div></div>
            <div className="flex items-center space-x-6">
              <div className="hidden md:flex items-center space-x-2">
                <Mail className="w-4 h-4 text-amber-400 " />
                <span >greenagricorp@gmail.com</span>
              </div>

              <div className="hidden md:flex items-center space-x-2">
                <MapPin className="w-4 h-4 text-amber-400 " />
                <span>Delhi (HO) • Raipur (Manufacturing)</span>
              </div>
            </div>


          </div>
        </div>
      </div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo Section */}
          <Logo isScrolled={isScrolled} />

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-4 py-2 text-gray-700 hover:text-amber-300 font-medium transition-colors duration-300 rounded-lg hover:bg-green-600/95"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-6">
            <QuoteDialog />
          </div>


          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 shadow-lg">
            <div className="px-4 py-6 space-y-4">
              {navigationItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block px-4 py-3 text-gray-700 hover:text-green-600 hover:bg-green-50 rounded-lg font-medium transition-colors duration-300"
                >
                  {item.name}
                </Link>
              ))}

              <div className="pt-4 border-t border-gray-200">
                <div className="mb-4">
                  <div className="font-semibold text-gray-900 mb-1">
                    Export Inquiry
                  </div>
                  <div className="text-gray-600 text-sm">
                    export@greenagricorp.com
                  </div>
                  <div className="text-gray-600 text-sm">+91-XXX-XXXX-XXX</div>
                </div>

                <Link
                  href="#contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block w-full bg-green-600 hover:bg-green-700 text-amber-300 text-center px-6 py-3 rounded-lg font-semibold transition-colors duration-300"
                >
                  Get Quote
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Top Bar with Additional Info */}
    </nav>
  );
}
