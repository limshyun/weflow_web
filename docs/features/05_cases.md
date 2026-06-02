# Feature 05 — 성공사례 (`/cases`)

## 파일 위치
```
app/cases/page.tsx
features/cases/sections/CasesGridSection.tsx
data/casesText.ts
```

---

## 페이지 구성
```
헤더 (SUCCESS 배지 + 제목)
CasesGridSection — 4열 카드 그리드
하단 더보기 버튼
```

---

## CasesGridSection

### 헤더
```
[S U C C E S S 배지]
성공 사례  ← bg-linear-to-br from-white via-blue-100 to-violet-300 그라디언트 텍스트
```

### 카드 그리드
- `grid grid-cols-4 gap-4 max-w-7xl mx-auto`
- 모바일: `grid-cols-2`

### 카드 구조 (CaseCard)
```
┌──────────────────────────────┐
│ [이미지 — aspect-video fill] │  ← category 배지 상단 좌측에 오버레이
├──────────────────────────────┤
│ 상호명            자세히보기 │  ← flex justify-between
└──────────────────────────────┘
```

- category 배지: `absolute top-2 left-2 text-xs text-blue-400 px-2 py-0.5 bg-blue-500/10 rounded-full border border-blue-500/20 backdrop-blur-sm`
- 이미지 없을 때: "이미지 준비 중" 텍스트 플레이스홀더
- 카드 hover: `.card-glow` + `hover:-translate-y-0.5`

### 클릭 동작
- "자세히보기" → `item.blogHref` (현재 `'#'`, 추후 실제 블로그 링크)
- 카드 전체 클릭은 없음 (자세히보기 링크만)

### 하단 더보기 버튼
```tsx
<Link href={CASES_PAGE.moreHref} className="gradient-blue px-8 py-3.5 rounded-xl font-bold text-white">
  {CASES_PAGE.moreButton}  // "더보기 →"
</Link>
```
- `moreHref`: `'/#form'` → 홈 문의 폼으로 이동

---

## 데이터 구조 (casesText.ts)

### CASES_PAGE
```ts
export const CASES_PAGE = {
  title: '성공 사례',
  moreButton: '더보기 →',
  moreHref: '/#form',
  cases: [
    { title: string, category: string, blogHref: string, img: string },
    // 28개 업종
  ],
};
```

### 카테고리 분류
| 카테고리 | 업종 |
|----------|------|
| 피트니스 | PT샵, 필라테스, 헬스장 |
| 금융 | 보험 설계 |
| 전문직 | 법률 사무소, 세무사 사무소 |
| 부동산 | 공인중개사 |
| 외식 | 카페 |
| 뷰티 | 미용실, 네일샵, 피부관리샵, 왁싱샵, 반영구샵 |
| 반려동물 | 애견미용, 반려동물 용품점 |
| 키즈 | 키즈카페 |
| 교육 | 스터디카페, 영어학원, 수학학원, 입시학원, 개인과외 |
| 생활서비스 | 청소업체, 인테리어 업체, 이사 업체 |
| 자동차 | 자동차 디테일링, 렌터카 업체 |
| 웨딩 | 웨딩/스냅 업체 |
| 기업 | 소상공인 기업형 홈페이지 |

---

## 구현 체크리스트
- [ ] CasesGridSection — 헤더, 4열 그리드, CaseCard with category badge
- [ ] 이미지 없을 때 플레이스홀더 처리
- [ ] 더보기 → `/#form` 이동
- [ ] casesText.ts에 category 필드 포함 확인
