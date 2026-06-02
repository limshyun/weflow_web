import { Layers, Zap, Wallet, Clock, Megaphone, TrendingUp, ChevronRight, type LucideIcon } from 'lucide-react';
import { BENEFITS, FLOW_STEPS } from '@/data/homeText';

const iconMap: Record<string, LucideIcon> = {
  Layers, Zap, Wallet, Clock, Megaphone, TrendingUp,
};

export default function BenefitsSection() {
  return (
    <section className="section-padding bg-slate-950/30">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="text-center mb-12">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">
            WEFLOW만의 케어 플랜 혜택
          </h2>
        </div>

        {/* 6칸 카드 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-16">
          {BENEFITS.map((item) => {
            const Icon = iconMap[item.icon];
            return (
              <div
                key={item.title}
                className="card-base p-6 flex items-start gap-4"
              >
                {Icon && (
                  <div className="shrink-0 w-10 h-10 rounded-lg gradient-blue flex items-center justify-center">
                    <Icon size={18} className="text-white" />
                  </div>
                )}
                <div>
                  <h3 className="text-white font-semibold mb-1">{item.title}</h3>
                  <p className="text-slate-400 text-sm">{item.description}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* 제작진행과정 — 4단계 요약 흐름 */}
        <div className="card-base p-8">
          <h3 className="text-white font-semibold text-center mb-8">제작진행과정</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-0">
            {FLOW_STEPS.map((step, idx) => (
              <div key={step.label} className="flex items-center gap-4 md:gap-0">
                <div className="flex flex-col items-center gap-2">
                  <div className="w-10 h-10 rounded-full gradient-blue flex items-center justify-center text-white text-sm font-bold shrink-0">
                    {idx + 1}
                  </div>
                  <span className="text-slate-300 text-sm font-medium text-center whitespace-nowrap">
                    {step.label}
                  </span>
                </div>
                {idx < FLOW_STEPS.length - 1 && (
                  <ChevronRight
                    size={20}
                    className="text-slate-600 mx-4 shrink-0 hidden md:block"
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
