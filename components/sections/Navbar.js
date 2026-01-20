"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About' },
    { href: '/careers', label: 'Careers' },
    { href: '/contact', label: 'Contact' },
  ];

  const linkClass = (href) => {
    const active = href === '/' ? pathname === '/' : pathname?.startsWith(href);
    return active
      ? 'text-teal-700 font-semibold'
      : 'text-gray-700 hover:text-gray-900';
  };

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <div className="max-w-7xl mx-auto px-2 py-2 flex items-center justify-between" style={{ height: '60px' }}>
        {/* Left: Logo */}
        <Link href="/" className="flex items-center" style={{ marginLeft: '-20px' }}>
          <Image
            src="/logo-nobg.png"
            alt="Omo Consultants Logo"
            width={160}
            height={60}
            className="object-contain"
          />
        </Link>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-4">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${linkClass(item.href)}`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Right: Call-to-Action Button (Hidden on Mobile) */}
        <div className="hidden md:block">
          <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium" onClick={closeMenu}>
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
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${linkClass(item.href)}`}
                onClick={closeMenu}
              >
                {item.label}
              </Link>
            ))}
            <Button className="bg-teal-600 hover:bg-teal-700 text-white text-sm font-medium" onClick={closeMenu}>
              Get Consultation
            </Button>
          </div>
        </div>
      )}
    </nav>
  );
}
