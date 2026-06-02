# WEFLOW 재구현 프로젝트

## 개요
- **목적**: 채용 과제 — 기존 GitHub 코드를 참고해 본인 코드로 처음부터 재구현
- **참고 레포**: https://github.com/lmg90219679-eng/weflow-web
- **참고 사이트**: https://weflow-web.vercel.app
- **제출 기한**: 2026-06-06 오후 6시
- **제출 방법**: Vercel 배포 링크 + GitHub 링크

## 기술 스택
- **프레임워크**: Next.js (App Router)
- **언어**: TypeScript (TSX)
- **스타일**: Tailwind CSS v4
- **아이콘**: lucide-react
- **폰트**: Geist (Google Fonts)
- **배포**: Vercel

## 프로젝트 생성
```bash
npx create-next-app@latest weflow --ts --app --tailwind --no-src-dir --no-eslint
cd weflow
npm install lucide-react
```

## 디렉토리 구조 (재구현 목표)
```
weflow/
├── public/
│   ├── logo_icon.png          # 레포에서 가져오기
│   ├── main_icon.png
│   └── cases_*.jpg            # 성공사례 이미지 29장
├── app/
│   ├── globals.css
│   ├── layout.js              # Header, Footer, BottomBar, FormModal 포함
│   ├── page.js                # 홈
│   ├── services/page.js       # 서비스
│   ├── pricing/page.js        # 제작플랜&가격안내
│   ├── cases/page.js          # 성공사례
│   ├── reservation/page.js    # 예약
│   ├── landing/page.js        # 랜딩페이지
│   └── admin/                 # 관리자 (별도 구현)
├── components/
│   ├── layout/
│   │   ├── Header.jsx
│   │   ├── Footer.jsx
│   │   └── BottomBar.jsx
│   └── ui/
│       ├── FormModal.jsx      # 무료진단 모달 (전역)
│       ├── ReviewSlider.jsx   # 자동 스크롤 후기
│       └── StickyForm.jsx     # 오른쪽 고정 문의폼
├── features/
│   ├── home_page/sections/
│   │   ├── HeroSection.jsx
│   │   ├── BenefitsSection.jsx
│   │   ├── ProcessSection.jsx
│   │   ├── CasesSection.jsx
│   │   ├── DiagnosisSection.jsx
│   │   └── ReviewSection.jsx
│   ├── landing_page/sections/
│   ├── pricing_page/sections/
│   ├── services_page/sections/
│   ├── cases_page/sections/
│   └── reservation_page/sections/
└── data/
    ├── commonText.js
    ├── homeText.js
    ├── pricingText.js
    ├── servicesText.js
    ├── casesText.js
    ├── landingText.js
    └── reservationText.js
```

## 디자인 시스템

### 색상 (다크 테마)
- **배경**: `#0a0f1e` (딥 네이비)
- **텍스트**: `#f1f5f9` (slate-100)
- **서브텍스트**: `#94a3b8` (slate-400)
- **브랜드 그라디언트**: `from-cyan-300 to-blue-500`
- **CTA 버튼**: `background: linear-gradient(135deg, #22d3ee, #2563eb)` + 글로우 섀도우
- **카드 배경**: `bg-slate-900/50` + `border border-white/[0.07]`

### 배경 패턴
```css
body {
  background-color: #0a0f1e;
  background-image: radial-gradient(rgba(148,163,184,0.07) 1px, transparent 1px);
  background-size: 24px 24px;
}
```

### 핵심 CSS 클래스 (globals.css)
```css
.gradient-blue {
  background: linear-gradient(135deg, #22d3ee 0%, #2563eb 100%);
  box-shadow: 0 0 24px rgba(34,211,238,0.35), 0 4px 15px rgba(37,99,235,0.25);
}
.animate-marquee { animation: marquee 35s linear infinite; }
.animate-fade-in-up { animation: fadeInUp 0.6s ease-out forwards; }
```

---

## 페이지별 구현 명세

### 1. 공통 레이아웃

