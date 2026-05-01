import { Clock, MapPin } from 'lucide-react';

interface ScheduleItem {
  isoDate: string; // YYYY-MM-DD (KST 자정 기준 비교용)
  date: string;    // 표시용 (예: '4.28')
  day: string;     // 요일 한글 ('화', '수' 등)
  title: string;
  time: string;
  location: string;
}

interface ScheduleV3Props {
  items: ScheduleItem[];
}

function getKstToday(): string {
  // en-CA locale → 'YYYY-MM-DD' 형식
  return new Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Seoul' }).format(new Date());
}

export function ScheduleV3({ items }: ScheduleV3Props) {
  const todayKst = getKstToday();

  return (
    <section id="schedule" className="relative bg-d-lightgrey pt-10 md:pt-14 pb-20 md:pb-28 overflow-hidden">
      {/* Decorative diagonal background graphic */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: 'url(/bg.png)' }}
      />
      <div className="relative mx-auto max-w-[45rem] px-6">
        <h2
          className="text-2xl md:text-[32px] text-center mb-10 md:mb-14 tracking-tight text-d-softblack"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 700 }}
        >
          후보 주요 일정
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {items.map((item, i) => {
            const status: 'today' | 'past' | 'future' =
              item.isoDate === todayKst
                ? 'today'
                : item.isoDate < todayKst
                ? 'past'
                : 'future';
            return <ScheduleCard key={i} item={item} status={status} />;
          })}
        </div>
      </div>
    </section>
  );
}

function ScheduleCard({
  item,
  status,
}: {
  item: ScheduleItem;
  status: 'today' | 'past' | 'future';
}) {
  const badgeSvg =
    status === 'today'
      ? '/Vector-9.svg'
      : status === 'past'
      ? '/Vector-grey.svg'
      : '/Vector-11.svg';
  const badgeText = status === 'today' ? 'text-d-blueblack' : 'text-white';

  return (
    <article
      className="flex items-center gap-5 bg-white rounded-2xl px-5 py-5 transition"
      style={{
        display: 'flex',
        boxShadow: '0 8px 24px 6px #FFFAC3',
      }}
    >
      {/* Date Badge - asymmetric shape (top-right corner squared) using SVG background */}
      <div
        className={`flex-shrink-0 w-16 h-16 md:w-[68px] md:h-[68px] flex flex-col items-center justify-center ${badgeText}`}
        style={{
          backgroundImage: `url(${badgeSvg})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span
          className="text-xl font-bold leading-none"
          style={{ fontFamily: 'var(--font-paperlogy)' }}
        >
          {item.date}
        </span>
        <span className="text-xs font-medium mt-1">{item.day}</span>
      </div>

      {/* Content */}
      <div className="flex-1 min-w-0">
        <h3 className="text-base md:text-lg font-bold mb-2 break-keep text-d-softblack">{item.title}</h3>
        <div
          className="flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-d-grey"
          style={{ display: 'flex' }}
        >
          {item.time && (
            <span className="inline-flex items-center gap-1">
              <Clock className="w-4 h-4" />
              {item.time}
            </span>
          )}
          {item.location && (
            <span className="inline-flex items-center gap-1">
              <MapPin className="w-4 h-4" />
              {item.location}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}
