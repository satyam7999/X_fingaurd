import HeroSection from '@/components/hero/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
import FeaturesSection from '@/components/sections/FeaturesSection';
import BenefitsSection from '@/components/sections/BenefitsSection';
import PartnersSection from '@/components/sections/PartnersSection';
import TestimonialSection from '@/components/sections/TestimonialSection';

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black min-h-screen">
      <HeroSection />
      <AboutSection />
      <FeaturesSection />
      <BenefitsSection />
      <PartnersSection />
      <TestimonialSection />
    </div>
  );
}
