import HowWeCanHelp from "@/components/sections/HowWeCanHelp";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import Head from "next/head";

export const metadata = {
  title: "Contact Us - OMO Consultants",
  description:
    "Reach out to OMO Consultants for expert guidance and tailored solutions in the Bio-Pharmaceutical and Medical Device industries.",
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="contact OMO Consultants, pharmaceutical consultancy, medical device industries, expert guidance, tailored solutions"
        />
        <meta name="author" content="OMO Consultants" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-background text-text-primary">
        {/* ================= HERO ================= */}
        <section className="text-center py-20 px-6">
          <h1 className="text-5xl font-heading font-bold mb-4">
            Let’s Innovate Together
          </h1>
          <p className="text-lg text-text-secondary mb-6 max-w-2xl mx-auto">
            Expert guidance for the bio-pharmaceutical and medical device
            industries. Reach out to start your consultation today.
          </p>
        </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-600 border-4 border-teal-100 flex items-center justify-center shadow-lg">
              <Mail className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Email Us</h3>
            <a href="mailto:info@omoconsultants.com" className="text-teal-700 font-medium text-base hover:text-teal-800 transition">
              info@omoconsultants.com
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-600 border-4 border-teal-100 flex items-center justify-center shadow-lg">
              <Phone className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Call Us</h3>
            <a href="tel:+442030262660" className="text-teal-700 font-medium text-base hover:text-teal-800 transition">
              +44 (0) 203 026 2660
            </a>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-600 border-4 border-teal-100 flex items-center justify-center shadow-lg">
              <MapPin className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Visit Us</h3>
            <p className="text-gray-600 text-base leading-relaxed font-medium">
              Harben House, Harben Parade<br />London, NW3 6LH, United Kingdom
            </p>
          </div>

          <div className="bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 border-2 border-gray-100 hover:border-teal-300 hover:shadow-xl transition-all duration-300 text-center">
            <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-teal-600 border-4 border-teal-100 flex items-center justify-center shadow-lg">
              <Clock className="w-12 h-12 text-white" />
            </div>
            <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-4">Business Hours</h3>
            <p className="text-gray-600 text-base leading-relaxed font-medium">
              Mon–Fri<br />9am – 6pm EST
            </p>
          </div>
        </div>
      </section>

      {/* Why Contact Us */}
      <HowWeCanHelp />
    </main>
  </>
  );
}
