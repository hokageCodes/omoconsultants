import React from "react";
import Image from "next/image";
import { ShieldCheck, ClipboardCheck, Star, HeartHandshake } from "lucide-react";

export const metadata = {
  title: "About Us - OMO Consultants",
  description: "Learn more about OMO Consultants, our mission, and our expertise in providing top-notch consulting services.",
};

export default function AboutPage() {
  return (
    <main className="py-6 sm:py-12 px-4 sm:px-6 lg:px-8 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Excellence in Consultancy
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            Providing our expertise to the pharmaceutical, bio-technological, and medical device industries, we deliver high-quality products that are safe and effective for patients while reducing time to market. Customer satisfaction remains our top priority as we evolve with the industry.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            <Image
              src="/about-hero.jpeg"
              alt="Consultation in progress"
              width={620}
              height={620}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            {/* Corner accents */}
            <span className="hidden md:block absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-12 lg:w-16 h-12 lg:h-16 rounded-2xl border-t-4 border-l-4 border-teal-500" />
            <span className="hidden md:block absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-12 lg:w-16 h-12 lg:h-16 rounded-2xl border-b-4 border-r-4 border-teal-500" />
          </div>
        </div>
      </section>

      {/* Mission Quote Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-gray-500 text-white rounded-xl sm:rounded-2xl shadow-lg px-6 sm:px-10 py-8 sm:py-12 relative">
            <span className="absolute left-4 sm:left-8 top-4 sm:top-6 text-white/50 text-3xl sm:text-4xl leading-none">"</span>
            <blockquote className="text-lg sm:text-2xl lg:text-3xl italic font-semibold text-center leading-relaxed">
              Our mission is to empower businesses to achieve excellence, ensuring that every product we touch improves lives and meets the highest standards of quality.
            </blockquote>
          </div>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {/* Mission */}
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-md p-6 sm:p-10 text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-teal-700 mb-3 sm:mb-4">Our Mission</h3>
            <p className="text-sm sm:text-base md:text-lg leading-relaxed text-slate-700">
              Providing our expertise to the pharmaceutical, bio-technological, and medical device industries, we deliver high-quality products that are safe and effective for patients while reducing time to market. Customer satisfaction remains our top priority as we evolve with the industry.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white rounded-2xl shadow-md p-10 text-center">
            <h3 className="text-2xl font-bold text-teal-700 mb-4">Our Vision</h3>
            <p className="text-base md:text-lg leading-relaxed text-slate-700">
              We aim to become a leader in providing expertise in the health industry and to be recognised by our clients as being the best in the business. Through our professional expertise in consultancy, we guide and support our clients so that they can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-20 px-2 bg-white">
        <div className="mx-auto max-w-7xl grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* LEFT COLUMN */}
          <div className="space-y-6">
            <div>
              <h2 className="text-4xl font-bold text-gray-900">Our Values</h2>
              <p className="text-lg text-gray-600 max-w-xl mt-3">
                The core principles that drive our interactions, decisions, and delivery.
              </p>
            </div>

            {/* Image Card */}  
            <div className="relative w-full max-w-md rounded-2xl overflow-hidden shadow-lg">
              <Image
                src="/Health.jpeg"
                alt="Building quality blocks"
                width={620}
                height={720}
                className="w-full h-full object-cover"
              />
              {/* Quote Overlay */}
              <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent px-4 py-3">
                <p className="text-sm italic text-white">“Excellence is not an act, but a habit.”</p>
              </div>
            </div>
          </div>

          {/* RIGHT COLUMN */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Card 1 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Acting with Honesty and Integrity
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We operate with absolute transparency. Trust is the foundation of our partnerships, and we provide candid, accurate advice that ensures compliance and ethical success.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
                <ClipboardCheck className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Focusing on Quality
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Quality is not just a checkbox; it is our mindset. We deliver uncompromising standards in every audit, document, and strategy we produce, ensuring your products meet the highest benchmarks.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
                <Star className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Providing Professional Excellence
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                We bring top-tier expertise and industry veteran knowledge to the table. Our commitment to professional development ensures we stay ahead of regulatory trends to better serve you.
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white border border-gray-200 rounded-2xl shadow-sm p-6">
              <div className="mb-4 inline-flex items-center justify-center w-10 h-10 rounded-lg bg-teal-50 text-teal-600">
                <HeartHandshake className="w-5 h-5" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                Valuing our Partners & Clients
              </h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                Your goals are our goals. We prioritize long-term relationships over short-term gains, working collaboratively to achieve mutual growth and sustained success.
              </p>
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}