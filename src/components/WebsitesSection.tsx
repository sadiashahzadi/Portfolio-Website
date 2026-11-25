import {ExternalLink, Globe, Smartphone} from 'lucide-react';
import {useState} from 'react';
import {portfolioContent, type WebsiteProject} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

function DesktopBrowserFallback({project}: {project: WebsiteProject}) {
  const barColor =
    project.accentTone === 'purple'
      ? 'bg-gradient-to-r from-[#7047EB] to-[#A78BFA]'
      : project.accentTone === 'teal'
        ? 'bg-gradient-to-r from-[#2583F7] to-[#60A5FA]'
        : 'bg-gradient-to-r from-[#7047EB] to-[#2583F7]';

  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#0B1020] p-5 sm:p-6">
      <div className="rounded-xl border border-white/10 bg-[#172238] p-5">
        <div className={`h-1.5 w-16 rounded-full ${barColor}`} />
        <p className="mt-3 font-display text-xl font-bold text-[#F8FAFC]">
          {project.name}
        </p>
        <p className="mt-1 font-mono text-xs text-[#AAB6CC]">
          {project.displayDomain}
        </p>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-2.5">
        {project.highlights.map((item) => (
          <div
            key={item}
            className="rounded-lg border border-white/10 bg-[#111A2E] px-3 py-2.5 text-xs font-medium text-[#AAB6CC]"
          >
            {item}
          </div>
        ))}
      </div>
    </div>
  );
}

function MobileDeviceFallback({project}: {project: WebsiteProject}) {
  return (
    <div className="flex h-full w-full flex-col justify-between bg-[#0B1020] p-3 text-left">
      <div className="rounded-lg border border-white/10 bg-[#172238] p-2.5">
        <div className="h-1 w-8 rounded-full bg-[#7047EB]" />
        <p className="mt-2 font-display text-[11px] font-bold leading-tight text-[#F8FAFC]">
          {project.name}
        </p>
        <p className="mt-0.5 truncate font-mono text-[9px] text-[#AAB6CC]">
          {project.displayDomain}
        </p>
      </div>
      <div className="space-y-1.5">
        {project.highlights.slice(0, 2).map((h) => (
          <div
            key={h}
            className="rounded-md border border-white/10 bg-[#111A2E] px-2 py-1 text-[9px] font-medium text-[#AAB6CC]"
          >
            {h}
          </div>
        ))}
      </div>
    </div>
  );
}

