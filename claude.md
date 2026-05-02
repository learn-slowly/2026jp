# AI Coding Assistant Guidelines

이 문서는 Claude를 포함한 AI 코딩 어시스턴트가 이 저장소(`justice-election-2026`)에서 작업할 때 참고해야 할 전역 규칙과 컨텍스트, 그리고 Figma MCP를 통한 디자인 통합 가이드를 담고 있습니다. AI는 작업 전 항상 이 문서를 숙지해야 합니다.

---

## 1. 커뮤니케이션 및 깃(Git) 규칙 (CRITICAL)

가장 중요하게 지켜야 할 언어 설정입니다.

- **사용자와의 모든 대화:** 반드시 **한글(Korean)**을 사용하여 명확하고 친절하게 답변합니다.
- **Git 커밋 메시지:** GitHub 커밋 메시지는 반드시 **한글**로 작성합니다.
  - 예: `feat: 새로운 후보자 검색 컴포넌트 추가`, `fix: 스타일 렌더링 버그 수정`
- **커밋 컨벤션** (`.cursorrules` 기준):
  - `feat`: 새 기능 / `fix`: 버그 수정 / `docs`: 문서 / `style`: 포맷팅 / `refactor`: 리팩토링 / `test`: 테스트 / `chore`: 빌드/패키지 관리

## 2. 프로젝트 개요

- **프로젝트:** 2026 지방선거 디지털 캠페인 플랫폼 (정의당)
- **아키텍처:** Turborepo 기반 Next.js 모노레포

```
justice-election-2026/
├─ apps/
│  ├─ 2026/   # 메인 캠페인 페이지 (Google Sheets 연동, 후보자 검색)
│  ├─ card/   # 후보자 카드 발급/공유 (QR, 이미지 업로드)
│  └─ page/   # 후보자 상세/지지 페이지 (폼 처리)
└─ packages/
   ├─ api-client/   # Google Sheets 클라이언트 (@justice/api-client)
   ├─ types/        # 공유 TypeScript 타입 (@justice/types)
   └─ ui/           # 공유 UI 컴포넌트 (@justice/ui)
```

## 3. 기술 스택

| 영역 | 스택 |
|---|---|
| 프레임워크 | Next.js **16.1.4** (App Router) |
| React | **19.2.3** (`babel-plugin-react-compiler` 사용) |
| 언어 | TypeScript 5 (`strict: true`) |
| 스타일링 | **Tailwind CSS v4** + `@tailwindcss/postcss` |
| 폰트 | **Pretendard Variable** (CDN) + Geist Sans/Mono (`next/font/google`) |
| 아이콘 | **Lucide React** + 커스텀 PNG (소셜) |
| 빌드 | Turbo (`turbo run build/dev/lint`) |
| 패키지 매니저 | npm 10.9.2 (workspaces) |
| 배포 | Vercel |

## 4. 일반 작업 가이드라인

- 여러 앱(`apps`)·패키지(`packages`)에 걸친 수정은 모노레포 의존성을 면밀히 분석한 뒤 진행합니다.
- UI는 사용자 경험을 중심으로 **프리미엄·모던**한 톤을 유지합니다.
- 워크스페이스 패키지는 `@justice/*` 스코프로 import 합니다 (예: `import { sheetsClient } from '@justice/api-client'`).
- 경로 별칭: 모든 앱 `tsconfig.json`은 `"@/*": ["./src/*"]` 사용.

---

# 🎨 Figma MCP 디자인 시스템 통합 규칙

Figma MCP(`figma.com/design/...`, `figma.com/make/...`, `figma.com/board/...`) URL이 주어지면 아래 규칙에 따라 본 코드베이스의 토큰·컴포넌트·구조에 **반드시 정합되도록** 코드를 생성/적용합니다. Figma `get_design_context` 결과는 **참고용 React+Tailwind 스니펫**일 뿐이며, 항상 본 프로젝트의 토큰/관행으로 변환해야 합니다.

## 5. 디자인 토큰 (Design Tokens)

### 5.1 위치 및 형식

