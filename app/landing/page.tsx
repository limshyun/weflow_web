import type { Metadata } from 'next';
import StickyForm from '@/components/ui/StickyForm';
import ReviewSlider from '@/components/ui/ReviewSlider';
import LandingHeroSection from '@/features/landing/sections/LandingHeroSection';
import LandingFeaturesSection from '@/features/landing/sections/LandingFeaturesSection';
import LandingStructureSection from '@/features/landing/sections/LandingStructureSection';
import LandingDiagnosisSection from '@/features/landing/sections/LandingDiagnosisSection';
import ServiceProcessSection from '@/features/services/sections/ServiceProcessSection';
import LandingProductionPlansSection from '@/features/landing/sections/LandingProductionPlansSection';
import LandingCarePlansSection from '@/features/landing/sections/LandingCarePlansSection';
import LandingAdPlansSection from '@/features/landing/sections/LandingAdPlansSection';
import { LANDING_NOTICE } from '@/data/landingText';

export const metadata: Metadata = {
  title: 'WEFLOW 랜딩페이지 — 문의로 이어지는 홈페이지',
  description: '기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.',
};

export default function LandingPage() {
  return (
    <div className="pt-20 px-4 sm:px-6 xl:px-10">
      {/* 상단 안내 배지 */}
      <p className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 inline-block mb-0">
        {LANDING_NOTICE}
      </p>

      <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-14">
        {/* 좌측: 메인 콘텐츠 */}
        <div className="flex-1 min-w-0">
          <LandingHeroSection />
          <LandingFeaturesSection />
          <LandingStructureSection />
          <ServiceProcessSection />

          {/* 가격 섹션 헤더 */}
          <div className="relative py-12 overflow-hidden">
            <div className="absolute -top-20 right-0 w-125 h-125 bg-cyan-400/7 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-80 h-80 bg-blue-600/8 rounded-full blur-3xl pointer-events-none" />
            <div className="relative flex flex-col items-center justify-center text-center gap-4">
              <span className="px-5 py-1.5 rounded-full border border-blue-800/50 bg-blue-900/30 text-blue-400 text-xs tracking-[0.3em] font-semibold uppercase">
                P R I C I N G
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-white">
                제작 플랜 &amp; 가격 안내
              </h2>
              <p className="text-slate-400 text-sm">비즈니스 목적에 맞는 플랜을 선택하세요</p>
            </div>
          </div>

          <LandingProductionPlansSection />
          <LandingCarePlansSection />
          <LandingAdPlansSection />

          {/* 고객 후기 */}
          <section className="py-16 bg-slate-900/50 overflow-hidden rounded-2xl my-4">
            <div className="px-4 mb-8">
              <h2 className="text-2xl sm:text-3xl font-black text-white">고객 후기</h2>
            </div>
            <ReviewSlider />
          </section>

          <LandingDiagnosisSection />
        </div>

        {/* 우측: StickyForm (데스크탑 전용) */}
        <aside className="hidden lg:block w-85 xl:w-95 shrink-0 py-6" id="form">
          <div className="sticky-sidebar">
            <StickyForm />
          </div>
        </aside>
      </div>
    </div>
  );
}
