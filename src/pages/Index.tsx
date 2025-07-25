import Navigation from "@/components/Navigation";
import HeroSection from "@/components/home/HeroSection";
import AgeGroupsSection from "@/components/home/AgeGroupsSection";
import WhyChooseUsSection from "@/components/home/WhyChooseUsSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AgeGroupsSection />
      <WhyChooseUsSection />
      <TestimonialsSection />
      <Footer />
    </div>
  );
};

export default Index;
