// 추천사 데이터 — 본문은 더미. 실데이터 확정 시 quote만 교체

export interface Endorsement {
  id: string;
  name: string;
  title: string;
  initial: string; // photo가 비었을 때 폴백용 이니셜 배지
  // 실제 사진이 들어오면 /images/endorsements/xxx.jpg 형태로 채우기.
  photo: string;
  quote: string;
}

export const endorsements: Endorsement[] = [
  {
    id: "yeo",
    name: "여영국",
    title: "전 국회의원 (제20대)",
    initial: "여",
    photo: "",
    quote:
      "함께 사는 가치를 아는 세 후보가 일할 수 있도록 정당투표는 투표용지 맨 아래 칸 정의당 부탁드립니다",
  },
];
