"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Button from '../ui/Button';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';

const SearchModal = dynamic(() => import('../SearchModal'), { ssr: false });

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    {
      label: 'Services',
      href: '/services',
      dropdown: [
        { label: 'Quality Assurance', href: '/services/quality-assurance' },
        { label: 'Regulatory Compliance', href: '/services/regulatory-compliance' },
        { label: 'Clinical Services', href: '/services/clinical-services' },
        { label: 'Specialised QP & RP', href: '/services/qp-rp' },
        { label: 'Pharmaceutical Training', href: '/services/training' },
      ],
    },
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


  // Search index: links
  const searchLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Contact', href: '/contact' },
    { label: 'Careers', href: '/careers' },
    { label: 'Quality Assurance', href: '/services/quality-assurance' },
    { label: 'Regulatory Compliance', href: '/services/regulatory-compliance' },
    { label: 'Clinical Services', href: '/services/clinical-services' },
    { label: 'Specialised QP & RP', href: '/services/qp-rp' },
    { label: 'Pharmaceutical Training', href: '/services/training' },
    { label: 'All Services', href: '/services' },
  ];

  // Search index: content (from loaded files, FAQs, testimonials, jobs)
  const searchContent = [
    // About
    { text: 'Excellence in Consultancy', href: '/about' },
    { text: 'Our mission is to empower businesses to achieve excellence, ensuring that every product we touch improves lives and meets the highest standards of quality.', href: '/about' },
    { text: 'Customer satisfaction remains our top priority as we evolve with the industry.', href: '/about' },
    // Services
    { text: 'Pharmaceutical & Regulatory Expertise', href: '/services' },
    { text: 'We partner with bio-pharmaceutical and medical device organisations to meet global regulatory expectations, safeguard quality, and confidently move products to market.', href: '/services' },
    { text: 'Quality Assurance', href: '/services/quality-assurance' },
    { text: 'Regulatory Compliance', href: '/services/regulatory-compliance' },
    { text: 'Clinical Services', href: '/services/clinical-services' },
    { text: 'Specialised QP & RP', href: '/services/qp-rp' },
    { text: 'Pharmaceutical Training', href: '/services/training' },
    // FAQs
    { text: 'We offer consultancy services in Quality Assurance, Regulatory Compliance, Clinical Services, and Specialised QP & RP Services tailored to the Bio-Pharmaceutical and Medical Device industries.', href: '/services' },
    { text: 'Our team of experts provides tailored solutions to ensure compliance, streamline processes, and accelerate your projects in the life sciences industry.', href: '/services' },
    { text: 'Yes, we offer on-demand training in areas such as GMP, GDP, and regulatory compliance, leveraging our hands-on experience and expertise.', href: '/services/training' },
    { text: 'You can reach us via email at info@omoconsultants.com or call us at +44 (0) 203 026 2660. We look forward to assisting you.', href: '/contact' },
    // Testimonials
    { text: 'OMO Consultants helped us navigate complex regulatory requirements with ease. Their expertise in GMP and quality systems was instrumental in getting our product approved ahead of schedule.', href: '/' },
    { text: 'The QP services provided by OMO Consultants are exceptional. They understood our supply chain complexities and ensured full compliance across our EU distribution network.', href: '/' },
    { text: 'Working with OMO Consultants transformed our quality management approach. Their hands-on training and Six Sigma methodology helped us reduce deviations by 40%.', href: '/services/training' },
    // Careers (jobs)
    { text: 'Lead global quality assurance initiatives for pharmaceutical clients and ensure GMP standards.', href: '/careers' },
    { text: 'Manage submissions and ensure compliance with EMA and FDA regulations for medical devices and drugs.', href: '/careers' },
    { text: 'Shape the future of life sciences with us.', href: '/careers' },
    // Add more as needed
  ];

  const [searchResults, setSearchResults] = useState([]);

  function handleSearch(query) {
    if (!query) {
      setSearchResults([]);
      return;
    }
    const q = query.toLowerCase();
    // Link matches
    const linkResults = searchLinks.filter(item =>
      item.label.toLowerCase().includes(q)
    );
    // Content matches
    const contentResults = searchContent.filter(item =>
      item.text.toLowerCase().includes(q)
    ).map(item => ({ label: item.text, href: item.href }));
    // Merge, dedupe by label+href
    const allResults = [...linkResults, ...contentResults].filter((v,i,a)=>a.findIndex(t=>(t.label===v.label&&t.href===v.href))===i);
    setSearchResults(allResults);
  }

  function handleCloseModal() {
    setSearchOpen(false);
    setSearchResults([]);
  }

  return (
    <nav className="w-full bg-white/80 backdrop-blur sticky top-0 z-40 border-b">
      <SearchModal
        open={searchOpen}
        onClose={handleCloseModal}
        onSearch={handleSearch}
        results={searchResults}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex items-center justify-between" style={{ height: '60px' }}>
        {/* Left: Logo */}
        <Link href="/" className="flex items-center select-none px-2">
          <span
            className="text-xl md:text-2xl font-extrabold tracking-tight bg-gradient-to-r from-teal-500 via-fuchsia-500 to-orange-400 bg-clip-text text-transparent drop-shadow-sm"
            style={{ letterSpacing: '0.04em', fontFamily: 'inherit' }}
          >
            OMO CONSULTANTS
          </span>
        </Link>

        {/* Center: Navigation Links (Hidden on Mobile) */}
        <div className="hidden md:flex gap-10 items-center">
          {navItems.map((item) =>
            item.dropdown ? (
              <div key={item.label} className="relative group">
                <button
                  className={`text-base font-bold px-3 py-2 rounded transition-colors ${linkClass(item.href)} focus:outline-none flex items-center gap-1`}
                  tabIndex={0}
                >
                  {item.label}
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
                </button>
                <div className="absolute left-0 mt-2 min-w-[220px] bg-white border border-gray-200 rounded-lg shadow-lg opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 pointer-events-none group-hover:pointer-events-auto group-focus-within:pointer-events-auto transition-opacity z-50">
                  <ul className="py-2">
                    {item.dropdown.map((drop) => (
                      <li key={drop.href}>
                        <Link
                          href={drop.href}
                          className="block px-5 py-2 text-gray-700 hover:bg-teal-50 hover:text-teal-700 font-medium text-base whitespace-nowrap transition-colors"
                        >
                          {drop.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ) : (
              <Link
                key={item.href}
                href={item.href}
                className={`text-base font-bold px-3 py-2 rounded transition-colors ${linkClass(item.href)}`}
              >
                {item.label}
              </Link>
            )
          )}
        </div>

        {/* Right: Search Icon & Call-to-Action Button (Hidden on Mobile) */}
        <div className="hidden md:flex items-center gap-4">
          <button
            className="p-2 rounded-full hover:bg-teal-50 focus:outline-none focus:ring-2 focus:ring-teal-400"
            aria-label="Search"
            onClick={() => setSearchOpen(true)}
            type="button"
          >
            <Search className="w-7 h-7 text-teal-700" />
          </button>
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
