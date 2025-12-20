import React from "react";
import Button from "@/components/ui/Button";
import FAQs from "@/components/sections/FAQs";

export const metadata = {
  title: "Contact Us - OMO Consultants",
  description:
    "Reach out to OMO Consultants for expert guidance and tailored solutions in the Bio-Pharmaceutical and Medical Device industries.",
};

export default function ContactPage() {
  return (
    <main className="text-text-primary overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative py-32 px-6 text-center">
        {/* Background depth */}
        <div className="absolute inset-0" />

        <div className="relative max-w-3xl mx-auto">
          <span className="inline-block mb-md text-sm font-semibold tracking-wide text-accent">
            Contact OMO Consultants
          </span>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mb-md">
            Let’s Innovate Together
          </h1>

          <p className="text-lg text-text-secondary">
            Expert guidance for the bio-pharmaceutical and medical device
            industries. Reach out to start a conversation that moves your
            project forward — with clarity and confidence.
          </p>
        </div>
      </section>

      {/* ================= MAIN SECTION ================= */}
      <section className="relative max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-3xl py-3xl px-6">
        {/* -------- FORM -------- */}
        <div className="relative bg-surface rounded-2xl p-2xl shadow-lg">
          {/* Accent bar */}
          <div className="absolute top-0 left-0 right-0 h-1 rounded-t-2xl bg-accent" />

          <h2 className="font-heading text-2xl font-bold mb-sm">
            Send a Message
          </h2>

          <p className="text-sm text-text-secondary mb-xl">
            Tell us about your needs. A senior consultant will respond within
            24 hours.
          </p>

          <form className="space-y-lg">
            {/* Name */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-xs">
                Full Name
              </label>
              <input
                type="text"
                className="w-full rounded-lg border border-border bg-background px-md py-sm focus:border-primary focus:outline-none"
                placeholder="John Doe"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-xs">
                Business Email
              </label>
              <input
                type="email"
                className="w-full rounded-lg border border-border bg-background px-md py-sm focus:border-primary focus:outline-none"
                placeholder="john@company.com"
              />
            </div>

            {/* Phone */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-xs">
                Phone Number <span className="text-text-muted">(optional)</span>
              </label>
              <input
                type="tel"
                className="w-full rounded-lg border border-border bg-background px-md py-sm focus:border-primary focus:outline-none"
                placeholder="+1 (555) 000-0000"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-text-secondary mb-xs">
                How can we help?
              </label>
              <textarea
                rows={5}
                className="w-full rounded-lg border border-border bg-background px-md py-sm focus:border-primary focus:outline-none"
                placeholder="Tell us about your regulatory, quality, or clinical requirements…"
              />
            </div>

            <Button className="w-full py-md">
              Send Message
            </Button>
          </form>
        </div>

        {/* -------- INFO -------- */}
        <div className="flex flex-col justify-center gap-xl">
          <div>
            <h2 className="font-heading text-2xl font-bold mb-md">
              Speak With Experts
            </h2>

            <p className="text-text-secondary max-w-md">
              Our consultants work with global pharmaceutical and medical device
              organizations. When you contact us, you’re speaking directly with
              industry professionals — not a sales layer.
            </p>
          </div>

          <div className="space-y-lg">
            <div>
              <p className="text-sm text-text-muted">Call us</p>
              <p className="text-lg font-semibold text-primary">
                +1 (555) 012-3456
              </p>
              <p className="text-sm text-text-secondary">
                Mon–Fri · 9am – 6pm EST
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Email</p>
              <p className="text-lg font-semibold">
                connect@omoconsultants.com
              </p>
            </div>

            <div>
              <p className="text-sm text-text-muted">Headquarters</p>
              <p className="text-lg font-semibold">
                123 Innovation Dr<br />
                BioTech Park, NY 10012
              </p>
            </div>
          </div>
        </div>
      </section>

      <FAQs />
    </main>
  );
}
