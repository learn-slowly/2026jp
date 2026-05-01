interface PolicyItem {
  number: number;
  title: string;
  description: string;
}

interface PoliciesV3Props {
  slogans: string[];
  ctaLines: string[];
  items: PolicyItem[];
}

export function PoliciesV3({ slogans, ctaLines, items }: PoliciesV3Props) {
  return (
    <section id="policies" className="bg-white pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="mx-auto max-w-6xl px-6">
        <h2
          className="text-xl md:text-[26px] text-center mb-2 tracking-tight text-d-softblack"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 700 }}
        >
          정책·공약
        </h2>

        {/* Slogans */}
        <div className="text-center space-y-0.5 mb-6 md:mb-8">
          {slogans.map((s, i) => (
            <p key={i} className="text-sm md:text-base font-semibold break-keep text-d-blueblack">
              {s}
            </p>
          ))}
        </div>

        {/* Grid: CTA box + policy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {/* Yellow CTA Box (always first) */}
          <CtaBox lines={ctaLines} />

          {/* Policy cards */}
          {items.map((item) => (
            <PolicyCard key={item.number} item={item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function CtaBox({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-2xl bg-justice-yellow-bright p-5 md:p-6 flex flex-col justify-between gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Vector-white.svg"
        alt=""
        aria-hidden="true"
        className="w-8 h-8"
      />
      <div className="space-y-1">
        {lines.map((line, i) => {
          const bolded = line.replace(
            /(생활비는 절반|일자리는 지킵니다|에너지-쓰레기 문제|책임있게)/g,
            '<strong>$1</strong>'
          );
          return (
            <p
              key={i}
              className="text-xs md:text-sm font-medium leading-relaxed break-keep text-d-blueblack"
              dangerouslySetInnerHTML={{ __html: bolded }}
            />
          );
        })}
      </div>
    </div>
  );
}

function PolicyCard({ item }: { item: PolicyItem }) {
  return (
    <article className="rounded-2xl bg-white border border-d-blueblack/10 hover:border-justice-yellow-bright hover:shadow-lg transition p-5 md:p-6 flex flex-col">
      <div
        className="relative inline-flex items-center justify-center w-8 h-8 mb-4"
        style={{
          backgroundImage: 'url(/Vector-9.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span
          className="text-d-blueblack text-sm leading-none"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
        >
          {item.number}
        </span>
      </div>
      <h3 className="text-sm md:text-base font-bold leading-tight break-keep mb-2 text-d-softblack">
        {item.title}
      </h3>
      <p className="text-[11px] md:text-xs leading-relaxed break-keep flex-1 text-d-grey">
        {item.description}
      </p>
    </article>
  );
}
