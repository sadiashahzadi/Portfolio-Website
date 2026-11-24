import {
  ClipboardCheck,
  Code2,
  GraduationCap,
  Megaphone,
  PenTool,
  ShoppingBag,
  Video,
} from 'lucide-react';
import {portfolioContent, type ServiceItem} from '../data/content';
import {ScrollReveal} from './ScrollReveal';

const serviceIconMap: Record<ServiceItem['icon'], typeof ClipboardCheck> = {
  coordination: ClipboardCheck,
  web: Code2,
  social: Megaphone,
  design: PenTool,
  video: Video,
  ecommerce: ShoppingBag,
};

export function AboutAndServices() {
  const {about, services} = portfolioContent;

  return (
    <>
      {/* ABOUT ME */}
      <section id="about" className="py-16 sm:py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-12">
              <div className="lg:col-span-4">
                <p className="text-sm font-semibold text-[#0F766E]">Profile</p>
                <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                  {about.heading}
                </h2>
              </div>

              <div className="lg:col-span-8">
                <div className="space-y-4 text-base leading-relaxed text-slate-700">
                  {about.paragraphs.map((paragraph, idx) => (
                    <p key={idx}>{paragraph}</p>
                  ))}
                </div>

                <div className="mt-8 flex items-start gap-4 rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E]">
                    <GraduationCap className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0F766E]">
                      Education
                    </p>
                    <h3 className="mt-0.5 font-display text-base font-bold text-slate-900">
                      {about.education.fullText}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* SERVICES */}
      <section
        id="services"
        className="border-y border-slate-200/80 bg-white py-16 sm:py-20"
      >
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="max-w-2xl">
              <p className="text-sm font-semibold text-[#0F766E]">
                What I Offer
              </p>
              <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
                {services.heading}
              </h2>
              <p className="mt-3 text-base text-slate-600">{services.intro}</p>
            </div>
          </ScrollReveal>

          <div className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.items.map((service, index) => {
              const Icon = serviceIconMap[service.icon];
              return (
                <ScrollReveal key={service.id} delayMs={index * 50}>
                  <article className="flex h-full flex-col rounded-2xl border border-slate-200 bg-[#FAFBFB] p-6 transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-sm">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <h3 className="mt-5 font-display text-lg font-bold text-slate-900">
                      {service.title}
                    </h3>
                    <p className="mt-2.5 text-sm leading-relaxed text-slate-600">
                      {service.description}
                    </p>
                  </article>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
}
