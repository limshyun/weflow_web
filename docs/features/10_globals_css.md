# Feature 10 — globals.css & 디자인 시스템

## 파일 위치
```
app/globals.css
```

---

## 전체 globals.css

```css
@import "tailwindcss";

/* ─── 베이스 ─── */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  background-color: #0a0f1e;
  background-image: radial-gradient(rgba(148, 163, 184, 0.07) 1px, transparent 1px);
  background-size: 24px 24px;
  color: #f1f5f9;
  font-family: var(--font-geist-sans), sans-serif;
  -webkit-font-smoothing: antialiased;
}

/* ─── 브랜드 그라디언트 버튼 ─── */
.gradient-blue {
  background: linear-gradient(135deg, #22d3ee 0%, #2563eb 100%);
  box-shadow: 0 0 24px rgba(34, 211, 238, 0.35), 0 4px 15px rgba(37, 99, 235, 0.25);
  color: #ffffff;
  border: none;
  cursor: pointer;
  transition: opacity 0.2s ease, transform 0.2s ease;
}

.gradient-blue:hover {
  opacity: 0.9;
  transform: translateY(-1px);
}

/* ─── 섹션 공통 ─── */
.section-padding {
  padding: 5rem 1.5rem;
}

@media (min-width: 1024px) {
  .section-padding {
    padding: 6rem 2rem;
  }
}

/* ─── 후기 marquee 애니메이션 ─── */
@keyframes marquee {
  0%   { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}

.animate-marquee {
  animation: marquee 35s linear infinite;
  will-change: transform;
}

.animate-marquee:hover {
  animation-play-state: paused;
}

/* ─── fadeInUp 애니메이션 ─── */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.animate-fade-in-up {
  opacity: 0;
  animation: fadeInUp 0.6s ease-out forwards;
}

/* ─── 커스텀 스크롤바 ─── */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: #0a0f1e;
}

::-webkit-scrollbar-thumb {
  background: #334155;
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: #475569;
}

/* ─── 텍스트 그라디언트 유틸리티 ─── */
.text-gradient {
  background: linear-gradient(135deg, #22d3ee, #2563eb);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}

/* ─── 카드 기본 스타일 ─── */
.card-base {
  background: rgba(15, 23, 42, 0.5);
  border: 1px solid rgba(255, 255, 255, 0.07);
  border-radius: 0.75rem;
  transition: border-color 0.2s ease, transform 0.2s ease;
}

.card-base:hover {
  border-color: rgba(34, 211, 238, 0.3);
}
```

---

## Tailwind v4 커스텀 테마 설정

> **주의**: Tailwind v4는 `tailwind.config.ts` 방식을 사용하지 않음.
> 커스텀 토큰은 `globals.css` 안의 `@theme` 블록에서 직접 선언.

```css
/* globals.css에 추가 */
@theme {
  --color-navy-950: #0a0f1e;

  --animate-marquee: marquee 35s linear infinite;
  --animate-fade-in-up: fadeInUp 0.6s ease-out forwards;
}
```

이렇게 하면 Tailwind 클래스 `bg-navy-950`, `animate-marquee`, `animate-fade-in-up`을 그대로 사용할 수 있다.
단, `@keyframes`는 `@theme` 밖에서 별도로 선언해야 함 (위의 globals.css 참조).

---

## 구현 체크리스트
- [ ] globals.css — dot-grid 배경, gradient-blue, marquee, fadeInUp
- [ ] tailwind.config.ts — animation 키프레임 등록
- [ ] 커스텀 스크롤바
- [ ] text-gradient 유틸리티
