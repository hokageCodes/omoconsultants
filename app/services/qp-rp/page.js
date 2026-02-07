import React from "react";

export const metadata = {
  title: "Specialised QP & RP Services - OMO Consultants",
  description: "Qualified Person and Responsible Person services for EU/EEA compliance.",
};

export default function QPRPPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-4" style={{backgroundImage: 'url(/services/responsible.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">Specialised QP & RP Services</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Qualified Person and Responsible Person services for EU/EEA compliance.
          </p>
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We support organisations requiring MIA or WDA licences by providing experienced QP and RP oversight throughout manufacturing and distribution.
        </p>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/responsible.jpg" alt="Key Expertise - QP & RP Services" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>QP/RP named on MIA or WDA licences</li>
            <li>Support with manufacturer and wholesale licences</li>
            <li>Design and maintenance of Quality Management Systems</li>
            <li>Flexible long-term and interim staffing models</li>
            <li>Dual-QP continuity to reduce operational risk</li>
            <li>Full QMS oversight across EU distribution channels</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/love.png" alt="How We Help - QP & RP Services" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Experienced QP and RP oversight for compliance</li>
            <li>Comprehensive QMS and operational support</li>
            <li>Flexible and risk-reducing staffing solutions</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
