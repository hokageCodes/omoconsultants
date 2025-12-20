import CoreServices from "@/components/sections/CoreServices";
import HeroSection from "@/components/sections/HeroSection";
import FAQs from "@/components/sections/FAQs";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";

export const metadata = {
  title: "OMO Consultants - Accelerating Innovation in Life Sciences",
  description:
    "OMO Consultants provides expert guidance in Quality Assurance, Regulatory Compliance, and Clinical Services for the Bio-Pharmaceutical and Medical Device industries.",
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <WhoWeAre />
      <CoreServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </>
  );
}
