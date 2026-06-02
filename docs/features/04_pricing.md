# Feature 04 — 제작플랜&가격안내 (`/pricing`)

## 파일 위치
```
app/pricing/page.tsx
features/pricing/sections/PlanSection.tsx
features/pricing/sections/CarePlanSection.tsx
features/pricing/sections/AdPlanSection.tsx
features/pricing/sections/PricingNotice.tsx
data/pricingText.ts
```

---

## 섹션 구성 순서
```
1. PlanSection      — 제작 플랜 3종 (START / GROW / MASTER)
2. CarePlanSection  — 케어 플랜 3종 (WE / FLOW / WEFLOW)
3. AdPlanSection    — 광고 플랜 2종
4. PricingNotice    — 공통 안내 문구
```

---

## 핵심 디자인 패턴 — 파격세일 가격 표시
```tsx
<div className="mt-4">
  {/* 취소선 원가 */}
  <p className="text-slate-500 line-through text-sm">498,000원</p>
  {/* 강조 할인가 */}
  <p className="text-3xl font-bold text-white">249,000원</p>
</div>
```

---

## 섹션 1 — 제작 플랜 (3중 택1)

### 레이아웃
- 세로 카드형 1열 (`flex flex-col gap-6 max-w-3xl mx-auto`)
- 또는 3열 그리드 (`grid grid-cols-1 lg:grid-cols-3 gap-6`)
- 모든 항목 앞에 ✓ 체크 표시

### 플랜 데이터

#### START — 랜딩페이지
```
✓ 랜딩페이지 1페이지
✓ 3~4일 빠른 제작기간
✓ 반응형 제작 (PC/모바일)
✓ 문의폼 연동
✓ 기본 SEO 설정
---
원가: 498,000원
할인가: 249,000원
```

#### GROW — 홈페이지
```
✓ 홈페이지 5페이지
✓ 1주 빠른 제작기간
✓ 반응형 제작 (PC/모바일)
✓ 문의폼 연동
✓ 카카오톡 상담연동
✓ 기본 SEO 설정
---
원가: 1,980,000원
할인가: 990,000원
```

#### MASTER 👑 — 랜딩&홈페이지 (강조 — cyan 테두리, 왕관)
```
✓ 홈페이지 + 랜딩페이지
✓ 1~2주 빠른 제작기간
✓ 반응형 제작 (PC/모바일)
✓ 프리미엄 디자인
✓ 예약·문의 시스템
✓ SEO 최적화
✓ 광고 전환 구조 설계
---
원가: 2,980,000원
할인가: 1,490,000원
```
- 카드 테두리: `border-cyan-400/60`
- 헤더 배경: `gradient-blue`
- 왕관 뱃지: `👑 BEST` 또는 `Crown` 아이콘

### TypeScript 타입
```ts
export interface Plan {
  id: string;
  badge?: string;          // 'MASTER 👑' 등
  name: string;
  features: string[];
  originalPrice: string;
  discountPrice: string;
  highlighted?: boolean;   // MASTER = true
}
```

---

## 섹션 2 — 케어 플랜 (3종)

### WE CARE — 기본 관리 플랜
```
✓ 유지보수(월 수정) 월 1회
✓ 블로그: 월 1개
✓ 인스타: 월 4회 (주 1회)
✓ 스레드: 월 4회 (주 1회)
✓ SEO 상단등록
---
원가: 월 170,000원
할인가: 월 89,000원~
```

### FLOW CARE — 성장 관리 플랜
```
✓ 유지보수: 월 3회
✓ 인스타: 월 8회 (주 2회)
✓ 스레드: 월 8회 (주 2회)
✓ 블로그: 월 2회
✓ 네이버 키워드 세팅 할인 (149,000 → 79,000원)
✓ 당근 키워드 광고 세팅 50% 할인 (79,000 → 39,000원)
✓ 문의 개선
✓ SEO 상단 등록
---
원가: 월 378,000원~
할인가: 월 189,000원~
```

### WEFLOW CARE 👑 — 올인원 관리 플랜 (강조)
```
✓ 유지보수: 무제한
✓ 블로그: 월 4회 (주 1회)
✓ 인스타: 월 12회 (주 3회)
✓ 스레드: 월 12회 (주 3회)
✓ 네이버 키워드/당근 플레이스 광고 세팅 무료
✓ 월 성과 체크
✓ 랜딩 개선
✓ 광고관리
✓ SEO 최적화
---
원가: 월 678,000원~
할인가: 월 339,000원~
```
- 강조 색상: `border-cyan-400/60` + 왕관 뱃지

---

## 섹션 3 — 광고 플랜

### 네이버 광고 (키워드 셋팅)
```
✓ 키워드 분석
✓ 광고 세팅 지원
✓ 광고 문구 제작
✓ 문의 구조 연결
✓ 채널 연동 지원
✓ 성과 최적화
---
원가: 298,000원
할인가: 149,000원~
```

### 당근 플레이스 광고 (키워드 셋팅)
```
✓ 지역 키워드 분석
✓ 광고 세팅 지원
✓ 광고 문구 제작
✓ 지역 타겟 설정
✓ 랜딩 연결 지원
✓ 성과 최적화
---
원가: 158,000원
할인가: 79,000원~
```

---

## 섹션 4 — 공통 안내 (PricingNotice)

### 각 카드 하단 또는 섹션 하단에 표시
```
※ VAT 포함입니다.
도메인은 고객님 명의로 등록되며 비용은 별도입니다.
위플로우에서 등록 및 연결 세팅은 무료 지원해 드립니다.

✓ 도메인 연결 지원
✓ 도메인 등록 대행 가능
✓ 도메인 비용 별도
✓ 광고비는 고객 계정에서 고객 결제수단으로 직접 결제되며,
  위플로우는 운영 및 세팅만 합니다.

유지보수는 텍스트, 이미지, 링크 등 경미한 수정 기준입니다.
페이지 추가 및 기능 개발은 별도 비용이 발생할 수 있습니다.
```

### 스타일
```
bg-slate-900/30 border border-white/[0.07] rounded-xl p-6
text-slate-400 text-sm
```

---

## 구현 체크리스트
- [ ] PlanSection — START / GROW / MASTER 카드 (파격세일 UI)
- [ ] CarePlanSection — WE / FLOW / WEFLOW CARE 카드
- [ ] AdPlanSection — 네이버 / 당근 광고 카드
- [ ] PricingNotice — 공통 안내 문구
- [ ] MASTER & WEFLOW CARE — 강조 스타일 + 왕관
- [ ] data/pricingText.ts — 가격 데이터 분리
