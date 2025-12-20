"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between" style={{ height: '60px' }}>
        {/* Left: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4">
          <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</Link>
          <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</Link>
          <Link href="/contact" className="text-sm font-medium text-gray-700 hover:text-gray-900">Contact</Link>
        </div>

        {/* Center: Logo */}
        <Link href="/" className="flex items-center md:justify-center md:mx-0" style={{ marginLeft: '-20px' }}>
          <Image
            src="/logo-nobg.png"
            alt="Omo Consultants Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Right: Call-to-Action Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Button className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium">
            Get Consultation
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-gray-700 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 6.75h16.5m-16.5 6.75h16.5"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t">
          <div className="flex flex-col gap-4 p-4">
            <Link href="/services" className="text-sm font-medium text-gray-700 hover:text-gray-900">Services</Link>
            <Link href="/about" className="text-sm font-medium text-gray-700 hover:text-gray-900">About</Link>
            <Link href="/blog" className="text-sm font-medium text-gray-700 hover:text-gray-900">Blog</Link>
            <Button className="bg-sky-600 hover:bg-sky-700 text-white text-sm font-medium">
              Get Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
