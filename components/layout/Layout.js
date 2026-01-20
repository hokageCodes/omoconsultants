import React from 'react'
import Navbar from "@/components/sections/Navbar";

export const metadata = {
  title: "OMO Consultants - Accelerating Innovation in Life Sciences",
  description:
    "OMO Consultants provides expert guidance in Quality Assurance, Regulatory Compliance, and Clinical Services for the Bio-Pharmaceutical and Medical Device industries.",
  openGraph: {
    title: "OMO Consultants - Accelerating Innovation in Life Sciences",
    description:
      "OMO Consultants provides expert guidance in Quality Assurance, Regulatory Compliance, and Clinical Services for the Bio-Pharmaceutical and Medical Device industries.",
    url: "https://omoconsultants.vercel.app",
    images: [
      {
        url: "https://omoconsultants.vercel.app/logo.png",
        width: 800,
        height: 600,
        alt: "OMO Consultants Logo",
      },
    ],
  },
};

export default function Layout({ children }) {
  return (
    <div className="bg-background text-text-primary">
      <Navbar />
      <main>{children}</main>
    </div>
  );
}
