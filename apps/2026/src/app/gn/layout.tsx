import type { Metadata } from "next";

export const metadata: Metadata = {
  metadataBase: new URL("https://2026.justice21.org"),
  title: "경남, 이대로 둘끼가? — 정의당 경남",
  description:
    "정의당 경남도비례·창원시비례 공약 전문. 인구유출 1위 경남, 이대로 둘끼가?",
  openGraph: {
    title: "경남, 이대로 둘끼가? — 정의당 경남",
    description: "공보물은 얇아도 공약은 두껍습니다.",
    type: "website",
    locale: "ko_KR",
    images: [
      {
        url: "/candidates/group-horizontal.jpg",
        width: 987,
        height: 658,
        alt: "정의당 경남 비례 후보들",
      },
    ],
  },
};

export default function GnLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return children;
}
