// 후보 데이터 — bio는 더미. 실데이터 확정 시 교체

export interface Candidate {
  id: string;
  name: string;
  position: string;
  nickname: string;
  // public/ 경로 기준 URL. 빈 문자열이면 이니셜 플레이스홀더로 폴백.
  photo: string;
  // 원본 사진 프레이밍이 비대칭일 때 카드 안에서 보정. ex) "scale(1.08) translateX(-4px)"
  photoTransform?: string;
  // 출생/학력/경력 줄 단위 리스트. 있으면 bio 대신 우선 렌더.
  careers?: string[];
  // 한 문단 자기소개 (careers 없을 때 폴백)
  bio?: string;
}

export const candidates: Candidate[] = [
  {
    id: "kim",
    name: "김경옥",
    position: "경남도비례 1번",
    nickname: "농업과 생태, 먹거리의 달인",
    photo: "/candidates/kim.png",
    photoTransform: "translateX(-8px)",
    careers: [
      "한일여자실업고등학교 졸업",
      "현) 노회찬재단 경남모임 공동운영위원장",
      "전) 가톨릭농민회마산교구연합회 사무국장",
    ],
  },
  {
    id: "kwon",
    name: "권현우",
    position: "경남도비례 2번",
    nickname: "아파트 공동체 전문가",
    photo: "/candidates/kwon.png",
    careers: [
      "한국방송통신대학교 교육학과/행정학과 졸업",
      "현) 정의당 경남도당 민생상담소장",
      "전) 경상남도 아파트 공동체 유공 도지사 표창(2024)",
    ],
  },
  {
    id: "lee",
    name: "이소정",
    position: "창원시비례 1번",
    nickname: "공존과 다양성의 스피커",
    photo: "/candidates/lee.png",
    careers: [
      "1996, 사천시(삼천포) 출생",
      "경상국립대학교 정치외교학과 졸업",
      "현) 정의당 경남도당 사무처장",
      "전) 창원세코비정규직 노동자 사망관련 시민대책위 집행위원장",
      "전) 정의당창원시무상교통추진본부(3만원프리패스) 집행위원장",
    ],
  },
];