function ProjectDeviceShowcase({
  project,
  featured = false,
}: {
  project: WebsiteProject;
  featured?: boolean;
}) {
  const [desktopFailed, setDesktopFailed] = useState(false);
  const [desktopLoaded, setDesktopLoaded] = useState(false);
  const [mobileFailed, setMobileFailed] = useState(false);
  const [mobileLoaded, setMobileLoaded] = useState(false);

  return (
    <div
      className={`relative overflow-hidden bg-gradient-to-br from-[#7047EB]/12 via-[#111A2E] to-[#2583F7]/10 ${
        featured ? 'p-4 sm:p-6 lg:p-7' : 'p-4 sm:p-5'
      }`}
    >
      {/* Desktop Browser Window Mockup */}
      <div className="overflow-hidden rounded-xl border border-white/12 bg-[#0B1020] shadow-[0_18px_40px_-14px_rgba(0,0,0,0.6)]">
        <div className="flex items-center gap-3 border-b border-white/10 bg-[#111A2E] px-3.5 py-2.5">
          <div className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex min-w-0 flex-1 items-center gap-1.5 rounded-md border border-white/10 bg-[#0B1020] px-2.5 py-1 text-[11px] text-[#AAB6CC]">
            <Globe className="h-3 w-3 shrink-0 text-[#A78BFA]" aria-hidden="true" />
            <span className="truncate font-mono">{project.url}</span>
          </div>
        </div>

        <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#0B1020]">
          {!desktopFailed && (
            <img
              src={project.desktopScreenshotUrl}
              alt={`Desktop preview of ${project.name} (${project.displayDomain})`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setDesktopLoaded(true)}
              onError={() => setDesktopFailed(true)}
              className={`h-full w-full object-cover object-top transition-all duration-500 ease-out group-hover:scale-[1.03] ${
                desktopLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}

          {(desktopFailed || !desktopLoaded) && (
            <div className="absolute inset-0">
              <DesktopBrowserFallback project={project} />
            </div>
          )}
        </div>
      </div>

      {/* Overlapping Mobile Device Preview */}
      <div
        className={`hidden sm:block absolute bottom-3 right-3 z-10 overflow-hidden rounded-2xl border-2 border-white/25 bg-[#0B1020] shadow-[0_18px_40px_-8px_rgba(0,0,0,0.75)] transition-transform duration-300 group-hover:-translate-y-1 ${
          featured ? 'w-[122px] md:w-[140px]' : 'w-[96px] md:w-[106px]'
        }`}
      >
        <div className="flex items-center justify-center border-b border-white/10 bg-[#111A2E] py-1">
          <span className="h-1 w-7 rounded-full bg-white/25" />
        </div>
        <div className="relative aspect-[9/16] w-full overflow-hidden bg-[#0B1020]">
          {!mobileFailed && (
            <img
              src={project.mobileScreenshotUrl}
              alt={`Mobile preview of ${project.name}`}
              referrerPolicy="no-referrer"
              loading="lazy"
              onLoad={() => setMobileLoaded(true)}
              onError={() => setMobileFailed(true)}
              className={`h-full w-full object-cover object-top transition-opacity duration-300 ${
                mobileLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            />
          )}
          {(mobileFailed || !mobileLoaded) && (
            <div className="absolute inset-0">
              <MobileDeviceFallback project={project} />
            </div>
          )}
        </div>
      </div>

      <span className="mt-2.5 inline-flex items-center gap-1.5 font-mono text-[11px] text-[#AAB6CC] sm:hidden">
        <Smartphone className="h-3.5 w-3.5 text-[#A78BFA]" aria-hidden="true" />
        <span>Responsive Desktop &amp; Mobile</span>
      </span>
    </div>
  );
}

export function WebsitesSection() {
  const {websites} = portfolioContent;
  const [featuredProject, ...secondaryProjects] = websites.items;

  return (
    <section id="websites" className="bg-[#0B1020] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#A78BFA]">
              Web Engineering
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#A78BFA] bg-clip-text text-transparent">
                {websites.heading}
              </span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#AAB6CC]">
              {websites.intro}
            </p>
          </div>
        </ScrollReveal>

        {/* Featured Project Dark Glass Showcase Card */}
        {featuredProject && (
          <ScrollReveal delayMs={60} className="mt-10">
            <article className="group grid grid-cols-1 overflow-hidden rounded-3xl border border-[#7047EB]/30 bg-[#172238]/80 shadow-[0_20px_50px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#2583F7]/50 hover:shadow-[0_28px_64px_-16px_rgba(112,71,235,0.28)] lg:grid-cols-12">
              <div className="lg:col-span-7">
                <ProjectDeviceShowcase project={featuredProject} featured />
              </div>

              <div className="flex flex-col justify-between p-6 sm:p-8 lg:col-span-5 lg:p-10">
                <div>
                  <p className="text-xs font-semibold tracking-wide text-[#A78BFA]">
                    {featuredProject.roleLabel}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold tracking-tight text-[#F8FAFC] sm:text-3xl">
                    {featuredProject.name}
                  </h3>
                  <p className="mt-3.5 text-[15px] leading-relaxed text-[#AAB6CC]">
                    {featuredProject.description}
                  </p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {featuredProject.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="rounded-lg border border-white/10 bg-[#111A2E]/80 px-3 py-1 text-xs font-medium text-[#F8FAFC]/90"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10 pt-5">
                  <p className="font-mono text-xs font-medium text-[#AAB6CC]">
                    {featuredProject.techStack.join(' · ')}
                  </p>

                  <a
                    href={featuredProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7047EB] to-[#2583F7] px-5 py-2.5 text-sm font-semibold text-[#F8FAFC] shadow-[0_10px_28px_-8px_rgba(112,71,235,0.55)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_14px_34px_-6px_rgba(37,131,247,0.65)] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
                  >
                    <span>Visit Website</span>
                    <ExternalLink className="h-4 w-4" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </article>
          </ScrollReveal>
        )}

        {/* Secondary Complementary Dark Glass Project Cards */}
        <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {secondaryProjects.map((project, index) => (
            <ScrollReveal key={project.id} delayMs={(index + 1) * 90}>
              <article className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/12 bg-[#172238]/80 shadow-[0_18px_46px_-18px_rgba(0,0,0,0.55)] backdrop-blur-md transition-all duration-300 hover:-translate-y-1.5 hover:border-[#7047EB]/45 hover:shadow-[0_24px_56px_-16px_rgba(37,131,247,0.22)]">
                <ProjectDeviceShowcase project={project} />

                <div className="flex flex-1 flex-col justify-between p-6 sm:p-7">
                  <div>
                    <p className="text-xs font-semibold tracking-wide text-[#60A5FA]">
                      {project.roleLabel}
                    </p>
                    <h3 className="mt-1.5 font-display text-2xl font-bold tracking-tight text-[#F8FAFC]">
                      {project.name}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#AAB6CC]">
                      {project.description}
                    </p>
                  </div>

                  <div className="mt-6 border-t border-white/10 pt-4">
                    <p className="font-mono text-xs font-medium text-[#AAB6CC]">
                      {project.techStack.join(' · ')}
                    </p>

                    <a
                      href={project.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="mt-4 inline-flex min-h-[44px] w-full items-center justify-center gap-2 rounded-xl border border-[#7047EB]/40 bg-[#111A2E] px-5 py-2.5 text-sm font-semibold text-[#F8FAFC] transition-all duration-200 hover:border-transparent hover:bg-gradient-to-r hover:from-[#7047EB] hover:to-[#2583F7] hover:shadow-[0_12px_28px_-8px_rgba(112,71,235,0.5)] whitespace-nowrap focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
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
