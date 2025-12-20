"use client";
import React from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative min-h-[90vh] bg-primary-light text-white flex items-center bg-cover bg-center"
      style={{ backgroundImage: "url('/research-hero.jpeg')" }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-dark/60 to-black/80" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 text-center">
        {/* Eyebrow */}
        <motion.span
          initial={{ y: 15 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="inline-block mb-6 rounded-full bg-accent/20 px-4 py-2 text-sm font-semibold text-accent"
        >
          Leading Bio-Pharma Consultancy
        </motion.span>

        {/* Heading */}
        <motion.h1
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="font-heading text-4xl md:text-6xl font-bold leading-tight mb-6"
        >
          Accelerating <span className="text-accent">Innovation</span>
          <br /> in Life Sciences
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.35 }}
          className="font-body text-lg md:text-xl text-white max-w-3xl mx-auto mb-10"
        >
          Expert consultancy for Quality Assurance, Regulatory Compliance,
          and Clinical Services tailored for the medical device and
          pharmaceutical industry.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ y: 20 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <button className="bg-accent text-primary-dark font-semibold px-8 py-4 rounded-md hover:bg-accent-light transition">
            Contact Us
          </button>

          <button className="border border-white/30 text-white px-8 py-4 rounded-md hover:bg-white/10 transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
