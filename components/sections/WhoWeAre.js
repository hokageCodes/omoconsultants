"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";

export default function WhoWeAre() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Image */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/research-hero.jpeg"
                alt="Scientists collaborating"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            {/* Eyebrow */}
            <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-4 flex items-center gap-2">
              <span className="w-8 h-0.5 bg-teal-600"></span>
              OUR PURPOSE
            </p>

            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Empowering Science with Regulatory Precision
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4 leading-relaxed">
              At OMO Consultants, our mission is to accelerate the delivery of life-changing therapies to patients worldwide by removing regulatory barriers.
            </p>

            <p className="text-gray-600 mb-6 leading-relaxed">
              We envision a world where compliance is not a hurdle, but a catalyst for quality and trust. We partner with you to build robust systems that stand the test of scrutiny.
            </p>

            {/* CTA Link */}
            <a
              href="/about"
              className="inline-flex items-center gap-2 text-teal-600 font-semibold hover:text-teal-700 transition border-b-2 border-teal-600 pb-1"
            >
              Read our full story
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
