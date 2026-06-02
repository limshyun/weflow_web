import { REVIEWS } from '@/data/commonText';

export default function ReviewSlider() {
  const doubled = [...REVIEWS, ...REVIEWS];

  return (
    <div className="overflow-hidden">
      <div className="flex animate-marquee gap-4">
        {doubled.map((review, i) => (
          <div
            key={i}
            className="shrink-0 w-72 bg-slate-900/50 border border-white/[0.07] rounded-xl p-5"
          >
            {/* 별점 */}
            <div className="flex gap-0.5 mb-3">
              {Array.from({ length: review.rating }).map((_, j) => (
                <span key={j} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>
            {/* 후기 텍스트 */}
            <p className="text-slate-300 text-sm leading-relaxed">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