#### Header
- 고정 상단 (`fixed top-0 z-50`), `bg-[#0a0f1e]/90 backdrop-blur-md`
- 로고: `logo_icon.png` + `WE` (흰색) + `FLOW` (cyan→blue 그라디언트)
- 네비게이션: 홈 / 서비스 / 제작플랜&가격안내 / 성공사례 / 예약
- CTA 버튼: `무료진단받기` → FormModal 오픈
- 모바일: 햄버거 메뉴

#### Footer
4컬럼 레이아웃:
- **로고 + 회사정보**: 대표 신서준, 사업자 884-07-03480, contact@weflowlab.kr, 연중무휴 24시간
- **서비스**: 홈페이지 제작 과정, 랜딩페이지 제작 과정, 광고 운영·관리 안내
- **WEFLOW 케어플랜**: WE 케어, FLOW 케어, WEFLOW 케어
- **상담문의**: 전화문의, 이메일, 카카오 채널, 인스타, 블로그
- 하단: `개인정보처리방침 | 이용약관` + `© 2026 WEFLOW. All rights reserved.`

#### BottomBar (모바일 고정)
4개 버튼 1열:
- 24시간 상담 가능 → `tel:`
- 카카오톡 문의 → http://pf.kakao.com/_xntCbX
- 블로그 → https://m.blog.naver.com/weflowlab
- 무료진단 → FormModal 오픈

#### FormModal (전역 모달)
- `window.dispatchEvent(new Event('open-diagnosis-modal'))` 로 트리거
- 필드: 이름, 연락처, 제작종류(select), 업종, 추가요청사항, 개인정보동의(checkbox)
- 제작종류 옵션: 랜딩 페이지 제작 / 홈페이지 제작 / 랜딩 & 홈페이지 제작 / 기타(weflow케어플랜)

---

### 2. 홈 (`/`)

#### HeroSection
- 배지: `랜딩&홈페이지 제작 · 광고 운영 · 검색 상단 노출 · 맞춤형 웹 솔루션`
- 헤드라인 (큰글씨, 2줄 안 끊기게): **문의로 이어지는 홈페이지를 만듭니다**
- 서브텍스트: 홈페이지 제작부터 광고 연동·운영 관리까지 / 단순 제작이 아닌 문의 구조까지 설계합니다
- 버튼 3개 (파란색 그림자): 무료 진단 신청 / 성공 사례 보기 / 랜딩 페이지 사례
- 태그 박스 (작은 직사각형, 가로 늘리기 X): 케어 플랜(제작·광고·운영) / 빠른제작(3일~7일) / 합리적 비용(가성비+퀄리티)

#### BenefitsSection
- 섹션 제목: **WEFLOW만의 케어 플랜 혜택**
- 6칸 카드 그리드: weflow 케어플랜 / 빠른 제작(3~7일 로켓배송) / 합리적인 가성비 / 24시간 상담대기 / 운영·광고 지원 / 문의 구조 설계
- 하단: 제작진행과정 (고객의뢰 → 접수후제작 → 3~7일 배송완료 → 광고 및 운영 사후 관리)

#### CasesSection
- 성공사례 이미지 5개 (오른쪽 위에 더보기 버튼)
- 업종: PT 필라테스 보험설계 카센타 등

#### DiagnosisSection
- 긴 텍스트 박스: **무료진단 후 나의 개선점 확인해보기**
- 체크 리스트: ✓ 문의 구조 진단 / ✓ 디자인·사용성 점검 / ✓ 검색 노출 분석 / ✓ 문의 개선 제안
- 버튼: `무료진단 후 견적 받기`
- 오른쪽 고정 StickyForm: 이름/연락처/제작종류/업종/추가요청사항/개인정보동의

#### ReviewSection
- 가로 자동 스크롤 (marquee) 후기창
- 오른쪽 위 **후기 더보기** 버튼
- 25개 별 5개 후기 (data/commonText.js REVIEWS 배열 사용)

---

### 3. 서비스 (`/services`)

