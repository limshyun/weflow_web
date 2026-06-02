# Feature 09 — 데이터 & 타입 정의

## 파일 위치
```
data/commonText.ts
data/homeText.ts
data/pricingText.ts
data/servicesText.ts
data/casesText.ts
data/landingText.ts
data/reservationText.ts
types/index.ts
```

---

## types/index.ts

```ts
// 문의/진단 폼
export interface DiagnosisForm {
  name: string;
  phone: string;
  serviceType: 'landing' | 'homepage' | 'both' | 'care';
  industry: string;
  message: string;
  agreePrivacy: boolean;
}

// localStorage 저장용 문의
export interface InquiryData extends DiagnosisForm {
  id: string;
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}

// 예약 데이터
export interface ReservationData {
  id: string;
  date: string;
  time: string;
  name: string;
  phone: string;
  type: string;
  industry: string;
  request: string;
  agree: boolean;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}

// 성공사례
export interface CaseItem {
  slug: string;
  name: string;
}

// 후기
export interface Review {
  text: string;
  rating: number;
}
```

---

## data/commonText.ts

```ts
export const NAV = {
  logo: 'WEFLOW',
  links: [
    { label: '홈',            href: '/' },
    { label: '서비스',        href: '/services' },
    { label: '제작플랜&가격안내', href: '/pricing' },
    { label: '성공사례',      href: '/cases' },
    { label: '예약',          href: '/reservation' },
  ],
  cta: '무료진단받기',
};

export const FOOTER = {
  tagline: '제작부터 관리까지\n비즈니스 성장을 함께합니다.',
  info: { ceo, bizNo, email, hours },
  legal: ['개인정보처리방침', '이용약관'],
  copyright: '© 2026 WEFLOW. All rights reserved.',
  links: {
    service:  { title: '서비스',           items: [...] },
    carePlan: { title: 'WEFLOW 케어플랜',  items: [...] },
    contact:  { title: '상담문의',          items: [...] },
  },
};

export const REVIEWS: Review[] = [...25개...];

export const COMPANY_INFO = {
  name, ceo, bizNumber, email, hours, kakao, blog, instagram, facebook
};

export const SERVICE_TYPE_OPTIONS = [...];
```

---

## data/homeText.ts

```ts
// HeroSection용
export const HERO = {
  badge: string,
  headline: string[3],
  sub: string[2],
  buttons: [{ label, href, primary }],
  tags: [{ title, desc }],  // 4개
};

// BenefitsSection + LandingFeaturesSection 공유
export const BENEFITS = {
  sectionTitle: 'WEFLOW만의 케어 플랜 혜택',
  cards: [{ title, desc }],  // 6개
};

// ProcessSection (홈 전용 2-컬럼)
export const PROCESS = {
  timeline: {
    title: '제작진행과정',
    sub: string,
    steps: [{ label, icon: 'user'|'tag'|'check'|'trending' }],  // 4개
  },
  sixSteps: {
    title: '6단계 제작 프로세스',
    sub: string,
    steps: [{ number, label }],  // 6개
  },
};

// CasesSection (홈 미리보기)
export const CASES_SECTION = {
  heading: string[2],
  sub: string,
  moreButton: '살펴보기 →',
};

// DiagnosisSection (홈)
export const DIAGNOSIS = {
  title: string,
  subtitle: string,
  items: [{ main, detail }],  // 4개
  ctaButton: '무료진단 후 견적 받기',
};
```

---

## data/pricingText.ts (레퍼런스 기준 재작성 필요)

```ts
export const PRODUCTION_PLANS = {
  sectionTitle: '제작 플랜',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'BASIC',
      name: '랜딩 페이지 제작',
      originalPrice: '498,000원',
      price: '249,000원',
      unit: '/ 1회',
      checklist: [{ ok: boolean, item: string }],
    },
    {
      tier: 'PRO',
      name: '홈페이지 제작',
      originalPrice: '1,998,000원',
      price: '999,000원',  // ← 990,000 아님
      unit: '/ 1회',
      checklist: [...],
    },
    {
      tier: 'ALL-IN-ONE',
      name: '랜딩&홈페이지 제작',
      originalPrice: '2,198,000원',
      price: '1,099,000원',  // ← 1,490,000 아님
      unit: '/ 1회',
      popular: true,
      checklist: [...],
    },
  ],
};

export const CARE_PLANS = {
  sectionTitle: 'WEFLOW 케어 플랜',
  sub: '만든 후가 진짜 시작입니다. 지속 성장을 위한 케어 플랜을 선택하세요.',
  notice: '3중 택1 필수',
  plans: [
    { tier: 'BASIC',      name: 'WE CARE',     subtitle: '기본 관리형',  originalPrice: '월 178,000원', price: '월 89,000원',  checklist: [...] },
    { tier: 'STANDARD',   name: 'FLOW CARE',   subtitle: '성장형',       originalPrice: '월 378,000원', price: '월 189,000원', popular: true, checklist: [...] },
    { tier: 'ALL-IN-ONE', name: 'WEFLOW CARE', subtitle: '프리미엄',     originalPrice: '월 578,000원', price: '월 339,000원', isTop: true,   checklist: [...] },
  ],
};

export const AD_PLANS = {
  sectionTitle: '광고 플랜',
  plans: [
    { name: '네이버 광고',        price: '일 149,000원~', theme: 'green',  desc: string, tags: string[] },
    { name: '당근 플레이스 광고', price: '일 79,000원~',  theme: 'orange', desc: string, tags: string[] },
  ],
};

export const PRICING_NOTICE = '모든 가격은 부가세(VAT) 포함입니다';
```

