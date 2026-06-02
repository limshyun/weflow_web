import { PROCESS_STEPS } from '@/data/servicesText';

export default function ProcessSection() {
  return (
    <section className="section-padding">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-2xl lg:text-3xl font-bold text-white">제작진행과정</h2>
          <p className="text-slate-400 mt-3 text-sm">
            상담부터 사후관리까지 체계적인 프로세스로 진행합니다
          </p>
        </div>

        <div className="relative">
          {PROCESS_STEPS.map((step, idx) => (
            <div key={step.number} className="flex gap-6 relative">
              {/* 왼쪽: 번호 원 + 세로 연결선 */}
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 rounded-full gradient-blue flex items-center justify-center text-white font-bold text-sm shrink-0 z-10">
                  {step.number}
                </div>
                {idx < PROCESS_STEPS.length - 1 && (
                  <div className="w-px flex-1 bg-gradient-to-b from-cyan-500/40 to-transparent my-1" />
                )}
              </div>

              {/* 오른쪽: 내용 */}
              <div className={`pb-10 pt-2 ${idx === PROCESS_STEPS.length - 1 ? 'pb-0' : ''}`}>
                <h3 className="text-white font-semibold text-lg mb-1">{step.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
