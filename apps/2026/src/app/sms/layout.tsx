import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://2026.justice21.org"),
  title: "당신의 경남 하루, 버틸 수 있을까? — 정의당 경남",
  description:
    "30초 페르소나 테스트. 당신이 어떤 경남 사람인지, 그리고 무엇이 당신을 살리는지.",
  openGraph: {
    title: "당신의 경남 하루, 버틸 수 있을까? — 정의당 경남",
    description: "30초 페르소나 테스트. 경남도의회 9번 · 창원시의회 7번.",
    type: "website",
    locale: "ko_KR",
    images: [
      { url: "/og-sms-survey.jpg", width: 1000, height: 1000, alt: "경남 하루 즉석조사 — 정의당 경남" },
    ],
  },
};

export default function SmsLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
