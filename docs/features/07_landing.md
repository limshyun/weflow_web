# Feature 07 — 랜딩페이지 (`/landing`)

## 파일 위치
```
app/landing/page.tsx
features/landing/sections/LandingHeroSection.tsx
features/landing/sections/LandingFeaturesSection.tsx
features/landing/sections/LandingStructureSection.tsx
features/landing/sections/LandingDiagnosisSection.tsx
features/landing/sections/LandingProductionPlansSection.tsx   ← 가격 섹션 (별도)
features/landing/sections/LandingCarePlansSection.tsx
features/landing/sections/LandingAdPlansSection.tsx
components/ui/ReviewSlider.tsx                                ← 재사용
features/services/sections/ServiceProcessSection.tsx          ← 재사용
data/landingText.ts
```

---

## 페이지 레이아웃

```tsx
<div className="pt-20 px-4 sm:px-6 xl:px-10">
  {/* 상단 안내 배지 */}
  <p className="text-xs text-amber-400 bg-amber-400/10 border border-amber-400/20 rounded-full px-4 py-2 inline-block">
    {LANDING_NOTICE}
  </p>

  <div className="flex flex-col lg:flex-row lg:gap-10 xl:gap-14">
    {/* 좌측: 메인 콘텐츠 */}
    <div className="flex-1 min-w-0">
      <LandingHeroSection />
      <LandingFeaturesSection />
      <LandingStructureSection />
      <ServiceProcessSection />        {/* 서비스에서 재사용 */}
      {/* 가격 섹션 헤더 + 3개 플랜 섹션 */}
      <LandingProductionPlansSection />
      <LandingCarePlansSection />
      <LandingAdPlansSection />
      {/* 후기 슬라이더 */}
      <ReviewSlider />
      <LandingDiagnosisSection />
    </div>

    {/* 우측: StickyForm (데스크탑 전용) */}
    <aside className="hidden lg:block w-[340px] xl:w-[380px] shrink-0 py-6">
      <div className="sticky-sidebar">
        <StickyForm />
      </div>
    </aside>
  </div>
</div>
```

---

## 섹션 1 — LandingHeroSection (중앙 정렬)

### 콘텐츠
```
[배지] 랜딩페이지 · 홈페이지 · 광고 운영 · 사후관리
[헤드라인 2줄]
문의로 이어지는
홈페이지를 만듭니다
[서브] 기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.
[버튼 2개]
[무료 진단 후 견적받기 →]  →  /#form (StickyForm 스크롤)
[실제 제작 사례 보기 →]     →  /cases
```
- 헤드라인: 흰색 텍스트 (홈의 그라디언트 텍스트와 다름)
- 버튼: 첫 번째 `gradient-blue`, 두 번째 outline

---

## 섹션 2 — LandingFeaturesSection

### 구성 (2파트)
**파트 1: BenefitsSection 동일 레이아웃 재사용**
- 데스크탑: `BENEFITS.sectionTitle` + 가로 1행 카드
- 모바일: overflow-x-auto 스크롤

**파트 2: 인용 섹션 (Quote)**
```
[" 아이콘 원]

사람들은 검색하고 비교한 뒤 문의합니다.
홈페이지만 필요한 시대는 지났습니다.

어디에 맡길지, 광고는 어떻게 해야 할지 고민되셨나요?
WEFLOW는 랜딩페이지 + 홈페이지 + 광고 + 사후관리까지
저렴한 비용과 높은 퀄리티로 한 번에 해결합니다.
```

---

## 섹션 3 — LandingStructureSection

### 콘텐츠
```
문의 증가 구조 설계

[3칸 카드] grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto
```

| # | 아이콘 | 제목 | 설명 |
|---|--------|------|------|
| 01 | 🔍 | 업종별 고객 흐름 분석 | 업종 특성에 맞게 고객이 어떻게 검색하고 이동하는지 분석합니다. |
| 02 | 🎯 | 상담 버튼 위치 최적화 | 고객이 가장 많이 보는 위치에 상담 버튼을 배치합니다. |
| 03 | 📱 | 모바일 문의 동선 구성 | 모바일 사용자가 즉시 문의할 수 있도록 동선을 최적화합니다. |

