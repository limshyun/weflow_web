# Feature 05 — 성공사례 (`/cases`)

## 파일 위치
```
app/cases/page.tsx
features/cases/sections/CasesGrid.tsx
data/casesText.ts
public/cases_*.jpg   # 29장
```

---

## 페이지 구성
```
1. 섹션 헤더
2. CasesGrid — 4열 카드 그리드
3. 더보기 버튼 (하단)
```

---

## CasesGrid

### 레이아웃
```
grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6
max-w-6xl mx-auto px-6
```

### 카드 구성 (위/아래 2분할)
```
┌──────────────────┐
│                  │  ← 상단 절반: 이미지 (object-cover, aspect-video)
│     이미지       │
├──────────────────┤
│  상호명          │  ← 하단: 업종명
│  [자세히보기]    │  ← 링크 버튼
└──────────────────┘
```

### 클릭 동작
- 카드 전체 클릭 → `https://m.blog.naver.com/weflowlab` (새 탭)
- `자세히보기` 링크도 동일

### 카드 스타일
```tsx
<a href="https://m.blog.naver.com/weflowlab" target="_blank" rel="noopener noreferrer">
  <div className="bg-slate-900/50 border border-white/[0.07] rounded-xl overflow-hidden
                  hover:border-cyan-500/30 hover:scale-[1.02] transition-all cursor-pointer">
    <div className="relative aspect-video">
      <Image src={`/cases_${item.slug}.jpg`} alt={item.name} fill className="object-cover" />
    </div>
    <div className="p-4">
      <p className="text-white font-medium">{item.name}</p>
      <p className="text-cyan-400 text-sm mt-1">자세히보기 →</p>
    </div>
  </div>
</a>
```

---

## 29개 업종 데이터

### TypeScript 타입
```ts
// data/casesText.ts
export interface CaseItem {
  slug: string;    // 이미지 파일명용: 'PT샵', '필라테스' 등
  name: string;    // 표시명
}

export const CASES: CaseItem[] = [...]
```

### 전체 목록
| slug | name |
|------|------|
| PT샵 | PT샵 |
| 필라테스 | 필라테스 |
| 헬스장 | 헬스장 |
| 보험설계 | 보험 설계 |
| 법률사무소 | 법률 사무소 |
| 자동차디테일링 | 자동차 디테일링 |
| 렌터카업체 | 렌터카 업체 |
| 웨딩스냅업체 | 웨딩/스냅 업체 |
| 세무사사무소 | 세무사 사무소 |
| 공인중개사 | 공인중개사 |
| 카페 | 카페 |
| 미용실 | 미용실 |
| 네일샵 | 네일샵 |
| 소상공인기업형홈페이지 | 소상공인 기업형 홈페이지 |
| 피부관리샵 | 피부관리샵 |
| 왁싱샵 | 왁싱샵 |
| 반영구샵 | 반영구샵 |
| 애견미용 | 애견미용 |
| 반려동물용품점 | 반려동물 용품점 |
| 인테리어업체 | 인테리어 업체 |
| 이사업체 | 이사 업체 |
| 키즈카페 | 키즈카페 |
| 스터디카페 | 스터디카페 |
| 영어학원 | 영어학원 |
| 수학학원 | 수학학원 |
| 입시학원 | 입시학원 |
| 개인과외 | 개인과외 |
| 청소업체 | 청소업체 |
| 렌터카업체2 | 렌터카 업체 |

> 이미지가 없을 경우: 회색 플레이스홀더 div로 대체

---

## 더보기 버튼 (하단)

### 동작
- 클릭 시 → `open-diagnosis-modal` 이벤트 발생 (문의 창 열기)

### 스타일
```tsx
<button
  onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
  className="gradient-blue text-white px-8 py-3 rounded-xl font-medium"
>
  더보기 — 내 업종 제작 문의하기
</button>
```

---

## 구현 체크리스트
- [ ] CasesGrid — 4열 카드 그리드
- [ ] 카드 클릭 → 블로그 이동
- [ ] 이미지 누락 시 플레이스홀더 처리
- [ ] 더보기 버튼 → FormModal 트리거
- [ ] data/casesText.ts — 29개 업종 데이터
- [ ] public/ 이미지 파일 배치 확인
