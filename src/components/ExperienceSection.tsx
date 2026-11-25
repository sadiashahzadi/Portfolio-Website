import {portfolioContent} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

export function ExperienceSection() {
  const {experience} = portfolioContent;

  return (
    <section id="experience" className="bg-[#0B1020] py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#A78BFA]">
              Professional History
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight sm:text-4xl">
              <span className="bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#A78BFA] bg-clip-text text-transparent">
                {experience.heading}
              </span>
            </h2>
            <p className="mt-3 text-base leading-relaxed text-[#AAB6CC]">
              {experience.intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          {/* Vertical Gradient Timeline Spine */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-3 w-px bg-gradient-to-b from-[#7047EB] via-[#2583F7]/65 to-white/10 md:left-[28%]"
          />

          <div className="space-y-8">
            {experience.items.map((item, idx) => (
              <ScrollReveal key={item.id} delayMs={idx * 65}>
                <article className="group relative grid grid-cols-1 gap-3 pl-9 md:grid-cols-12 md:gap-8 md:pl-0">
                  {/* Timeline Node Marker */}
                  <span
                    aria-hidden="true"
                    className={`absolute top-2 left-[5px] h-4 w-4 rounded-full border-2 transition-transform duration-200 group-hover:scale-110 md:left-[calc(28%-7.5px)] ${
                      item.current
                        ? 'border-[#A78BFA] bg-[#7047EB] ring-4 ring-[#7047EB]/25'
                        : 'border-[#2583F7] bg-[#0B1020] ring-4 ring-[#0B1020]'
                    }`}
                  />

                  {/* Left Date & Location Rail */}
                  <div className="md:col-span-3 md:pr-6 md:pt-1 md:text-right">
                    <p className="font-mono text-xs font-semibold tabular-nums text-[#A78BFA]">
                      {item.period}
                    </p>
                    {item.location && (
                      <p className="mt-1 text-xs font-medium text-[#AAB6CC]">
                        {item.location}
                      </p>
                    )}
                  </div>

                  {/* Right Role Content Card */}
                  <div className="rounded-2xl border border-white/10 bg-[#172238]/80 p-6 shadow-[0_14px_34px_-16px_rgba(0,0,0,0.5)] backdrop-blur-md transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#7047EB]/45 group-hover:shadow-[0_20px_44px_-14px_rgba(112,71,235,0.22)] md:col-span-9 md:ml-4 sm:p-7">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-xl font-bold tracking-tight text-[#F8FAFC]">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#60A5FA]">
                        {item.organization}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-[#AAB6CC]">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#A78BFA]/70"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </article>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
