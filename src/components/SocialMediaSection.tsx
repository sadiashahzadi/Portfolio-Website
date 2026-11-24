import {ExternalLink, ImageOff, Maximize2} from 'lucide-react';
import {useState} from 'react';
import {portfolioContent, type GalleryItem} from '../data/content';
import {Lightbox} from './Lightbox';
import {ScrollReveal} from './ScrollReveal';

function SocialPostImage({post}: {post: GalleryItem}) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className="flex h-full w-full flex-col items-center justify-center bg-slate-50 p-6 text-center">
        <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white text-[#0F766E]">
          <ImageOff className="h-5 w-5" aria-hidden="true" />
        </div>
        <p className="mt-3 text-xs font-semibold text-[#0F766E]">
          {post.client ?? 'Dental Consultant'}
        </p>
        <p className="mt-1 text-sm font-semibold text-slate-900">
          {post.caption}
        </p>
        <p className="mt-2 font-mono text-[11px] break-all text-slate-500">
          {post.image}
        </p>
      </div>
    );
  }

  return (
    <img
      src={post.image}
      alt={post.alt}
      referrerPolicy="no-referrer"
      loading="lazy"
      onError={() => setFailed(true)}
      className="h-full w-full object-contain transition-transform duration-300 group-hover:scale-[1.02]"
    />
  );
}

export function SocialMediaSection() {
  const {socialMedia} = portfolioContent;
  const allPosts: GalleryItem[] = socialMedia.groups.flatMap((g) => g.posts);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightboxForItem = (itemId: string) => {
    const idx = allPosts.findIndex((p) => p.id === itemId);
    if (idx !== -1) setLightboxIndex(idx);
  };

  return (
    <section
      id="social-media"
      className="border-y border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-3xl">
            <p className="text-sm font-semibold text-[#0F766E]">
              Digital Campaigns
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
              {socialMedia.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {socialMedia.intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-12 space-y-12">
          {socialMedia.groups.map((group) => (
            <div key={group.id}>
              <ScrollReveal>
                <div className="flex flex-col justify-between gap-2 border-b border-slate-200 pb-4 sm:flex-row sm:items-end">
                  <div>
                    <h3 className="font-display text-2xl font-bold text-slate-900">
                      {group.clientName}
                    </h3>
                    <p className="mt-1 text-sm text-slate-600">
                      {group.subtitle}
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              <div className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {group.posts.map((post, idx) => (
                  <ScrollReveal key={post.id} delayMs={idx * 40}>
                    <button
                      type="button"
                      onClick={() => openLightboxForItem(post.id)}
                      className="group flex h-full w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFBFB] text-left transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                    >
                      <div className="relative aspect-square w-full overflow-hidden bg-slate-50 p-2">
                        <SocialPostImage post={post} />
                        <span
                          aria-hidden="true"
                          className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/75 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                        >
                          <Maximize2 className="h-4 w-4" />
                        </span>
                      </div>

                      <div className="border-t border-slate-200/70 bg-white p-4 sm:p-5">
                        <p className="text-sm font-semibold text-slate-900">
                          {post.caption}
                        </p>
                      </div>
                    </button>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          ))}

          {/* See the live pages */}
          <ScrollReveal>
            <div className="rounded-2xl border border-slate-200 bg-[#FAFBFB] p-6 sm:p-8">
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
      </div>

      <Lightbox
        items={allPosts}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
