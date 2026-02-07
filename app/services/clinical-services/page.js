import React from "react";

export const metadata = {
  title: "Clinical Services - OMO Consultants",
  description: "Guidance through clinical readiness, trial applications, and regulatory transitions.",
};

export default function ClinicalServicesPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section className="relative flex flex-col items-center justify-center min-h-[100vh] px-4" style={{backgroundImage: 'url(/services/clinic.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute inset-0 bg-black/60" aria-hidden="true"></div>
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">Clinical Services</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Guidance through clinical readiness, trial applications, and regulatory transitions.
          </p>
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          Our clinical professionals support decision-making around trial readiness and study strategy, including advanced therapy medicinal products (ATMPs).
        </p>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/clinic.jpg" alt="Key Expertise - Clinical Services" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Clinical trial readiness and study strategy</li>
            <li>Advanced therapy medicinal products (ATMPs)</li>
            <li>Transition from pre-clinical to regulated clinical trials</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/love.png" alt="How We Help - Clinical Services" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Guidance through clinical readiness and regulatory transitions</li>
            <li>Support for confident progression into clinical trials</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
