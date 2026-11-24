import {portfolioContent} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

export function ExperienceAndSkills() {
  const {experience, skills} = portfolioContent;

  return (
    <>
      {/* EXPERIENCE TIMELINE */}
      <section id="experience" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0F766E]">
                Career History
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                {experience.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600">
                {experience.intro}
              </p>
            </div>
          </ScrollReveal>

          <div className="relative mt-10 pl-6 sm:pl-8">
            {/* Vertical Hairline Timeline Rail */}
            <div
              aria-hidden="true"
              className="absolute top-2 bottom-2 left-[7px] w-px bg-slate-200 sm:left-[9px]"
            />

            <div className="space-y-6">
              {experience.items.map((item, idx) => (
                <ScrollReveal key={item.id} delayMs={idx * 50}>
                  <article className="relative rounded-2xl border border-slate-200 bg-white p-6 transition-[border-color,box-shadow] duration-200 hover:border-slate-300 hover:shadow-sm">
                    {/* Geometric Timeline Node */}
                    <span
                      aria-hidden="true"
                      className={`absolute top-7 -left-[23px] h-3.5 w-3.5 rounded-full border-2 sm:-left-[29px] ${
                        item.current
                          ? 'border-[#0F766E] bg-[#0F766E]'
                          : 'border-slate-300 bg-white'
                      }`}
                    />

                    <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
                      <div>
                        <h3 className="font-display text-lg font-bold text-slate-900">
                          {item.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-[#0F766E]">
                          {item.organization}
                          {item.location ? (
                            <span className="text-slate-500">
                              {' '}
                              · {item.location}
                            </span>
                          ) : null}
                        </p>
                      </div>

                      <p className="font-mono text-xs font-medium tabular-nums text-slate-500 whitespace-nowrap shrink-0 sm:pt-1">
                        {item.period}
                      </p>
                    </div>

                    <ul className="mt-4 space-y-1.5 text-sm leading-relaxed text-slate-600">
                      {item.highlights.map((point, pIdx) => (
                        <li key={pIdx} className="flex items-start gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-slate-300"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section
        id="skills"
        className="border-y border-slate-200/80 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0F766E]">
                Capabilities
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                {skills.heading}
              </h2>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            {skills.groups.map((group, idx) => (
              <ScrollReveal key={group.id} delayMs={idx * 50}>
                <div className="h-full rounded-2xl border border-slate-200 bg-[#FAFBFB] p-6">
                  <h3 className="font-display text-base font-bold text-slate-900">
                    {group.category}
                  </h3>
                  <div className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-md border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
