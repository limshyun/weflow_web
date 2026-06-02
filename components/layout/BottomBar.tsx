'use client';

import { Phone, MessageCircle, BookOpen, Star } from 'lucide-react';
import { COMPANY_INFO } from '@/data/commonText';

export default function BottomBar() {
  return (
    <div className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#0a0f1e]/95 backdrop-blur-md border-t border-white/10">
      <div className="grid grid-cols-4 h-16">
        <a
          href="tel:"
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <Phone size={18} />
          <span className="text-[10px]">24시간 상담</span>
        </a>
        <a
          href={COMPANY_INFO.kakao}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <MessageCircle size={18} />
          <span className="text-[10px]">카카오톡 문의</span>
        </a>
        <a
          href={COMPANY_INFO.blog}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <BookOpen size={18} />
          <span className="text-[10px]">블로그</span>
        </a>
        <button
          onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
          className="flex flex-col items-center justify-center gap-1 text-slate-400 hover:text-cyan-400 transition-colors"
        >
          <Star size={18} />
          <span className="text-[10px]">무료진단</span>
        </button>
      </div>
    </div>
  );
}
