import {ArrowDownRight, Download, Mail, MapPin, Phone} from 'lucide-react';
import {portfolioContent} from '../data/content';

export function Hero() {
  const {hero, contactInfo} = portfolioContent;

  return (
    <section
      id="top"
      className="border-b border-slate-200/80 bg-white pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-stretch gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Left Typographic Anchor */}
          <div className="flex flex-col justify-between lg:col-span-7">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#0F766E]">
                {hero.title}
              </p>

              <h1 className="mt-3 max-w-2xl font-display text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-[3.35rem] lg:leading-[1.08] [text-wrap:balance]">
                {hero.name}
              </h1>

              <p className="mt-4 max-w-2xl text-base font-medium text-slate-700 sm:text-lg">
                {hero.subtitle}
              </p>

              <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
                {hero.summary}
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={hero.primaryAction.href}
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F766E] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#115E59] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  <span>{hero.primaryAction.label}</span>
                  <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={hero.secondaryAction.href}
                  download="Sadia-Shahzadi-CV.pdf"
                  className="inline-flex min-h-[44px] items-center gap-2 rounded-lg border-2 border-[#0F766E] bg-white px-5 py-2.5 text-sm font-semibold text-[#0F766E] shadow-sm transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#0F766E]/5 whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                >
                  <Download className="h-4 w-4" aria-hidden="true" />
                  <span>{hero.secondaryAction.label}</span>
                </a>
              </div>
            </div>

            {/* Clean Contact Metadata Row */}
            <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-slate-200/80 pt-6 text-sm text-slate-600">
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-[#0F766E]"
              >
                <Phone className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
                <span className="tabular-nums">{contactInfo.phone}</span>
              </a>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <MapPin className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1.5 font-medium text-slate-700 transition-colors hover:text-[#0F766E]"
              >
                <Mail className="h-4 w-4 text-[#0F766E]" aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Structural Focus Card */}
          <div className="lg:col-span-5">
            <div className="flex h-full flex-col justify-between rounded-2xl border border-slate-200 bg-[#FAFBFB] p-6 sm:p-8">
              <div>
                <p className="text-xs font-semibold tracking-wide text-[#0F766E]">
                  Core Focus Areas
                </p>
                <h2 className="mt-2 font-display text-xl font-bold text-slate-900">
                  Academic Systems &amp; Digital Execution
                </h2>

                <div className="mt-6 divide-y divide-slate-200/80">
                  {hero.pillars.map((pillar, index) => (
                    <div key={pillar.label} className="py-4 first:pt-0 last:pb-0">
                      <p className="text-sm font-semibold text-slate-900">
                        <span className="mr-2 font-mono text-xs tabular-nums text-[#0F766E]">
                          0{index + 1}.
                        </span>
                        {pillar.label}
                      </p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {pillar.detail}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-6 border-t border-slate-200 pt-5">
                <p className="text-xs font-medium text-slate-500">Education</p>
                <p className="mt-1 text-sm font-semibold text-slate-900">
                  {hero.educationText}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
