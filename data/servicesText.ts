import type { ProcessStep, AdService } from '@/types';

export const PROCESS_STEPS: ProcessStep[] = [
  { number: '01', title: '상담·진단', description: '업종 및 제작 방향 확인' },
  { number: '02', title: '기획·설계', description: '문의 구조 및 전략 설계' },
  { number: '03', title: '디자인', description: '브랜드 맞춤 화면 구성' },
  { number: '04', title: '개발·테스트', description: '기능구현 최적화 검수 및 수정 진행' },
  { number: '05', title: 'SEO 상단등록', description: '네이버·구글·사이트맵 등록' },
  { number: '06', title: '광고운영·사후관리', description: '인스타·블로그·네이버 키워드 광고 운영관리' },
];

export const AD_SERVICES: AdService[] = [
  { icon: 'BookOpen', title: '블로그 업로드' },
  { icon: 'Camera', title: '인스타 업로드' },
  { icon: 'MessageSquare', title: '스레드 업로드' },
  { icon: 'Search', title: '네이버 키워드' },
  { icon: 'MapPin', title: '당근플레이스' },
  { icon: 'BarChart2', title: '네이버 서치어드바이저' },
  { icon: 'Globe', title: '구글 콘솔' },
  { icon: 'Map', title: '사이트맵 등록' },
];
