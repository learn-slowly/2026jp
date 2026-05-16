# 정책 카드 섹션 디자인 (2026-05-16)

## 목표
2026 메인 페이지의 PDF 다운로드 아래에 정의당 정책공약집 콘텐츠를 카드 UI로 노출.
3개 영역(5대 사회계약 / 지역별 / 대상별)을 사용자가 직관적으로 탐색하게 함.

## 페이지 구조

### `/` (메인)
1. Hero
2. 후보자 찾기
3. PDF 다운로드
4. **5대 사회계약** (5 카드 + 모달)
5. **진입 배너 2개** (지역별 → `/regions`, 대상별 → `/targets`)
6. Footer

### `/regions`
- 페이지 헤더 + 메인 복귀 링크
- 16개 지역 카드 (4×4 그리드, 데스크탑)
- 카드 클릭 → 모달

### `/targets`
- 페이지 헤더 + 메인 복귀 링크
- 12개 대상 카드 (3×4 그리드, 데스크탑)
- 카드 클릭 → 모달

## 시각 스타일

### 5대 사회계약 카드 (메인 전용 — 컬러풀)
| 사회계약 | Tailwind 클래스 |
|---|---|
| 지역 공존 | `bg-justice-green` |
| 기술-노동 공존 | `bg-justice-purple` |
| 지구-인간 공존 | `bg-justice-green-dark` |
| 공존경제 | `bg-justice-yellow` (텍스트 다크) |
| 다양성 공존 | `bg-justice-pink` |

- 그리드: 모바일 1열 / 태블릿 2열 / 데스크탑 3-2 비대칭
- 콘텐츠: 번호(❶~❺) → 이름 → 슬로건 → 하위 축 3개 (• 불릿) → 우측 화살표
- 호버: `scale-[1.02] shadow-2xl`

### 진입 배너 (메인)
- 데스크탑 2열, 모바일 1열
- 흰 배경 + 좌측 색상 보더 (지역별=yellow, 대상별=green)
- 내용: 섹션명 + 짧은 설명 + 항목 개수 + 화살표

### 지역별/대상별 카드 (별도 페이지 — 화이트)
- 흰 배경 + 좌측 보더 4px (`border-l-4`)
  - 지역별: `border-justice-yellow`
  - 대상별: `border-justice-green`
- 그림자 + 호버 시 `shadow-xl -translate-y-0.5`

## PolicyModal (공통 컴포넌트)

- 풀스크린 오버레이: 검정 70% + `backdrop-blur`
- 카드: 중앙, `max-w-3xl max-h-[90vh] rounded-3xl`, 내부 스크롤
- 헤더: 색상 그라디언트 (props) + 우상단 X 닫기
- 본문: 큰 타이틀 + 슬로건 + 섹션별 정책 리스트
- 푸터: `PDF에서 자세히 보기 →` 링크 + 닫기 버튼
- 닫기 방법: ESC / 오버레이 클릭 / X 버튼
- 자체 구현 (shadcn/Radix 미사용)

## 데이터 구조

`apps/2026/src/data/contracts.ts`:
```ts
export type ContractColor = 'green' | 'purple' | 'green-dark' | 'yellow' | 'pink';

export type Contract = {
  id: string;
  number: number;         // 1~5
  title: string;
  slogan: string;
  color: ContractColor;
  subAxes: { title: string; policies: string[] }[];
};

export const contracts: Contract[] = [/* ... */];
```

`apps/2026/src/data/regions.ts`:
```ts
export type Region = {
  id: string;             // 'seoul'
  name: string;           // '서울'
  themes: { title: string; policies: string[] }[];
};

export const regions: Region[] = [/* 16개 */];
```

`apps/2026/src/data/targets.ts`:
```ts
export type Target = {
  id: string;             // 'children'
  name: string;           // '아동'
  slogan: string;
  policies: string[];
};

export const targets: Target[] = [/* 12개 */];
```

## 파일 추가/수정

**신규 컴포넌트** (`apps/2026/src/components/`):
- `ContractSection.tsx` / `ContractCard.tsx`
- `RegionSection.tsx` / `RegionCard.tsx`
- `TargetSection.tsx` / `TargetCard.tsx`
- `PolicyModal.tsx` (공통)
- `SectionEntryBanner.tsx`

**신규 라우트** (`apps/2026/src/app/`):
- `regions/page.tsx`
- `targets/page.tsx`

**신규 데이터** (`apps/2026/src/data/`): contracts.ts, regions.ts, targets.ts

**수정**: `app/page.tsx` (5대 섹션 + 배너 추가)

## 구현 단계

1. **1단계**: 5대 사회계약 카드 + PolicyModal + contracts 데이터 + page.tsx 통합
2. **2단계**: SectionEntryBanner + `/regions` 페이지 + 지역 카드 + regions 데이터
3. **3단계**: `/targets` 페이지 + 대상 카드 + targets 데이터
4. **4단계**: 디테일 폴리싱 (호버·반응형·접근성)

## 기술 결정

| 항목 | 결정 |
|---|---|
| 클릭 동작 | 모달 (전 영역 일관) |
| 콘텐츠 소스 | 코드 직접 (TypeScript 데이터 파일) |
| 카드 깊이 | 미리보기 (제목 + 슬로건 + 키워드 3-4) |
| 모달 구현 | 자체 구현 (shadcn/Radix 미사용) |
| 모달 접근성 | ESC 닫기, focus trap, role="dialog" |

## 데이터 출처

- PDF: `apps/260512_제9회_지방선거_정의당_정책공약집최종.pdf`
- MD (텍스트 추출본): `apps/제9회 지방선거 정의당 정책자료집_260513.md`
- 모든 카드 콘텐츠는 위 자료에서 발췌·요약하여 입력.
