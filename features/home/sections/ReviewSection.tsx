import ReviewSlider from '@/components/ui/ReviewSlider';
import { COMPANY_INFO } from '@/data/commonText';

export default function ReviewSection() {
  return (
    <section className="section-padding overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* 섹션 헤더 */}
        <div className="flex items-center justify-between mb-10">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">고객 후기</h2>
          <a
            href={COMPANY_INFO.blog}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
          >
            후기 더보기 →
          </a>
        </div>
      </div>

      {/* 슬라이더는 max-width 밖으로 overflow */}
      <ReviewSlider />
    </section>
  );
}
