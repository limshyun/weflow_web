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

## types/index.ts — 공통 타입

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

// localStorage 저장용 문의 데이터
export interface InquiryData extends DiagnosisForm {
  id: string;
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}

// 예약 데이터
export interface ReservationData {
  id: string;
  date: string;
  timeSlot: string;
  customTime: string;
  name: string;
  phone: string;
  serviceType: 'landing' | 'homepage' | 'both' | 'care';
  industry: string;
  message: string;
  agreePrivacy: boolean;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}

// 가격 플랜
export interface Plan {
  id: string;
  badge?: string;
  name: string;
  subtitle?: string;
  features: string[];
  originalPrice: string;
  discountPrice: string;
  highlighted?: boolean;
  crownIcon?: boolean;
}

// 성공사례
export interface CaseItem {
  slug: string;
  name: string;
}

// 후기
export interface Review {
  text: string;
  rating: number;  // 항상 5
}

// 제작 프로세스 단계
export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// 광고 서비스 카드
export interface AdService {
  icon: string;
  title: string;
}
```

---

## data/commonText.ts

```ts
import type { Review } from '@/types';

export const REVIEWS: Review[] = [
  { text: '문의 버튼 위치 바꾸고 상담 문의가 확실히 늘었어요.', rating: 5 },
  { text: '수정 요청도 빠르게 처리해주셔서 만족합니다.', rating: 5 },
  { text: '디자인보다 문의 구조를 신경 써주는 게 좋았습니다.', rating: 5 },
  { text: '랜딩페이지 제작 후 상담 문의가 늘었어요.', rating: 5 },
  { text: '설명도 쉽게 해주셔서 진행하기 편했습니다.', rating: 5 },
  { text: '광고 연결까지 한 번에 진행돼서 편했어요.', rating: 5 },
  { text: '피드백 속도가 진짜 빨랐습니다.', rating: 5 },
  { text: '모바일 화면이 훨씬 보기 좋아졌어요.', rating: 5 },
  { text: '생각보다 제작 기간이 빨라 놀랐습니다.', rating: 5 },
  { text: '업종 특성에 맞게 잘 만들어주셨어요.', rating: 5 },
  { text: '기획부터 같이 잡아줘서 부담이 없었습니다.', rating: 5 },
  { text: '광고 세팅 방향도 알려줘서 도움됐어요.', rating: 5 },
  { text: '예약 문의가 전보다 더 잘 들어옵니다.', rating: 5 },
  { text: 'PT샵 구조를 잘 이해하고 계시더라고요.', rating: 5 },
  { text: '필라테스 문의 동선이 훨씬 좋아졌어요.', rating: 5 },
  { text: '보험 상담 페이지가 깔끔하게 정리됐어요.', rating: 5 },
  { text: '수정 요청해도 응답이 빨라 좋았습니다.', rating: 5 },
  { text: '홈페이지 만들고 끝이 아니라 관리도 해줘요.', rating: 5 },
  { text: 'SEO 부분까지 신경 써줘서 만족합니다.', rating: 5 },
  { text: '카카오 문의 연결이 편하게 바뀌었어요.', rating: 5 },
  { text: '문의하기 버튼 위치가 확실히 효과 있네요.', rating: 5 },
  { text: '초보라 아무것도 몰랐는데 쉽게 설명해줬어요.', rating: 5 },
  { text: '비용 부담이 생각보다 적었습니다.', rating: 5 },
  { text: '랜딩페이지 하나로 상담률이 올라갔어요.', rating: 5 },
  { text: '다음 프로젝트도 위플로우랑 진행할 예정입니다.', rating: 5 },
];

export const COMPANY_INFO = {
  name: 'WEFLOW',
  ceo: '신서준',
  bizNumber: '884-07-03480',
  email: 'contact@weflowlab.kr',
  hours: '연중무휴 24시간 상담가능',
  kakao: 'http://pf.kakao.com/_xntCbX',
  blog: 'https://m.blog.naver.com/weflowlab',
  instagram: 'https://www.instagram.com/weflowlab.kr',
  facebook: 'https://www.facebook.com/profile.php?id=61590187124682',
};

export const SERVICE_TYPE_OPTIONS = [
  { value: 'landing', label: '랜딩 페이지 제작' },
  { value: 'homepage', label: '홈페이지 제작' },
  { value: 'both', label: '랜딩 & 홈페이지 제작' },
  { value: 'care', label: '기타(weflow케어플랜)' },
] as const;
```

---

## data/pricingText.ts

모든 가격 플랜 데이터 (Plan[] 배열 × 4종)

```ts
export const CREATION_PLANS: Plan[] = [
  {
    id: 'start',
    badge: 'START',
    name: '랜딩페이지',
    features: ['랜딩페이지 1페이지', '3~4일 빠른 제작기간', '반응형 제작 (PC/모바일)', '문의폼 연동', '기본 SEO 설정'],
    originalPrice: '498,000원',
    discountPrice: '249,000원',
  },
  {
    id: 'grow',
    badge: 'GROW',
    name: '홈페이지',
    features: ['홈페이지 5페이지', '1주 빠른 제작기간', '반응형 제작 (PC/모바일)', '문의폼 연동', '카카오톡 상담연동', '기본 SEO 설정'],
    originalPrice: '1,980,000원',
    discountPrice: '990,000원',
  },
  {
    id: 'master',
    badge: 'MASTER',
    name: '랜딩&홈페이지',
    features: ['홈페이지 + 랜딩페이지', '1~2주 빠른 제작기간', '반응형 제작 (PC/모바일)', '프리미엄 디자인', '예약·문의 시스템', 'SEO 최적화', '광고 전환 구조 설계'],
    originalPrice: '2,980,000원',
    discountPrice: '1,490,000원',
    highlighted: true,
    crownIcon: true,
  },
];

export const CARE_PLANS: Plan[] = [...];
export const AD_PLANS: Plan[] = [...];
```

---

## data/casesText.ts

```ts
export const CASES: CaseItem[] = [
  { slug: 'PT샵', name: 'PT샵' },
  { slug: '필라테스', name: '필라테스' },
  // ... 29개
];
```

---

## 구현 체크리스트
- [ ] types/index.ts — 전체 공통 타입 정의
- [ ] data/commonText.ts — 후기 25개, 회사정보, 제작종류 옵션
- [ ] data/pricingText.ts — 가격 플랜 8개
- [ ] data/casesText.ts — 29개 업종
- [ ] data/servicesText.ts — 프로세스 6단계, 광고 서비스 8개
- [ ] data/homeText.ts — 혜택 카드 6개, 태그 3개
- [ ] data/landingText.ts — 강점 카드 5개, Why 텍스트
- [ ] data/reservationText.ts — 시간대 슬롯 옵션
