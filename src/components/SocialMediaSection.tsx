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
      className="border-y border-white/10 bg-[#111A2E] py-20 sm:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold tracking-wide text-[#A78BFA]">
              Creative Portfolio Gallery
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#60A5FA] bg-clip-text text-transparent">
                {socialMedia.heading}
              </span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#AAB6CC]">
              {socialMedia.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Larger Masonry Gallery: 3 columns on desktop, 2 on wide phone/tablet, 1 on mobile */}
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
                className="group block w-full overflow-hidden rounded-2xl border border-white/12 bg-[#172238]/85 text-left shadow-[0_14px_36px_-14px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 ease-out hover:-translate-y-1 hover:border-[#7047EB]/45 hover:shadow-[0_24px_50px_-14px_rgba(112,71,235,0.28)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
              >
                <div className="relative w-full overflow-hidden bg-[#0B1020]">
                  <img
                    src={post.image}
                    alt={post.alt}
                    loading="lazy"
                    referrerPolicy="no-referrer"
                    className="block h-auto w-full transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                  />

                  <div
                    aria-hidden="true"
                    className="absolute inset-0 flex items-center justify-center bg-[#0B1020]/45 opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                  >
                    <span className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-[#172238]/95 px-4 py-2 text-xs font-semibold text-[#F8FAFC] shadow-xl backdrop-blur-md">
                      <Eye className="h-4 w-4 text-[#A78BFA]" />
                      <span>View Design</span>
                    </span>
                  </div>
                </div>

                <div className="border-t border-white/10 bg-[#172238] px-5 py-4">
                  <div className="flex items-center gap-2 text-xs font-medium text-[#AAB6CC]">
                    <span className="font-semibold text-[#A78BFA]">
                      {post.category}
                    </span>
                    <span aria-hidden="true">·</span>
                    <span>{post.client ?? 'Dental Consultant'}</span>
                  </div>
                  <p className="mt-1 font-display text-base font-bold text-[#F8FAFC]">
                    {post.caption}
                  </p>
                </div>
              </button>
            </ScrollReveal>
          ))}
        </div>

        {/* See the live pages */}
        <ScrollReveal>
          <div className="mt-12 rounded-2xl border border-[#7047EB]/30 bg-gradient-to-br from-[#172238]/90 to-[#0B1020]/90 p-6 shadow-lg backdrop-blur-md sm:p-8">
            <h3 className="font-display text-lg font-bold text-[#F8FAFC]">
              {socialMedia.livePages.heading}
            </h3>

            <div className="mt-4 flex flex-wrap items-center gap-3">
              {socialMedia.livePages.links.map((link) => (
                <a
                  key={link.id}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-[42px] items-center gap-2 rounded-xl border border-white/12 bg-[#111A2E] px-4 py-2 text-sm font-semibold text-[#F8FAFC] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#2583F7]/55 hover:bg-[#172238] hover:text-[#A78BFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
                >
                  <span>{link.label}</span>
                  <ExternalLink
                    className="h-3.5 w-3.5 shrink-0 text-[#60A5FA]"
                    aria-hidden="true"
                  />
                </a>
              ))}
            </div>

            <p className="mt-4 text-sm text-[#AAB6CC]">
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
