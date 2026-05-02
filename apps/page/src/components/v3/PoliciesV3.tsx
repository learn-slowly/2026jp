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
          className="text-3xl md:text-4xl text-center mb-3 tracking-tight text-d-softblack"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 700 }}
        >
          정책·공약
        </h2>

        {/* Slogans (입력된 슬로건이 있을 때만 표시) */}
        {slogans.length > 0 && (
          <div className="text-center space-y-1 mb-8 md:mb-10">
            {slogans.map((s, i) => (
              <p key={i} className="text-lg md:text-xl font-semibold break-keep text-d-blueblack">
                {s}
              </p>
            ))}
          </div>
        )}

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

// 시트 입력의 **강조** 마크다운 표기를 <strong>으로 치환 (XSS 방지를 위해 escape 후 처리)
function escapeHtml(s: string) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function applyBoldMarkdown(line: string) {
  return escapeHtml(line).replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
}

function CtaBox({ lines }: { lines: string[] }) {
  return (
    <div className="rounded-2xl bg-justice-yellow-bright p-6 md:p-7 flex flex-col justify-between gap-4">
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src="/Vector-white.svg"
        alt=""
        aria-hidden="true"
        className="w-10 h-10 md:w-12 md:h-12"
      />
      <div className="space-y-1.5">
        {lines.map((line, i) => (
          <p
            key={i}
            className="text-base md:text-lg font-medium leading-relaxed break-keep text-d-blueblack"
            dangerouslySetInnerHTML={{ __html: applyBoldMarkdown(line) }}
          />
        ))}
      </div>
    </div>
  );
}

function PolicyCard({ item }: { item: PolicyItem }) {
  return (
    <article className="rounded-2xl bg-white border border-d-blueblack/10 hover:border-justice-yellow-bright hover:shadow-lg transition p-6 md:p-7 flex flex-col">
      <div
        className="relative inline-flex items-center justify-center w-10 h-10 md:w-12 md:h-12 mb-5"
        style={{
          backgroundImage: 'url(/Vector-9.svg)',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
        }}
      >
        <span
          className="text-d-blueblack text-base md:text-lg leading-none"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 800 }}
        >
          {item.number}
        </span>
      </div>
      <h3 className="text-lg md:text-xl font-bold leading-tight break-keep mb-3 text-d-softblack">
        {item.title}
      </h3>
      <p className="text-sm md:text-base leading-relaxed break-keep flex-1 text-d-grey">
        {item.description}
      </p>
    </article>
  );
}
