# WEFLOW 재구현 프로젝트 — 전체 개요

## 프로젝트 정보
- **참고 레포**: https://github.com/lmg90219679-eng/weflow-web
- **참고 사이트**: https://weflow-web.vercel.app
- **제출 기한**: 2026-06-06 오후 6시
- **제출 방법**: Vercel 배포 링크 + GitHub 링크

## 기술 스택
| 항목 | 선택 |
|------|------|
| 프레임워크 | Next.js (App Router) |
| 언어 | **TypeScript (TSX)** |
| 스타일 | Tailwind CSS v4 |
| 아이콘 | lucide-react |
| 폰트 | Geist |
| 배포 | Vercel |
| DB | localStorage (관리자용) |

## 프로젝트 생성 명령어
```bash
npx create-next-app@latest weflow --ts --app --tailwind --no-src-dir --no-eslint
cd weflow
npm install lucide-react
```

## 디렉토리 구조
```
weflow/
├── public/
│   ├── logo_icon.png
│   ├── main_icon.png
│   └── cases_*.jpg          # 29장
├── app/
│   ├── globals.css
│   ├── layout.tsx            # Header, Footer, BottomBar, FormModal 포함
│   ├── page.tsx              # 홈
│   ├── services/page.tsx
│   ├── pricing/page.tsx
│   ├── cases/page.tsx
│   ├── reservation/page.tsx
│   ├── landing/page.tsx
│   └── admin/
│       ├── page.tsx          # 관리자 대시보드
│       └── login/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── BottomBar.tsx
│   └── ui/
│       ├── FormModal.tsx
│       ├── ReviewSlider.tsx
│       └── StickyForm.tsx
├── features/
│   ├── home/sections/
│   │   ├── HeroSection.tsx
│   │   ├── BenefitsSection.tsx
│   │   ├── ProcessSection.tsx
│   │   ├── CasesSection.tsx
│   │   ├── DiagnosisSection.tsx
│   │   └── ReviewSection.tsx
│   ├── landing/sections/
│   ├── pricing/sections/
│   ├── services/sections/
│   ├── cases/sections/
│   └── reservation/sections/
├── data/
│   ├── commonText.ts
│   ├── homeText.ts
│   ├── pricingText.ts
│   ├── servicesText.ts
│   ├── casesText.ts
│   ├── landingText.ts
│   └── reservationText.ts
└── types/
    └── index.ts              # 공통 타입 정의
```

## 페이지 구성
| 경로 | 페이지명 |
|------|---------|
| `/` | 홈 |
| `/services` | 서비스 |
| `/pricing` | 제작플랜&가격안내 |
| `/cases` | 성공사례 |
| `/reservation` | 예약 |
| `/landing` | 랜딩페이지 |
| `/admin` | 관리자 |

## 디자인 시스템
→ [docs/DESIGN.md](../DESIGN.md) 참조

## 구현 순서 (Phase)
1. **Phase 1** — 프로젝트 셋업, globals.css, 이미지 에셋, data/ 파일
2. **Phase 2** — 공통 컴포넌트 (Header, Footer, BottomBar, FormModal, ReviewSlider, StickyForm)
3. **Phase 3** — 페이지 구현 (홈 → 서비스 → 가격 → 사례 → 예약 → 랜딩)
4. **Phase 4** — 관리자 페이지
5. **Phase 5** — Vercel 배포 + 모바일 반응형 최종 점검

## 외부 링크
| 용도 | URL |
|------|-----|
| 카카오톡 채널 | http://pf.kakao.com/_xntCbX |
| 블로그 | https://m.blog.naver.com/weflowlab |
| 인스타그램 | https://www.instagram.com/weflowlab.kr |
| 페이스북 | https://www.facebook.com/profile.php?id=61590187124682 |
