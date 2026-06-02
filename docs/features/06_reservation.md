# Feature 06 — 예약 (`/reservation`)

## 파일 위치
```
app/reservation/page.tsx
features/reservation/sections/ReservationFormSection.tsx
features/reservation/sections/CalendarPicker.tsx
data/reservationText.ts
```

---

## 페이지 구성 (3-Step 방식)

```
[배지] 무료 상담 예약 · 24시간 내 연락 · 맞춤 견적 제공
[제목] (RESERVATION_PAGE.title)
[아이콘 배지] 평균 24시간 내 연락 / 무료 진단 포함 / 케어 플랜 상담 가능

Step 1: 날짜 선택 (CalendarPicker)
Step 2: 시간 선택 (날짜 미선택 시 비활성)
[선택된 일정 요약 배너]
Step 3: 상담 신청 폼
```

---

## CalendarPicker

### 특징
- `next/dynamic`으로 dynamic import (SSR false)
- 이전달/다음달 이동
- 지난 날짜 비활성
- 선택된 날짜: cyan 강조

### Props
```ts
interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}
```

---

## Step 2 — 시간대 선택

- 날짜 선택 전: 비활성 상태 (`opacity-50`)
- 버튼 그리드: `grid grid-cols-4 sm:grid-cols-6 gap-2`
- 선택된 시간: `bg-cyan-500/20 border border-cyan-500/60 text-cyan-300`

---

## Step 3 — 상담 신청 폼

### 폼 필드 (아이콘 라벨 포함)
| 아이콘 | 필드 | 타입 |
|--------|------|------|
| User | 이름 | text (required) |
| Phone | 연락처 | tel (required) |
| Briefcase | 제작종류 | select (required) |
| Briefcase | 업종 | text (required) |
| FileText | 추가요청사항 | textarea |
| — | 개인정보 동의 | checkbox (required) |

### 제출 완료 상태
- 별도 성공 화면으로 전환
- CheckCircle2 아이콘 + "예약이 완료되었습니다!" 메시지
- 선택된 일정 cyan 박스로 표시

---

## 데이터 구조 (reservationText.ts)

```ts
export const RESERVATION_PAGE = {
  title: '상담 예약',
  subtitle: '원하시는 날짜와 시간대를 선택해 무료 상담을 예약하세요.',
  timeSlots: [
    '오전 10시', '오전 11시', '오후 1시', '오후 2시',
    '오후 3시', '오후 4시', '오후 5시', '협의 가능',
  ],
  form: {
    name:     { label: '이름',       placeholder: '이름을 입력해주세요' },
    phone:    { label: '연락처',     placeholder: '010-0000-0000' },
    type:     { label: '제작 종류',  options: ['랜딩페이지 제작', '홈페이지 제작', '랜딩&홈페이지 제작', '기타(weflow 케어플랜)'] },
    industry: { label: '업종',       placeholder: '업종을 입력해주세요' },
    request:  { label: '추가요청사항', placeholder: '원하시는 내용을 자유롭게 입력해주세요' },
    agree:    '개인정보 수집 및 상담 동의 (필수)',
    submit:   '상담 예약 신청하기',
  },
};
```

---

## localStorage 저장
```ts
const reservation = {
  date: selectedDate.toISOString(),
  time: selectedTime,
  ...formData,
  id: Date.now().toString(),
  createdAt: new Date().toISOString(),
  status: 'pending',
};
const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
localStorage.setItem('reservations', JSON.stringify([...existing, reservation]));
```

---

## 구현 체크리스트
- [ ] CalendarPicker — dynamic import, 날짜 선택, 지난날짜 비활성
- [ ] Step 2 시간 버튼 그리드 — 날짜 선택 전 비활성
- [ ] 선택 일정 요약 배너 (날짜+시간 선택 시 cyan으로 변경)
- [ ] Step 3 폼 — 아이콘 라벨, RESERVATION_PAGE 데이터 활용
- [ ] 제출 완료 화면 — 성공 메시지 + 선택 일정 표시
- [ ] localStorage 저장
- [ ] data/reservationText.ts — RESERVATION_PAGE 구조로 재작성
