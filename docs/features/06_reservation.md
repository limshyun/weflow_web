# Feature 06 — 예약 (`/reservation`)

## 파일 위치
```
app/reservation/page.tsx
features/reservation/sections/ReservationForm.tsx
features/reservation/sections/CalendarPicker.tsx
data/reservationText.ts
```

---

## 페이지 구성
- 세로 단일 폼 레이아웃
- `max-w-2xl mx-auto`
- 상단 달력 → 하단 폼 순서

---

## CalendarPicker

### 기능
- 이번 달 달력 표시
- 날짜 클릭 시 선택/해제 토글
- 선택된 날짜: `gradient-blue` 배경
- 지난 날짜: 비활성화 (`text-slate-600 cursor-not-allowed`)

### TypeScript 타입
```ts
interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}
```

### 구현 방식
- 외부 라이브러리 없이 순수 구현 (Date 객체 사용)
- 이전/다음 달 이동 버튼 (`ChevronLeft`, `ChevronRight` — lucide-react)

---

## ReservationForm

### 폼 필드 (위→아래)
| 필드 | 타입 | 비고 |
|------|------|------|
| 달력 (날짜 선택) | CalendarPicker | — |
| 시간대 선택 | `select` 또는 버튼 그룹 | 오전/오후 슬롯 |
| 이름 | `text` | 필수 |
| 연락처 | `tel` | 필수 |
| 제작종류 | `select` | 4가지 옵션 |
| 원하시는 시간대 | `text` | 직접 입력 |
| 업종 | `text` | 직접 입력 |
| 추가요청사항 | `textarea` | — |
| 개인정보 수집 및 상담 동의 | `checkbox` | 필수 |

### 제작종류 옵션
- 랜딩페이지 제작
- 홈페이지 제작
- 랜딩&홈페이지 제작
- 기타(weflow 케어플랜)

### 시간대 선택 (버튼 그룹)
```
[오전 10시]  [오전 11시]  [오후 1시]  [오후 2시]
[오후 3시]   [오후 4시]   [오후 5시]  [협의 가능]
```
선택된 시간: `gradient-blue` 배경, 미선택: outline 스타일

### TypeScript 타입
```ts
export interface ReservationData {
  date: string;             // 'YYYY-MM-DD'
  timeSlot: string;         // '오전 10시' 등
  customTime: string;       // 직접 입력 시간
  name: string;
  phone: string;
  serviceType: 'landing' | 'homepage' | 'both' | 'care';
  industry: string;
  message: string;
  agreePrivacy: boolean;
  createdAt: string;        // ISO 날짜 문자열
  status: 'pending' | 'confirmed' | 'completed';
}
```

---

## 데이터 저장 (localStorage)
```ts
// 예약 저장
const saveReservation = (data: ReservationData) => {
  const existing = JSON.parse(localStorage.getItem('reservations') || '[]');
  existing.push({ ...data, id: Date.now().toString() });
  localStorage.setItem('reservations', JSON.stringify(existing));
};
```

---

## 폼 유효성 검사
- 날짜 미선택 시: "날짜를 선택해주세요"
- 이름/연락처 미입력 시: "필수 항목입니다"
- 개인정보 동의 미체크 시: "개인정보 수집에 동의해주세요"
- 연락처 형식: 숫자 + 하이픈만 허용

---

## 제출 완료 UI
- 성공 시: "예약이 접수되었습니다" 메시지 + 홈으로 이동 버튼
- 모달 또는 인라인 메시지

---

## 구현 체크리스트
- [ ] CalendarPicker — 날짜 선택 달력
- [ ] 시간대 버튼 그룹
- [ ] ReservationForm — 전체 폼
- [ ] localStorage 저장 로직
- [ ] 유효성 검사 + 에러 메시지
- [ ] 제출 완료 UI
