import { redirect } from 'next/navigation';

interface PageProps {
  params: Promise<{ slug: string }>;
}

// 기존 /v3/<slug> 링크 호환을 위해 메인 라우트 /<slug>로 리다이렉트
export default async function V3SlugRedirect({ params }: PageProps) {
  const { slug } = await params;
  redirect(`/${slug}`);
}