토큰은 각 앱의 `globals.css`에 **Tailwind v4 `@theme inline` 블록**으로 정의됩니다. 별도의 `tailwind.config.js`는 사용하지 않습니다(Tailwind v4 CSS-first 설정).

- `apps/2026/src/app/globals.css`
- `apps/card/src/app/globals.css`
- `apps/page/src/app/globals.css`

세 앱 모두 동일한 토큰 세트를 공유합니다. **신규 토큰은 세 앱 globals.css 모두에 동기화**해야 합니다.

### 5.2 컬러 팔레트 (정의당 브랜드)

```css
@theme inline {
  /* 시스템 */
  --color-background: var(--background);   /* light: #ffffff / dark: #0a0a0a */
  --color-foreground: var(--foreground);   /* light: #171717 / dark: #ededed */

  /* 브랜드 (베이스) */
  --color-justice-green:  #00a366;   /* 메인 액센트 */
  --color-justice-pink:   #e8306d;   /* 후보자 번호/하이라이트 */
  --color-justice-purple: #623e91;   /* 보조 */
  --color-justice-yellow: #ffed00;   /* CTA/후원 */

  /* 다크 변형 (hover/active) */
  --color-justice-green-dark:  #008759;
  --color-justice-pink-dark:   #D02070;
  --color-justice-purple-dark: #5A3D88;
  --color-justice-yellow-dark: #E6CF00;

  /* 라이트 변형 (배경/하이라이트) */
  --color-justice-green-light:  #E6F7F1;
  --color-justice-pink-light:   #FDE7F0;
  --color-justice-purple-light: #F0EDF7;
  --color-justice-yellow-light: #FFFACC;

  /* 그레이스케일 */
  --color-d-black:     #121212;
  --color-d-lightgrey: #fafafa;
  --color-d-darkgrey:  #999999;
}
```

### 5.3 Figma → 코드 매핑 규칙

Figma에서 받아온 색상은 **항상 토큰 클래스로 치환**합니다. 새로운 hex가 등장하면 가장 가까운 기존 토큰을 사용하거나, 정당 브랜드 확장이 필요한 경우에만 신규 토큰을 globals.css에 추가합니다.

| Figma raw hex | 사용해야 할 Tailwind 클래스 |
|---|---|
| `#00a366` | `bg-justice-green` / `text-justice-green` |
| `#e8306d` | `bg-justice-pink` / `text-justice-pink` |
| `#623e91` | `bg-justice-purple` |
| `#ffed00` | `bg-justice-yellow` (CTA) |
| `#121212` | `bg-d-black` / `text-d-black` |
| `#999999` | `text-d-darkgrey` |
| `#fafafa` | `bg-d-lightgrey` |

❌ 금지: `bg-[#00a366]` 같은 임의 hex arbitrary value
✅ 권장: `bg-justice-green`

### 5.4 스페이싱 / 라운드 / 섀도우

별도 커스텀 스케일은 없으며 **Tailwind 기본값**을 사용합니다.

- 카드 컨테이너 표준: `rounded-3xl` + `shadow-2xl` + `p-8`
- 폼 입력/버튼: `rounded` ~ `rounded-xl`
- Glass 컨테이너: `bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20`

## 6. 타이포그래피 / 폰트

### 6.1 폰트 로딩

각 앱의 `src/app/layout.tsx`에서 동일한 패턴으로 로드합니다.

```tsx
// 1) Pretendard Variable: CDN 링크
<head>
  <link rel="stylesheet" as="style" crossOrigin="anonymous"
    href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css" />
</head>

// 2) Geist: next/font/google (CSS 변수 주입)
const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
```

### 6.2 글로벌 타이포 규칙

```css
body {
  font-family: "Pretendard Variable", Pretendard, -apple-system, BlinkMacSystemFont,
               system-ui, "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic",
               sans-serif;
  letter-spacing: -0.03em;  /* 한글 가독성 */
}
```

### 6.3 위계 (Hierarchy)

| 용도 | 클래스 |
|---|---|
| 후보자 이름/Hero | `text-4xl font-black` |
| 섹션 타이틀 | `text-2xl font-bold` |
| 서브섹션 | `text-xl font-bold` |
| 본문 | `text-md leading-relaxed break-keep` |
| 보조/캡션 | `text-sm text-d-darkgrey` |

