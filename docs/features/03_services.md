# Feature 03 — 서비스 페이지 (`/services`)

## 파일 위치
```
app/services/page.tsx
features/services/sections/ProcessSection.tsx
features/services/sections/AdManagementSection.tsx
data/servicesText.ts
```

---

## 섹션 구성 순서
```
1. ProcessSection       — 제작진행과정 (6단계)
2. AdManagementSection  — 광고 운영·사후관리 시스템 (카드형)
```

---

## 섹션 1 — 제작진행과정

### 섹션 제목
```
제작진행과정
```

### 6단계 스텝
각 스텝: 번호(01~06) + 단계명 + 설명

| 번호 | 단계명 | 설명 |
|------|--------|------|
| 01 | 상담·진단 | 업종 및 제작 방향 확인 |
| 02 | 기획·설계 | 문의 구조 및 전략 설계 |
| 03 | 디자인 | 브랜드 맞춤 화면 구성 |
| 04 | 개발·테스트 | 기능구현 최적화 검수 및 수정 진행 |
| 05 | SEO 상단등록 | 네이버·구글·사이트맵 등록 |
| 06 | 광고운영·사후관리 | 인스타·블로그·네이버 키워드 광고 운영관리 |

### 레이아웃 옵션
- 세로 타임라인형 (모바일/데스크탑 공통)
- 각 스텝: 좌측 번호 원 + 세로 연결선 + 우측 텍스트
- 번호 원: `gradient-blue` 배경

### TypeScript 타입
→ `types/index.ts`의 `ProcessStep` 참조 (09_data_types.md)

---

## 섹션 2 — 광고 운영·사후관리 시스템

### 섹션 제목
```
광고 운영 · 사후관리 시스템
```

### 8개 카드 (그리드)
`grid grid-cols-2 md:grid-cols-4 gap-4`

| 카드명 |
|--------|
| 블로그 업로드 |
| 인스타 업로드 |
| 스레드 업로드 |
| 네이버 키워드 |
| 당근플레이스 |
| 네이버 서치어드바이저 |
| 구글 콘솔 |
| 사이트맵 등록 |

### 카드 스타일
```
bg-slate-900/50 border border-white/[0.07] rounded-xl p-6
중앙 정렬, 아이콘(lucide-react) + 텍스트
hover: border-cyan-500/30
```

### TypeScript 타입
→ `types/index.ts`의 `AdService` 참조 (09_data_types.md)

---

## 구현 체크리스트
- [ ] ProcessSection — 6단계 타임라인
- [ ] AdManagementSection — 8개 카드 그리드
- [ ] data/servicesText.ts — 데이터 분리
- [ ] app/services/page.tsx — 조합
