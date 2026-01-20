"use client";
import React from "react";
import { motion } from "framer-motion";

export default function Testimonials() {
  const testimonials = [
    {
      quote: "OMO Consultants helped us navigate complex regulatory requirements with ease. Their expertise in GMP and quality systems was instrumental in getting our product approved ahead of schedule.",
      author: "Dr. Sarah Mitchell",
      role: "Director of Quality",
      company: "BioGenix Pharmaceuticals",
      initials: "SM",
    },
    {
      quote: "The QP services provided by OMO Consultants are exceptional. They understood our supply chain complexities and ensured full compliance across our EU distribution network.",
      author: "James O'Connor",
      role: "VP Operations",
      company: "MedTech Solutions Ltd",
      initials: "JO",
    },
    {
      quote: "Working with OMO Consultants transformed our quality management approach. Their hands-on training and Six Sigma methodology helped us reduce deviations by 40%.",
      author: "Dr. Elena Rodriguez",
      role: "Head of Manufacturing",
      company: "Nova Biologics",
      initials: "ER",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Section Header */}
        <motion.div
          initial={{ y: 15, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-teal-600 font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-gray-600 text-lg">
            See what our clients say about working with OMO Consultants
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20, opacity: 0 }}
              whileInView={{ y: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-50 rounded-lg p-8 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-200"
            >
              {/* Quote icon */}
              <div className="mb-6">
                <div className="w-10 h-10 rounded-full bg-teal-600 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="mb-8">
                <p className="text-gray-600 leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-gray-200">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-teal-600 flex items-center justify-center text-white font-semibold">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-semibold text-gray-900">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-gray-600">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-teal-600 font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
