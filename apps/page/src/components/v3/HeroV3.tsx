'use client';

interface HeroV3Props {
  candidate: {
    name: string;
    position: string;
    election: string;
    visionTitle1: string;
    visionTitle2: string;
    introTitle: string;
    introSubtitle: string;
    careers: { type: string; text: string }[];
    heroImage: string;
  };
}

const NAV_ITEMS = [
  { label: '후보소개', href: '#about' },
  { label: '출마선언', href: '#declaration' },
  { label: '정책공약', href: '#policies' },
  { label: '활동', href: '#activities' },
  { label: '일정', href: '#schedule' },
];

export function HeroV3({ candidate }: HeroV3Props) {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-justice-yellow-bright via-justice-yellow-bright to-white"
    >
      {/* Top Navigation */}
      <nav className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-5 flex items-end justify-between gap-4">
          <div className="flex items-end gap-5" style={{ display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Group-8.svg"
              alt="정의당"
              className="h-10 md:h-12 w-auto block"
            />
            <div className="hidden sm:flex items-baseline gap-2 text-d-blueblack">
              <span className="text-sm md:text-base font-bold">{candidate.position}</span>
              <span
                className="text-lg md:text-xl"
                style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
              >
                {candidate.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-2" style={{ display: 'flex' }}>
            <ul
              className="hidden md:flex items-center gap-1 text-[15px] font-medium text-d-blueblack"
              style={{ display: 'flex' }}
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-full px-3 py-2 hover:bg-white focus:bg-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#donation"
              className="inline-flex items-center justify-center rounded-full text-d-blueblack px-3 py-2 text-[15px] font-medium hover:bg-white focus:bg-white transition"
            >
              후원하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-6 md:pt-8 pb-12 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-5 z-10">
          {/* Election badge */}
          <div
            className="inline-flex items-center rounded-full bg-white px-4 py-1.5 shadow-sm"
            style={{ display: 'inline-flex' }}
          >
            <span className="text-xs font-bold text-d-blueblack">
              {candidate.election}
            </span>
          </div>

          {/* Big Headline (Paperlogy ExtraBold) */}
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] leading-[1.1] tracking-tight break-keep text-d-blueblack"
            style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
          >
            <span className="block">{candidate.visionTitle1}</span>
            <span className="block">{candidate.visionTitle2}</span>
          </h1>

          {/* Intro position */}
          <div className="space-y-1 text-xs md:text-sm font-bold leading-snug text-d-blueblack">
            <p>{candidate.introTitle}</p>
            <p>{candidate.introSubtitle}</p>
          </div>

          {/* Career list */}
          <ul className="space-y-1 pt-2">
            {candidate.careers.map((c, i) => (
              <li key={i} className="flex items-center gap-2" style={{ display: 'flex' }}>
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-3.5 h-3.5 rounded bg-d-blueblack text-justice-yellow-bright text-[8px] font-extrabold"
                  style={{ fontFamily: 'var(--font-paperlogy)' }}
                >
                  {c.type}
                </span>
                <span className="text-xs md:text-sm font-semibold leading-relaxed break-keep text-d-blueblack">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image */}
        <div className="relative h-[360px] md:h-[460px] lg:h-[520px] overflow-hidden self-end">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={candidate.heroImage}
            alt={candidate.name}
            className="w-full h-full object-cover object-top drop-shadow-xl scale-110 origin-top"
            onError={(e) => {
              const img = e.target as HTMLImageElement;
              img.style.display = 'none';
              const parent = img.parentElement;
              if (parent && !parent.querySelector('.fallback')) {
                const div = document.createElement('div');
                div.className =
                  'fallback w-full h-full flex items-center justify-center rounded-2xl bg-d-blueblack/5 border-2 border-dashed border-d-blueblack/20 text-d-blueblack/40 text-sm';
                div.textContent = '후보 사진 영역 (/images/v3-hero-candidate.png)';
                parent.appendChild(div);
              }
            }}
          />
        </div>
      </div>

      {/* Bottom white fade overlay across entire hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-1/4 bg-gradient-to-b from-transparent via-white to-white z-10"
      />
    </section>
  );
}
