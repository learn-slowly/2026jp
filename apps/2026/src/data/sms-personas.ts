// /sms 퀴즈 페르소나 7종. 매칭 공약은 PolicyRef로 기존 데이터 참조(하드코딩 금지).
// changwon = 창원시민(도+시 매칭), gyeongnam = 그 외 경남(도 공약 2개 폴백)
import type { Persona } from "@/lib/sms-quiz";

export const PERSONAS: Persona[] = [
  {
    id: "commute",
    emoji: "🧟",
    name: "출퇴근 좀비",
    verdict: "오늘도 차 안에서 1시간을 버렸다. 경남선 차가 곧 다리다.",
    color: "yellow",
    policies: {
      changwon: [{ scope: "province", id: 2 }, { scope: "city", id: 3 }],
      gyeongnam: [{ scope: "province", id: 2 }, { scope: "province", id: 4 }],
    },
  },
  {
    id: "medical",
    emoji: "🏥",
    name: "응급실 뺑뺑이 난민",
    verdict: "아프면 검색부터 한다 — '제일 가까운 응급실.' 그게 40분 거리.",
    color: "red",
    policies: {
      changwon: [{ scope: "province", id: 3 }, { scope: "city", id: 5 }],
      gyeongnam: [{ scope: "province", id: 3 }, { scope: "province", id: 6 }],
    },
  },
  {
    id: "labor",
    emoji: "🏭",
    name: "산단 만년 야근러",
    verdict: "아파도 출근했다. 하루 쉬면 그날 일당이 사라지니까.",
    color: "red",
    policies: {
      changwon: [{ scope: "province", id: 6 }, { scope: "city", id: 1 }],
      gyeongnam: [{ scope: "province", id: 6 }, { scope: "province", id: 5 }],
    },
  },
  {
    id: "youth",
    emoji: "🎒",
    name: "탈출각 청년",
    verdict: "전세는 무섭고 일자리는 없다. 다들 서울 갔는데, 나도 곧?",
    color: "yellow",
    policies: {
      changwon: [{ scope: "city", id: 2 }, { scope: "province", id: 5 }],
      gyeongnam: [{ scope: "province", id: 5 }, { scope: "province", id: 1 }],
    },
  },
  {
    id: "village",
    emoji: "🏚️",
    name: "빈집 동네 지킴이",
    verdict: "옆집도 앞집도 비었다. 우리 동네, 나라도 지켜야 하나.",
    color: "green",
    policies: {
      changwon: [{ scope: "province", id: 7 }, { scope: "city", id: 6 }],
      gyeongnam: [{ scope: "province", id: 7 }, { scope: "province", id: 1 }],
    },
  },
  {
    id: "night",
    emoji: "🌙",
    name: "밤길 불안러",
    verdict: "집까지 5분, 그 5분이 제일 길다. 가로등은 왜 거기서 꺼지나.",
    color: "purple",
    policies: {
      changwon: [{ scope: "city", id: 4 }, { scope: "province", id: 9 }],
      gyeongnam: [{ scope: "province", id: 9 }, { scope: "province", id: 2 }],
    },
  },
  {
    id: "solo",
    emoji: "🍚",
    name: "혼삶 1인가구",
    verdict: "아플 때 보호자란에 쓸 이름이 없다. 혼자 사는 게 죄는 아닌데.",
    color: "red",
    policies: {
      changwon: [{ scope: "city", id: 5 }, { scope: "province", id: 3 }],
      gyeongnam: [{ scope: "province", id: 3 }, { scope: "province", id: 6 }],
    },
  },
];
