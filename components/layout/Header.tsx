'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';

const NAV_LINKS = [
  { href: '/', label: '홈' },
  { href: '/services', label: '서비스' },
  { href: '/pricing', label: '제작플랜&가격안내' },
  { href: '/cases', label: '성공사례' },
  { href: '/reservation', label: '예약' },
];

function openModal() {
  window.dispatchEvent(new Event('open-diagnosis-modal'));
}

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 h-16 bg-[#0a0f1e]/90 backdrop-blur-md border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-4 h-full flex items-center justify-between">
        {/* 로고 */}
        <Link href="/" className="flex items-center gap-2" onClick={() => setMenuOpen(false)}>
          <Image src="/logo_icon.png" alt="WEFLOW" width={32} height={32} className="rounded-sm" />
          <span className="text-xl font-bold tracking-tight">
            <span className="text-white">WE</span>
            <span className="text-gradient">FLOW</span>
          </span>
        </Link>

        {/* 데스크탑 네비게이션 */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={`text-sm transition-colors ${
                pathname === href
                  ? 'text-cyan-400'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        {/* CTA + 햄버거 */}
        <div className="flex items-center gap-3">
          <button
            onClick={openModal}
            className="hidden lg:block gradient-blue px-4 py-2 rounded-xl text-sm font-medium"
          >
            무료진단받기
          </button>
          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label="메뉴"
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* 모바일 메뉴 드로어 */}
      {menuOpen && (
        <div className="lg:hidden bg-[#0a0f1e]/98 backdrop-blur-md border-t border-white/[0.07] px-6 py-6 flex flex-col gap-4">
          {NAV_LINKS.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              className={`text-base py-1 transition-colors ${
                pathname === href ? 'text-cyan-400' : 'text-slate-200 hover:text-white'
              }`}
            >
              {label}
            </Link>
          ))}
          <button
            onClick={() => { setMenuOpen(false); openModal(); }}
            className="gradient-blue px-4 py-3 rounded-xl text-sm font-medium mt-2"
          >
            무료진단받기
          </button>
        </div>
      )}
    </header>
  );
}
