import React from "react";
import Image from "next/image";
import WhyChooseUs from "@/components/sections/WhyChooseUs";

export const metadata = {
  title: "About Us - OMO Consultants",
  description: "Learn more about OMO Consultants, our mission, and our expertise in providing top-notch consulting services.",
};

export default function AboutPage() {
  return (
    <main className="py-20 px-2 bg-white text-gray-800">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center justify-between max-w-7xl mx-auto py-20">
        {/* Text Content */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">
            Excellence in Consultancy
          </h1>
          <p className="text-base lg:text-lg text-gray-600 leading-relaxed mb-6">
            Providing our expertise to the pharmaceutical, bio-technological, and medical device industries, we deliver high-quality products that are safe and effective for patients while reducing time to market. Customer satisfaction remains our top priority as we evolve with the industry.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 flex justify-center">
          <Image
            src="/about-hero.jpeg"
            alt="About Us Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </section>

      {/* Parallax Quote Section */}
      <section
        className="relative bg-fixed bg-cover bg-center py-20 text-white"
        style={{ backgroundImage: "url('/path-to-parallax-image.jpg')" }}
      >
        <div className="max-w-4xl mx-auto text-center bg-black/50 p-8 rounded-lg">
          <blockquote className="text-xl lg:text-3xl italic font-semibold">
            "Our mission is to empower businesses to achieve excellence, ensuring that every product we touch improves lives and meets the highest standards of quality."
          </blockquote>
        </div>
      </section>

      {/* Mission and Vision Section */}
      <section className="py-20 px-2 text-gray-800">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Mission */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Mission</h3>
            <p className="text-lg leading-relaxed">
              Providing our expertise to the pharmaceutical, bio-technological, and medical device industries, we deliver high-quality products that are safe and effective for patients while reducing time to market. Customer satisfaction remains our top priority as we evolve with the industry.
            </p>
          </div>

          {/* Vision */}
          <div className="bg-white shadow-lg rounded-lg p-8 text-center">
            <h3 className="text-2xl font-bold text-blue-600 mb-4">Our Vision</h3>
            <p className="text-lg leading-relaxed">
              We aim to become a leader in providing expertise in the health industry and to be recognised by our clients as being the best in the business. Through our professional expertise in consultancy, we guide and support our clients so that they can make a difference.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-3xl">
  <div className="mx-auto max-w-7xl px-lg grid grid-cols-1 lg:grid-cols-2 gap-3xl items-center">
    
    {/* LEFT COLUMN */}
    <div>
      <h2 className="font-heading text-4xl font-bold text-primary mb-md">
        Our Values
      </h2>

      <p className="font-body text-lg text-text-secondary max-w-md mb-xl">
        The core principles that drive our interactions, decisions, and delivery.
      </p>

      {/* Image Card */}
      <div className="relative w-full max-w-sm rounded-xl overflow-hidden shadow-lg">
        <img
          src="/Health.jpeg"
          alt="OMO Consultants professional"
          className="w-full h-full object-cover"
        />

        {/* Quote Overlay */}
        <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-lg">
          <p className="text-sm italic text-white">
            “Excellence is not an act, but a habit.”
          </p>
        </div>
      </div>
    </div>

    {/* RIGHT COLUMN */}
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-lg">
      
      {/* Card 1 */}
      <div className="bg-surface rounded-lg shadow-md p-xl">
        <div className="mb-md inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
          ✓
        </div>

        <h3 className="font-heading text-lg font-semibold text-primary mb-sm">
          Acting with Honesty and Integrity
        </h3>

        <p className="font-body text-text-secondary text-sm">
          We operate with absolute transparency. Trust is the foundation of our
          partnerships, and we believe in providing candid, accurate advice
          that ensures compliance and ethical success.
        </p>
      </div>

      {/* Card 2 */}
      <div className="bg-surface rounded-lg shadow-md p-xl">
        <div className="mb-md inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent/15 text-accent">
          ◆
        </div>

        <h3 className="font-heading text-lg font-semibold text-primary mb-sm">
          Focusing on Quality
        </h3>

        <p className="font-body text-text-secondary text-sm">
          Quality is not just a checkbox; it is our mindset. We deliver
          uncompromising standards in every audit, document, and strategy we
          produce, ensuring your products meet the highest benchmarks.
        </p>
      </div>

      {/* Card 3 */}
      <div className="bg-surface rounded-lg shadow-md p-xl">
        <div className="mb-md inline-flex items-center justify-center w-10 h-10 rounded-md bg-primary/10 text-primary">
          ★
        </div>

        <h3 className="font-heading text-lg font-semibold text-primary mb-sm">
          Providing Professional Excellence
        </h3>

        <p className="font-body text-text-secondary text-sm">
          We bring top-tier expertise and industry veteran knowledge to the
          table. Our commitment to professional development ensures we stay
          ahead of regulatory trends to better serve you.
        </p>
      </div>

      {/* Card 4 */}
      <div className="bg-surface rounded-lg shadow-md p-xl">
        <div className="mb-md inline-flex items-center justify-center w-10 h-10 rounded-md bg-accent/15 text-accent">
          ❤
        </div>

        <h3 className="font-heading text-lg font-semibold text-primary mb-sm">
          Valuing our Partners & Clients
        </h3>

        <p className="font-body text-text-secondary text-sm">
          Your goals are our goals. We prioritize long-term relationships over
          short-term gains, working collaboratively to achieve mutual growth
          and sustained success.
        </p>
      </div>

    </div>
  </div>
</section>

    </main>
  );
}