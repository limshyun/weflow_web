import HeroSection from '@/features/home/sections/HeroSection';
import BenefitsSection from '@/features/home/sections/BenefitsSection';
import CasesSection from '@/features/home/sections/CasesSection';
import ProcessSection from '@/features/home/sections/ProcessSection';
import DiagnosisSection from '@/features/home/sections/DiagnosisSection';
import ReviewSection from '@/features/home/sections/ReviewSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <BenefitsSection />
      <CasesSection />
      <ProcessSection />
      <DiagnosisSection />
      <ReviewSection />
    </>
  );
}
