# Feature 02 — 홈 페이지 (`/`)

## 파일 위치
```
app/page.tsx
features/home/sections/HeroSection.tsx
features/home/sections/BenefitsSection.tsx  ← 4단계 요약 흐름 포함 (FlowSteps)
features/home/sections/CasesSection.tsx
features/home/sections/DiagnosisSection.tsx
features/home/sections/ReviewSection.tsx
data/homeText.ts
```
> ⚠️ 홈의 제작 흐름(고객의뢰→접수→배송→사후관리)은 `BenefitsSection` 하단에 포함.
> 서비스 페이지의 6단계 `ProcessSection`과 파일명 충돌 없음.

---

## 섹션 구성 순서
```
1. HeroSection       — 메인 배너
2. BenefitsSection   — WEFLOW만의 케어 플랜 혜택
3. ProcessSection    — 제작진행과정
4. CasesSection      — 성공사례 미리보기
5. DiagnosisSection  — 무료진단 + StickyForm
6. ReviewSection     — 후기 슬라이더
```

---

## 섹션 1 — HeroSection

### 레이아웃
- 배경: dot-grid 패턴 위 그라디언트 오버레이
- 세로 가운데 정렬, 최소 높이 `min-h-screen`

### 콘텐츠 (위→아래)
```
[배지]
랜딩&홈페이지 제작 · 광고 운영 · 검색 상단 노출 · 맞춤형 웹 솔루션
(border rounded-full, 작은 글씨)

[헤드라인 — 큰 글씨, 2줄, whitespace-nowrap 또는 break-keep]
문의로 이어지는 홈페이지를 만듭니다

[서브텍스트]
홈페이지 제작부터 광고 연동·운영 관리까지
단순 제작이 아닌 문의 구조까지 설계합니다

[버튼 3개 — flex row, gap]
[무료 진단 신청]  [성공 사례 보기]  [랜딩 페이지 사례]
  gradient-blue    outline 스타일     outline 스타일

[태그 박스 3개 — inline-flex, fit-content (가로 늘리지 않음)]
[케어 플랜(제작·광고·운영)]  [빠른제작(3일~7일)]  [합리적 비용(가성비+퀄리티)]
```

### 버튼 동작
| 버튼 | 동작 |
|------|------|
| 무료 진단 신청 | `open-diagnosis-modal` 이벤트 발생 |
| 성공 사례 보기 | `/cases` 이동 |
| 랜딩 페이지 사례 | `/landing` 이동 |

### 태그 박스 스타일
```tsx
// inline-flex, 가로 fit-content
<span className="inline-flex items-center px-3 py-1 rounded-full border border-white/20 text-xs text-slate-300 bg-white/5">
  케어 플랜(제작·광고·운영)
</span>
```

---

## 섹션 2 — BenefitsSection

### 섹션 제목
```
WEFLOW만의 케어 플랜 혜택
```

### 6칸 카드 그리드
`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4`

| # | 제목 | 설명 |
|---|------|------|
| 1 | WEFLOW 케어플랜 | 제작+운영+광고+관리 원터치 |
| 2 | 빠른 제작 | 3~7일 로켓배송 |
| 3 | 합리적인 가성비 | 불필요한 비용 없이 |
| 4 | 24시간 상담대기 | 빠른 상담 및 피드백 |
| 5 | 운영·광고 지원 | 사후관리 서비스 |
| 6 | 문의 구조 설계 | 문의가 들어오는 구조 |

### 카드 스타일
```
bg-slate-900/50 border border-white/[0.07] rounded-xl p-6
hover:border-cyan-500/30 transition
```

### 제작진행과정 (섹션 하단)
가로 흐름 화살표형 스텝:
```
[고객의뢰] → [접수 후 제작] → [3~7일 배송완료] → [광고 및 운영 사후관리]
```
- 각 스텝: 번호 원 + 텍스트
- 화살표: `ChevronRight` 아이콘 (lucide-react)
- 모바일: 세로 배치

---

## 섹션 3 — CasesSection (미리보기)

### 구성
- 섹션 헤더 오른쪽: `더보기` 버튼 → `/cases` 이동
- 이미지 5개 가로 그리드 또는 `overflow-x-auto` 스크롤

### 표시할 업종 5개 (예시)
```
PT샵, 필라테스, 보험설계, 카센터, 헬스장
```

### 카드 스타일
- 이미지: `next/image`, `object-cover`, 고정 높이
- 호버: `scale-105 transition`

---

## 섹션 4 — DiagnosisSection

### 레이아웃
- 좌: 긴 텍스트 박스 (`flex-1`)
- 우: `StickyForm` (`sticky top-20`, 데스크탑 전용)

### 좌측 콘텐츠
```
[제목] 무료진단 후 나의 개선점 확인해보기

[체크리스트]
✓ 문의 구조 진단
✓ 디자인·사용성 점검
✓ 검색 노출 분석
✓ 문의 개선 제안

[버튼] 무료진단 후 견적 받기  →  open-diagnosis-modal 이벤트
```

### StickyForm (우측 고정)
파일: `components/ui/StickyForm.tsx`

```
[제목] 무료진단 후 견적받기

필드: 이름 / 연락처 / 제작종류(select) / 업종 / 추가요청사항 / 개인정보동의

[버튼] 무료 견적 신청하기  (gradient-blue)
```

스타일: `sticky top-20 w-80 bg-slate-900/80 border border-white/10 rounded-2xl p-6`

TypeScript 타입: FormModal과 동일한 `DiagnosisForm` 인터페이스 재사용

---

## 섹션 5 — ReviewSection

### 구성
- 섹션 헤더 오른쪽: `후기 더보기` 버튼 (외부 블로그 링크 또는 내부)
- `ReviewSlider` 컴포넌트 사용 (자동 좌→우 marquee)

파일: `components/ui/ReviewSlider.tsx`

### ReviewSlider 스펙
```tsx
// 무한 루프를 위해 배열을 2번 복제하여 연결
// CSS animation: marquee 35s linear infinite
// hover 시 animation-play-state: paused

<div className="overflow-hidden">
  <div className="flex animate-marquee hover:pause gap-4">
    {[...reviews, ...reviews].map((review, i) => (
      <ReviewCard key={i} {...review} />
    ))}
  </div>
</div>
```

### 후기 데이터
→ `data/commonText.ts`의 `REVIEWS` 배열 사용 (25개, 별 5개 고정) — 전체 목록: [09_data_types.md](09_data_types.md)

### ReviewCard 스타일
```
bg-slate-900/50 border border-white/[0.07] rounded-xl p-4 min-w-[280px]
⭐⭐⭐⭐⭐ (노란색)
후기 텍스트
```

---

## 구현 체크리스트
- [ ] HeroSection — 배지, 헤드라인, 버튼 3개, 태그 박스
- [ ] BenefitsSection — 6칸 카드 + 제작진행과정 화살표
- [ ] CasesSection — 이미지 5개 + 더보기
- [ ] DiagnosisSection — 체크리스트 + StickyForm
- [ ] ReviewSection — ReviewSlider marquee + 후기 더보기
- [ ] app/page.tsx — 6개 섹션 조합
