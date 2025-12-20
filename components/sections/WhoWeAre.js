"use client";
import React from "react";
import { motion } from "framer-motion";

export default function WhoWeAre() {
  return (
    <section className="py-16 bg-white text-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Who We Are
        </motion.h2>

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Text */}
          <motion.div
            initial={{ x: -20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-lg text-gray-700 mb-4">
              OMO Consultants is a leading provider of expert consultancy services
              tailored to the Bio-Pharmaceutical and Medical Device industries.
              With decades of experience, we specialize in bridging the gap
              between science and regulation, ensuring compliance and innovation
              for our clients worldwide.
            </p>
            <p className="text-lg text-gray-700">
              Our team of seasoned professionals is dedicated to delivering
              high-quality solutions in Quality Assurance, Regulatory Compliance,
              Clinical Services, and more. Partner with us to accelerate your
              projects and achieve excellence in the life sciences industry.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ x: 20 }}
            whileInView={{ x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="relative w-full h-64 md:h-80 bg-gray-200 rounded-lg overflow-hidden"
          >
            <img
              src="/logo-nobg.png"
              alt="Who We Are"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
