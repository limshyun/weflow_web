# Feature 01 — 공통 레이아웃 (Header · Footer · BottomBar · FormModal)

## 파일 위치
```
app/layout.tsx
components/layout/Header.tsx
components/layout/Footer.tsx
components/layout/BottomBar.tsx
components/ui/FormModal.tsx
```

---

## 1. app/layout.tsx

### 역할
- 전체 앱의 루트 레이아웃
- Header, Footer, BottomBar, FormModal을 모든 페이지에 포함
- Geist 폰트 적용

### 구조
```tsx
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <Header />
        <FormModal />       {/* 전역 모달 — body 최상위 */}
        <main>{children}</main>
        <Footer />
        <BottomBar />       {/* 모바일 고정 하단바 */}
      </body>
    </html>
  );
}
```

---

## 2. Header.tsx

### 스펙
- `fixed top-0 z-50` 고정 헤더
- `bg-[#0a0f1e]/90 backdrop-blur-md`
- 높이: `h-16` (64px)

### 로고 영역
```
[logo_icon.png] WE FLOW
                ^^^  ^^^^
                흰색  cyan→blue 그라디언트
```

### 네비게이션 (데스크탑)
| 메뉴명 | 경로 |
|--------|------|
| 홈 | `/` |
| 서비스 | `/services` |
| 제작플랜&가격안내 | `/pricing` |
| 성공사례 | `/cases` |
| 예약 | `/reservation` |

### CTA 버튼
- 텍스트: `무료진단받기`
- 클릭 시: `window.dispatchEvent(new Event('open-diagnosis-modal'))` 발생
- 스타일: `.gradient-blue` (cyan→blue, 글로우 그림자)

### 모바일 (< lg)
- 햄버거 메뉴 아이콘 (lucide-react `Menu`)
- 클릭 시 풀스크린 드로어 또는 드롭다운 메뉴
- 동일한 네비게이션 링크 + 무료진단받기 버튼 포함

### TypeScript 타입
```ts
// 별도 타입 없음, 순수 컴포넌트
```

---

## 3. Footer.tsx

### 스펙
- 배경: `bg-[#0a0f1e]` (또는 `bg-slate-950`)
- 상단 구분선: `border-t border-white/10`
- 4컬럼 그리드 (데스크탑), 모바일에서 1컬럼

### 4컬럼 구성
#### 컬럼 1 — 로고 + 회사정보
```
[logo_icon.png] WEFLOW
제작부터 관리까지 비즈니스 성장을 함께합니다.

대표: 신서준
사업자등록번호: 884-07-03480
이메일: contact@weflowlab.kr
운영시간: 연중무휴 24시간 상담가능
```

#### 컬럼 2 — 서비스
- 홈페이지 제작 과정 (`/services`)
- 랜딩페이지 제작 과정 (`/services`)
- 광고 운영·관리 안내 (`/services`)

#### 컬럼 3 — WEFLOW 케어플랜
- WE 케어 (`/pricing`)
- FLOW 케어 (`/pricing`)
- WEFLOW 케어 (`/pricing`)

#### 컬럼 4 — 상담문의
- 전화문의 (`tel:`)
- 이메일 (`mailto:contact@weflowlab.kr`)
- 카카오 채널 (`http://pf.kakao.com/_xntCbX`)
- 인스타 (`https://www.instagram.com/weflowlab.kr`)
- 블로그 (`https://m.blog.naver.com/weflowlab`)

### 하단 바
```
개인정보처리방침 | 이용약관          © 2026 WEFLOW. All rights reserved.
```

---

## 4. BottomBar.tsx

### 스펙
- 모바일 전용 (`lg:hidden`)
- `fixed bottom-0 left-0 right-0 z-40`
- `bg-[#0a0f1e]/95 backdrop-blur-md border-t border-white/10`
- 4등분 1열 배치

### 버튼 4개
| 아이콘 | 텍스트 | 동작 |
|--------|--------|------|
| Phone | 24시간 상담 | `tel:` |
| MessageCircle | 카카오톡 문의 | `http://pf.kakao.com/_xntCbX` |
| BookOpen | 블로그 | `https://m.blog.naver.com/weflowlab` |
| Star | 무료진단 | `open-diagnosis-modal` 이벤트 |

---

## 5. FormModal.tsx

### 트리거 방식
```ts
// 어디서든 모달을 열 수 있는 이벤트 버스
window.dispatchEvent(new Event('open-diagnosis-modal'));

// FormModal 내부에서 수신
useEffect(() => {
  const handler = () => setIsOpen(true);
  window.addEventListener('open-diagnosis-modal', handler);
  return () => window.removeEventListener('open-diagnosis-modal', handler);
}, []);
```

### 폼 필드
| 필드명 | 타입 | 옵션 |
|--------|------|------|
| 이름 | `text` | — |
| 연락처 | `tel` | — |
| 제작종류 | `select` | 랜딩 페이지 제작 / 홈페이지 제작 / 랜딩 & 홈페이지 제작 / 기타(weflow케어플랜) |
| 업종 | `text` | — |
| 추가요청사항 | `textarea` | — |
| 개인정보 수집 및 상담 동의 | `checkbox` | 필수 |

### TypeScript 타입
→ `types/index.ts`의 `DiagnosisForm` 참조 (09_data_types.md)

### 스타일
- 오버레이: `fixed inset-0 bg-black/60 backdrop-blur-sm z-50`
- 모달 박스: `bg-slate-900 border border-white/10 rounded-2xl`
- 제출 버튼: `.gradient-blue`
- 제출 시: localStorage에 저장 후 모달 닫기 (관리자에서 확인)

---

## 구현 체크리스트
- [ ] Header — 로고, 네비게이션, CTA 버튼
- [ ] Header — 모바일 햄버거 메뉴
- [ ] Footer — 4컬럼 레이아웃
- [ ] BottomBar — 모바일 4버튼
- [ ] FormModal — 이벤트 수신, 폼, 제출
- [ ] layout.tsx — 모든 컴포넌트 조합
