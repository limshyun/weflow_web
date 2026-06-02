import Link from 'next/link';
import Image from 'next/image';
import { CASES } from '@/data/casesText';

const PREVIEW_SLUGS = ['PT샵', '필라테스', '보험설계', '헬스장', '자동차디테일링'];
const previewCases = CASES.filter((c) => PREVIEW_SLUGS.includes(c.slug));

export default function CasesSection() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">성공사례</h2>
          <Link
            href="/cases"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            더보기 →
          </Link>
        </div>

        {/* 5개 카드 */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {previewCases.map((item) => (
            <Link
              key={item.slug}
              href="/cases"
              className="card-base overflow-hidden group block"
            >
              {/* 이미지 영역 */}
              <div className="relative aspect-video bg-slate-800 overflow-hidden">
                <Image
                  src={`/cases_${item.slug}.jpg`}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={undefined}
                  unoptimized
                />
                {/* 이미지 없을 때 플레이스홀더 */}
                <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 flex items-center justify-center">
                  <span className="text-slate-400 text-xs">{item.name}</span>
                </div>
              </div>
              {/* 카드 하단 */}
              <div className="p-3">
                <p className="text-white text-sm font-medium">{item.name}</p>
                <p className="text-cyan-400 text-xs mt-1">자세히보기 →</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
