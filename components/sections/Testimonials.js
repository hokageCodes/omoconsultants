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

  const stats = [
    { value: "50+", label: "Clients Worldwide" },
    { value: "15+", label: "Years Experience" },
    { value: "100%", label: "Compliance Rate" },
    { value: "200+", label: "Projects Delivered" },
  ];

  return (
    <section className="relative py-20 bg-white overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            Testimonials
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-6">
            Trusted by Industry Leaders
          </h2>
          <p className="text-text-secondary text-lg">
            See what our clients say about working with OMO Consultants
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group relative bg-background rounded-2xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-border hover:border-accent/20"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center shadow-lg shadow-accent/30">
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                  </svg>
                </div>
              </div>

              {/* Quote text */}
              <blockquote className="mt-4 mb-8">
                <p className="text-text-secondary leading-relaxed italic">
                  "{testimonial.quote}"
                </p>
              </blockquote>

              {/* Author info */}
              <div className="flex items-center gap-4 pt-6 border-t border-border">
                {/* Avatar */}
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-light flex items-center justify-center text-white font-semibold text-sm">
                  {testimonial.initials}
                </div>
                <div>
                  <p className="font-heading font-semibold text-text-primary">
                    {testimonial.author}
                  </p>
                  <p className="text-sm text-text-muted">
                    {testimonial.role}
                  </p>
                  <p className="text-sm text-accent font-medium">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              {/* Decorative corner */}
              <div className="absolute bottom-0 right-0 w-20 h-20 overflow-hidden rounded-br-2xl">
                <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-tl from-accent/5 to-transparent transform translate-x-8 translate-y-8 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Trust indicators */}
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="mt-16 pt-12 border-t border-border"
        >
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16">
            {stats.map((stat) => (
              <div key={stat.label} className="text-center">
                <p className="font-heading text-4xl font-bold text-primary">{stat.value}</p>
                <p className="text-text-muted text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
