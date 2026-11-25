import {ExternalLink, Eye} from 'lucide-react';
import {useState} from 'react';
import {portfolioContent} from '../data/content';
import {Lightbox} from './Lightbox';
import {ScrollReveal} from './ScrollReveal';

export function SocialMediaSection() {
  const {socialMedia} = portfolioContent;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="social-media"
      className="border-y border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0F766E]">
              Digital Campaigns &amp; Flyers
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
              {socialMedia.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {socialMedia.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Eye-catching Masonry Layout: original aspect ratio, no cropping */}
        <div className="mt-10 columns-1 gap-6 min-[480px]:columns-2 lg:columns-3 xl:columns-4">
          {socialMedia.posts.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              delayMs={idx * 55}
              className="mb-6 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group block w-full overflow-hidden rounded-2xl border border-slate-200/90 bg-white text-left shadow-sm transition-all duration-300 ease-out hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
              >
                <div className="relative w-full overflow-hidden bg-slate-50">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="block h-auto w-full transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-slate-950/20 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-1.5 rounded-lg bg-white/95 px-3.5 py-2 text-xs font-semibold text-slate-900 shadow-md">
                      <Eye className="h-4 w-4 text-[#0F766E]" />
                      <span>View</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-slate-100 bg-white px-4 py-3.5">
                  <p className="text-xs font-medium text-[#0F766E]">
                    {post.client ?? 'Dental Consultant'}
                  </p>
                  <p className="mt-0.5 text-sm font-semibold text-slate-900">
                    {post.caption}
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* See the live pages */}
        <ScrollReveal>
          <div className="mt-10 rounded-2xl border border-slate-200 bg-[#FAFBFB] p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-slate-900">
              {socialMedia.livePages.heading}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialMedia.livePages.links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-800 transition-colors hover:border-[#0F766E] hover:text-[#0F766E] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  <span>{link.label}</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0 text-[#0F766E]"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm text-slate-600">
              {socialMedia.livePages.note}
            </p>
          </div>
        </ScrollReveal>
      </div>

      <Lightbox
        items={socialMedia.posts}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
