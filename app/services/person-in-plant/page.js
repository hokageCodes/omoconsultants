import React from "react";

export const metadata = {
  title: "Person-in-Plant Visitation - OMO Consultants",
  description: "On-site person-in-plant support to monitor operations, oversee quality activities, and ensure compliance with regulatory and client expectations.",
};

export default function PersonInPlantPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(15,15,25,0.7) 0%, rgba(15,15,25,0.85) 100%), url(/med-plant.png)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
            Person-in-Plant Visitation
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            Our experienced consultants provide on-site person-in-plant support to monitor operations, oversee quality activities, and ensure compliance with regulatory and client expectations.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          Our experienced consultants provide on-site person-in-plant support to monitor operations, oversee quality activities, and ensure compliance with regulatory and client expectations. We deliver hands-on oversight at your facilities or your partners’, helping you maintain visibility and control over critical quality and compliance activities.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/med-plant.png"
            alt="Person-in-Plant Visitation"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>On-site presence at your or your partners’ facilities</li>
            <li>Monitoring of operations and quality activities</li>
            <li>Oversight aligned with regulatory and client expectations</li>
            <li>Real-time visibility and compliance assurance</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/plant.jpg"
            alt="How We Help - Person-in-Plant"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Dedicated on-site support when and where you need it</li>
            <li>Quality and compliance oversight that fits your supply chain</li>
            <li>Clear reporting and escalation to support decision-making</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
