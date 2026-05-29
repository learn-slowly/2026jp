"use client";

import { shareToKakao, type SharePayload } from "@/lib/kakao";

const poster = { fontFamily: "var(--font-display-poster)" };

export function ShareBar({ payload }: { payload: SharePayload }) {
  async function onShare() {
    // 카카오 공유는 카카오톡 앱(kakaolink 스킴)을 띄우므로 모바일에서만 시도.
    // 데스크톱은 스킴 핸들러가 없어 실패하므로 OS 공유/링크 복사로 폴백한다.
    const isMobile =
      typeof navigator !== "undefined" &&
      /Android|iPhone|iPad|iPod/i.test(navigator.userAgent);
    if (isMobile && shareToKakao(payload)) return;
    if (typeof navigator !== "undefined" && navigator.share) {
      try {
        await navigator.share({
          title: payload.title,
          text: payload.description,
          url: payload.linkUrl,
        });
        return;
      } catch {
        // 사용자가 공유 취소 — 무시
      }
    }
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(payload.linkUrl);
        alert("링크를 복사했어요. 친구에게 붙여넣어 보내주세요!");
        return;
      } catch {
        // 복사 실패 — 아래 링크 노출로 폴백
      }
    }
    alert(payload.linkUrl);
  }

  return (
    <button
      onClick={onShare}
      style={poster}
      className="w-full rounded-2xl bg-justice-yellow text-ink py-4 text-[18px] min-h-[44px] active:scale-[0.98] transition-transform"
    >
      내 결과 공유하기
    </button>
  );
}
