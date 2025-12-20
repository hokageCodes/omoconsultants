import FAQs from "@/components/sections/FAQs";
import Image from "next/image";

export const metadata = {
  title: "Our Services - OMO Consultants",
  description:
    "Expert pharmaceutical consultancy services supporting quality, regulatory, and clinical excellence.",
};

export default function ServicesPage() {
  return (
    <main className="bg-background text-text-primary">
      {/* ================= HERO ================= */}
      <section className="max-w-7xl mx-auto px-6 py-32 grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
        <div>
          <span className="text-sm font-semibold tracking-wide text-accent">
            What We Do
          </span>

          <h1 className="font-heading text-4xl md:text-5xl font-bold mt-sm mb-md">
            Pharmaceutical & Regulatory Expertise
          </h1>

          <p className="text-lg text-text-secondary max-w-xl">
            We partner with bio-pharmaceutical and medical device organisations
            to meet global regulatory expectations, safeguard quality, and
            confidently move products to market.
          </p>
        </div>

        <div className="flex justify-center">
          <Image
            src="/Hands.jpeg"
            alt="OMO Consultants Services"
            width={520}
            height={520}
            className="rounded-2xl shadow-lg"
          />
        </div>
      </section>

      {/* ================= SERVICES ================= */}
      <section className="max-w-7xl mx-auto px-6 py-3xl space-y-3xl">
        {/* SERVICE BLOCK */}
        <ServiceBlock
          title="Quality Assurance"
          summary="Ensuring product quality, compliance, and inspection readiness across the product lifecycle."
        >
          <p>
            We implement robust quality initiatives and control methodologies
            aligned with global Health Authority expectations. Our expertise
            spans GxP services, clinical programs, and complex drug development
            environments.
          </p>
          <p>
            Acting as trusted scientific partners, our consultants combine
            technical expertise, business insight, and leadership to support
            research, development, and market delivery.
          </p>
        </ServiceBlock>

        <ServiceBlock
          title="Regulatory Compliance"
          summary="Strategic regulatory support from early development through post-approval lifecycle management."
        >
          <p>
            We work closely with clients to achieve Health Authority approvals
            and sustain compliance across global markets.
          </p>
          <p>
            Our experience covers non-clinical development, manufacturing,
            marketing authorisations, and ongoing regulatory obligations.
          </p>
          <p className="font-medium">
            Expertise includes pre-approval (IND, NDA, BLA) and post-approval
            variations and lifecycle management.
          </p>
        </ServiceBlock>

        <ServiceBlock
          title="Clinical Services"
          summary="Guidance through clinical readiness, trial applications, and regulatory transitions."
        >
          <p>
            Our clinical professionals support decision-making around trial
            readiness and study strategy, including advanced therapy medicinal
            products (ATMPs).
          </p>
          <p>
            We help organisations transition confidently from pre-clinical
            development into regulated clinical trials.
          </p>
        </ServiceBlock>

        <ServiceBlock
          title="Specialised QP & RP Services"
          summary="Qualified Person and Responsible Person services for EU/EEA compliance."
        >
          <p>
            We support organisations requiring MIA or WDA licences by providing
            experienced QP and RP oversight throughout manufacturing and
            distribution.
          </p>

          <ul className="list-disc pl-lg space-y-sm">
            <li>QP/RP named on MIA or WDA licences</li>
            <li>Support with manufacturer and wholesale licences</li>
            <li>Design and maintenance of Quality Management Systems</li>
            <li>Flexible long-term and interim staffing models</li>
            <li>Dual-QP continuity to reduce operational risk</li>
            <li>Full QMS oversight across EU distribution channels</li>
          </ul>
        </ServiceBlock>

        <ServiceBlock
          title="Pharmaceutical Training"
          summary="Practical, experience-driven training that embeds quality and operational excellence."
        >
          <p>
            Our consultants apply Lean and Six Sigma principles to help build
            sustainable quality cultures within organisations.
          </p>
          <p>
            Training spans theory and hands-on practice, delivering measurable
            operational improvements.
          </p>
          <p>
            We collaborate closely with teams to align processes, people, and
            performance with long-term business objectives.
          </p>
        </ServiceBlock>
      </section>

      <FAQs />
    </main>
  );
}

/* ================= COMPONENT ================= */

function ServiceBlock({
  title,
  summary,
  children,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-xl border-t border-border pt-2xl">
      <div>
        <h2 className="font-heading text-2xl font-bold mb-sm">{title}</h2>
        <p className="text-text-secondary">{summary}</p>
      </div>

      <div className="lg:col-span-2 space-y-md text-text-secondary leading-relaxed">
        {children}
      </div>
    </div>
  );
}
