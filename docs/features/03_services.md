# Feature 03 — 서비스 페이지 (`/services`)

## 파일 위치
```
app/services/page.tsx
features/services/sections/ServiceProcessSection.tsx
features/services/sections/ManagementSystemSection.tsx
data/servicesText.ts
```

---

## 페이지 구성
```
1. ServiceProcessSection  — 6단계 제작 프로세스 (2행 3열 카드 그리드)
2. ManagementSystemSection — 광고 운영·사후관리 (3그룹 컬럼 카드)
```

---

## 섹션 1 — ServiceProcessSection

### 레이아웃
- `PROCESS` 배지 + 제목 + 설명
- **Row 1**: 01~03 카드 + 화살표 (ChevronRight/ChevronDown)
- 연결 표시 ("다음 단계로 진행")
- **Row 2**: 04~06 카드 + 화살표
- `grid grid-cols-1 md:grid-cols-[1fr_auto_1fr_auto_1fr]`

### 카드 구조 (StepCard)
```
┌─────────────────────────────┐
│  [숫자 ghost — 우상단 배경] │
│  [아이콘 박스]              │
│  01  ← 번호                 │
│  상담·진단 ← 제목           │
│  업종 특성과... ← 설명      │
└─────────────────────────────┘
```
- 유령 번호: `absolute right-4 top-2 text-8xl text-white/[0.035]`
- 아이콘 박스: `w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30`

### 아이콘 매핑 (lucide-react)
| 단계 | 아이콘 |
|------|--------|
| 01 상담·진단 | MessageSquare |
| 02 기획·설계 | LayoutTemplate |
| 03 디자인 | Palette |
| 04 개발·테스트 | Code2 |
| 05 SEO 상단등록 | Rocket |
| 06 광고운영·사후관리 | TrendingUp |

### TypeScript 타입
```ts
// data/servicesText.ts
export interface ServiceStep {
  number: string;
  title: string;
  desc: string;
}

export const SERVICE_PROCESS = {
  sectionTitle: '제작 진행 과정',
  steps: ServiceStep[]
}
```

---

## 섹션 2 — ManagementSystemSection

### 레이아웃
- `DETAIL` 배지 + 제목 + 설명
- **3열 그룹 카드** (`grid grid-cols-1 lg:grid-cols-3 gap-5`)
- 각 카드 상단: 컬러 테마 라인 (orange/blue/green)

### 3개 그룹
| 그룹 | 아이콘 | 제목 | 배지 | 테마 |
|------|--------|------|------|------|
| 콘텐츠 마케팅 | 📢 | 콘텐츠 마케팅 | 트래픽 확보 | orange |
| 로컬 & 키워드 타겟팅 | 🎯 | 로컬 & 키워드 타겟팅 | 매출 전환 | blue |
| 포털 SEO 최적화 | 🚀 | 포털 SEO 최적화 | 상단 점유 | green |

### 그룹별 아이템
**콘텐츠 마케팅 (orange)**
- 📝 블로그 업로드 — 포스팅 발행을 통한 브랜드 지수 관리
- 📸 인스타 업로드 — 트렌디한 피드/릴스 운영 및 유저 소통
- 🧵 스레드 업로드 — 실시간 텍스트 기반 바이럴 확산

**로컬 & 키워드 타겟팅 (blue)**
- 🔑 네이버 키워드 — 잠재 고객을 타겟팅한 효율적 키워드 세팅
- 🥕 당근플레이스 — 지역 기반 타겟 노출 및 동네 주민 인증 광고

**포털 SEO 최적화 (green)**
- 🔍 네이버 서치어드바이저 — 네이버 검색 로봇 최적화 및 상단 노출
- 📊 구글 콘솔 — 구글 검색 엔진 최적화 및 색인 생성
- 🗺️ 사이트맵 등록 — 전 채널 검색 누락 방지 및 상단 노출 고정

### TypeScript 타입
```ts
export const MANAGEMENT_SYSTEM = {
  sectionTitle: string,
  sub: string,
  groups: [{
    icon: string,       // emoji
    title: string,
    badge: string,
    theme: 'orange' | 'blue' | 'green',
    items: [{ icon: string, title: string, desc: string }]
  }]
}
```

---

## 구현 체크리스트
- [ ] ServiceProcessSection — 2행 3열 카드 그리드 + 화살표
- [ ] ManagementSystemSection — 3그룹 컬럼 + 테마 컬러 상단 라인
- [ ] data/servicesText.ts — SERVICE_PROCESS, MANAGEMENT_SYSTEM 구조로 재작성
- [ ] app/services/page.tsx — `pt-16` 래퍼 + 두 섹션 조합
