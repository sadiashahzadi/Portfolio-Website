import {Menu, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import {portfolioContent} from '../data/content';

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState<string>('');
  const {brand, links, cta} = portfolioContent.navigation;

  useEffect(() => {
    const sectionIds = [...links.map((l) => l.sectionId), 'contact'];
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (elements.length === 0 || typeof IntersectionObserver === 'undefined') {
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        }
      },
      {rootMargin: '-35% 0px -55% 0px', threshold: 0.01},
    );

    for (const el of elements) {
      observer.observe(el);
    }

    const handleScrollTop = () => {
      if (window.scrollY < 180) {
        setActiveSection('');
      }
    };
    window.addEventListener('scroll', handleScrollTop, {passive: true});

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScrollTop);
    };
  }, [links]);

  return (
    <header className="sticky top-0 z-40 border-b border-[#E6E8EF]/85 bg-white/85 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[#111827] whitespace-nowrap shrink-0 transition-colors hover:text-[#7657E8] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7657E8]"
        >
          {brand}
        </a>

        {/* Zone 2: Single-line Nav Links with Active Indicator */}
        <nav
          aria-label="Primary navigation"
          className="hidden md:flex items-center gap-8 text-sm font-medium"
        >
          {links.map((item) => {
            const isActive = activeSection === item.sectionId;
            return (
              <a
                key={item.href}
                href={item.href}
                className={`relative whitespace-nowrap shrink-0 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7657E8] ${
                  isActive
                    ? 'text-[#111827] font-semibold'
                    : 'text-slate-600 hover:text-[#7657E8]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-[#7657E8] transition-transform duration-200 origin-left ${
                    isActive ? 'scale-x-100' : 'scale-x-0'
                  }`}
                />
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Contact Button + Mobile Hamburger */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={cta.href}
            className="hidden sm:inline-flex items-center justify-center rounded-lg bg-[#111827] px-4 py-2 text-sm font-semibold text-white shadow-xs transition-all duration-200 hover:-translate-y-0.5 hover:bg-[#7657E8] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
          >
            {cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#E6E8EF] bg-white text-[#111827] transition-colors hover:border-[#7657E8]/40 hover:bg-[#EEE9FF]/40 md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7657E8]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-[#E6E8EF] bg-white px-4 py-4 shadow-lg md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-lg px-3 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#EEE9FF]/70 text-[#7657E8] font-semibold'
                      : 'text-slate-700 hover:bg-[#FAFAFC] hover:text-[#7657E8]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-lg bg-[#111827] px-4 py-2.5 text-base font-semibold text-white transition-colors hover:bg-[#7657E8]"
            >
              {cta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
