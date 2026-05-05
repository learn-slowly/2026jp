interface GalleryItem {
  date: string;
  caption: string;
  imageUrl: string;
}

interface GalleryV3Props {
  items: GalleryItem[];
}

export function GalleryV3({ items }: GalleryV3Props) {
  if (!items || items.length === 0) return null;

  return (
    <section id="activities" className="relative bg-d-blueblack py-16 md:py-20 overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6">
        <h2
          className="text-3xl md:text-4xl text-center mb-10 md:mb-14 tracking-tight text-white"
          style={{ fontFamily: 'var(--font-paperlogy)', fontWeight: 700 }}
        >
          활동
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
          {items.map((item, i) => (
            <GalleryCard key={i} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function GalleryCard({ item, index }: { item: GalleryItem; index: number }) {
  // 첫 번째 카드만 가로 2칸 차지하도록 (md 이상)
  const wide = index === 0;

  return (
    <article
      className={`group relative rounded-2xl overflow-hidden bg-d-lightgrey aspect-[4/3] ${
        wide ? 'md:col-span-2 md:aspect-[16/9]' : ''
      }`}
      style={{ display: 'block' }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={item.imageUrl}
        alt={item.caption || '활동 사진'}
        className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* 텍스트 오버레이 (caption 또는 date가 있을 때만) */}
      {(item.caption || item.date) && (
        <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-d-blueblack/80 via-d-blueblack/30 to-transparent p-5 md:p-6">
          {item.date && (
            <p
              className="text-xs md:text-sm font-bold text-justice-yellow-bright mb-1"
              style={{ fontFamily: 'var(--font-paperlogy)' }}
            >
              {item.date}
            </p>
          )}
          {item.caption && (
            <p className="text-base md:text-lg font-bold text-white break-keep leading-snug">
              {item.caption}
            </p>
          )}
        </div>
      )}
    </article>
  );
}
