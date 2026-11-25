import {portfolioContent} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

export function ExperienceSection() {
  const {experience} = portfolioContent;

  return (
    <section id="experience" className="py-20 sm:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold tracking-wide text-[#7657E8]">
              Professional History
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#111827] sm:text-4xl">
              {experience.heading}
            </h2>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              {experience.intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="relative mt-12">
          {/* Desktop Center-Left Spine & Mobile Left Spine */}
          <div
            aria-hidden="true"
            className="absolute top-3 bottom-3 left-3 w-px bg-gradient-to-b from-[#7657E8] via-[#0F8178]/50 to-[#E6E8EF] md:left-[28%]"
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
                        ? 'border-[#7657E8] bg-[#7657E8] ring-4 ring-[#EEE9FF]'
                        : 'border-[#0F8178] bg-white ring-4 ring-[#FAFAFC]'
                    }`}
                  />

                  {/* Left Date & Location Rail */}
                  <div className="md:col-span-3 md:pr-6 md:pt-1 md:text-right">
                    <p className="font-mono text-xs font-semibold tabular-nums text-[#7657E8]">
                      {item.period}
                    </p>
                    {item.location && (
                      <p className="mt-1 text-xs font-medium text-slate-500">
                        {item.location}
                      </p>
                    )}
                  </div>

                  {/* Right Role Content Card */}
                  <div className="rounded-2xl border border-[#E6E8EF] bg-white p-6 shadow-xs transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-[#7657E8]/35 group-hover:shadow-[0_14px_34px_-14px_rgba(17,24,39,0.1)] md:col-span-9 md:ml-4 sm:p-7">
                    <div className="flex flex-col gap-1">
                      <h3 className="font-display text-xl font-bold tracking-tight text-[#111827]">
                        {item.role}
                      </h3>
                      <p className="text-sm font-semibold text-[#0F8178]">
                        {item.organization}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-2 text-[15px] leading-relaxed text-slate-600">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-3">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#7657E8]/60"
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