한국어 본문에는 항상 `break-keep`을 추가하여 줄바꿈 시 단어가 분리되지 않도록 합니다.

## 7. 컴포넌트 라이브러리

### 7.1 `packages/ui` 현황

현재 매우 미니멀합니다. shadcn/Radix 기반이 **아닙니다**.

```tsx
// packages/ui/src/index.tsx
export * from './components/button';

// packages/ui/src/components/button.tsx
export const Button = ({ children }: { children: React.ReactNode }) => (
  <button className="bg-justice-green px-4 py-2 rounded text-white">
    {children}
  </button>
);
```

- import 경로: `import { Button } from '@justice/ui';`
- 컴파일 산출물 없음 (`main: "./src/index.tsx"` 직접 export)

### 7.2 컴포넌트 추가 결정 트리 (Figma 통합 시)

1. Figma에 매핑된 Code Connect 컴포넌트가 있는가? → 그대로 사용.
2. `packages/ui`에 동일/유사 컴포넌트가 있는가? → 그것을 사용.
3. **앱 1개에서만 쓰는가** → 해당 `apps/<app>/src/components/` 에 추가.
4. **2개 이상 앱에서 공유하는가** → `packages/ui/src/components/`에 추가하고 `index.tsx`에서 export, 각 앱에서 `@justice/ui`로 import.

### 7.3 앱 레벨 컴포넌트 위치

- `apps/2026/src/components/`: `CandidateFinder`, `HeroSection`, `PolicyShowcase`
- `apps/card/src/components/`: `CandidateCard`, `ImageUpload`, `DynamicList`
- `apps/page/src/components/`: `CandidateCard`, `Navigation`, `ScheduleSection`, `Footer`, `ImageUpload` 등

폼이 필요한 컴포넌트는 `react-hook-form` + `zod`를 사용합니다. 클라이언트 인터랙션(훅·이벤트 핸들러)이 있는 컴포넌트는 파일 최상단에 `'use client'` 지시어를 둡니다.

### 7.4 클래스 합성

`clsx` + `tailwind-merge`가 의존성에 있지만 **공식 `cn()` 헬퍼는 아직 없습니다**. 조건부 클래스 합성이 필요하면 다음 중 하나로 통일하세요:

```tsx
import clsx from 'clsx';
import { twMerge } from 'tailwind-merge';

export const cn = (...inputs: Parameters<typeof clsx>) => twMerge(clsx(inputs));
```

여러 앱에서 재사용된다면 `packages/ui/src/lib/cn.ts`로 추출.

## 8. 시그니처 UI 패턴 (후보자 카드)

Figma에서 후보자/캠페인 관련 UI를 받았을 때 다음 패턴을 우선 적용합니다.

```tsx
// 카드 컨테이너 (그라디언트)
<div className="rounded-3xl shadow-2xl p-8
                bg-gradient-to-br from-justice-green via-justice-purple to-justice-pink
                hover:scale-[1.01] transition">
  {/* 프로필 사진 */}
  <img className="w-40 h-40 rounded-full object-cover" />

  {/* 정책 박스 */}
  <div className="bg-yellow-100 rounded-xl p-5 border border-yellow-50">…</div>

  {/* 연락처 (Glass) */}
  <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">…</div>

  {/* 후원 CTA */}
  <button className="bg-justice-yellow text-gray-900 rounded-2xl p-8
                     hover:opacity-80 active:scale-[0.98] transition">
    후원하기
  </button>
</div>
```

인터랙션 표준: `hover:opacity-80 transition`, `active:scale-[0.98]`.

## 9. 아이콘

### 9.1 일반 UI 아이콘 → **Lucide React**

```tsx
import { MapPin, Calendar, Clock, Mail, Phone, ArrowRight } from 'lucide-react';
<MapPin className="w-4 h-4 text-justice-yellow fill-justice-yellow" />
```

이름 규칙: PascalCase. 크기는 Tailwind `w-*/h-*` 로 제어.

