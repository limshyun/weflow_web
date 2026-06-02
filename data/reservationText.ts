export const RESERVATION_PAGE = {
  title: '상담 예약',
  subtitle: '원하시는 날짜와 시간대를 선택해 무료 상담을 예약하세요.',
  timeSlots: [
    '오전 10시', '오전 11시', '오후 1시', '오후 2시',
    '오후 3시', '오후 4시', '오후 5시', '협의 가능',
  ],
  form: {
    name:     { label: '이름',         placeholder: '이름을 입력해주세요' },
    phone:    { label: '연락처',       placeholder: '010-0000-0000' },
    type:     {
      label: '제작 종류',
      options: ['랜딩페이지 제작', '홈페이지 제작', '랜딩&홈페이지 제작', '기타(weflow 케어플랜)'],
    },
    industry: { label: '업종',         placeholder: '업종을 입력해주세요' },
    request:  { label: '추가요청사항', placeholder: '원하시는 내용을 자유롭게 입력해주세요' },
    agree:    '개인정보 수집 및 상담 동의 (필수)',
    submit:   '상담 예약 신청하기',
  },
} as const;
