"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Button from "../ui/Button";
const slides = [
  {
    bg: "/new-c.jpg",
    headline: "Your Mission Is Our Mission",
    subtext: "Accelerating safe, compliant, and high-quality healthcare products across global markets.",
  },
  {
    bg: "/eu-af.jpg",
    headline: "Product Registration & Compliance in the EU & Africa",
    subtext: "We support pharmaceutical, biotech, and medical device companies with product registration, regulatory submissions, and ongoing compliance across European and African markets.",
  },
  {
    bg: "/med-law.jpg",
    headline: "Simplifying Regulatory Pathways Across Global Markets",
    subtext: "Navigating complex regulatory frameworks to help secure approvals faster — without compromising compliance or patient safety.",
  },
  {
    bg: "/prod-reg.jpg",
    headline: "Quality Systems That Pass Global Inspections",
    subtext: "From GMP, GDP, ISO, and regulatory audits to inspection readiness — we build quality frameworks that meet international standards.",
  },
  {
    bg: "/trust.jpg",
    headline: "A Trusted Compliance & Market Access Partner",
    subtext: "OMO Consultants delivers regulatory clarity, quality excellence, and faster market entry — acting as a strategic extension of your team.",
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const timeoutRef = useRef();

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [current]);

  return (
    <section className="relative w-full min-h-[100vh] flex items-center justify-center overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 w-full h-full transition-opacity duration-700 ${idx === current ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
          style={{
            backgroundImage: `linear-gradient(to bottom,rgba(20,20,30,0.55),rgba(20,20,30,0.7)), url('${slide.bg}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          aria-hidden={idx !== current}
        >
          <div className="flex flex-col items-center justify-center h-full w-full px-4 sm:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-extrabold text-white drop-shadow-lg mb-6 animate-fadein">
                {slide.headline}
              </h1>
              <p className="text-lg sm:text-2xl text-white/90 mb-8 animate-fadein delay-100">
                {slide.subtext}
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fadein delay-200">
                <Link href="#contact-form" className="inline-flex items-center justify-center bg-teal-600 hover:bg-teal-700 text-white font-semibold px-8 py-3 rounded-md text-base shadow-lg">
                  Request a Consultation
                </Link>
                <a
                  href="/services"
                  className="border-2 border-white text-white font-semibold px-8 py-3 rounded-md hover:bg-white/10 transition text-base shadow-lg"
                >
                  View Our Services
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
      {/* Carousel Controls */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-20">
        {slides.map((_, idx) => (
          <button
            key={idx}
            className={`w-3 h-3 rounded-full border-2 ${idx === current ? 'bg-teal-500 border-white' : 'bg-white/60 border-white/40'} transition-all`}
            onClick={() => setCurrent(idx)}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
}