### 9.2 소셜/연락처 → **커스텀 PNG**

`apps/card/public/icons/` 에 위치. kebab-case 파일명. Lucide 대신 정사각 PNG로 사용 (브랜드 컬러 보존 목적).

```tsx
<img src="/icons/x.png" alt="X" className="w-full h-full object-contain" />
```

가용 아이콘: `address`, `email`, `phone`, `kakao`, `telegram`, `x`, `twitter`, `facebook`, `instagram`, `youtube`, `blog`, `homepage`.

## 10. 에셋 / 이미지

- 정적 에셋: 각 앱 `public/` 폴더 (예: `apps/2026/public/`).
- 공유 로고 PNG: 저장소 루트 `logo-01.png` ~ `logo-05.png`.
- 동적 후보자 이미지: **Cloudinary** (`apps/2026`) 또는 **Vercel Blob** (`apps/card`) 업로드.
- 현재 `<img>` 태그를 직접 사용 중입니다. **신규 코드부터는 가능하면 `next/image`** 로 전환하되, 기존 컴포넌트를 일괄 변경하지는 않습니다.
- 파일 명명: kebab-case (예: `logo-03.png`).

## 11. 반응형 / 다크 모드

- 모바일 퍼스트. Tailwind 기본 브레이크포인트 사용 (`sm`, `md:` 768px, `lg:` 1024px).
- 다크 모드는 `prefers-color-scheme` 미디어 쿼리 기반으로 `--background`/`--foreground` 만 토글합니다. `dark:` variant는 현재 거의 쓰이지 않습니다 — 디자인 토큰이 자동으로 따라갑니다.
- 모바일 전용 레이아웃은 `globals.css` 내 `@media (max-width: 768px)` 로 처리된 사례가 있으므로 우선 그 패턴을 따릅니다.

## 12. 프로젝트 구조 요약

```
apps/<app>/
├─ src/
│  ├─ app/
│  │  ├─ layout.tsx       # Pretendard CDN + Geist + globals.css
│  │  ├─ globals.css      # @import "tailwindcss" + @theme inline
│  │  └─ page.tsx
│  ├─ components/         # 앱 전용 컴포넌트
│  └─ ...
├─ public/                # 정적 에셋, /icons/ (card 앱)
├─ postcss.config.mjs     # @tailwindcss/postcss
└─ tsconfig.json          # paths: { "@/*": ["./src/*"] }
```

데이터 페칭: Server Component에서 `async` + `Promise.all` (Google Sheets API). 캐싱 무시가 필요하면 `export const revalidate = 0;`.

## 13. Figma MCP 워크플로우 체크리스트

Figma URL을 받았을 때 따라야 할 순서:

1. **URL 파싱** — `figma.com/design/:fileKey/...?node-id=:nodeId` 형식에서 `nodeId`의 `-`를 `:`로 변환.
2. **`get_design_context`** 호출 — `fileKey`, `nodeId` 전달.
3. **반환된 코드는 참고만** — 본 CLAUDE.md의 토큰/컴포넌트로 변환:
   - hex → `bg-justice-*` / `bg-d-*` 토큰
   - 절대 위치(`absolute top-… left-…`) → Flex/Grid 레이아웃
   - 임의 폰트 패밀리 → 본 프로젝트의 Pretendard/Geist 스택
   - 인라인 그림자/라운드 → 시그니처 카드 패턴(§8)
4. **컴포넌트 배치 결정** — §7.2 결정 트리에 따라 `apps/<app>/src/components/` 또는 `packages/ui/`.
5. **클라이언트/서버 구분** — 폼·훅·이벤트 핸들러가 있으면 `'use client'`.
6. **아이콘** — UI 아이콘은 Lucide, 소셜은 `apps/card/public/icons/` PNG.
7. **확인** — Figma 스크린샷(`get_screenshot`)과 시각적으로 비교.

신규 토큰/색상이 정말 필요하면 세 앱의 `globals.css` `@theme inline` 블록을 **모두 동시에** 업데이트하고, 가능하면 동일 변경을 함께 커밋합니다.
