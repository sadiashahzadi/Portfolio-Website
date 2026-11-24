import {ImageOff, Maximize2} from 'lucide-react';
import {useMemo, useState} from 'react';
import {portfolioContent, type GalleryItem} from '../data/content';
import {Lightbox} from './Lightbox';
import {ScrollReveal} from './ScrollReveal';

function DesignAssetImage({item}: {item: GalleryItem}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F766E]">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-3 text-xs font-semibold text-[#0F766E]">
          {item.category}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">
          {item.title}
        </p>
        <p className="mt-2 font-mono text-[11px] break-all text-slate-500">
          {item.image}
        </p>
      </div>
    );
  }

  return (
    <img
      src={item.image}
      alt={item.alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />
  );
}

export function GraphicDesignSection() {
  const {graphicDesign} = portfolioContent;
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === 'All') {
      return graphicDesign.items;
    }
    return graphicDesign.items.filter((item) => item.category === activeCategory);
  }, [activeCategory, graphicDesign.items]);

  return (
    <section id="graphic-design" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0F766E]">
                Visual Collateral
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                {graphicDesign.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600">
                {graphicDesign.intro}
              </p>
            </div>

            {/* Interactive Filter Tabs */}
            <div
              role="tablist"
              aria-label="Filter graphic and print design items"
              className="flex flex-wrap items-center gap-1.5 rounded-xl border border-slate-200 bg-white p-1.5 self-start md:self-auto"
            >
              {graphicDesign.categories.map((category) => {
                const isSelected = activeCategory === category;
                return (
                  <button
                    key={category}
                    type="button"
                    role="tab"
                    aria-selected={isSelected}
                    onClick={() => {
                      setActiveCategory(category);
                      setLightboxIndex(null);
                    }}
                    className={`min-h-[38px] rounded-lg px-3.5 py-1.5 text-sm font-medium transition-colors whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E] ${
                      isSelected
                        ? 'bg-[#0F766E] text-white'
                        : 'text-slate-600 hover:bg-slate-100 hover:text-slate-900'
                    }`}
                  >
                    {category}
                  </button>
                );
              })}
            </div>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredItems.map((item, idx) => (
            <ScrollReveal key={item.id} delayMs={idx * 40}>
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white text-left transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
              >
                <div className="relative aspect-[4/5] w-full overflow-hidden bg-slate-50 p-2">
                  <DesignAssetImage item={item} />
                  <span
                    aria-hidden="true"
                    className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/75 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <Maximize2 className="h-4 w-4" />
                  </span>
                </div>

                <div className="flex flex-1 flex-col justify-between border-t border-slate-200/70 p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#0F766E]">
                      {item.category}
                    </p>
                    <h3 className="mt-1 font-display text-base font-bold text-slate-900">
                      {item.title}
                    </h3>
                  </div>
                  <p className="mt-2 text-xs text-slate-600">{item.caption}</p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>
      </div>

      <Lightbox
        items={filteredItems}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
