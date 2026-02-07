import React from "react";
import Link from "next/link";

export const metadata = {
  title: "Careers - OMO Consultants",
  description: "Careers at OMO Consultants. Coming soon.",
};

export default function CareersPage() {
  return (
    <main className="bg-white text-gray-900 min-h-[70vh] flex items-center justify-center px-4">
      <section className="max-w-2xl mx-auto text-center py-16">
        <p className="text-sm font-semibold tracking-wide text-teal-600 uppercase mb-4">
          Work with OMO
        </p>
        <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
          Careers
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          We’re building something great. Career opportunities will be listed here soon.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-teal-600 text-white font-semibold hover:bg-teal-700 transition"
          >
            Back to Home
          </Link>
          <Link
            href="/#contact-form"
            className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-teal-600 text-teal-700 font-semibold hover:bg-teal-50 transition"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
