import { MessageSquare, Rocket, Coins, Phone, TrendingUp, Target, type LucideIcon } from 'lucide-react';
import { BENEFITS } from '@/data/homeText';
import { LANDING_QUOTE } from '@/data/landingText';

const ICONS: LucideIcon[] = [MessageSquare, Rocket, Coins, Phone, TrendingUp, Target];

export default function LandingFeaturesSection() {
  return (
    <section className="relative py-16">
      {/* 파트 1: Benefits 가로 1행 */}
      <div className="mb-12">
        <div className="mb-8 text-center">
          <h2 className="text-2xl sm:text-3xl font-black text-white">{BENEFITS.sectionTitle}</h2>
        </div>

        {/* 데스크탑 */}
        <div className="hidden md:block px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-900/40 border border-slate-800/60 rounded-2xl overflow-hidden">
            <div className="flex divide-x divide-slate-800/60">
              {BENEFITS.cards.map((card, idx) => {
                const Icon = ICONS[idx];
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <div key={card.title} className="flex-1 flex items-center gap-3 px-4 py-5 hover:bg-slate-800/30 transition-colors duration-200">
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-blue-400 leading-none mb-1">{num}</p>
                      <p className="text-xs font-bold text-white leading-tight">{card.title}</p>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5 truncate">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* 모바일 스크롤 */}
        <div className="md:hidden px-4">
          <div className="overflow-x-auto mobile-scrollbar rounded-2xl border border-slate-800/60 bg-slate-900/40" style={{ paddingBottom: '6px' }}>
            <div className="flex divide-x divide-slate-800/60">
              {BENEFITS.cards.map((card, idx) => {
                const Icon = ICONS[idx];
                const num = String(idx + 1).padStart(2, '0');
                return (
                  <div key={card.title} className="flex-none w-40 flex items-center gap-3 px-4 py-5">
                    <div className="shrink-0 w-9 h-9 rounded-xl bg-blue-900/40 border border-blue-500/20 flex items-center justify-center">
                      <Icon size={16} className="text-cyan-400" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] font-bold text-blue-400 leading-none mb-1">{num}</p>
                      <p className="text-xs font-bold text-white leading-tight">{card.title}</p>
                      <p className="text-[11px] text-slate-400 leading-tight mt-0.5">{card.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* 파트 2: 인용 섹션 */}
      <div className="py-16 flex flex-col items-center text-center px-4">
        <div className="w-14 h-14 rounded-full bg-blue-900/50 border border-blue-700/30 flex items-center justify-center mb-8">
          <span className="text-blue-400 text-2xl font-black leading-none select-none">&quot;</span>
        </div>

        <div className="mb-8 space-y-1">
          {LANDING_QUOTE.headline.map((line, i) => (
            <p key={i} className="text-lg sm:text-xl font-bold text-white leading-relaxed">{line}</p>
          ))}
        </div>

        <div className="space-y-1">
          {LANDING_QUOTE.sub.map((line, i) => (
            <p key={i} className="text-sm sm:text-base text-slate-400 leading-relaxed">{line}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
