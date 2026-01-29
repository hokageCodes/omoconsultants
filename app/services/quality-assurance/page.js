import React from "react";

export const metadata = {
  title: "Quality Assurance - OMO Consultants",
  description: "Ensuring product quality, compliance, and inspection readiness across the product lifecycle.",
};

export default function QualityAssurancePage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(30,30,40,0.45) 0%, rgba(30,30,40,0.7) 100%), url(/services/serve1.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">Quality Assurance</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Ensuring product quality, compliance, and inspection readiness across the product lifecycle.
          </p>
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We implement robust quality initiatives and control methodologies aligned with global Health Authority expectations. Our expertise spans GxP services, clinical programs, and complex drug development environments.
        </p>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/serve1.jpg" alt="Key Expertise - Quality Assurance" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>GxP services and compliance</li>
            <li>Clinical program support</li>
            <li>Complex drug development environments</li>
            <li>Quality initiatives and control methodologies</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/training.jpg" alt="How We Help - Quality Assurance" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Trusted scientific partnership</li>
            <li>Technical expertise and business insight</li>
            <li>Leadership in research, development, and market delivery</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
