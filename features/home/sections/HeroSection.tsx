'use client';

import Link from 'next/link';
import { HERO_TAGS } from '@/data/homeText';

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center section-padding relative overflow-hidden">
      {/* 배경 그라디언트 오버레이 */}
      <div className="absolute inset-0 bg-gradient-to-b from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto text-center">
        {/* 배지 */}
        <div className="inline-flex items-center px-4 py-2 rounded-full border border-white/20 bg-white/5 text-xs text-slate-300 mb-8">
          랜딩&amp;홈페이지 제작 · 광고 운영 · 검색 상단 노출 · 맞춤형 웹 솔루션
        </div>

        {/* 헤드라인 */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          문의로 이어지는
          <br />
          홈페이지를 만듭니다
        </h1>

        {/* 서브텍스트 */}
        <p className="text-slate-400 text-base md:text-lg mb-10 leading-relaxed">
          홈페이지 제작부터 광고 연동·운영 관리까지
          <br className="hidden md:block" />
          단순 제작이 아닌 문의 구조까지 설계합니다
        </p>

        {/* 버튼 3개 */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          <button
            onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
            className="gradient-blue px-6 py-3 rounded-xl font-medium text-sm"
          >
            무료 진단 신청
          </button>
          <Link
            href="/cases"
            className="px-6 py-3 rounded-xl font-medium text-sm border border-white/20 text-white hover:bg-white/5 transition-colors"
          >
            성공 사례 보기
          </Link>
          <Link
            href="/landing"
            className="px-6 py-3 rounded-xl font-medium text-sm border border-white/20 text-slate-300 hover:bg-white/5 transition-colors"
          >
            랜딩 페이지 사례
          </Link>
        </div>

        {/* 태그 박스 */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {HERO_TAGS.map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-xs text-slate-300 bg-white/5"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
