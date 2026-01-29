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
          <h1 className="text-4xl font-heading font-bold mb-4">
            Let’s Innovate Together
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Expert guidance for the bio-pharmaceutical and medical device
            industries. Reach out to start your consultation today.
          </p>
        </section>

      {/* Contact Methods */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Email Us</h3>
            <a href="mailto:info@omoconsultants.com" className="text-teal-700 font-medium text-sm">
              info@omoconsultants.com
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Phone className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+442030262660" className="text-teal-700 font-medium text-sm">
              +44 (0) 203 026 2660
            </a>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Visit Us</h3>
            <p className="text-gray-600 text-sm">
              Harben House, Harben Parade<br />London, NW3 6LH, United Kingdom
            </p>
          </div>

          <div className="bg-white border border-gray-200 rounded-2xl p-6 shadow-sm text-center">
            <div className="w-12 h-12 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Clock className="w-6 h-6 text-teal-600" />
            </div>
            <h3 className="text-sm font-semibold text-gray-900 mb-2">Business Hours</h3>
            <p className="text-gray-600 text-sm">
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
