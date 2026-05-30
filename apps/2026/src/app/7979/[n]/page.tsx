// /7979/[n] — 영상 한 편 단독 공유 페이지. n은 1~9, 숏츠 인덱스+1.
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { shorts } from "@/data/clips";
import { SingleClipView } from "./SingleClipView";

const SITE_URL = "https://2026.justice21.org";

// 9개만 사전 생성, 그 외 n은 404
export const dynamicParams = false;

export function generateStaticParams() {
  return shorts.map((_, i) => ({ n: String(i + 1) }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ n: string }>;
}): Promise<Metadata> {
  const { n } = await params;
  const idx = parseInt(n, 10) - 1;
  const short = shorts[idx];
  if (!short) return {};
  const thumb = `https://i.ytimg.com/vi/${short.id}/hqdefault.jpg`;
  return {
    metadataBase: new URL(SITE_URL),
    title: `${short.emoji} ${short.title} — 정의당 경남`,
    description: short.sub ?? "정의당 경남 영상 — 김경옥",
    openGraph: {
      title: `${short.emoji} ${short.title}`,
      description: short.sub ?? "정말 미치도록 일하고 싶습니다.",
      type: "video.other",
      locale: "ko_KR",
      images: [{ url: thumb, width: 480, height: 360, alt: short.title }],
    },
  };
}

export default async function ClipPage({
  params,
}: {
  params: Promise<{ n: string }>;
}) {
  const { n } = await params;
  const idx = parseInt(n, 10) - 1;
  if (Number.isNaN(idx) || idx < 0 || idx >= shorts.length) notFound();
  const short = shorts[idx];
  return <SingleClipView short={short} index={idx} total={shorts.length} />;
}
