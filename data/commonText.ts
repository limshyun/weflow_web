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
} as const;

export const SERVICE_TYPE_OPTIONS = [
  { value: 'landing' as const, label: '랜딩 페이지 제작' },
  { value: 'homepage' as const, label: '홈페이지 제작' },
  { value: 'both' as const, label: '랜딩 & 홈페이지 제작' },
  { value: 'care' as const, label: '기타(weflow케어플랜)' },
];
