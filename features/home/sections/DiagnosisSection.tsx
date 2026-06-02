'use client';

import { Check } from 'lucide-react';
import StickyForm from '@/components/ui/StickyForm';
import { DIAGNOSIS_CHECKLIST } from '@/data/homeText';

export default function DiagnosisSection() {
  return (
    <section className="section-padding bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-start">
          {/* 좌측 콘텐츠 */}
          <div className="flex-1">
            <div className="card-base p-8 md:p-12">
              <h2 className="text-2xl lg:text-3xl font-bold text-white mb-8">
                무료진단 후 나의 개선점 확인해보기
              </h2>

              <ul className="space-y-4 mb-10">
                {DIAGNOSIS_CHECKLIST.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-6 h-6 rounded-full gradient-blue flex items-center justify-center shrink-0">
                      <Check size={13} className="text-white" />
                    </div>
                    <span className="text-slate-200 text-base">{item}</span>
                  </li>
                ))}
              </ul>

              <button
                onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
                className="gradient-blue px-8 py-3 rounded-xl font-medium text-sm"
              >
                무료진단 후 견적 받기
              </button>
            </div>
          </div>

          {/* 우측 StickyForm — 데스크탑 전용 */}
          <div className="hidden lg:block">
            <StickyForm />
          </div>
        </div>
      </div>
    </section>
  );
}
