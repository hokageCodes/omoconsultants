import React from "react";
import { ShieldCheck, FileText, Activity, Package } from "lucide-react";

const services = [
  {
    icon: ShieldCheck,
    title: "Quality Assurance",
    features: ["QMS Implementation", "Gap Analysis", "Vendor Audits"],
  },
  {
    icon: FileText,
    title: "Regulatory Compliance",
    features: ["FDA & EMA Submissions", "Regulatory Strategy", "Post-Market Surveillance"],
  },
  {
    icon: Activity,
    title: "Clinical Services",
    features: ["Clinical Evaluation", "GCP Auditing", "Trial Management"],
  },
  {
    icon: Package,
    title: "Specialised QP/RP",
    features: ["Batch Release", "Responsible Person", "GDP Compliance"],
  },
];

export default function HowWeCanHelp() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-sm font-semibold text-teal-600 uppercase tracking-wide mb-3">
            OUR EXPERTISE
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            How We Can Help
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We provide end-to-end solutions tailored to your product lifecycle.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="bg-gray-50 rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center mb-4">
                <service.icon className="w-6 h-6 text-teal-600" />
              </div>

              {/* Title */}
              <h3 className="text-lg font-bold text-gray-900 mb-4">{service.title}</h3>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-teal-600 mt-0.5">✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}