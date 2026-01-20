"use client";
import React from "react";
import { motion } from "framer-motion";
import { FlaskConical, Dna, Stethoscope } from "lucide-react";

const sectors = [
  {
    icon: FlaskConical,
    title: "Bio-Pharma",
    description:
      "Comprehensive support for pharmaceutical development, from R&D to manufacturing.",
    features: ["GMP Auditing", "Supply Chain QA"],
  },
  {
    icon: Dna,
    title: "Biotechnology",
    description:
      "Innovative strategies for biotech startups and established firms scaling production.",
    features: ["Process Validation", "Risk Management"],
  },
  {
    icon: Stethoscope,
    title: "Medical Devices",
    description:
      "Navigating EU MDR and FDA regulations for safe, compliant device market entry.",
    features: ["Tech File Preparation", "ISO 13485 Setup"],
  },
];

export default function CoreServices() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="flex justify-between items-start mb-12">
          <div>
            <motion.h2
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5 }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-3"
            >
              Our Area of Expertise
            </motion.h2>
            <motion.p
              initial={{ y: 15, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-gray-600 max-w-md"
            >
              Expert guidance across the most critical areas of modern life sciences.
            </motion.p>
          </div>
          <motion.a
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            href="/services"
            className="text-teal-600 font-semibold hover:text-teal-700 transition hidden md:block"
          >
            See all sectors →
          </motion.a>
        </div>

        {/* Sectors Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {sectors.map((sector, index) => (
            <motion.div
              key={sector.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-lg border border-gray-200 p-8 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <sector.icon className="w-6 h-6 text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{sector.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                {sector.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {sector.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-gray-700">
                    <span className="text-teal-600">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Mobile See all sectors link */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-8 md:hidden"
        >
          <a href="/services" className="text-teal-600 font-semibold hover:text-teal-700 transition">
            See all sectors →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
