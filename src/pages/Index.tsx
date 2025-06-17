
import { Hero } from "@/components/sections/Hero";
import { Industries } from "@/components/sections/Industries";
import { WhyChoose } from "@/components/sections/WhyChoose";
import { Pricing } from "@/components/sections/Pricing";
import { AboutUs } from "@/components/sections/AboutUs";
import { FeatureOverview } from "@/components/sections/FeatureOverview";
import { DashboardPreview } from "@/components/sections/DashboardPreview";
import { Demo } from "@/components/sections/Demo";
import { FAQ } from "@/components/sections/FAQ";
import { Contact } from "@/components/sections/Contact";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <Hero />
        <Industries />
        <WhyChoose />
        <Pricing />
        <FeatureOverview />
        <DashboardPreview />
        <Demo />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
