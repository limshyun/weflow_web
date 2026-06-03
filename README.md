# WEFLOW 재구현 프로젝트

> 채용 과제 — 기존 GitHub 코드를 참고해 본인 코드로 처음부터 재구현

**배포 링크**: https://weflow-web-theta.vercel.app  
**참고 레포**: https://github.com/lmg90219679-eng/weflow-web

---

## 기술 스택

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Icons**: lucide-react
- **Deploy**: Vercel

---

## 구현 페이지

| 페이지 | 경로 |
|--------|------|
| 홈 | `/` |
| 서비스 | `/services` |
| 제작플랜&가격안내 | `/pricing` |
| 성공사례 | `/cases` |
| 예약 | `/reservation` |
| 랜딩페이지 | `/landing` |
| 관리자 | `/admin` |

---

## 주요 구현 사항

- 공통 레이아웃 (Header / Footer / 모바일 BottomBar / 전역 FormModal)
- 반응형 디자인 (모바일 우선)
- 관리자 페이지 — 예약·문의 목록 관리 (localStorage)
- 예약 페이지 — 달력 직접 구현 (외부 라이브러리 없음)
- 랜딩페이지 — 우측 StickyForm 고정 문의폼
- 가격 카드 — crown-gradient 강조, checklist 방식
- 후기 — CSS marquee 무한 자동 스크롤

---

## 디렉토리 구조

```
weflow/
├── app/                        # Next.js App Router
│   ├── layout.tsx              # 공통 레이아웃
│   ├── page.tsx                # 홈
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── cases/page.tsx
│   ├── reservation/page.tsx
│   ├── landing/page.tsx
│   └── admin/
│       ├── layout.tsx
│       ├── page.tsx
│       └── login/page.tsx
│
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BottomBar.tsx
│   └── ui/
│       ├── FormModal.tsx       # 전역 문의 모달
│       ├── StickyForm.tsx      # 랜딩 우측 고정 폼
│       ├── ReviewSlider.tsx    # 후기 자동 스크롤
│       └── DiagnosisButton.tsx
│
├── features/                   # 페이지별 섹션 컴포넌트
│   ├── home/sections/
│   ├── services/sections/
│   ├── pricing/sections/
│   ├── cases/sections/
│   ├── reservation/sections/
│   └── landing/sections/
│
├── data/                       # 텍스트·가격 데이터 (TS 상수)
│   ├── commonText.ts
│   ├── homeText.ts
│   ├── pricingText.ts
│   ├── servicesText.ts
│   ├── casesText.ts
│   ├── landingText.ts
│   └── reservationText.ts
│
├── types/index.ts              # 공통 TypeScript 타입
└── public/                     # 이미지 에셋
    ├── logo_icon.png
    ├── main_icon.png
    └── cases_*.jpg             # 업종별 사례 이미지 28장
```

---

## 로컬 실행

```bash
npm install
npm run dev
# http://localhost:3000
```

---

## 관리자 접속

- URL: `/admin/login`
- 비밀번호: `weflow2026`
- 환경변수로 변경 가능: `NEXT_PUBLIC_ADMIN_PASSWORD`
