// /7979 페이지 콘텐츠 — 유튜브 숏츠 + 홍보물 이미지. 하드코딩 금지, 여기만 고치면 반영.
import type { JusticeColor } from "@/data/policies-province";

export interface Short {
  id: string; // 유튜브 숏츠 영상 id
  emoji: string;
  title: string; // 한 줄 훅
  sub?: string; // 보조 설명
  color: JusticeColor; // 패널 강조색
}

export interface Promo {
  src: string; // public/ 기준 경로
  alt: string;
  width: number;
  height: number;
  caption?: string;
}

// 메시지에 담긴 순서 그대로 — 김경옥 소개 → 정책 숏츠 → 김경옥의 삶
export const shorts: Short[] = [
  {
    id: "AjqM4OSy8NA",
    emoji: "🔥",
    title: "정의당이 떴다, 김경옥이 떴다",
    sub: "경남 도비례 1번 · 정말 미치도록 일하고 싶습니다",
    color: "yellow",
  },
  {
    id: "PrPt-HKujCY",
    emoji: "🚍",
    title: "대중교통 패스, 정의당이 원조인 거 앎?!",
    sub: "0원 패스, 우리가 먼저 말했습니다",
    color: "yellow",
  },
  {
    id: "URimy54vA_M",
    emoji: "🚌",
    title: "K-Pass는 지방 차별 정책!",
    sub: "탈 게 있어야 타지…",
    color: "yellow",
  },
  {
    id: "dd-xFe_zxEQ",
    emoji: "🙌",
    title: "제한 두는 치사한 복지는 안 하고 싶습니다",
    sub: "골라 주는 복지 말고, 모두의 권리로",
    color: "red",
  },
  {
    id: "aO1LQGYEhHs",
    emoji: "🤝",
    title: "돌봄 받을 권리만큼, 돌보는 사람의 권리도",
    sub: "그게 진짜 통합돌봄이지",
    color: "red",
  },
  {
    id: "iQxgM5olsMw",
    emoji: "🤔",
    title: "묘하게 닮은 양당의 돌봄공약",
    sub: "AI가 집에 와서 어르신 손을 잡아주나요?",
    color: "purple",
  },
  {
    id: "VsncqTfafUQ",
    emoji: "✋",
    title: "멈춰! 세금으로 관광은 이제 그만",
    sub: "정의당은 계획이 다 있구나?",
    color: "green",
  },
  {
    id: "a7-sRY3X2SE",
    emoji: "💰",
    title: "정의당이 말하는 경남도민 기본소득",
    sub: "feat. 지역순환경제",
    color: "yellow",
  },
  {
    id: "Jj6vf-jgBzs",
    emoji: "💛",
    title: "김경옥의 삶을 알고 싶다면?",
    sub: "농업과 생태, 먹거리의 달인",
    color: "green",
  },
];

export const promos: Promo[] = [
  {
    src: "/7979/group.jpg",
    alt: "정의당 경남 비례 후보들",
    width: 1200,
    height: 800,
    caption: "떠나지 않고, 함께.",
  },
  {
    src: "/7979/poster.jpg",
    alt: "정의당 경남 김경옥 홍보 이미지",
    width: 970,
    height: 1400,
    caption: "정말 미치도록 일하고 싶습니다",
  },
];
