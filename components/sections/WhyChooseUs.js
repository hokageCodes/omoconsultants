"use client";
import React from "react";
import { motion } from "framer-motion";
import { Handshake, Gauge, Lightbulb, Users } from "lucide-react";

const values = [
  {
    icon: Handshake,
    title: "Integrity",
    description: "Unwavering ethical standards in every engagement and recommendation.",
  },
  {
    icon: Gauge,
    title: "Precision",
    description: "Exacting attention to detail that regulatory bodies demand.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Adapting modern solutions to complex, traditional challenges.",
  },
  {
    icon: Users,
    title: "Partnership",
    description: "We don't just advise; we work alongside your team as one.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            The Four Pillars of Our Values
          </motion.h2>
          <motion.p
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-gray-600 max-w-3xl mx-auto"
          >
            The foundational principles that guide every audit, report, and consultation.
          </motion.p>
        </div>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center bg-gradient-to-br from-gray-50 to-white rounded-2xl p-6 border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-600 border-4 border-teal-100 flex items-center justify-center shadow-lg">
                <value.icon className="w-12 h-12 text-white" />
              </div>

              {/* Title */}
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">{value.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-base leading-relaxed font-medium">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
