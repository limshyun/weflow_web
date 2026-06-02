# Feature 08 — 관리자 (`/admin`)

## 파일 위치
```
app/admin/page.tsx         # 대시보드 (예약 + 문의 관리)
app/admin/login/page.tsx   # 로그인
```

---

## 인증 방식

### 로그인 (`/admin/login`)
- 간단한 비밀번호 인증 (하드코딩 또는 환경변수)
- 비밀번호 맞으면 `localStorage.setItem('admin_auth', 'true')` 저장
- `/admin`으로 리다이렉트

### 인증 가드
```ts
// app/admin/page.tsx 최상단
useEffect(() => {
  const auth = localStorage.getItem('admin_auth');
  if (auth !== 'true') {
    router.push('/admin/login');
  }
}, []);
```

### 로그아웃
- `localStorage.removeItem('admin_auth')` + `/admin/login` 이동

### TypeScript 타입
```ts
// 환경변수 활용 권장
// .env.local: NEXT_PUBLIC_ADMIN_PASSWORD=weflow2026
```

---

## 대시보드 (`/admin`)

### 탭 구성
```
[예약 관리]  [문의 관리]
```

---

## 예약 관리 탭

### 데이터 소스
```ts
const reservations = JSON.parse(localStorage.getItem('reservations') || '[]');
```

### 테이블 컬럼
| 컬럼 | 내용 |
|------|------|
| 접수일 | `createdAt` |
| 이름 | `name` |
| 연락처 | `phone` |
| 날짜 | `date` |
| 시간 | `timeSlot` |
| 제작종류 | `serviceType` |
| 업종 | `industry` |
| 상태 | `status` (pending/confirmed/completed) |
| 액션 | 완료 / 삭제 버튼 |

### 액션 버튼
| 버튼 | 동작 |
|------|------|
| 완료 | `status` → `'completed'` 로 변경 |
| 삭제 | 배열에서 항목 제거 |

### TypeScript 타입
```ts
// Feature 06에서 정의한 ReservationData 재사용
import type { ReservationData } from '@/data/reservationText';

interface ReservationWithId extends ReservationData {
  id: string;
}
```

---

## 문의 관리 탭

### 데이터 소스
```ts
// FormModal 또는 StickyForm 제출 시 저장
const inquiries = JSON.parse(localStorage.getItem('inquiries') || '[]');
```

### 테이블 컬럼
| 컬럼 | 내용 |
|------|------|
| 접수일 | `createdAt` |
| 이름 | `name` |
| 연락처 | `phone` |
| 제작종류 | `serviceType` |
| 업종 | `industry` |
| 요청사항 | `message` |
| 상태 | `status` |
| 액션 | 진행중 / 완료 / 삭제 |

### TypeScript 타입
```ts
export interface InquiryData {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  industry: string;
  message: string;
  agreePrivacy: boolean;
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}
```

### 액션 버튼
| 버튼 | 동작 | 색상 |
|------|------|------|
| 진행중 | `status` → `'in_progress'` | 노란색 |
| 완료 | `status` → `'completed'` | 초록색 |
| 삭제 | 배열에서 항목 제거 | 빨간색 |

---

## 공통 UI 요소

### 상태 뱃지
```tsx
const statusBadge = {
  pending: 'bg-slate-700 text-slate-300',
  in_progress: 'bg-yellow-900/50 text-yellow-400',
  confirmed: 'bg-blue-900/50 text-blue-400',
  completed: 'bg-green-900/50 text-green-400',
};
```

### 빈 목록 처리
```tsx
{items.length === 0 && (
  <p className="text-slate-500 text-center py-12">아직 접수된 내역이 없습니다.</p>
)}
```

---

## 구현 체크리스트
- [ ] `/admin/login` — 비밀번호 로그인 페이지
- [ ] `/admin` — 인증 가드
- [ ] 예약 관리 — 목록 테이블 + 완료/삭제
- [ ] 문의 관리 — 목록 테이블 + 진행중/완료/삭제
- [ ] 상태 뱃지 스타일
- [ ] 로그아웃 버튼
- [ ] localStorage CRUD 로직
