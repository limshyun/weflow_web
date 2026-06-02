# Feature 07 — 랜딩페이지 (`/landing`)

## 파일 위치
```
app/landing/page.tsx
features/landing/sections/LandingHeroSection.tsx
features/landing/sections/CarePlanSection.tsx
features/landing/sections/WhyWeflowSection.tsx
features/landing/sections/LandingDiagnosisSection.tsx
data/landingText.ts
```

---

## 페이지 레이아웃

### 전체 구조
```
좌측 메인 콘텐츠 (flex-1)    |   우측 StickyForm (w-80, sticky top-20)
─────────────────────────────┼──────────────────────────
Hero                         │  무료진단 후 견적받기
Care Plan 카드               │  [이름]
Why WEFLOW                   │  [연락처]
가격 카드 (pricing에서 동일)  │  [제작종류]
제작진행과정 (services 동일)  │  [업종]
무료진단 안내                │  [추가요청사항]
후기 슬라이더                │  [개인정보동의]
Footer (심플)                │  [신청하기]
```

모바일: StickyForm 숨김, 대신 BottomBar의 무료진단 버튼 사용

---

## 섹션 1 — LandingHeroSection

### 콘텐츠
```
[큰 헤드라인]
문의로 이어지는 홈페이지를 만듭니다

[서브텍스트]
기획부터 제작, 광고 연동, 운영 관리까지 WEFLOW가 함께합니다.

[버튼 2개]
[무료 진단 후 견적받기]    [실제 제작 사례 보기]
```

### 버튼 동작
| 버튼 | 동작 |
|------|------|
| 무료 진단 후 견적받기 | `open-diagnosis-modal` 이벤트 또는 `/#form` 스크롤 |
| 실제 제작 사례 보기 | `/cases` 이동 |

---

## 섹션 2 — WEFLOW CARE PLAN (5가지 강점)

### 섹션 제목
```
WEFLOW CARE PLAN
제작부터 운영 · 광고 · 관리까지 한 번에
```

### 5개 강점 카드
| 제목 | 내용 |
|------|------|
| 빠른 제작 진행 | 랜딩페이지 3~4일 / 홈페이지 약 1주일 / 빠르게 제작하고 빠르게 운영 시작합니다. |
| 합리적인 비용 | 불필요한 비용 없이 필요한 기능만 구성하여 가성비 + 실속 + 퀄리티를 함께 제공합니다. |
| 24시간 상담 가능 | 정해진 시간만 기다리지 마세요. 문의가 생길 때 언제든 빠른 상담 및 피드백 가능합니다. |
| 제작 후 운영 관리 | 홈페이지 만들고 끝이 아닙니다. 검색 등록, 수정, 유지보수, 운영 관리까지 함께합니다. |
| 광고 연동 지원 | 홈페이지 + 랜딩페이지 + 광고 한 번에 연결하여 문의가 들어오는 구조를 만듭니다. 인스타, 스레드, 블로그, 카카오톡, 당근 플레이스 등 |

---

## 섹션 3 — Why WEFLOW (텍스트 강조 섹션)

### 콘텐츠
```
사람들은 검색하고 비교한 뒤 문의합니다.
홈페이지만 필요한 시대는 지났습니다.

어디에 맡길지, 광고는 어떻게 해야 할지 고민되셨나요?

WEFLOW는
랜딩페이지 + 홈페이지 + 광고 + 사후관리까지
저렴한 비용과 높은 퀄리티로 한 번에 해결합니다.
```

### 4가지 강점 포인트 (아이콘 + 텍스트)
- 문의 증가 구조 설계
- 업종별 고객 흐름 분석
- 상담 버튼 위치 최적화
- 모바일 문의 동선 구성

---

## 섹션 4 — 가격 카드 (pricing 페이지에서 재사용)
- `/pricing` 페이지의 전체 카드 8개를 그대로 사용
- PlanSection + CarePlanSection + AdPlanSection 컴포넌트 임포트

---

## 섹션 5 — 제작진행과정 (services 페이지에서 재사용)
- `/services` 페이지의 ProcessSection 컴포넌트 임포트

---

## 섹션 6 — LandingDiagnosisSection

### 콘텐츠
```
[큰 제목] 무료진단에서 이런 걸 확인해드립니다

[체크리스트]
✓ 문의 구조 진단
✓ 디자인 점검
✓ 검색 노출 분석
✓ 문의 개선 제안

[버튼] 문의 늘리는 무료 진단 →
```

버튼 클릭 시: `open-diagnosis-modal` 이벤트

---

## 섹션 7 — 후기 슬라이더
- ReviewSlider 컴포넌트 재사용 (전체 25개)

---

## 랜딩 전용 Footer (심플)
```
[logo_icon.png] WEFLOW
대표: 신서준 | 사업자번호: 884-07-03480 | 이메일: contact@weflowlab.kr
개인정보처리방침 | 이용약관
```
- 공통 Footer 대신 심플 버전 사용 (4컬럼 없음)

---

## 구현 체크리스트
- [ ] LandingHeroSection — 헤드라인 + 버튼 2개
- [ ] CarePlanSection — 5가지 강점 카드
- [ ] WhyWeflowSection — 텍스트 강조 + 4포인트
- [ ] 가격 카드 컴포넌트 재사용
- [ ] 제작진행과정 컴포넌트 재사용
- [ ] LandingDiagnosisSection
- [ ] ReviewSlider 재사용
- [ ] StickyForm 우측 고정 (데스크탑)
- [ ] 심플 Footer
