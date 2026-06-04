export interface CheckItem {
  ok: boolean;
  item: string;
}

export interface ProductionPlan {
  tier: string;
  name: string;
  originalPrice: string;
  price: string;
  unit: string;
  checklist: CheckItem[];
  popular?: boolean;
}

export interface CarePlan {
  tier: string;
  name: string;
  subtitle: string;
  originalPrice: string;
  price: string;
  checklist: CheckItem[];
  popular?: boolean;
  isTop?: boolean;
}

export type AdTheme = 'green' | 'orange';

export interface AdPlan {
  name: string;
  originalPrice: string;
  price: string;
  theme: AdTheme;
  desc: string;
  tags: string[];
}

export const PRODUCTION_PLANS = {
  sectionTitle: '제작 플랜',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'START',
      name: '랜딩페이지',
      originalPrice: '498,000원',
      price: '249,000원',
      unit: '/ 1회',
      checklist: [
        { ok: true,  item: '랜딩페이지 1페이지' },
        { ok: true,  item: '3~4일 빠른 제작기간' },
        { ok: true,  item: '반응형 제작 (PC/모바일)' },
        { ok: true,  item: '문의폼 연동' },
        { ok: true,  item: '기본 SEO 설정' },
      ],
    },
    {
      tier: 'GROW',
      name: '홈페이지',
      originalPrice: '1,980,000원',
      price: '990,000원',
      unit: '/ 1회',
      checklist: [
        { ok: true,  item: '홈페이지 5페이지' },
        { ok: true,  item: '1주 빠른 제작기간' },
        { ok: true,  item: '반응형 제작 (PC/모바일)' },
        { ok: true,  item: '문의폼 연동' },
        { ok: true,  item: '카카오톡 상담연동' },
        { ok: true,  item: '기본 SEO 설정' },
      ],
    },
    {
      tier: 'MASTER',
      name: '랜딩&홈페이지 제작',
      originalPrice: '2,980,000원',
      price: '1,490,000원',
      unit: '/ 1회',
      popular: true,
      checklist: [
        { ok: true,  item: '홈페이지 + 랜딩페이지' },
        { ok: true,  item: '1~2주 빠른 제작기간' },
        { ok: true,  item: '반응형 제작 (PC/모바일)' },
        { ok: true,  item: '프리미엄 디자인' },
        { ok: true,  item: '예약·문의 시스템' },
        { ok: true,  item: 'SEO 최적화' },
        { ok: true,  item: '광고 전환 구조 설계' },
      ],
    },
  ] satisfies ProductionPlan[],
};

export const CARE_PLANS = {
  sectionTitle: 'WEFLOW 케어 플랜',
  sub: '만든 후가 진짜 시작입니다. 지속 성장을 위한 케어 플랜을 선택하세요.',
  notice: '3중 택1 필수',
  plans: [
    {
      tier: 'WE CARE',
      name: 'WE CARE',
      subtitle: '기본 관리 플랜',
      originalPrice: '월 170,000원',
      price: '월 89,000원~',
      checklist: [
        { ok: true,  item: '유지보수(월 수정) 월 1회' },
        { ok: true,  item: '블로그 : 월 1개' },
        { ok: true,  item: '인스타 : 월 4회 (주 1회)' },
        { ok: true,  item: '스레드 : 월 4회 (주 1회)' },
        { ok: true,  item: 'SEO 상단등록' },
      ],
    },
    {
      tier: 'FLOW CARE',
      name: 'FLOW CARE',
      subtitle: '성장 관리 플랜',
      originalPrice: '월 378,000원~',
      price: '월 189,000원~',
      popular: true,
      checklist: [
        { ok: true,  item: '유지보수 : 월 3회' },
        { ok: true,  item: '인스타 : 월 8회 (주 2회)' },
        { ok: true,  item: '스레드 : 월 8회 (주 2회)' },
        { ok: true,  item: '블로그 : 월 2회' },
        { ok: true,  item: '네이버 키워드 세팅 할인 (149,000 → 79,000원)' },
        { ok: true,  item: '당근 키워드 광고 세팅 50% 할인 (79,000 → 39,000원)' },
        { ok: true,  item: '문의 개선' },
        { ok: true,  item: 'SEO 상단 등록' },
      ],
    },
    {
      tier: 'WEFLOW CARE',
      name: 'WEFLOW CARE',
      subtitle: '올인원 관리 플랜',
      originalPrice: '월 678,000원~',
      price: '월 339,000원~',
      isTop: true,
      checklist: [
        { ok: true,  item: '유지보수 : 무제한' },
        { ok: true,  item: '블로그 : 월 4회 (주 1회)' },
        { ok: true,  item: '인스타 : 월 12회 (주 3회)' },
        { ok: true,  item: '스레드 : 월 12회 (주 3회)' },
        { ok: true,  item: '네이버 키워드/당근 플레이스 광고 세팅 무료' },
        { ok: true,  item: '월 성과 체크' },
        { ok: true,  item: '랜딩 개선' },
        { ok: true,  item: '광고관리' },
        { ok: true,  item: 'SEO 최적화' },
      ],
    },
  ] satisfies CarePlan[],
};

export const AD_PLANS = {
  sectionTitle: '광고 플랜',
  plans: [
    {
      name: '네이버 광고 (키워드 셋팅)',
      originalPrice: '298,000원',
      price: '149,000원~',
      theme: 'green' as AdTheme,
      desc: '네이버 검색 상위 노출로 더 많은\n잠재 고객을 유입시킵니다',
      tags: ['키워드 분석', '광고 세팅 지원', '광고 문구 제작', '문의 구조 연결', '채널 연동 지원', '성과 최적화'],
    },
    {
      name: '당근 플레이스 광고 (키워드 셋팅)',
      originalPrice: '158,000원',
      price: '79,000원~',
      theme: 'orange' as AdTheme,
      desc: '지역 고객에게 직접 도달하는\n당근마켓 지역 광고를 운영합니다',
      tags: ['지역 키워드 분석', '광고 세팅 지원', '광고 문구 제작', '지역 타겟 설정', '랜딩 연결 지원', '성과 최적화'],
    },
  ] satisfies AdPlan[],
};

export const PRICING_NOTICE = '모든 가격은 부가세(VAT) 포함입니다';