#### 제작진행과정 (6단계)
| 번호 | 단계 |
|------|------|
| 01 | 상담·진단 — 업종 및 제작 방향 확인 |
| 02 | 기획·설계 — 문의 구조 및 전략 설계 |
| 03 | 디자인 — 브랜드 맞춤 화면 구성 |
| 04 | 개발·테스트 — 기능구현 최적화 검수 및 수정 진행 |
| 05 | SEO 상단등록 — 네이버·구글·사이트맵 등록 |
| 06 | 광고운영·사후관리 — 인스타·블로그·네이버 키워드 광고 운영관리 |

#### 광고 운영·사후관리 시스템 (카드형)
블로그 업로드 / 인스타 업로드 / 스레드 업로드 / 네이버 키워드 / 당근플레이스 / 네이버 서치어드바이저 / 구글 콘솔 / 사이트맵 등록

---

### 4. 제작플랜&가격안내 (`/pricing`)

> 모든 플랜 카드: 세로형 / 취소선 원가 → 할인가 (파격세일 강조)

#### 제작 플랜 (3중 택1, v체크 포함)

| 플랜 | 이름 | 원가 | 할인가 |
|------|------|------|--------|
| START | 랜딩페이지 | 498,000원 | **249,000원** |
| GROW | 홈페이지 | 1,980,000원 | **990,000원** |
| MASTER 👑 | 랜딩&홈페이지 (강조색) | 2,980,000원 | **1,490,000원** |

#### 케어 플랜 (3중 택1)

| 플랜 | 이름 | 원가 | 할인가 |
|------|------|------|--------|
| WE CARE | 기본 관리 | 월 170,000원 | **월 89,000원~** |
| FLOW CARE | 성장 관리 | 월 378,000원 | **월 189,000원~** |
| WEFLOW CARE 👑 | 올인원 (강조색) | 월 678,000원 | **월 339,000원~** |

#### 광고 플랜

| 플랜 | 원가 | 할인가 |
|------|------|--------|
| 네이버 광고(키워드 셋팅) | 298,000원 | **149,000원~** |
| 당근 플레이스 광고 | 158,000원 | **79,000원~** |

#### 하단 공통 안내 (각 카드 아래 또는 섹션 하단)
```
※ VAT 포함입니다.
도메인은 고객님 명의로 등록되며 비용은 별도입니다.
위플로우에서 등록 및 연결 세팅은 무료 지원해 드립니다.
✓ 도메인 연결 지원  ✓ 도메인 등록 대행 가능
✓ 도메인 비용 별도  ✓ 광고비는 고객 계정에서 고객 결제수단으로 직접 결제
유지보수는 텍스트, 이미지, 링크 등 경미한 수정 기준입니다.
```

---

### 5. 성공사례 (`/cases`)

- 1열 4개 카드, 아래로 쭉 (양옆 여백, center 정렬)
- 카드 구성: 위 절반 이미지 / 아래 절반 상호명 + 자세히보기
- 카드 클릭 시 → 블로그 https://m.blog.naver.com/weflowlab 이동
- 맨 아래 **더보기** → 문의 창(FormModal)으로

업종 목록 (29개):
PT샵, 필라테스, 헬스장, 보험설계, 법률사무소, 자동차디테일링, 렌터카업체, 웨딩/스냅업체, 세무사사무소, 공인중개사, 카페, 미용실, 네일샵, 소상공인기업형홈페이지, 피부관리샵, 왁싱샵, 반영구샵, 애견미용, 반려동물용품점, 인테리어업체, 이사업체, 키즈카페, 스터디카페, 영어학원, 수학학원, 입시학원, 개인과외, 청소업체, 자동차디테일링

---

### 6. 예약 (`/reservation`)

세로형 폼:
- 달력 (날짜 선택)
- 시간대 선택
- 이름
- 연락처
- 제작종류 (랜딩페이지 제작 / 홈페이지 제작 / 랜딩&홈페이지 제작 / 기타(weflow 케어플랜))
- 원하시는 시간대 (직접 입력)
- 업종 입력
- 추가요청사항
- 개인정보 수집 및 상담 동의 (체크박스)

---

### 7. 랜딩페이지 (`/landing`)

