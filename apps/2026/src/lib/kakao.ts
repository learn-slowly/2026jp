// 카카오 JS SDK 공유 래퍼. SDK는 page.tsx에서 next/script로 로드한다.
interface KakaoShare {
  sendDefault: (settings: Record<string, unknown>) => void;
}
interface KakaoSDK {
  isInitialized: () => boolean;
  init: (key: string) => void;
  Share: KakaoShare;
}
declare global {
  interface Window {
    Kakao?: KakaoSDK;
  }
}

const KEY = process.env.NEXT_PUBLIC_KAKAO_JS_KEY;

export interface SharePayload {
  title: string;
  description: string;
  imageUrl: string; // 절대 https URL
  linkUrl: string;
}

function ensureInit(): boolean {
  if (typeof window === "undefined" || !window.Kakao || !KEY) return false;
  if (!window.Kakao.isInitialized()) window.Kakao.init(KEY);
  return window.Kakao.isInitialized();
}

/** 카카오 공유 시도. 성공 시 true, SDK 미로드/미설정 시 false. */
export function shareToKakao(p: SharePayload): boolean {
  if (!ensureInit() || !window.Kakao) return false;
  const origin = window.location.origin;
  window.Kakao.Share.sendDefault({
    objectType: "feed",
    content: {
      title: p.title,
      description: p.description,
      imageUrl: p.imageUrl,
      link: { mobileWebUrl: p.linkUrl, webUrl: p.linkUrl },
    },
    buttons: [
      { title: "나도 해보기", link: { mobileWebUrl: p.linkUrl, webUrl: p.linkUrl } },
      { title: "공약 전체 보기", link: { mobileWebUrl: `${origin}/gn`, webUrl: `${origin}/gn` } },
    ],
  });
  return true;
}
