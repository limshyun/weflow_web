# WEFLOW 디자인 시스템

> 구현 코드(globals.css, Tailwind 설정): [features/10_globals_css.md](features/10_globals_css.md)

---

## 디자인 철학
- **다크 테마** — 딥 네이비 베이스, 프리미엄·신뢰감 전달
- **전환 중심** — 모든 섹션이 "문의"로 이어지는 동선 설계
- **dot-grid 배경** — 미세한 격자 패턴으로 깊이감 추가
- **Glow CTA** — 주요 버튼은 cyan→blue 그라디언트 + 발광 그림자

---

## 색상 토큰

| 역할 | 값 | Tailwind |
|------|-----|----------|
| 페이지 배경 | `#0a0f1e` | `bg-[#0a0f1e]` |
| 본문 텍스트 | `#f1f5f9` | `text-slate-100` |
| 보조 텍스트 | `#94a3b8` | `text-slate-400` |
| 비활성 텍스트 | `#64748b` | `text-slate-500` |
| 카드 배경 | `rgba(15,23,42,0.5)` | `bg-slate-900/50` |
| 카드 테두리 | `rgba(255,255,255,0.07)` | `border-white/[0.07]` |
| 강조 테두리 (hover) | `rgba(34,211,238,0.3)` | `border-cyan-500/30` |
| 구분선 | `rgba(255,255,255,0.1)` | `border-white/10` |

### 브랜드 그라디언트
```
from: #22d3ee (cyan-400)
to:   #2563eb (blue-600)

CSS: linear-gradient(135deg, #22d3ee 0%, #2563eb 100%)
Tailwind: from-cyan-400 to-blue-600
```

### MASTER / WEFLOW CARE 강조 색상
```
테두리:  border-cyan-400/60
배지 배경: gradient-blue (동일)
왕관 이모지: 👑
```

---

## 배경 패턴 (dot-grid)
```css
background-color: #0a0f1e;
background-image: radial-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px);
background-size: 24px 24px;
```
body에 전역 적용. 개별 섹션 오버레이는 `bg-gradient-to-b from-transparent to-[#0a0f1e]/50` 등으로 추가.

---

## 타이포그래피

| 용도 | Tailwind 클래스 |
|------|----------------|
| 페이지 헤드라인 | `text-4xl lg:text-6xl font-bold` |
| 섹션 제목 | `text-2xl lg:text-3xl font-bold` |
| 카드 제목 | `text-lg font-semibold` |
| 본문 | `text-base text-slate-300` |
| 보조/캡션 | `text-sm text-slate-400` |
| 배지/태그 | `text-xs text-slate-300` |

- 폰트: Geist Sans (Next.js 기본 제공, `var(--font-geist-sans)`)
- 헤드라인 줄바꿈 방지: `word-break: keep-all` (한국어 단어 기준 줄바꿈)

### 텍스트 그라디언트 (로고·강조 텍스트)
```css
/* .text-gradient 유틸리티 클래스 */
background: linear-gradient(135deg, #22d3ee, #2563eb);
-webkit-background-clip: text;
-webkit-text-fill-color: transparent;
```

---

## 간격 & 레이아웃

### 섹션 패딩
```css
/* .section-padding */
padding: 5rem 1.5rem;           /* 모바일 */
padding: 6rem 2rem; (lg+)       /* 데스크탑 */
```

### 최대 너비
| 용도 | 값 |
|------|-----|
| 전체 콘텐츠 | `max-w-7xl mx-auto` |
| 텍스트 중심 섹션 | `max-w-4xl mx-auto` |
| 가격 카드 1열 | `max-w-3xl mx-auto` |
| StickyForm 너비 | `w-80` (320px) |

### z-index 계층
| 레이어 | z-index |
|--------|---------|
| Header | `z-50` |
| FormModal 오버레이 | `z-50` |
| BottomBar | `z-40` |
| StickyForm | `z-10` |

---

## 컴포넌트 패턴

### 버튼

#### Primary (gradient-blue)
```css
background: linear-gradient(135deg, #22d3ee, #2563eb);
box-shadow: 0 0 24px rgba(34,211,238,0.35), 0 4px 15px rgba(37,99,235,0.25);
color: white; border: none;
transition: opacity 0.2s, transform 0.2s;
```
```
hover: opacity 0.9, translateY(-1px)
```

#### Secondary (Outline)
```
border border-white/20 text-white bg-transparent
hover: bg-white/5
```

#### 버튼 공통 크기
```
px-6 py-3 rounded-xl font-medium text-sm
```

---

### 카드 (card-base)
```css
background: rgba(15, 23, 42, 0.5);
border: 1px solid rgba(255, 255, 255, 0.07);
border-radius: 0.75rem;        /* rounded-xl */
transition: border-color 0.2s, transform 0.2s;
```
```
hover: border-color rgba(34,211,238,0.3)
```
Tailwind: `bg-slate-900/50 border border-white/[0.07] rounded-xl`

#### 강조 카드 (MASTER / WEFLOW CARE)
```
border-cyan-400/60  +  헤더 gradient-blue  +  👑 뱃지
```

---

### 배지 / 태그 (Chip)
```
inline-flex items-center
px-3 py-1 rounded-full
border border-white/20
text-xs text-slate-300 bg-white/5
```
> 가로 auto (가로로 늘리지 않음, `inline-flex` 사용)

---

### 섹션 헤더 패턴
```tsx
<div className="flex items-center justify-between mb-8">
  <h2 className="text-2xl lg:text-3xl font-bold">섹션 제목</h2>
  <button>더보기 →</button>   {/* 선택적 */}
</div>
```

---

### 폼 인풋
```
bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3
text-white placeholder:text-slate-500
focus:outline-none focus:border-cyan-500/50
```

---

### 가격 카드 — 파격세일 UI
```tsx
<p className="text-slate-500 line-through text-sm">498,000원</p>
<p className="text-3xl font-bold text-white">249,000원</p>
```
원가(취소선, 회색 작게) → 할인가(크고 흰색) 순서로 배치

---

## 반응형 브레이크포인트

| 이름 | 기준 | 주요 변화 |
|------|------|----------|
| 기본 (모바일) | `< 768px` | 1열, BottomBar 표시 |
| `md` | `≥ 768px` | 2열 그리드 |
| `lg` | `≥ 1024px` | Header 풀 네비 표시, BottomBar 숨김, StickyForm 표시 |

- **모바일 우선** 설계 (기본 스타일 → lg: 확장)
- StickyForm: `hidden lg:block`
- BottomBar: `lg:hidden`
- 헤더 햄버거: `lg:hidden`

---

## 애니메이션

### marquee (후기 자동 스크롤)
```css
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }  /* 배열 2배 복제 기준 */
}
.animate-marquee {
  animation: marquee 35s linear infinite;
  will-change: transform;
}
.animate-marquee:hover { animation-play-state: paused; }
```

### fadeInUp (섹션 등장)
```css
@keyframes fadeInUp {
  from { opacity: 0; transform: translateY(20px); }
  to   { opacity: 1; transform: translateY(0); }
}
.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}
```

---

## 아이콘
라이브러리: `lucide-react`

| 용도 | 아이콘 |
|------|--------|
| 햄버거 메뉴 | `Menu` |
| 메뉴 닫기 | `X` |
| 전화 | `Phone` |
| 카카오 | `MessageCircle` |
| 블로그 | `BookOpen` |
| 별점 | `Star` |
| 체크 | `Check` |
| 화살표 | `ChevronRight`, `ChevronLeft` |
| 왕관 | `Crown` (또는 👑 이모지) |
| 닫기(모달) | `X` |
