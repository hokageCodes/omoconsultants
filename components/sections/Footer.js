"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Blog", href: "/blog" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      {/* CTA Section */}
      <section className="relative bg-primary overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/10 rounded-full blur-3xl" />
          <div 
            className="absolute inset-0 opacity-[0.03]"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          />
        </div>

        {/* CTA Content */}
        <div className="relative max-w-4xl mx-auto px-6 py-20 text-center">
          <motion.h2
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6"
          >
            Ready to Partner with{" "}
            <span className="text-accent">Industry Experts?</span>
          </motion.h2>
          <motion.p
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-white/70 text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Let us help you navigate regulatory compliance, quality assurance, and bring your products to market faster. Get in touch with our team today.
          </motion.p>
          <motion.div
            initial={{ y: 15 }}
            whileInView={{ y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent hover:bg-accent-light text-primary font-semibold px-8 py-4 rounded-lg transition-all duration-300 hover:shadow-xl hover:shadow-accent/30 hover:-translate-y-0.5 group"
            >
              Get a Free Consultation
              <svg className="w-5 h-5 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-lg transition-all duration-300 border border-white/20 hover:border-white/40"
            >
              Explore Our Services
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Minimal Footer Bar */}
      <footer className="bg-primary-dark border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Logo Left */}
            <Link href="/" className="flex-shrink-0">
              <Image
                src="/logo-nobg.png"
                alt="OMO Consultants"
                width={120}
                height={45}
                className="object-contain brightness-0 invert opacity-70 hover:opacity-100 transition-opacity"
              />
            </Link>

            {/* Nav Links Center */}
            <nav className="flex items-center gap-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-white/60 hover:text-accent text-sm transition-colors duration-200"
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Legal Links Right */}
            <div className="flex items-center gap-4 text-sm">
              <span className="text-white/40 hidden lg:inline">
                © {currentYear}
              </span>
              <Link href="/privacy" className="text-white/60 hover:text-accent transition-colors">
                Privacy Policy
              </Link>
              <span className="text-white/30">|</span>
              <Link href="/terms" className="text-white/60 hover:text-accent transition-colors">
                Terms
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
