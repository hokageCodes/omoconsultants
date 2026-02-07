import React from "react";

export const metadata = {
  title: "Global GMP Compliance - OMO Consultants",
  description: "We support organisations in meeting international GMP standards through gap assessments, remediation planning, audit readiness, and ongoing compliance oversight.",
};

export default function GlobalGMPCompliancePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(15,15,25,0.7) 0%, rgba(15,15,25,0.85) 100%), url(/services/GMP.jpg)',
          backgroundSize: "contain",
          backgroundPosition: "left",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
            Ensuring Global GMP Compliance
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            We support organisations in meeting international GMP standards through gap assessments, remediation planning, audit readiness, and ongoing compliance oversight.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We support organisations in meeting international GMP standards through gap assessments, remediation planning, audit readiness, and ongoing compliance oversight. Our team helps you identify gaps, build robust remediation plans, and maintain inspection readiness so you can operate with confidence across global markets.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/GMP.jpg"
            alt="Global GMP Compliance"
            className="rounded-xl shadow-lg w-full object-contain"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Gap assessments against international GMP standards</li>
            <li>Remediation planning and execution</li>
            <li>Audit readiness and inspection support</li>
            <li>Ongoing compliance oversight</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/gmp-c.jpg"
            alt="How We Help - Global GMP Compliance"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Structured gap assessments and risk-based prioritisation</li>
            <li>Practical remediation plans aligned with Health Authority expectations</li>
            <li>Sustained audit readiness and quality system strengthening</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
