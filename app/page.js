import CoreServices from "@/components/sections/CoreServices";
import HeroSection from "@/components/sections/HeroSection";
import FAQs from "@/components/sections/FAQs";
import WhoWeAre from "@/components/sections/WhoWeAre";
import WhyChooseUs from "@/components/sections/WhyChooseUs";
import Testimonials from "@/components/sections/Testimonials";

export default function Home() {
  return (
    <div className="px-2">
      <HeroSection />
      <WhoWeAre />
      <CoreServices />
      <WhyChooseUs />
      <Testimonials />
      <FAQs />
    </div>
  );
}
