"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Button from "../ui/Button";

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] bg-white text-gray-900 flex items-center px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <span className="inline-block mb-3 sm:mb-4 text-xs sm:text-sm font-semibold text-teal-600 uppercase tracking-wide">
              Global Leader in Life Sciences
            </span>

            {/* Heading */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight mb-4 sm:mb-6 text-gray-900">
              We Design, Implement, and Support Quality Systems for Life Sciences
            </h1>

            {/* Subtext */}
            <p className="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
              We Support Bio-Pharmaceutical and Medical Device Companies with Quality and Compliance
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white font-semibold px-6 sm:px-8 py-3 rounded-md inline-block text-center text-sm sm:text-base">
                Request a Consultation
              </Button>

              <a
                href="/services"
                className="border-2 border-gray-900 text-gray-900 font-semibold px-6 sm:px-8 py-3 rounded-md hover:bg-gray-100 transition inline-block text-center text-sm sm:text-base"
              >
                View Our Services
              </a>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/research-hero.jpeg"
                alt="Laboratory setting"
                width={500}
                height={500}
                className="w-full h-auto object-cover rounded-lg"
              />
              
              {/* Certification Badge */}
              <div className="absolute bottom-6 right-6 bg-white rounded-full p-4 shadow-lg flex items-center gap-3">
                <div className="bg-green-500 rounded-full p-1 text-white">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span className="text-sm font-semibold text-gray-900">ISO 14601 Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
