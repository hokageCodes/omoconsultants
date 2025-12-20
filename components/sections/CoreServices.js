"use client";
import React from "react";
import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Activity, PackageCheck } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    description:
      "Quality systems design, strategy, and implementation. Audit support and Health Authority inspection readiness.",
  },
  {
    icon: FileCheck,
    title: "Regulatory Compliance",
    description:
      "Product life cycle compliance and medical device regulations consulting.",
  },
  {
    icon: Activity,
    title: "Clinical Services",
    description:
      "Clinical trial process support, CTM management, and GCP audits.",
  },
  {
    icon: PackageCheck,
    title: "Specialized QP & RP Services",
    description:
      "MA/WDA license support, distribution, and supply chain compliance.",
  },
];

export default function CoreServices() {
  return (
    <section className="py-16 bg-primary-dark text-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <motion.h2
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-3xl md:text-4xl font-bold mb-6 text-center"
        >
          Our Core Services
        </motion.h2>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="bg-primary-light rounded-lg p-6 text-center hover:bg-primary transition-colors duration-300"
            >
              <service.icon className="w-12 h-12 mx-auto mb-4 text-accent" />
              <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
              <p className="text-sm text-text-muted">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
