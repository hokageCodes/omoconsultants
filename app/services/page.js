import FAQs from "@/components/sections/FAQs";
import Image from "next/image";
import Head from "next/head";

export const metadata = {
  title: "Our Services - OMO Consultants",
  description:
    "Explore the range of services offered by OMO Consultants, tailored to the Bio-Pharmaceutical and Medical Device industries.",
};

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="pharmaceutical consultancy, medical device industries, quality assurance, regulatory compliance, clinical services, QP services, RP services, pharmaceutical training"
        />
        <meta name="author" content="OMO Consultants" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-white text-gray-900">
        {/* ================= HERO ================= */}
      <section className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12 max-w-7xl mx-auto py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="lg:w-1/2 w-full">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-4 sm:mb-6">
            Pharmaceutical & Regulatory Expertise
          </h1>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed">
            We partner with bio-pharmaceutical and medical device organisations to meet global regulatory expectations, safeguard quality, and confidently move products to market.
          </p>
        </div>

        {/* Image Content */}
        <div className="lg:w-1/2 w-full flex justify-center">
          <div className="relative w-full max-w-md lg:max-w-none">
            <Image
              src="/about-hero.jpeg"
              alt="Consultation in progress"
              width={620}
              height={620}
              className="rounded-2xl shadow-xl w-full h-auto"
            />
            {/* Corner accents */}
            <span className="hidden md:block absolute -top-4 lg:-top-6 -left-4 lg:-left-6 w-12 lg:w-16 h-12 lg:h-16 rounded-2xl border-t-4 border-l-4 border-teal-500" />
            <span className="hidden md:block absolute -bottom-4 lg:-bottom-6 -right-4 lg:-right-6 w-12 lg:w-16 h-12 lg:h-16 rounded-2xl border-b-4 border-r-4 border-teal-500" />
          </div>
        </div>
      </section>


        {/* ================= SERVICES ================= */}
        <section className="max-w-7xl mx-auto px-4 py-20 space-y-16">
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
    </>
  );
}

/* ================= COMPONENT ================= */

function ServiceBlock({
  title,
  summary,
  children,
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 border-t border-gray-200 pt-12">
      <div>
        <h2 className="text-2xl font-bold text-gray-900 mb-3">{title}</h2>
        <p className="text-gray-600">{summary}</p>
      </div>

      <div className="lg:col-span-2 space-y-4 text-gray-600 leading-relaxed">
        {children}
      </div>
    </div>
  );
}
