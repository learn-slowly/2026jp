import { sheetsClient } from '@justice/api-client';
import { HeroV3 } from '@/components/v3/HeroV3';
import { DeclarationV3 } from '@/components/v3/DeclarationV3';
import { ScheduleV3 } from '@/components/v3/ScheduleV3';
import { PoliciesV3 } from '@/components/v3/PoliciesV3';
import { FooterV3 } from '@/components/v3/FooterV3';

export const dynamic = 'force-dynamic';

// TODO: 운영 적용 시 실제 후보자 슬러그로 교체 (또는 [slug] 라우트로 분리)
const DEMO_SLUG = 'kyg';

export const metadata = {
  title: '권영국 서울시장 후보 | 정의당 2026 (v3)',
  description: '제9회 전국동시지방선거 정의당 서울시장 후보 권영국 — v3 디자인',
};

const candidate = {
  name: '권영국',
  position: '서울시장 후보',
  election: '제9회 전국동시지방선거',
  visionTitle1: '이제 같이 삽시다.',
  visionTitle2: '같이 갑시다.',
  introTitle: '정의당 대표 | 민주노동당 21대 대선 후보',
  introSubtitle: '풍산금속 해고노동자',
  careers: [
    { type: '현', text: '쿠팡노동자의 건강한 노동과 인권을 위한 대책위원회 공동대표' },
    { type: '전', text: '민주사회를 위한 변호사모임 노동위원장' },
    { type: '전', text: '민주노총 초대 법률원장' },
    { type: '전', text: 'SPC파리바게뜨 노조파괴 대응 시민대책위 상임대표' },
  ],
  heroImage: '/images/v3-hero-candidate.png',
  declarationImage: '/images/v3-declaration.png',
};

// Demo fallback (시트 데이터 없을 때) — currentDate 2026-05-01 기준
const fallbackSchedule = [
  { isoDate: '2026-05-01', date: '5.1', day: '금', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
  { isoDate: '2026-05-02', date: '5.2', day: '토', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
  { isoDate: '2026-05-03', date: '5.3', day: '일', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
  { isoDate: '2026-05-05', date: '5.5', day: '화', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
  { isoDate: '2026-05-06', date: '5.6', day: '수', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
  { isoDate: '2026-05-07', date: '5.7', day: '목', title: '기후정의동맹 간담회', time: '10:00', location: '정의당 중앙당사' },
];

const KOREAN_DAYS = ['일', '월', '화', '수', '목', '금', '토'] as const;

function toScheduleItem(s: { date: string; time: string; title: string; location: string }) {
  // 시트의 date는 'YYYY-MM-DD' 또는 비슷한 형식이라 가정. 잘못된 값이면 fallback 텍스트.
  const d = new Date(s.date);
  const valid = !Number.isNaN(d.getTime());
  const isoDate = valid ? new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(d) : s.date;
  const display = valid ? `${d.getMonth() + 1}.${d.getDate()}` : s.date;
  const day = valid ? KOREAN_DAYS[d.getDay()] : '';
  return { isoDate, date: display, day, title: s.title, time: s.time, location: s.location };
}

const policies = [
  {
    number: 1,
    title: '대중교통 단계적 전면 무상화',
    description:
      '고유가 시대, 기름값을 낮추는 것이 아니라 기름을 사용하지 않아도 되는 도시를 만들겠습니다. 대중교통 전면 무상화는 이동권을 보장하고, 탄소배출을 절감하며, 공공교통 중심으로 교통체제를 전환하는 대안입니다. 어린이·청소년·노인·장애인부터 시작하여 무상교통을 단계적으로 실현하겠습니다.',
  },
  {
    number: 2,
    title: '세입자 중심 정책으로 전환',
    description:
      '공공임대주택을 매년 5만호씩 늘리겠습니다. 주택 매수 시 공공이 우선권을 갖는 공공선매제를 도입하여 매입임대를 전폭적으로 확대하겠습니다. 전월세 상한제를 강화하고, 한시적 동결도 추진하겠습니다. 노후주택을 에너지효율 녹색 주택으로 수리하도록 지원하고, 임대주택의 경우 녹색 최저 주거기준 보장을 의무화하겠습니다.',
  },
  {
    number: 3,
    title: '돌봄·육아·교육 공공화',
    description:
      '아이를 키우는 일이 더 이상 개인의 책임이 아닌 사회의 책임이 되도록 만들겠습니다. 돌봄과 육아, 교육을 공공이 책임지는 도시를 만들겠습니다.',
  },
  {
    number: 4,
    title: '기후위기 대응 그린뉴딜',
    description:
      '서울의 에너지 자립률을 높이고, 도시 전반의 탄소배출을 감축합니다. 녹색일자리를 창출하고 기후정의에 부합하는 도시 전환을 추진합니다.',
  },
  {
    number: 5,
    title: '쓰레기 제로 순환경제',
    description:
      '서울시 폐기물을 획기적으로 줄이고 자원순환을 활성화합니다. 일회용품 사용을 단계적으로 줄이고 재활용 인프라를 확충합니다.',
  },
  {
    number: 6,
    title: '노동존중 일자리 정책',
    description:
      '비정규직과 플랫폼 노동자, 프리랜서 등 모든 일하는 사람의 권리를 보장합니다. 산재 사망을 줄이고 일터 민주주의를 실현합니다.',
  },
  {
    number: 7,
    title: '여성·소수자 차별 없는 서울',
    description:
      '성별, 장애, 국적, 성적 지향에 따른 차별을 금지하는 차별금지 조례를 강화하고 인권도시 서울을 만듭니다.',
  },
  {
    number: 8,
    title: '공공의료 확충',
    description:
      '공공병원과 보건소를 확충하여 누구나 차별 없이 양질의 의료서비스를 받을 수 있도록 합니다. 의료 사각지대를 해소합니다.',
  },
];

export default async function V3DemoPage() {
  const [mayorExtra, mayorSchedules] = await Promise.all([
    sheetsClient.getMayorExtra(DEMO_SLUG).catch(() => undefined),
    sheetsClient.getMayorSchedules(DEMO_SLUG).catch(() => []),
  ]);

  const scheduleItems =
    mayorSchedules && mayorSchedules.length > 0
      ? mayorSchedules.map(toScheduleItem)
      : fallbackSchedule;

  return (
    <main className="bg-white text-d-blueblack">
      <HeroV3 candidate={candidate} />
      <DeclarationV3
        candidateName={candidate.name}
        position={candidate.position}
        videoId="2JmF57FCgsA"
        declarationText={mayorExtra?.declarationText}
      />
      <ScheduleV3 items={scheduleItems} />
      <PoliciesV3
        slogans={['노동소득만으로도 살 수 있는 서울!', '지역과 공생하는 서울!']}
        ctaLines={[
          '서울의 생활비는 절반으로 낮추고,',
          '일자리는 지킵니다.',
          '서울의 에너지-쓰레기 문제에',
          '책임있게 나서겠습니다.',
        ]}
        items={policies}
      />
      <FooterV3 candidate={candidate} />
    </main>
  );
}
