import React from 'react';

export default function FAQs() {
  return (
    <section className="py-16 bg-white text-primary-dark">
      <div className="max-w-7xl mx-auto px-6">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-center">
          Frequently Asked Questions
        </h2>

        {/* FAQ Items */}
        <div className="space-y-8">
          {/* FAQ 1 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">What services do you offer?</h3>
            <p className="text-sm text-gray-700">
              We offer consultancy services in Quality Assurance, Regulatory Compliance, Clinical Services, and Specialised QP & RP Services tailored to the Bio-Pharmaceutical and Medical Device industries.
            </p>
          </div>

          {/* FAQ 2 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">How can OMO Consultants help my business?</h3>
            <p className="text-sm text-gray-700">
              Our team of experts provides tailored solutions to ensure compliance, streamline processes, and accelerate your projects in the life sciences industry.
            </p>
          </div>

          {/* FAQ 3 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">Do you provide training services?</h3>
            <p className="text-sm text-gray-700">
              Yes, we offer on-demand training in areas such as GMP, GDP, and regulatory compliance, leveraging our hands-on experience and expertise.
            </p>
          </div>

          {/* FAQ 4 */}
          <div>
            <h3 className="text-xl font-semibold mb-2">How can I contact OMO Consultants?</h3>
            <p className="text-sm text-gray-700">
              You can reach us via email at info@omoconsultants.com or call us at +1 (555) 123-4567. We look forward to assisting you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}