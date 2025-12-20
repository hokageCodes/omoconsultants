import Head from "next/head";
import Button from "@/components/ui/Button";
import FAQs from "@/components/sections/FAQs";

export const metadata = {
  title: "Contact Us - OMO Consultants",
  description:
    "Reach out to OMO Consultants for expert guidance and tailored solutions in the Bio-Pharmaceutical and Medical Device industries.",
};

export default function ContactPage() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta
          name="keywords"
          content="contact OMO Consultants, pharmaceutical consultancy, medical device industries, expert guidance, tailored solutions"
        />
        <meta name="author" content="OMO Consultants" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <main className="bg-background text-text-primary">
        {/* ================= HERO ================= */}
        <section className="text-center py-20 px-6">
          <h1 className="text-4xl font-heading font-bold mb-4">
            Let’s Innovate Together
          </h1>
          <p className="text-lg text-text-secondary mb-6">
            Expert guidance for the bio-pharmaceutical and medical device
            industries. Reach out to start your consultation today.
          </p>
        </section>

        {/* ================= MAIN SECTION ================= */}
        <section className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 py-12 px-6">
          {/* -------- FORM -------- */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Send a Message
            </h2>
            <p className="text-sm text-text-secondary mb-6">
              Fill out the form below and our team will get back to you within 24
              hours.
            </p>
            <form className="space-y-6">
              {/* Name */}
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-secondary"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="mt-1 block w-full rounded-lg border-border bg-background shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-secondary"
                >
                  Business Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="mt-1 block w-full rounded-lg border-border bg-background shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="john@company.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-text-secondary"
                >
                  Phone Number (Optional)
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="mt-1 block w-full rounded-lg border-border bg-background shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-secondary"
                >
                  How can we help?
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  className="mt-1 block w-full rounded-lg border-border bg-background shadow-sm focus:border-primary focus:ring-primary sm:text-sm"
                  placeholder="Tell us about your project requirements..."
                ></textarea>
              </div>

              <Button className="w-full">Send Message</Button>
            </form>
          </div>

          {/* -------- INFO -------- */}
          <div className="bg-card rounded-2xl p-8 shadow-lg">
            <h2 className="text-2xl font-heading font-bold mb-6">
              Contact Information
            </h2>
            <ul className="space-y-4">
              <li>
                <p className="text-sm text-text-secondary">Call us directly</p>
                <p className="text-lg font-semibold">+1 (555) 012-3456</p>
                <p className="text-sm text-text-secondary">
                  Mon–Fri: 9am – 6pm EST
                </p>
              </li>
              <li>
                <p className="text-sm text-text-secondary">Email support</p>
                <p className="text-lg font-semibold">connect@omoconsultants.com</p>
              </li>
              <li>
                <p className="text-sm text-text-secondary">Headquarters</p>
                <p className="text-lg font-semibold">
                  123 Innovation Dr, BioTech Park, NY 10012
                </p>
              </li>
            </ul>

            {/* Map Location */}
            <div className="mt-8 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126915.438635847!2d3.325499!3d6.524379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b5c8b6d7a7f%3A0x5c8b6d7a7f!2sLagos%2C%20Nigeria!5e0!3m2!1sen!2sng!4v1672537600000!5m2!1sen!2sng"
                width="100%"
                height="250"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </section>

        <FAQs />
      </main>
    </>
  );
}