---

## 섹션 4 — ServiceProcessSection 재사용
- `features/services/sections/ServiceProcessSection.tsx` 그대로 임포트

---

## 섹션 5~7 — 가격 섹션 (3개)

### 가격 섹션 헤더
```
[PRICING 배지]
제작 플랜 & 가격 안내
비즈니스 목적에 맞는 플랜을 선택하세요
```

### LandingProductionPlansSection
- pricing 페이지의 `ProductionPlansSection`과 동일 레이아웃
- 같은 `PRODUCTION_PLANS` 데이터 사용
- "신청하기" → /reservation

### LandingCarePlansSection
- pricing 페이지의 `CarePlansSection`과 동일 레이아웃
- 같은 `CARE_PLANS` 데이터 사용
- WEFLOW CARE: crown-gradient 버튼

### LandingAdPlansSection
- `AD_PLANS` 데이터 사용
- tags 배열을 ✓ 체크리스트로 표시 (간소화)

---

## 섹션 8 — ReviewSlider 재사용
```tsx
<section className="py-16 bg-slate-900/50 overflow-hidden">
  <h2 className="text-2xl sm:text-3xl font-black text-white mb-8">고객 후기</h2>
  <ReviewSlider />
</section>
```

---

## 섹션 9 — LandingDiagnosisSection

### 콘텐츠
```
[max-w-2xl 중앙 카드]

무료진단에서 이런 걸 확인해드립니다

[2열 그리드 체크 아이템]
✓ 문의 구조 진단       ✓ 디자인·사용성 점검
✓ 검색 노출 분석       ✓ 문의 개선 제안

[문의 늘리는 무료 진단] → /#form
```

---

## 데이터 구조 (landingText.ts)

```ts
export const LANDING_NOTICE = '※ 해당 페이지의 기능 및 혜택 안내는 랜딩페이지에서만 제공되는 내용입니다.';

export const LANDING_HERO = {
  badge: '랜딩페이지 · 홈페이지 · 광고 운영 · 사후관리',
  headline: ['문의로 이어지는', '홈페이지를 만듭니다'],
  sub: '기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.',
  buttons: [
    { label: '무료 진단 후 견적받기 →', href: '/#form', primary: true },
    { label: '실제 제작 사례 보기 →', href: '/cases', primary: false },
  ],
};

export const LANDING_QUOTE = {
  headline: ['사람들은 검색하고 비교한 뒤 문의합니다.', '홈페이지만 필요한 시대는 지났습니다.'],
  sub: ['어디에 맡길지, 광고는 어떻게 해야 할지 고민되셨나요?', 'WEFLOW는 랜딩페이지 + 홈페이지 + 광고 + 사후관리까지', '저렴한 비용과 높은 퀄리티로 한 번에 해결합니다.'],
};

export const LANDING_STRUCTURE = {
  title: '문의 증가 구조 설계',
  items: [
    { title: '업종별 고객 흐름 분석', desc: string, icon: '🔍' },
    { title: '상담 버튼 위치 최적화', desc: string, icon: '🎯' },
    { title: '모바일 문의 동선 구성', desc: string, icon: '📱' },
  ],
};

export const LANDING_DIAGNOSIS = {
  title: '무료진단에서 이런 걸 확인해드립니다',
  items: ['문의 구조 진단', '디자인·사용성 점검', '검색 노출 분석', '문의 개선 제안'],
  ctaButton: '문의 늘리는 무료 진단',
};
```

---

## 구현 체크리스트
- [ ] LandingHeroSection — 중앙 정렬, 배지, 헤드라인, 버튼 2개
- [ ] LandingFeaturesSection — Benefits 재사용 + Quote 인용
- [ ] LandingStructureSection — 3카드 구조 설계
- [ ] ServiceProcessSection 재사용
- [ ] 가격 섹션 헤더 + 3개 플랜 섹션
- [ ] ReviewSlider 재사용
- [ ] LandingDiagnosisSection — 2열 체크 그리드
- [ ] StickyForm 우측 aside (sticky-sidebar 클래스)
- [ ] LANDING_NOTICE 앰버 배지
- [ ] data/landingText.ts 재작성
