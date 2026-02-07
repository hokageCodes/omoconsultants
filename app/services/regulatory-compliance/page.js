import React from "react";

export const metadata = {
  title: "Regulatory Compliance - OMO Consultants",
  description: "Strategic regulatory support from early development through post-approval lifecycle management.",
};

export default function RegulatoryCompliancePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(20,20,30,0.55) 0%, rgba(20,20,30,0.7) 100%), url(/compliance.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >
        <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">Regulatory Compliance</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Strategic regulatory support from early development through post-approval lifecycle management.
          </p>
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We work closely with clients to achieve Health Authority approvals and sustain compliance across global markets.
        </p>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/compliance.jpg" alt="Key Expertise - Regulatory Compliance" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Non-clinical development</li>
            <li>Manufacturing and marketing authorisations</li>
            <li>Ongoing regulatory obligations</li>
            <li>Pre-approval (IND, NDA, BLA) and post-approval lifecycle management</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/love.png" alt="How We Help - Regulatory Compliance" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Strategic regulatory support from early development through post-approval</li>
            <li>Expertise in global compliance and Health Authority approvals</li>
            <li>Support for variations and lifecycle management</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
