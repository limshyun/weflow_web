# Feature 04 — 제작플랜&가격안내 (`/pricing`)

## 파일 위치
```
app/pricing/page.tsx
features/pricing/sections/ProductionPlansSection.tsx
features/pricing/sections/CarePlansSection.tsx
features/pricing/sections/AdPlansSection.tsx
data/pricingText.ts
```

---

## 페이지 구성
```
페이지 헤더 (PRICING 배지 + 제목)
1. ProductionPlansSection — 제작 플랜 3종
2. CarePlansSection       — 케어 플랜 3종
3. AdPlansSection         — 광고 플랜 2종
```

### 페이지 헤더
```
[PRICING 배지]
제작 플랜 & 가격 안내
비즈니스 목적에 맞는 플랜을 선택하세요
```

---

## 핵심 데이터 구조 (pricingText.ts)

### PRODUCTION_PLANS
```ts
{
  sectionTitle: '제작 플랜',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'BASIC',
      name: '랜딩 페이지 제작',
      originalPrice: '498,000원',
      price: '249,000원',
      unit: '/ 1회',
      checklist: [{ ok: true, item: '3~4일 빠른 제작' }, ...],
    },
    {
      tier: 'PRO',
      name: '홈페이지 제작',
      originalPrice: '1,998,000원',
      price: '999,000원',     ← (990,000원 아님)
      unit: '/ 1회',
      checklist: [...],
    },
    {
      tier: 'ALL-IN-ONE',
      name: '랜딩&홈페이지 제작',
      originalPrice: '2,198,000원',
      price: '1,099,000원',   ← (1,490,000원 아님)
      unit: '/ 1회',
      popular: true,
      checklist: [...],
    },
  ],
}
```

### CARE_PLANS
```ts
{
  sectionTitle: 'WEFLOW 케어 플랜',
  sub: '만든 후가 진짜 시작입니다...',
  notice: '3중 택1 필수',
  plans: [
    { tier: 'BASIC',      name: 'WE CARE',      subtitle: '기본 관리형', originalPrice: '월 178,000원', price: '월 89,000원',  checklist: [...] },
    { tier: 'STANDARD',   name: 'FLOW CARE',    subtitle: '성장형',      originalPrice: '월 378,000원', price: '월 189,000원', popular: true, checklist: [...] },
    { tier: 'ALL-IN-ONE', name: 'WEFLOW CARE',  subtitle: '프리미엄',    originalPrice: '월 578,000원', price: '월 339,000원', isTop: true, checklist: [...] },
  ],
}
```

### AD_PLANS
```ts
{
  sectionTitle: '광고 플랜',
  plans: [
    { name: '네이버 광고',        price: '일 149,000원~', theme: 'green',  desc: string, tags: string[] },
    { name: '당근 플레이스 광고', price: '일 79,000원~',  theme: 'orange', desc: string, tags: string[] },
  ],
}

export const PRICING_NOTICE = '모든 가격은 부가세(VAT) 포함입니다';
```

---

## 섹션 1 — ProductionPlansSection

### 카드 레이아웃
- `grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto`
- popular(ALL-IN-ONE) 카드: 상단 cyan glow 라인 + "추천" 뱃지

### 카드 구조 (위→아래)
```
[tier badge: BASIC/PRO/ALL-IN-ONE]
[플랜명]
[빠른제작 기간 배지 — Zap 아이콘]
원가: 498,000원 (취소선, 빨간색)
249,000원  ← 크게
VAT 포함

✓ 3~4일 빠른 제작
✓ 문의 구조 설계
✗ (미포함 항목)

[신청하기] → /reservation
```

### 체크리스트 구성 (BASIC)
- ✓ 3~4일 빠른 제작
- ✓ 문의 구조 설계
- ✓ 모바일 최적화
- ✓ 검색 노출 지원

### 체크리스트 구성 (PRO)
- ✓ 7일 빠른 제작기간
- ✓ 업종 맞춤 구성
- ✓ 모바일 최적화
- ✓ 문의·예약 기능
- ✓ 검색 노출 지원

### 체크리스트 구성 (ALL-IN-ONE — popular)
- ✓ 10~11일 빠른 제작기간
- ✓ 업종 맞춤 구성
- ✓ 문의 구조 설계
- ✓ 모바일 최적화
- ✓ 검색 노출 지원
- ✓ 운영·관리 지원

---

## 섹션 2 — CarePlansSection

### 카드 스타일 분기
| 플랜 | 배경 | 강조 |
|------|------|------|
| WE CARE | 기본 slate | 기본 |
| FLOW CARE (popular) | blue 계열 배경 | 파란 뱃지 "인기" |
| WEFLOW CARE (isTop) | amber 계열 배경 | 👑 올인원 + crown-gradient 버튼 |

### 체크리스트 구성
**WE CARE**
- 유지보수 : 월 1회 / 블로그 : 월 1개 / 인스타 : 월 4개 / SEO 상단등록

**FLOW CARE**
- 유지보수 : 월 3회 / 블로그 : 월 2개 / 인스타 : 월 8개
- 네이버 키워드 세팅 할인 (149,000 → 79,000원)
- 당근 키워드 광고 세팅 50% 할인 (79,000 → 39,000원)
- 문의 개선 / SEO 상단등록

**WEFLOW CARE**
- 유지보수 : 무제한 / 블로그 : 월 4개 / 인스타 : 월 12개
- 네이버 키워드/당근 플레이스 광고 세팅 무료
- 월 성과 체크 / 랜딩 개선 / 광고관리 / SEO 상단관리

---

## 섹션 3 — AdPlansSection

### 카드 레이아웃
- `grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto`
- 좌측 컬러 보더: `border-l-4 border-l-green-500` / `border-l-orange-500`

### 네이버 광고 (green)
- 가격: `일 149,000원~`
- 설명: 네이버 검색 상위 노출로 더 많은 잠재 고객을 유입시킵니다
- 태그: 검색 광고 운영 / 블로그 상위 노출 / 키워드 최적화 / 월간 성과 보고서

### 당근 플레이스 광고 (orange)
- 가격: `일 79,000원~`
- 설명: 지역 고객에게 직접 도달하는 당근마켓 지역 광고를 운영합니다
- 태그: 지역 타겟 광고 / 당근 플레이스 최적화 / 동네 비즈니스 홍보 / 소상공인 맞춤

### 하단 도메인 안내
```
도메인은 고객님 명의로 등록되며 비용은 별도입니다.
위플로우에서 등록 및 연결 세팅은 무료 지원해드립니다.
✓ 도메인 연결 지원  ✓ 도메인 등록 대행 가능
※ 도메인 비용 별도
※ 광고비는 고객 계정에서 고객 결제수단으로 직접 결제
```

---

## 구현 체크리스트
- [ ] pricingText.ts — PRODUCTION_PLANS, CARE_PLANS, AD_PLANS, PRICING_NOTICE 재작성
- [ ] ProductionPlansSection — 3열 카드, tier badge, checklist, popular glow
- [ ] CarePlansSection — WEFLOW CARE amber/crown 강조, FLOW CARE 인기 뱃지
- [ ] AdPlansSection — 2열, 컬러 left border, tags
- [ ] 각 섹션 하단 PRICING_NOTICE 배지
- [ ] 신청하기 → /reservation 링크