- 헤드라인: **문의로 이어지는 홈페이지를 만듭니다**
- 서브: 기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.
- CTA 버튼 2개:
  - `무료 진단 후 견적받기` → 홈페이지 문의창 (`/#form` 또는 FormModal)
  - `실제 제작 사례 보기` → `/cases`
- 오른쪽 고정 문의창 (스크롤 따라감)
- 섹션: WEFLOW CARE PLAN 설명 (5가지 강점 카드)
- 홈페이지 가격 카드 8개 (pricing에서 동일하게)
- 제작진행과정 (services에서 동일하게)
- 무료진단 안내 섹션
- 후기창 (ReviewSlider 전체)
- 심플 Footer + BottomBar

---

### 8. 관리자 (`/admin`)

- 로그인 페이지 (간단한 비밀번호 인증)
- **예약 관리**: 예약 목록, 삭제/완료 버튼, DB 저장
- **문의 관리**: 문의 목록, 삭제/진행중/완료 버튼, DB 저장
- 로그아웃

> DB: localStorage 또는 JSON 파일 (간단 구현) / 또는 Vercel KV / Supabase

---

## 외부 링크 (실제 클릭 연결)

| 용도 | URL |
|------|-----|
| 카카오톡 채널 | http://pf.kakao.com/_xntCbX |
| 블로그 | https://m.blog.naver.com/weflowlab |
| 인스타그램 | https://www.instagram.com/weflowlab.kr |
| 페이스북 | https://www.facebook.com/profile.php?id=61590187124682 |

## 공용 이미지 (public/)
참고 레포에서 가져올 파일:
- `logo_icon.png`, `main_icon.png`
- `cases_PT샵.jpg` ~ `cases_헬스장.jpg` (29장)

```bash
# 이미지 일괄 다운로드 예시
gh api "repos/lmg90219679-eng/weflow-web/contents/public" --jq '.[].download_url' | xargs -I{} wget {} -P public/
```

---

## 구현 체크리스트

### Phase 1 — 프로젝트 셋업
- [ ] `create-next-app` 으로 프로젝트 생성
- [ ] `globals.css` 디자인 시스템 작성 (dot-grid, gradient-blue, marquee 애니메이션)
- [ ] 공용 이미지 assets 복사
- [ ] data/ 파일 작성 (commonText, homeText, pricingText 등)

### Phase 2 — 공통 컴포넌트
- [ ] Header (고정, 모바일 햄버거)
- [ ] Footer (4컬럼)
- [ ] BottomBar (모바일 고정 4버튼)
- [ ] FormModal (전역 이벤트 트리거)
- [ ] ReviewSlider (marquee 자동스크롤)
- [ ] StickyForm (우측 고정 문의폼)

### Phase 3 — 페이지 구현
- [ ] 홈 (6개 섹션)
- [ ] 서비스
- [ ] 제작플랜&가격안내
- [ ] 성공사례
- [ ] 예약
- [ ] 랜딩페이지

### Phase 4 — 관리자
- [ ] 로그인
- [ ] 예약 관리
- [ ] 문의 관리

### Phase 5 — 배포
- [ ] Vercel 연결
- [ ] 빌드 확인
- [ ] 모바일 반응형 최종 점검

---

## 핵심 구현 포인트

1. **FormModal 이벤트 버스**: `window.dispatchEvent(new Event('open-diagnosis-modal'))` — 어느 페이지/버튼에서든 모달을 열 수 있도록
2. **ReviewSlider**: CSS marquee 애니메이션으로 무한 가로 스크롤, 일시정지 hover 효과
3. **StickyForm**: `position: sticky; top: 80px` — 스크롤해도 따라오는 우측 폼
4. **가격 카드**: 취소선 원가(`line-through text-slate-500`) + 큰 할인가, MASTER/WEFLOW CARE는 왕관 + 강조색(cyan/gold)
5. **성공사례 이미지**: `cases_업종명.jpg` 네이밍, Next.js Image 컴포넌트
6. **반응형**: 모바일 우선, lg breakpoint에서 데스크탑 레이아웃 전환
