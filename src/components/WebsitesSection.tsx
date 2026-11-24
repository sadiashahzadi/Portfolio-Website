import {ExternalLink, Globe} from 'lucide-react';
import {useState} from 'react';
import {portfolioContent, type WebsiteProject} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

function BrowserMockupFallback({project}: {project: WebsiteProject}) {
  const accentBg =
    project.accentTone === 'teal'
      ? 'bg-[#0F766E]'
      : project.accentTone === 'emerald'
        ? 'bg-[#065F46]'
        : 'bg-slate-800';

  return (
    <div className="flex h-full w-full flex-col overflow-hidden bg-slate-50">
      {/* Browser Top Chrome */}
      <div className="flex items-center gap-3 border-b border-slate-200 bg-white px-4 py-2.5">
        <div className="flex items-center gap-1.5" aria-hidden="true">
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
        </div>
        <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-slate-200 bg-slate-50 px-2.5 py-1 text-xs text-slate-500">
          <Globe className="h-3 w-3 shrink-0 text-[#0F766E]" aria-hidden="true" />
          <span className="truncate font-mono">{project.displayDomain}</span>
        </div>
      </div>

      {/* Styled Page Wireframe */}
      <div className="flex flex-1 flex-col justify-between p-5">
        <div className="rounded-xl border border-slate-200/80 bg-white p-4 shadow-xs">
          <div className={`h-1.5 w-14 rounded-full ${accentBg}`} />
          <p className="mt-3 font-display text-lg font-bold text-slate-900">
            {project.name}
          </p>
          <p className="mt-1 text-xs text-slate-500">{project.displayDomain}</p>
        </div>

        <div className="mt-3 grid grid-cols-3 gap-2.5">
          {project.highlights.map((item) => (
            <div
              key={item}
              className="rounded-lg border border-slate-200/80 bg-white px-2.5 py-2 text-[11px] font-medium text-slate-700"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function WebsitePreview({project}: {project: WebsiteProject}) {
  const [imageFailed, setImageFailed] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const source = project.localFallbackImage || project.screenshotUrl;

  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden border-b border-slate-200 bg-slate-100">
      {!imageFailed && (
        <img
          src={source}
          alt={`Preview screenshot of ${project.name} (${project.displayDomain})`}
          referrerPolicy="no-referrer"
          loading="lazy"
          onLoad={() => setImageLoaded(true)}
          onError={() => setImageFailed(true)}
          className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
            imageLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
      )}

      {(imageFailed || !imageLoaded) && (
        <div className="absolute inset-0">
          <BrowserMockupFallback project={project} />
        </div>
      )}
    </div>
  );
}

export function WebsitesSection() {
  const {websites} = portfolioContent;

  return (
    <section id="websites" className="py-16 sm:py-20">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F766E]">
              Web Engineering
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
              {websites.heading}
            </h2>
            <p className="mt-3 text-base text-slate-600">{websites.intro}</p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-8 lg:grid-cols-3">
          {websites.items.map((project, index) => (
            <ScrollReveal key={project.id} delayMs={index * 70}>
              <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-white transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-md">
                <WebsitePreview project={project} />

                <div className="flex flex-1 flex-col justify-between p-6">
                  <div>
                    <h3 className="font-display text-xl font-bold text-slate-900">
                      {project.name}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-slate-100 pt-4">
                    <p className="text-xs font-medium text-slate-500">
                      {project.techStack.join(' · ')}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-[42px] w-full items-center justify-center gap-2 rounded-lg bg-[#0F766E] px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-[#115E59] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                    >
                      <span>Visit Website</span>
                      <ExternalLink className="h-4 w-4" aria-hidden="true" />
                    </a>
                  </div>
                </div>
              </article>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
