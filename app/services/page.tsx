import type { Metadata } from 'next';
import ProcessSection from '@/features/services/sections/ProcessSection';
import AdManagementSection from '@/features/services/sections/AdManagementSection';
import DiagnosisButton from '@/components/ui/DiagnosisButton';

export const metadata: Metadata = {
  title: '서비스 — WEFLOW',
  description: '제작 진행과정부터 광고 운영·사후관리 시스템까지. WEFLOW의 서비스를 확인하세요.',
};

export default function ServicesPage() {
  return (
    <>
      {/* 페이지 헤더 */}
      <section className="section-padding pb-0">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">서비스</h1>
          <p className="text-slate-400 max-w-xl mx-auto text-sm leading-relaxed">
            단순 제작으로 끝나지 않습니다. 기획·제작·광고·운영까지
            <br />
            모든 과정을 WEFLOW가 함께합니다.
          </p>
        </div>
      </section>

      <ProcessSection />
      <AdManagementSection />

      {/* CTA */}
      <section className="section-padding pt-0">
        <div className="max-w-xl mx-auto text-center">
          <p className="text-slate-400 mb-6 text-sm">지금 바로 무료진단을 받아보세요</p>
          <DiagnosisButton />
        </div>
      </section>
    </>
  );
}
