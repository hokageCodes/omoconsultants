import React from "react";

export const metadata = {
  title: "Drug Representation - OMO Consultants",
  description: "Regulatory and drug representation services to help organisations manage Health Authority interactions, maintain compliance, and ensure effective product oversight in target markets.",
};

export default function DrugRepresentationPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(15,15,25,0.7) 0%, rgba(15,15,25,0.85) 100%), url(/services/drug.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
            Drug Representation
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            We offer regulatory and drug representation services to help organisations manage Health Authority interactions, maintain compliance, and ensure effective product oversight in target markets.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We offer regulatory and drug representation services to help organisations manage Health Authority interactions, maintain compliance, and ensure effective product oversight in target markets. Our representation services provide a local or regional point of contact for regulators and support compliant market presence where you need it.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/drug.jpg"
            alt="Drug Representation"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Regulatory and drug representation in target markets</li>
            <li>Health Authority interaction and correspondence</li>
            <li>Compliance and licence maintenance</li>
            <li>Effective product oversight</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/capsule.jpg"
            alt="How We Help - Drug Representation"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Designated representation for regulatory and product matters</li>
            <li>Liaison with Health Authorities and timely response to queries</li>
            <li>Oversight that supports compliant market presence</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
