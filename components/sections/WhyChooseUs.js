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
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ y: 15, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
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
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center"
            >
              {/* Icon Circle */}
              <div className="w-20 h-20 mx-auto mb-6 rounded-full border-2 border-teal-600 flex items-center justify-center">
                <value.icon className="w-10 h-10 text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
