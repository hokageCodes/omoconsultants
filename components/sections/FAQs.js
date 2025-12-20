"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What services do you offer?",
    answer:
      "We offer consultancy services in Quality Assurance, Regulatory Compliance, Clinical Services, and Specialised QP & RP Services tailored to the Bio-Pharmaceutical and Medical Device industries.",
  },
  {
    question: "How can OMO Consultants help my business?",
    answer:
      "Our team of experts provides tailored solutions to ensure compliance, streamline processes, and accelerate your projects in the life sciences industry.",
  },
  {
    question: "Do you provide training services?",
    answer:
      "Yes, we offer on-demand training in areas such as GMP, GDP, and regulatory compliance, leveraging our hands-on experience and expertise.",
  },
  {
    question: "How can I contact OMO Consultants?",
    answer:
      "You can reach us via email at info@omoconsultants.com or call us at +1 (555) 123-4567. We look forward to assisting you.",
  },
];

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (idx) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="py-16 bg-background text-primary-dark">
      <div className="max-w-3xl mx-auto px-6">
        <motion.div
          initial={{ y: 15 }}
          whileInView={{ y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-accent font-semibold text-sm tracking-wider uppercase mb-4">
            FAQ
          </span>
          <h2 className="text-3xl md:text-4xl font-bold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div
              key={idx}
              initial={{ y: 15 }}
              whileInView={{ y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-white shadow-sm"
            >
              <button
                className="w-full flex items-center justify-between px-6 py-5 text-left font-semibold text-lg focus:outline-none transition bg-white hover:bg-gray-50"
                onClick={() => toggle(idx)}
                aria-expanded={openIndex === idx}
              >
                <span className="pr-4">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === idx ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className="w-5 h-5 text-accent flex-shrink-0" />
                </motion.div>
              </button>
              <AnimatePresence>
                {openIndex === idx && (
                  <motion.div
                    initial={{ height: 0 }}
                    animate={{ height: "auto" }}
                    exit={{ height: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-5 text-text-secondary leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
