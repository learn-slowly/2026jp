import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://2026.justice21.org"),
  title: "정의당 경남 영상 모음 — 김경옥",
  description: "정의당이 떴다, 김경옥이 떴다. 경남 도비례 1번. 숏츠로 보는 정의당 경남의 약속.",
  openGraph: {
    title: "정의당 경남 영상 모음 — 김경옥",
    description: "정말 미치도록 일하고 싶습니다. 경남도의회 9번 · 창원시의회 7번.",
    type: "website",
    locale: "ko_KR",
    images: [{ url: "/7979/group.jpg", width: 1200, height: 800, alt: "정의당 경남 비례 후보들" }],
  },
};

export default function ClipsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
