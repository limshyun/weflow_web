import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/commonText';

export default function Footer() {
  return (
    <footer className="bg-navy-950 border-t border-white/10 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4">
        {/* 4컬럼 그리드 */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* 컬럼 1: 로고 + 회사정보 */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Image src="/logo_icon.png" alt="WEFLOW" width={28} height={28} className="rounded-sm" />
              <span className="text-xl font-bold tracking-tight">
                <span className="text-white">WE</span>
                <span className="text-gradient">FLOW</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm mb-5 leading-relaxed">
              제작부터 관리까지 비즈니스 성장을 함께합니다.
            </p>
            <div className="space-y-1.5 text-slate-500 text-sm">
              <p>대표: {COMPANY_INFO.ceo}</p>
              <p>사업자등록번호: {COMPANY_INFO.bizNumber}</p>
              <p>이메일: {COMPANY_INFO.email}</p>
              <p>운영시간: {COMPANY_INFO.hours}</p>
            </div>
          </div>

          {/* 컬럼 2: 서비스 */}
          <div>
            <h4 className="text-white font-semibold mb-4">서비스</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  홈페이지 제작 과정
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  랜딩페이지 제작 과정
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">
                  광고 운영·관리 안내
                </Link>
              </li>
            </ul>
          </div>

          {/* 컬럼 3: 케어플랜 */}
          <div>
            <h4 className="text-white font-semibold mb-4">WEFLOW 케어플랜</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  WE 케어
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  FLOW 케어
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">
                  WEFLOW 케어
                </Link>
              </li>
            </ul>
          </div>

          {/* 컬럼 4: 상담문의 */}
          <div>
            <h4 className="text-white font-semibold mb-4">상담문의</h4>
            <ul className="space-y-2.5 text-slate-400 text-sm">
              <li>
                <a href="tel:" className="hover:text-white transition-colors">
                  전화문의
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="hover:text-white transition-colors"
                >
                  이메일 문의
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.kakao}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  카카오 채널 문의
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  인스타 문의
                </a>
              </li>
              <li>
                <a
                  href={COMPANY_INFO.blog}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  블로그
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* 하단 바 */}
        <div className="border-t border-white/10 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-slate-500 text-sm">
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              개인정보처리방침
            </Link>
            <span>|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              이용약관
            </Link>
          </div>
          <p>© 2026 WEFLOW. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
