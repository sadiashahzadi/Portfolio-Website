import {
  ArrowDownRight,
  Code2,
  Download,
  GraduationCap,
  Layers,
  Mail,
  MapPin,
  Megaphone,
  Palette,
  Phone,
  Terminal,
} from 'lucide-react';
import {useEffect, useState} from 'react';
import {portfolioContent} from '../data/content';

function HeroDeveloperVisual({scrollY}: {scrollY: number}) {
  const parallaxSlow = Math.min(scrollY * 0.08, 28);
  const parallaxReverse = Math.min(scrollY * -0.06, 0);

  return (
    <div
      aria-hidden="true"
      className="relative flex min-h-[420px] w-full items-center justify-center py-8 sm:min-h-[470px] lg:min-h-[500px]"
    >
      {/* Thin Geometric Grid Backdrop (Right Visual Stage) */}
      <div
        className="pointer-events-none absolute inset-0 rounded-3xl opacity-45"
        style={{
          backgroundImage:
            'linear-gradient(to right, rgba(167, 139, 250, 0.08) 1px, transparent 1px), linear-gradient(to bottom, rgba(37, 131, 247, 0.08) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage:
            'radial-gradient(ellipse at center, black 45%, transparent 80%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at center, black 45%, transparent 80%)',
        }}
      />

      {/* Soft Royal Purple & Electric Blue Gradient Orbs with Gentle Parallax */}
      <div
        style={{transform: `translate3d(0, ${parallaxSlow}px, 0)`}}
        className="pointer-events-none absolute -top-6 right-2 h-72 w-72 sm:h-80 sm:w-80"
      >
        <div className="animate-orb-drift h-full w-full rounded-full bg-[#7047EB]/28 blur-3xl" />
      </div>
      <div
        style={{transform: `translate3d(0, ${parallaxReverse}px, 0)`}}
        className="pointer-events-none absolute -bottom-8 left-4 h-64 w-64 sm:h-72 sm:w-72"
      >
        <div className="animate-orb-drift h-full w-full rounded-full bg-[#2583F7]/22 blur-3xl [animation-delay:2.2s]" />
      </div>

      {/* Tiny Glowing Background Particles */}
      <span className="animate-particle-pulse pointer-events-none absolute top-10 left-12 h-1.5 w-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_10px_#A78BFA]" />
      <span className="animate-particle-pulse pointer-events-none absolute top-24 right-8 h-2 w-2 rounded-full bg-[#2583F7] shadow-[0_0_12px_#2583F7] [animation-delay:1.1s]" />
      <span className="animate-particle-pulse pointer-events-none absolute bottom-16 left-8 h-1.5 w-1.5 rounded-full bg-[#7047EB] shadow-[0_0_10px_#7047EB] [animation-delay:2.4s]" />
      <span className="animate-particle-pulse pointer-events-none absolute right-14 bottom-12 h-1.5 w-1.5 rounded-full bg-[#A78BFA] shadow-[0_0_10px_#A78BFA] [animation-delay:3.2s]" />

      {/* 3D Glass-Like Abstract Shapes */}
      <div className="animate-float-slow pointer-events-none absolute top-6 left-4 hidden h-16 w-16 rotate-12 rounded-2xl border border-white/15 bg-gradient-to-br from-[#7047EB]/25 via-white/10 to-transparent shadow-[0_14px_30px_rgba(11,16,32,0.5)] backdrop-blur-md sm:block" />
      <div className="animate-float-reverse pointer-events-none absolute right-2 bottom-10 hidden h-14 w-14 -rotate-12 rounded-full border border-[#2583F7]/35 bg-gradient-to-tr from-[#2583F7]/25 to-[#A78BFA]/10 shadow-[0_12px_28px_rgba(11,16,32,0.5)] backdrop-blur-md sm:block" />

      {/* Primary Dark Glass Browser Window Mockup */}
      <div className="relative z-10 w-full max-w-[495px] rounded-2xl border border-white/15 bg-[#172238]/85 shadow-[0_28px_70px_-15px_rgba(0,0,0,0.65)] backdrop-blur-xl">
        {/* Browser Chrome */}
        <div className="flex items-center justify-between rounded-t-2xl border-b border-white/10 bg-[#111A2E]/90 px-4 py-3">
          <div className="flex items-center gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
            <span className="h-2.5 w-2.5 rounded-full bg-white/20" />
          </div>
          <div className="flex items-center gap-1.5 rounded-md border border-white/10 bg-[#0B1020]/80 px-3 py-1 font-mono text-[11px] text-[#AAB6CC]">
            <span className="text-[#A78BFA]">https://</span>
            <span>sadiashahzadi.dev</span>
          </div>
          <div className="w-8" />
        </div>

        {/* Mockup Canvas */}
        <div className="p-5 sm:p-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="font-mono text-[11px] font-medium text-[#A78BFA]">
                &lt;DeveloperWorkspace /&gt;
              </p>
              <p className="mt-1 font-display text-base font-bold text-[#F8FAFC]">
                Full-Stack Systems &amp; Brand Design
              </p>
            </div>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#7047EB]/35 bg-[#7047EB]/15 text-[#A78BFA]">
              <Layers className="h-4 w-4" />
            </div>
          </div>

          {/* Layered Interface Grid */}
          <div className="mt-5 grid grid-cols-2 gap-3">
            <div className="rounded-xl border border-white/10 bg-[#111A2E]/85 p-3.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#7047EB]/20 text-[#A78BFA]">
                  <Code2 className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-[#F8FAFC]">
                  Frontend Stack
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-[#AAB6CC]">
                React · TypeScript · Tailwind
              </p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#0B1020]">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#7047EB] to-[#2583F7]" />
              </div>
            </div>

            <div className="rounded-xl border border-white/10 bg-[#111A2E]/85 p-3.5">
              <div className="flex items-center gap-2">
                <span className="flex h-6 w-6 items-center justify-center rounded-md bg-[#2583F7]/20 text-[#60A5FA]">
                  <Terminal className="h-3.5 w-3.5" />
                </span>
                <span className="text-xs font-semibold text-[#F8FAFC]">
                  Creative &amp; Ops
                </span>
              </div>
              <p className="mt-2 font-mono text-[11px] text-[#AAB6CC]">
                Brand UI · QEC · LMS
              </p>
              <div className="mt-2.5 h-1.5 w-full overflow-hidden rounded-full bg-[#0B1020]">
                <div className="h-full w-4/5 rounded-full bg-gradient-to-r from-[#2583F7] to-[#A78BFA]" />
              </div>
            </div>
          </div>

          {/* Dark Terminal Code Snippet */}
          <div className="mt-4 rounded-xl border border-white/10 bg-[#0B1020]/95 p-4 text-left shadow-inner">
            <div className="flex items-center justify-between border-b border-white/10 pb-2">
              <span className="font-mono text-[11px] text-[#AAB6CC]">
                profile.config.ts
              </span>
              <span className="font-mono text-[10px] text-[#A78BFA]">TSX</span>
            </div>
            <pre className="mt-2.5 overflow-x-hidden font-mono text-[11px] leading-relaxed text-[#AAB6CC]">
              <code>
                <span className="text-[#A78BFA]">export const</span>{' '}
                <span className="text-[#F8FAFC]">profile</span> = {'{\n'}
                {'  '}role:{' '}
                <span className="text-[#60A5FA]">'Web Developer &amp; Designer'</span>
                {',\n'}
                {'  '}focus:{' '}
                <span className="text-[#A78BFA]">['React', 'UI Design', 'QEC']</span>
                {',\n'}
                {'  '}location:{' '}
                <span className="text-[#60A5FA]">'Gujrat, Pakistan'</span>
                {'\n};'}
              </code>
            </pre>
          </div>
        </div>
      </div>

      {/* Floating Glass UI Label 1: Web Development */}
      <div className="animate-float-slow pointer-events-none absolute -top-1 right-2 z-20 hidden items-center gap-2 rounded-xl border border-[#2583F7]/35 bg-[#172238]/85 px-3.5 py-2 shadow-[0_12px_30px_rgba(11,16,32,0.6)] backdrop-blur-md sm:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#2583F7]/20 text-[#60A5FA]">
          <Code2 className="h-3.5 w-3.5" />
        </span>
        <span className="font-display text-xs font-semibold tracking-wide text-[#F8FAFC]">
          Web Development
        </span>
      </div>

      {/* Floating Glass UI Label 2: Creative Design */}
      <div className="animate-float-reverse pointer-events-none absolute -bottom-2 left-0 z-20 hidden items-center gap-2 rounded-xl border border-[#7047EB]/40 bg-[#172238]/85 px-3.5 py-2 shadow-[0_12px_30px_rgba(11,16,32,0.6)] backdrop-blur-md sm:flex">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#7047EB]/25 text-[#A78BFA]">
          <Palette className="h-3.5 w-3.5" />
        </span>
        <span className="font-display text-xs font-semibold tracking-wide text-[#F8FAFC]">
          Creative Design
        </span>
      </div>

      {/* Floating Glass UI Label 3: Digital Marketing */}
      <div className="animate-float-slow pointer-events-none absolute right-4 -bottom-4 z-20 hidden items-center gap-2 rounded-xl border border-[#A78BFA]/35 bg-[#172238]/85 px-3.5 py-2 shadow-[0_12px_30px_rgba(11,16,32,0.6)] backdrop-blur-md sm:flex [animation-delay:1.5s]">
        <span className="flex h-6 w-6 items-center justify-center rounded-lg bg-[#A78BFA]/20 text-[#A78BFA]">
          <Megaphone className="h-3.5 w-3.5" />
        </span>
        <span className="font-display text-xs font-semibold tracking-wide text-[#F8FAFC]">
          Digital Marketing
        </span>
      </div>

      {/* Mobile Compact Glass Label Row */}
      <div className="mt-4 flex flex-wrap justify-center gap-2.5 sm:hidden">
        <div className="flex items-center gap-1.5 rounded-lg border border-[#2583F7]/30 bg-[#172238]/85 px-3 py-1.5 backdrop-blur-md">
          <Code2 className="h-3.5 w-3.5 text-[#60A5FA]" />
          <span className="font-display text-xs font-semibold text-[#F8FAFC]">
            Web Development
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg border border-[#7047EB]/35 bg-[#172238]/85 px-3 py-1.5 backdrop-blur-md">
          <Palette className="h-3.5 w-3.5 text-[#A78BFA]" />
          <span className="font-display text-xs font-semibold text-[#F8FAFC]">
            Creative Design
          </span>
        </div>
        <div className="flex items-center gap-1.5 rounded-lg border border-[#A78BFA]/30 bg-[#172238]/85 px-3 py-1.5 backdrop-blur-md">
          <Megaphone className="h-3.5 w-3.5 text-[#A78BFA]" />
          <span className="font-display text-xs font-semibold text-[#F8FAFC]">
            Digital Marketing
          </span>
        </div>
      </div>
    </div>
  );
}

export function Hero() {
  const {hero, contactInfo} = portfolioContent;
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) return;

    let rafId = 0;
    const onScroll = () => {
      if (rafId) return;
      rafId = window.requestAnimationFrame(() => {
        setScrollY(window.scrollY);
        rafId = 0;
      });
    };

    window.addEventListener('scroll', onScroll, {passive: true});
    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId) window.cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <section
      id="top"
      className="relative overflow-hidden border-b border-white/10 bg-gradient-to-b from-[#0B1020] via-[#0E162B] to-[#111A2E] pt-12 pb-16 sm:pt-16 sm:pb-20 lg:pt-20 lg:pb-24"
    >
      {/* Subtle Mesh Gradient Glow Behind Right Visual Stage */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-32 right-[-6%] h-[480px] w-[480px] rounded-full bg-[radial-gradient(circle,rgba(112,71,235,0.22)_0%,rgba(37,131,247,0.12)_45%,transparent_72%)] blur-2xl"
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* Left Column: Clean Introduction & CTAs */}
          <div className="lg:col-span-6">
            <p className="inline-flex items-center rounded-lg border border-[#7047EB]/35 bg-[#172238]/90 px-3 py-1 text-xs font-semibold tracking-wide text-[#A78BFA] sm:text-sm">
              {hero.kicker}
            </p>

            <h1 className="mt-5 font-display text-4xl font-bold tracking-tight sm:text-5xl lg:text-[3.55rem] lg:leading-[1.06] [text-wrap:balance]">
              <span className="bg-gradient-to-r from-[#F8FAFC] via-[#F8FAFC] to-[#A78BFA] bg-clip-text text-transparent">
                {hero.name}
              </span>
            </h1>

            <p className="mt-3 max-w-xl font-display text-lg font-medium leading-snug text-[#F8FAFC]/90 sm:text-xl">
              {hero.headline}
            </p>

            <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-[#AAB6CC] sm:text-base">
              {hero.summary}
            </p>

            {/* Education Callout */}
            <div className="mt-6 flex items-start gap-3 rounded-xl border border-white/10 bg-[#172238]/75 px-4 py-3 backdrop-blur-sm">
              <div className="mt-0.5 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-[#7047EB]/20 text-[#A78BFA]">
                <GraduationCap className="h-4 w-4" aria-hidden="true" />
              </div>
              <div>
                <p className="text-[11px] font-semibold tracking-wide text-[#60A5FA]">
                  Education
                </p>
                <p className="text-sm font-medium text-[#F8FAFC]">
                  {hero.educationText}
                </p>
              </div>
            </div>

            {/* Action Buttons with Subtle Glow */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <a
                href={hero.primaryAction.href}
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl bg-gradient-to-r from-[#7047EB] to-[#2583F7] px-6 py-3 text-sm font-semibold text-[#F8FAFC] shadow-[0_12px_32px_-8px_rgba(112,71,235,0.65)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_16px_38px_-6px_rgba(37,131,247,0.75)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
              >
                <span>{hero.primaryAction.label}</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={hero.secondaryAction.href}
                download="Sadia-Shahzadi-CV.pdf"
                className="inline-flex min-h-[46px] items-center gap-2 rounded-xl border border-white/15 bg-[#172238]/80 px-6 py-3 text-sm font-semibold text-[#F8FAFC] backdrop-blur-sm transition-all duration-200 hover:-translate-y-0.5 hover:border-[#A78BFA]/50 hover:bg-[#172238] hover:shadow-[0_10px_28px_-10px_rgba(167,139,250,0.4)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7047EB]"
              >
                <Download className="h-4 w-4 text-[#A78BFA]" aria-hidden="true" />
                <span>{hero.secondaryAction.label}</span>
              </a>
            </div>

            {/* Clean Contact Metadata Row */}
            <div className="mt-9 flex flex-wrap items-center gap-x-4 gap-y-2 border-t border-white/10 pt-5 text-sm text-[#AAB6CC]">
              <a
                href={`tel:${contactInfo.phone.replace(/[^+\d]/g, '')}`}
                className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC] transition-colors hover:text-[#A78BFA]"
              >
                <Phone className="h-4 w-4 text-[#2583F7]" aria-hidden="true" />
                <span className="tabular-nums">{contactInfo.phone}</span>
              </a>
              <span className="text-white/25" aria-hidden="true">
                ·
              </span>
              <span className="inline-flex items-center gap-1.5 text-[#AAB6CC]">
                <MapPin className="h-4 w-4 text-[#2583F7]" aria-hidden="true" />
                <span>{contactInfo.location}</span>
              </span>
              <span className="text-white/25" aria-hidden="true">
                ·
              </span>
              <a
                href={`mailto:${contactInfo.email}`}
                className="inline-flex items-center gap-1.5 font-medium text-[#F8FAFC] transition-colors hover:text-[#A78BFA]"
              >
                <Mail className="h-4 w-4 text-[#2583F7]" aria-hidden="true" />
                <span>{contactInfo.email}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Abstract Tech Background + Floating Glass UI Labels */}
          <div className="lg:col-span-6">
            <HeroDeveloperVisual scrollY={scrollY} />
          </div>
        </div>
      </div>
    </section>
  );
}
