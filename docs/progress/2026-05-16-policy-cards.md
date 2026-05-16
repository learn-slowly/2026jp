# 2026-05-16 정책 카드 섹션 진행 상황

> **Owner**: 2026 메인 페이지 정책 섹션 확장 작업.
> **Status**: 1단계 완료 + 폰트/디자인 폴리싱 완료. 2~3단계 미착수.

## ✅ 오늘 완료한 것

1. **PDF 다운로드 카드** — 기존 "공약 준비 중" 플레이스홀더를 정책공약집 PDF 다운로드 CTA로 교체
2. **디자인 spec 문서화** — `docs/superpowers/specs/2026-05-16-policy-cards-design.md`
3. **5대 사회계약 카드 + 모달** — 데이터 파일, ContractCard, ContractSection, PolicyModal 구현
4. **카드 디자인 리뉴얼** — 솔리드 컬러 → 화이트 배경 + 좌측 컬러 보더 + 컬러 링 번호 스타일
5. **폰트 시스템 확장** — Google Fonts(Noto Serif KR, Gowun Batang, Black Han Sans, Jua, JetBrains Mono) 추가, `@theme`에 `--font-display-*` 변수 정의
6. **명조체 적용** — 강조 영역(섹션 타이틀·카드 타이틀·슬로건·모달 헤더)에 Noto Serif KR, 그 외는 Pretendard. PolicyShowcase 섹션 헤더도 동일 톤으로 맞춤

## 🔜 남은 작업

### 2단계 — 메인 진입 배너 + 지역별 페이지
- [ ] `SectionEntryBanner` 컴포넌트 (메인 페이지용, 2개 배너 — 지역별/대상별)
- [ ] `regions.ts` 데이터 (16개 광역 자치단체 + 각 핵심 테마)
- [ ] `/regions` 라우트 (`apps/2026/src/app/regions/page.tsx`)
- [ ] `RegionCard` + `RegionSection` 컴포넌트 (흰 배경 + 노란 좌측 보더)
- [ ] 카드 클릭 → `PolicyModal` 재사용
- [ ] 메인 페이지 `app/page.tsx`에 배너 추가

### 3단계 — 대상별 페이지
- [ ] `targets.ts` 데이터 (12개 대상 + 슬로건 + 대표 공약)
- [ ] `/targets` 라우트
- [ ] `TargetCard` + `TargetSection` 컴포넌트 (흰 배경 + 그린 좌측 보더)

### 4단계 — 디테일 폴리싱
- [ ] 호버/포커스 인터랙션 다듬기
- [ ] 모바일/태블릿 반응형 검토
- [ ] 접근성 (focus trap, aria 라벨 점검)
- [ ] 모달 내 키보드 트래핑 (현재는 close 버튼만 focus, 트랩 없음)

### 향후 고려
- `PolicyShowcase`의 `policies` prop은 현재 사용 안 함. Google Sheets 연동을 재개할지 결정 필요 (`getCentralPolicies()` 호출은 page.tsx에 남아있음)
- `apps/` 루트의 PDF/MD 원본 파일 정리 (작업 끝나면 .gitignore 또는 별도 위치로 이동)

## 🎯 주요 결정 사항 (디자인 spec 요약)

| 항목 | 결정 |
|---|---|
| 클릭 동작 | 모달 (5대 사회계약, 지역별/대상별 모두) |
| 콘텐츠 소스 | 코드 직접 (TypeScript 데이터 파일) |
| 카드 깊이 | 카드 표면엔 미리보기, 모달에 세부 |
| 5대 그리드 | 3-2 비대칭 (위 3 + 아래 2) |
| 카드 스타일 | 흰 배경 + 좌측 6px 컬러 보더 + 컬러 링 번호 |
| 강조 폰트 | Noto Serif KR (명조체) |
| 본문/CTA | Pretendard |

## 📂 관련 파일

| 종류 | 경로 |
|---|---|
| 디자인 spec | `docs/superpowers/specs/2026-05-16-policy-cards-design.md` |
| 5대 데이터 | `apps/2026/src/data/contracts.ts` |
| 5대 컴포넌트 | `apps/2026/src/components/ContractCard.tsx`, `ContractSection.tsx` |
| 공통 모달 | `apps/2026/src/components/PolicyModal.tsx` |
| 메인 페이지 | `apps/2026/src/app/page.tsx` |
| 글로벌 스타일·폰트 | `apps/2026/src/app/globals.css` |
| PDF 자산 | `apps/2026/public/justice-2026-policy.pdf` |

## 📚 콘텐츠 출처

- `apps/260512_제9회_지방선거_정의당_정책공약집최종.pdf` (220쪽)
- `apps/제9회 지방선거 정의당 정책자료집_260513.md` (PDF 텍스트 추출본)

## 📝 오늘 origin/main에 푸시된 커밋

```
995622c style: PolicyShowcase 섹션 헤더도 명조체로 통일
4f8648a style: 디스플레이 폰트 추가 + 강조 영역에 명조체(Noto Serif KR) 적용
34c8cc7 refactor: 5대 사회계약 카드 디자인 리뉴얼 (화이트 + 액센트)
eda28c1 feat: 5대 사회계약 카드 섹션 + 정책 상세 모달 추가
79a4379 docs: 정책 카드 섹션 디자인 spec 추가
32d97d1 feat: 정책 섹션에 정책공약집 PDF 다운로드 카드 추가
```
