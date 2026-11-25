import {
  ArrowDownRight,
  Code2,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Phone,
  Terminal,
} from 'lucide-react';
import {portfolioContent} from '../data/content';

function HeroDeveloperVisual() {
  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[380px] w-full items-center justify-center py-6 sm:min-h-[440px] lg:min-h-[470px]"
    >
      {/* Ambient Lavender & Purple Gradient Orbs */}
      <div className="pointer-events-none absolute -top-6 right-4 h-72 w-72 rounded-full bg-[#7657E8]/18 blur-3xl sm:h-80 sm:w-80" />
      <div className="pointer-events-none absolute -bottom-6 left-4 h-64 w-64 rounded-full bg-[#EEE9FF] blur-2xl" />
      <div className="pointer-events-none absolute right-10 bottom-8 h-40 w-40 rounded-full bg-[#0F8178]/12 blur-2xl" />

      {/* Subtle Abstract 3D Geometric Shapes */}
      <div className="animate-float-slow pointer-events-none absolute top-4 left-6 hidden h-14 w-14 rotate-12 rounded-2xl border border-[#7657E8]/25 bg-gradient-to-br from-white/90 to-[#EEE9FF]/80 shadow-sm sm:block" />
      <div className="animate-float-reverse pointer-events-none absolute right-3 bottom-6 hidden h-12 w-12 -rotate-12 rounded-full border-2 border-[#0F8178]/30 bg-white/80 shadow-xs sm:block" />

      {/* Primary Floating Browser Window Mockup */}
      <div className="relative z-10 w-full max-w-[490px] rounded-2xl border border-[#E6E8EF] bg-white/95 shadow-[0_24px_60px_-18px_rgba(17,24,39,0.16)] backdrop-blur-sm">
        {/* Browser Chrome */}
        <div className="flex items-center justify-between border-b border-[#E6E8EF] bg-[#FAFAFC] px-4 py-3 rounded-t-2xl">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
            <span className="h-2.5 w-2.5 rounded-full bg-slate-300" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-[#E6E8EF] bg-white px-3 py-1 font-mono text-[11px] text-slate-500">
            <span className="text-[#7657E8]">https://</span>
            <span>sadiashahzadi.dev</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Mockup Canvas */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] font-medium text-[#7657E8]">
                &lt;PortfolioLayout /&gt;
              </p>
              <p className="mt-1 font-display text-base font-bold text-[#111827]">
                Web Engineering &amp; Creative Systems
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-[#EEE9FF] text-[#7657E8]">
              <Layers className="h-4 w-4" />
            </div>
          </div>

          {/* Layered Interface Wireframe Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] p-3.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#7657E8]/10 text-[#7657E8]">
                  <Code2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-[#111827]">
                  Frontend Stack
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                React · TypeScript · Tailwind
              </p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#EEE9FF]">
                <div className="h-full w-4/5 rounded-full bg-[#7657E8]" />
              </div>
            </div>

            <div className="rounded-xl border border-[#E6E8EF] bg-[#FAFAFC] p-3.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#0F8178]/10 text-[#0F8178]">
                  <Terminal className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-[#111827]">
                  Creative &amp; Ops
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-slate-500">
                Brand UI · QEC · LMS
              </p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-slate-200/80">
                <div className="h-full w-4/5 rounded-full bg-[#0F8178]" />
              </div>
            </div>
          </div>

          {/* Layered Code Block */}
          <div className="mt-4 rounded-xl bg-[#111827] p-4 text-left shadow-inner">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="font-mono text-[11px] text-slate-400">
                profile.config.ts
              </span>
              <span className="font-mono text-[10px] text-[#A78BFA]">
                TSX
              </span>
            </div>
            <pre className="mt-2.5 overflow-x-hidden font-mono text-[11px] leading-relaxed text-slate-300">
              <code>
                <span className="text-[#A78BFA]">export const</span>{' '}
                <span className="text-white">profile</span> = {'{\n'}
                {'  '}role:{' '}
                <span className="text-[#5EEAD4]">'Web Developer &amp; Designer'</span>
                {',\n'}
                {'  '}focus:{' '}
                <span className="text-[#C4B5FD]">['React', 'UI Design', 'QEC']</span>
                {',\n'}
                {'  '}location:{' '}
                <span className="text-[#5EEAD4]">'Gujrat, Pakistan'</span>
                {'\n};'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Floating Secondary Interface Card (Bottom-Left Accent) */}
      <div className="animate-float-reverse absolute -bottom-1 left-2 z-20 hidden rounded-xl border border-[#E6E8EF] bg-white/95 px-4 py-3 shadow-[0_14px_34px_-12px_rgba(17,24,39,0.16)] backdrop-blur-sm sm:block">
        <p className="font-mono text-[10px] font-medium text-[#7657E8]">
          LIVE DEPLOYMENTS
        </p>
        <p className="mt-0.5 font-display text-xs font-bold text-[#111827]">
          gigglesnglow.org · dentalconsultant.clinic · gacademy.education
        </p>
      </div>
    </div>
  );
}

export function Hero() {
  const {hero, contactInfo} = portfolioContent;

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-[#E6E8EF] bg-gradient-to-b from-white via-[#FAFAFC] to-[#FAFAFC] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Subtle Top-Right Background Lavender Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 right-0 h-[460px] w-[460px] rounded-full bg-[#EEE9FF]/60 blur-3xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Introduction & CTA Buttons */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center rounded-lg border border-[#7657E8]/20 bg-[#EEE9FF]/70 px-3 py-1 text-xs font-semibold tracking-wide text-[#7657E8] sm:text-sm">
              {hero.kicker}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight text-[#111827] sm:text-5xl lg:text-[3.5rem] lg:leading-[1.06] [text-wrap:balance]">
              {hero.name}
            </h1>

            <p className="mt-3 max-w-xl font-display text-lg font-medium leading-snug text-slate-700 sm:text-xl">
              {hero.headline}
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-slate-600 sm:text-base">
              {hero.summary}
            </p>

            {/* Education Callout */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-[#E6E8EF] bg-white px-4 py-3 shadow-xs">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#EEE9FF] text-[#7657E8]">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-wide text-[#0F8178]">
                  Education
                </p>
                <p className="text-sm font-medium text-[#111827]">
                  {hero.educationText}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={hero.primaryAction.href}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-[#7657E8] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_28px_-10px_rgba(118,87,232,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#6445D6] hover:shadow-[0_16px_32px_-10px_rgba(118,87,232,0.75)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
              >
                <span>{hero.primaryAction.label}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={hero.secondaryAction.href}
                download="Sadia-Shahzadi-CV.pdf"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-[#E6E8EF] bg-white px-6 py-3 text-sm font-semibold text-[#111827] shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:border-[#7657E8]/50 hover:bg-[#EEE9FF]/35 hover:text-[#7657E8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
              >
                <Download className="h-4 w-4 text-[#7657E8]" aria-hidden="true" />
                <span>{hero.secondaryAction.label}</span>
              </a>
            </div>

            {/* Clean Contact Metadata Row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-[#E6E8EF] pt-5 text-sm text-slate-600">
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-1.5 font-medium text-[#111827] transition-colors hover:text-[#7657E8]"
              >
                <Phone className="h-4 w-4 text-[#0F8178]" aria-hidden="true" />
                <span className="tabular-nums">{contactInfo.phone}</span>
              </a>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 text-slate-600">
                <MapPin className="h-4 w-4 text-[#0F8178]" aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </span>
              <span className="text-slate-300" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1.5 font-medium text-[#111827] transition-colors hover:text-[#7657E8]"
              >
                <Mail className="h-4 w-4 text-[#0F8178]" aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Developer Visual Stage */}
          <div className="lg:col-span-6">
            <HeroDeveloperVisual />
          </div>
        </div>
      </div>
    </section>
  );
}
