// /sms 퀴즈 "경남 하루" 6장면. 장면1에서 region(창원/그 외 경남)을 가른다.
// weights = 페르소나 가중치, pain = 생존력 차감(0~18).
import type { QuizScene } from "@/lib/sms-quiz";

export const SCENES: QuizScene[] = [
  {
    id: 1,
    eyebrow: "아침 07:00",
    prompt: "눈을 떴다. 여긴 어디?",
    color: "yellow",
    options: [
      { label: "창원 도심 원룸", sub: "월세가 통장을 턴다", weights: { youth: 2, solo: 1 }, pain: 8, region: "changwon" },
      { label: "마산·진해 변두리", sub: "구도심은 비어가고", weights: { village: 1, night: 1 }, pain: 10, region: "changwon" },
      { label: "김해·양산·진주 같은 도시", sub: "여기도 하나둘 떠난다", weights: { youth: 1, commute: 1 }, pain: 9, region: "gyeongnam" },
      { label: "거제·통영 같은 조선업 도시", sub: "경기 타면 일자리가 출렁", weights: { labor: 1, youth: 1 }, pain: 11, region: "gyeongnam" },
      { label: "읍·면 농어촌", sub: "병원도 마트도 멀다", weights: { village: 2, medical: 1 }, pain: 12, region: "gyeongnam" },
    ],
  },
  {
    id: 2,
    eyebrow: "출근길 08:00",
    prompt: "회사까지, 오늘도",
    color: "yellow",
    options: [
      { label: "차로 꽉 막힌 1시간", sub: "기름값도 시간도 줄줄", weights: { commute: 3 }, pain: 12 },
      { label: "버스는 40분에 한 대", sub: "지각 안 하려면 차를 사야 한다", weights: { commute: 2, village: 1 }, pain: 14 },
      { label: "회사 통근버스", sub: "새벽 첫차로 산단까지", weights: { labor: 1, commute: 1 }, pain: 10 },
      { label: "오토바이로 출퇴근", sub: "비 와도 눈 와도 탄다", weights: { commute: 2 }, pain: 11 },
      { label: "걸어서 10분, 다행", sub: "이 동네 몇 안 되는 행운", weights: { commute: 1 }, pain: 3 },
    ],
  },
  {
    id: 3,
    eyebrow: "일터 14:00",
    prompt: "오늘 일은 어땠나",
    color: "green",
    options: [
      { label: "또 야근 확정", sub: "저녁 있는 삶은 남 얘기", weights: { labor: 3 }, pain: 12 },
      { label: "아파도 그냥 출근했다", sub: "하루 빠지면 눈치가 보여", weights: { labor: 2, medical: 1 }, pain: 14 },
      { label: "이러나저러나 최저임금", sub: "10년을 일해도 그대로", weights: { labor: 2, youth: 1 }, pain: 13 },
      { label: "일자리가 없어 알바만", sub: "이력서만 쌓여간다", weights: { youth: 2, labor: 1 }, pain: 13 },
    ],
  },
  {
    id: 4,
    eyebrow: "저녁 19:00",
    prompt: "몸이 영 안 좋다",
    color: "red",
    options: [
      { label: "응급실이 40분 거리", sub: "골든타임은 길 위에서", weights: { medical: 3 }, pain: 14 },
      { label: "문 연 약국조차 1시간 거리", sub: "밤엔 그마저도 닫는다", weights: { medical: 2, village: 1 }, pain: 13 },
      { label: "같이 병원 갈 사람이 없다", sub: "보호자란이 늘 비어 있다", weights: { solo: 3 }, pain: 13 },
      { label: "참고 그냥 버틴다", sub: "병원비가 더 무섭다", weights: { medical: 1, solo: 1 }, pain: 8 },
    ],
  },
  {
    id: 5,
    eyebrow: "밤 23:00",
    prompt: "집으로 가는 길",
    color: "purple",
    options: [
      { label: "가로등 꺼진 골목", sub: "그 길만 늘 깜깜하다", weights: { night: 3 }, pain: 12 },
      { label: "CCTV 하나 없는 길", sub: "찍히는 건 차 번호판뿐", weights: { night: 2, village: 1 }, pain: 11 },
      { label: "알록달록 조명만 깔린 '안심 귀갓길'", sub: "이런 걸 바란 게 아닌데", weights: { night: 2 }, pain: 11 },
      { label: "그냥 빨리 뛴다", sub: "집 앞까지 전력질주", weights: { night: 1 }, pain: 6 },
    ],
  },
  {
    id: 6,
    eyebrow: "주말",
    prompt: "동네를 둘러보며",
    color: "green",
    options: [
      { label: "빈집만 늘어간다", sub: "한 집 건너 한 집", weights: { village: 3 }, pain: 12 },
      { label: "다들 떠난다, 나도 곧", sub: "남은 사람이 더 외롭다", weights: { youth: 3 }, pain: 13 },
      { label: "우리 아이는 서울로 보내야지", sub: "여기선 미래가 안 보여", weights: { village: 2, youth: 1 }, pain: 13 },
      { label: "그래도 여기서 산다", sub: "그래도 내 고향이니까", weights: { village: 1 }, pain: 4 },
    ],
  },
];
