import {
  CalendarCheck,
  ClipboardList,
  FileSpreadsheet,
  FileText,
  GraduationCap,
  Maximize2,
} from 'lucide-react';
import {useState} from 'react';
import {portfolioContent, type AdminWorkItem} from '../data/content';
import {Lightbox} from './Lightbox';
import {ScrollReveal} from './ScrollReveal';

const adminIconMap: Record<AdminWorkItem['icon'], typeof ClipboardList> = {
  attendance: ClipboardList,
  excel: FileSpreadsheet,
  reports: FileText,
  events: CalendarCheck,
  exams: GraduationCap,
};

export function AcademicAdminSection() {
  const {academicAdmin} = portfolioContent;
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  return (
    <section
      id="academic-work"
      className="border-y border-slate-200/80 bg-white py-16 sm:py-20"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="max-w-2xl">
            <p className="text-sm font-semibold text-[#0F766E]">
              Institutional Operations
            </p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-slate-900">
              {academicAdmin.heading}
            </h2>
            <p className="mt-3 text-base text-slate-600">
              {academicAdmin.intro}
            </p>
          </div>
        </ScrollReveal>

        <div className="mt-10 grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12">
          {/* Clean Icon List of Responsibilities */}
          <div className="lg:col-span-6">
            <div className="divide-y divide-slate-200/80 rounded-2xl border border-slate-200 bg-[#FAFBFB] px-6 py-2">
              {academicAdmin.responsibilities.map((item) => {
                const Icon = adminIconMap[item.icon];
                return (
                  <div key={item.id} className="flex items-start gap-4 py-5">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#0F766E]/10 text-[#0F766E]">
                      <Icon className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <div>
                      <h3 className="font-display text-base font-bold text-slate-900">
                        {item.title}
                      </h3>
                      <p className="mt-1 text-sm leading-relaxed text-slate-600">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Anonymized Document Sample Gallery */}
          <div className="lg:col-span-6">
            <div className="flex items-baseline justify-between gap-4">
              <h3 className="font-display text-lg font-bold text-slate-900">
                Document Samples (Anonymized Templates)
              </h3>
              <span className="text-xs text-slate-500">Click to preview</span>
            </div>

            <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2">
              {academicAdmin.documentSamples.map((doc, idx) => (
                <ScrollReveal
                  key={doc.id}
                  delayMs={idx * 50}
                  className={idx === 0 ? 'sm:col-span-2' : ''}
                >
                  <button
                    type="button"
                    onClick={() => setLightboxIndex(idx)}
                    className="group flex w-full flex-col overflow-hidden rounded-2xl border border-slate-200 bg-[#FAFBFB] text-left transition-[transform,box-shadow,border-color] duration-200 hover:-translate-y-0.5 hover:border-slate-300 hover:shadow-md focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
                  >
                    <div
                      className={`relative w-full overflow-hidden bg-slate-100 ${
                        idx === 0 ? 'aspect-[16/9]' : 'aspect-[4/3]'
                      }`}
                    >
                      <img
                        src={doc.image}
                        alt={doc.alt}
                        referrerPolicy="no-referrer"
                        loading="lazy"
                        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                      />
                      <span
                        aria-hidden="true"
                        className="absolute right-3 bottom-3 inline-flex h-9 w-9 items-center justify-center rounded-lg bg-slate-900/75 text-white opacity-0 transition-opacity duration-200 group-hover:opacity-100"
                      >
                        <Maximize2 className="h-4 w-4" />
                      </span>
                    </div>

                    <div className="p-4">
                      <p className="text-xs font-semibold text-[#0F766E]">
                        {doc.category}
                      </p>
                      <p className="mt-1 font-display text-sm font-bold text-slate-900">
                        {doc.title}
                      </p>
                      <p className="mt-1 text-xs text-slate-600">{doc.caption}</p>
                    </div>
                  </button>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Lightbox
        items={academicAdmin.documentSamples}
        activeIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onSelectIndex={(idx) => setLightboxIndex(idx)}
      />
    </section>
  );
}
