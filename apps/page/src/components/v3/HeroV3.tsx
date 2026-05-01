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
      className="relative overflow-hidden bg-gradient-to-b from-justice-yellow-bright via-justice-yellow-bright via-70% to-white"
    >
      {/* Top Navigation */}
      <nav className="relative z-20">
        <div className="mx-auto max-w-7xl px-6 py-6 flex items-end justify-between gap-4">
          <div className="flex items-end gap-6" style={{ display: 'flex' }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/Group-8.svg"
              alt="정의당"
              className="h-12 md:h-14 w-auto block"
            />
            <div className="hidden sm:flex items-baseline gap-2.5 text-d-blueblack">
              <span className="text-base md:text-lg font-bold">{candidate.position}</span>
              <span
                className="text-xl md:text-2xl"
                style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
              >
                {candidate.name}
              </span>
            </div>
          </div>
          <div className="flex items-center gap-3" style={{ display: 'flex' }}>
            <ul
              className="hidden md:flex items-center gap-2 text-base lg:text-lg font-medium text-d-blueblack"
              style={{ display: 'flex' }}
            >
              {NAV_ITEMS.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="inline-block rounded-full px-4 py-2.5 hover:bg-white focus:bg-white transition"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
            <a
              href="#donation"
              className="inline-flex items-center justify-center rounded-full bg-white text-d-blueblack px-5 py-2.5 text-base lg:text-lg font-bold shadow-sm hover:opacity-90 active:scale-[0.98] transition"
            >
              후원하기
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Content */}
      <div className="relative mx-auto max-w-7xl px-6 pt-8 md:pt-10 pb-12 md:pb-20 grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="space-y-6 z-10">
          {/* Election badge */}
          <div
            className="inline-flex items-center rounded-full bg-white px-5 py-2 shadow-sm"
            style={{ display: 'inline-flex' }}
          >
            <span className="text-sm md:text-base font-bold text-d-blueblack">
              {candidate.election}
            </span>
          </div>

          {/* Big Headline (Paperlogy ExtraBold) */}
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] leading-[1.1] tracking-tight break-keep text-d-blueblack"
            style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
          >
            <span className="block">{candidate.visionTitle1}</span>
            <span className="block">{candidate.visionTitle2}</span>
          </h1>

          {/* Intro position */}
          <div className="space-y-1 text-base md:text-lg font-bold leading-snug text-d-blueblack">
            <p>{candidate.introTitle}</p>
            <p>{candidate.introSubtitle}</p>
          </div>

          {/* Career list */}
          <ul className="space-y-1.5 pt-2">
            {candidate.careers.map((c, i) => (
              <li key={i} className="flex items-center gap-2.5" style={{ display: 'flex' }}>
                <span
                  className="flex-shrink-0 inline-flex items-center justify-center w-5 h-5 rounded bg-d-blueblack text-justice-yellow-bright text-[11px] font-extrabold"
                  style={{ fontFamily: 'var(--font-paperlogy)' }}
                >
                  {c.type}
                </span>
                <span className="text-sm md:text-base font-semibold leading-relaxed break-keep text-d-blueblack">
                  {c.text}
                </span>
              </li>
            ))}
          </ul>
        </div>

        {/* Hero Image */}
        <div className="relative h-[484px] md:h-[617px] lg:h-[692px] overflow-hidden self-end -translate-x-[10%]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={candidate.heroImage}
            alt={candidate.name}
            className="w-full h-full object-contain object-top drop-shadow-xl scale-[1.85] origin-top"
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
