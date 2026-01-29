import React from "react";

export const metadata = {
  title: "Pharmaceutical Training - OMO Consultants",
  description: "Practical, experience-driven training that embeds quality and operational excellence.",
};

export default function TrainingPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(30,30,40,0.45) 0%, rgba(30,30,40,0.7) 100%), url(/services/training.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundAttachment: 'scroll',
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">Pharmaceutical Training</h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Practical, experience-driven training that embeds quality and operational excellence.
          </p>
        </div>
      </section>
      {/* Overview */}
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          Our consultants apply Lean and Six Sigma principles to help build sustainable quality cultures within organisations.
        </p>
      </section>

      {/* Key Expertise */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/training.jpg" alt="Key Expertise - Training" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Lean and Six Sigma principles</li>
            <li>Practical, experience-driven training</li>
            <li>Operational excellence and quality culture</li>
          </ul>
        </div>
      </section>

      {/* How We Help */}
      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img src="/services/serve1.jpg" alt="How We Help - Training" className="rounded-xl shadow-lg w-full object-cover" style={{maxHeight:'340px'}} />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Hands-on, measurable operational improvements</li>
            <li>Collaboration to align processes, people, and performance</li>
            <li>Long-term business objective alignment</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
