"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { BarChart3, GraduationCap } from "lucide-react";

export default function Training() {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Column: Content */}
          <motion.div
            initial={{ x: -30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6 }}
          >
            {/* Heading */}
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Pharmaceutical Training & Operational Excellence
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-8 leading-relaxed">
              Elevate your team's capabilities with our specialized training modules. We focus on Operational Excellence and Six Sigma methodologies tailored specifically for the pharmaceutical context.
            </p>

            {/* Training Badges */}
            <div className="flex flex-wrap gap-4">
              <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-lg border border-gray-200 shadow-sm">
                <BarChart3 className="w-5 h-5 text-teal-600" />
                <span className="font-semibold text-gray-900">Book a Consultation</span>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Image */}
          <motion.div
            initial={{ x: 30, opacity: 0 }}
            whileInView={{ x: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/research-hero.jpeg"
                alt="Training session"
                width={600}
                height={400}
                className="w-full h-auto object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
