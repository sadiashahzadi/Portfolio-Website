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
      className="border-y border-[#E6E8EF] bg-white py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-[#7657E8]">
              Creative Portfolio Gallery
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              {socialMedia.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {socialMedia.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Larger Masonry Gallery: 3 columns on desktop, 2 on tablet/wide phone, 1 on narrow mobile */}
        <div className="mt-12 columns-1 gap-7 min-[520px]:columns-2 lg:columns-3">
          {socialMedia.posts.map((post, idx) => (
            <ScrollReveal
              key={post.id}
              delayMs={idx * 60}
              className="mb-7 break-inside-avoid"
            >
              <button
                type="button"
                onClick={() => setLightboxIndex(idx)}
                className="group block w-full overflow-hidden rounded-2xl border border-[#E6E8EF] bg-white text-left shadow-[0_10px_30px_-14px_rgba(17,24,39,0.1)] transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#7657E8]/40 hover:shadow-[0_24px_48px_-14px_rgba(118,87,232,0.2)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
              >
                <div className="relative w-full overflow-hidden bg-[#FAFAFC]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-[#111827]/25 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2 rounded-xl bg-white/95 px-4 py-2 text-xs font-semibold text-[#111827] shadow-lg backdrop-blur-xs">
                      <Eye className="h-4 w-4 text-[#7657E8]" />
                      <span>View Design</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-[#E6E8EF] bg-white px-5 py-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-500">
                    <span className="font-semibold text-[#7657E8]">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.client ?? 'Dental Consultant'}</span>
                  </div>
                  <p className="mt-1 font-display text-base font-bold text-[#111827]">
                    {post.caption}
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* See the live pages */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl border border-[#E6E8EF] bg-gradient-to-br from-[#FAFAFC] to-[#EEE9FF]/35 p-6 sm:p-8">
            <h3 className="font-display text-lg font-bold text-[#111827]">
              {socialMedia.livePages.heading}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialMedia.livePages.links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-[#E6E8EF] bg-white px-4 py-2 text-sm font-semibold text-[#111827] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7657E8]/50 hover:text-[#7657E8] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
                >
                  <span>{link.label}</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0 text-[#7657E8]"
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