---

## data/servicesText.ts (레퍼런스 기준 재작성 필요)

```ts
// ServiceProcessSection용 (6-step 카드 그리드)
export const SERVICE_PROCESS = {
  sectionTitle: '제작 진행 과정',
  steps: [
    { number: '01', title: '상담·진단',          desc: string },
    { number: '02', title: '기획·설계',          desc: string },
    { number: '03', title: '디자인',             desc: string },
    { number: '04', title: '개발·테스트',        desc: string },
    { number: '05', title: 'SEO 상단등록',       desc: string },
    { number: '06', title: '광고운영·사후관리', desc: string },
  ],
};

// ManagementSystemSection용 (3그룹 컬럼)
export const MANAGEMENT_SYSTEM = {
  sectionTitle: '광고 운영 · 사후관리 시스템',
  sub: string,
  groups: [
    {
      icon: '📢', title: '콘텐츠 마케팅', badge: '트래픽 확보', theme: 'orange',
      items: [
        { icon: '📝', title: '블로그 업로드',  desc: string },
        { icon: '📸', title: '인스타 업로드', desc: string },
        { icon: '🧵', title: '스레드 업로드', desc: string },
      ],
    },
    {
      icon: '🎯', title: '로컬 & 키워드 타겟팅', badge: '매출 전환', theme: 'blue',
      items: [
        { icon: '🔑', title: '네이버 키워드',  desc: string },
        { icon: '🥕', title: '당근플레이스',   desc: string },
      ],
    },
    {
      icon: '🚀', title: '포털 SEO 최적화', badge: '상단 점유', theme: 'green',
      items: [
        { icon: '🔍', title: '네이버 서치어드바이저', desc: string },
        { icon: '📊', title: '구글 콘솔',             desc: string },
        { icon: '🗺️', title: '사이트맵 등록',         desc: string },
      ],
    },
  ],
};
```

---

## data/casesText.ts

```ts
// 성공사례 페이지용 (category + img 포함)
export const CASES_PAGE = {
  title: '성공 사례',
  moreButton: '더보기 →',
  moreHref: '/#form',
  cases: [
    { title: string, category: string, blogHref: string, img: string },
    // 28개 업종 — /cases_*.jpg 이미지 매핑
  ],
};

// 단순 slug 배열 (기타 용도)
export const CASES: CaseItem[] = [...];
```

---

## data/landingText.ts (레퍼런스 기준 재작성 필요)

```ts
export const LANDING_NOTICE = '※ 해당 페이지의 기능 및 혜택 안내는 랜딩페이지에서만 제공되는 내용입니다.';

export const LANDING_HERO = {
  badge: string,
  headline: string[2],
  sub: string,
  buttons: [{ label, href, primary }],
};

export const LANDING_QUOTE = {
  headline: string[2],
  sub: string[3],
};

export const LANDING_STRUCTURE = {
  title: '문의 증가 구조 설계',
  items: [{ title, desc, icon }],  // 3개
};

export const LANDING_DIAGNOSIS = {
  title: '무료진단에서 이런 걸 확인해드립니다',
  items: string[4],
  ctaButton: '문의 늘리는 무료 진단',
};
```

---

## data/reservationText.ts (레퍼런스 기준 재작성 필요)

```ts
export const RESERVATION_PAGE = {
  title: '상담 예약',
  subtitle: string,
  timeSlots: string[8],
  form: {
    name:     { label: string, placeholder: string },
    phone:    { label: string, placeholder: string },
    type:     { label: string, options: string[] },
    industry: { label: string, placeholder: string },
    request:  { label: string, placeholder: string },
    agree:    string,
    submit:   string,
  },
};
```

---

## 구현 체크리스트
- [ ] types/index.ts — ReservationData 필드 업데이트
- [ ] data/pricingText.ts — 레퍼런스 구조로 완전 재작성 (가격 수정 포함)
- [ ] data/servicesText.ts — SERVICE_PROCESS + MANAGEMENT_SYSTEM 구조로 재작성
- [ ] data/landingText.ts — LANDING_NOTICE, HERO, QUOTE, STRUCTURE, DIAGNOSIS 구조로 재작성
- [ ] data/reservationText.ts — RESERVATION_PAGE 구조로 재작성
- [ ] data/commonText.ts — NAV, FOOTER 구조 추가
