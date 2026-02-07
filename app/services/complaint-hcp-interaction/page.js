import React from "react";

export const metadata = {
  title: "Complaint & HCP Interaction - OMO Consultants",
  description: "We manage product complaints and healthcare professional (HCP) interactions in line with regulatory requirements, ensuring accurate documentation, timely investigations, and compliant safety reporting.",
};

export default function ComplaintHCPInteractionPage() {
  return (
    <main className="bg-white text-gray-900 min-h-screen">
      <section
        className="relative flex flex-col items-center justify-center min-h-[100vh] px-4"
        style={{
          backgroundImage:
            'linear-gradient(to bottom, rgba(15,15,25,0.7) 0%, rgba(15,15,25,0.85) 100%), url(/services/HR.jpg)',
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative z-10 flex flex-col items-center justify-center w-full">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-4 text-center drop-shadow-lg">
            Complaint & HCP Interaction
          </h1>
          <p className="text-lg md:text-xl text-white max-w-2xl text-center mb-8 drop-shadow-md">
            We manage product complaints and healthcare professional (HCP) interactions in line with regulatory requirements, ensuring accurate documentation, timely investigations, and compliant safety reporting.
          </p>
        </div>
      </section>
      <section className="max-w-4xl mx-auto px-4 py-12 text-center">
        <h2 className="text-3xl md:text-4xl font-extrabold text-teal-700 mb-6">Overview</h2>
        <p className="text-xl md:text-2xl text-gray-800 mb-8">
          We manage product complaints and healthcare professional (HCP) interactions in line with regulatory requirements, ensuring accurate documentation, timely investigations, and compliant safety reporting. From intake and investigation through to closure and regulatory reporting, we help you meet pharmacovigilance and quality expectations while protecting patient safety.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/services/HR.jpg"
            alt="Complaint & HCP Interaction"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-fuchsia-700 mb-4">Key Expertise</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>Product complaint handling and investigation</li>
            <li>Healthcare professional (HCP) interaction management</li>
            <li>Accurate documentation and timely investigations</li>
            <li>Compliant safety reporting and pharmacovigilance</li>
          </ul>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-4 py-12 flex flex-col md:flex-row-reverse items-center gap-8">
        <div className="md:w-1/2 w-full">
          <img
            src="/HR.jpg"
            alt="How We Help - Complaint & HCP Interaction"
            className="rounded-xl shadow-lg w-full object-cover"
            style={{ maxHeight: "340px" }}
          />
        </div>
        <div className="md:w-1/2 w-full">
          <h3 className="text-2xl md:text-3xl font-bold text-orange-600 mb-4">How We Help</h3>
          <ul className="list-disc pl-6 space-y-3 text-lg md:text-xl text-gray-700">
            <li>End-to-end complaint and HCP processes aligned with regulations</li>
            <li>Robust documentation and investigation to support closure and reporting</li>
            <li>Integration with your quality and pharmacovigilance systems</li>
          </ul>
        </div>
      </section>
    </main>
  );
}
