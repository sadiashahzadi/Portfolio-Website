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
    <header className="sticky top-0 z-40 border-b border-white/10 bg-[#0B1020]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-8 px-4 sm:px-6 lg:px-8">
        {/* Zone 1: Single-line Brand Wordmark */}
        <a
          href="#top"
          className="font-display text-lg font-bold tracking-tight text-[#F8FAFC] whitespace-nowrap shrink-0 transition-colors hover:text-[#A78BFA] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7047EB]"
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
                className={`relative whitespace-nowrap shrink-0 py-1.5 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#7047EB] ${
                  isActive
                    ? 'text-[#F8FAFC] font-semibold'
                    : 'text-[#AAB6CC] hover:text-[#F8FAFC]'
                }`}
              >
                {item.label}
                <span
                  aria-hidden="true"
                  className={`absolute right-0 bottom-0 left-0 h-0.5 rounded-full bg-gradient-to-r from-[#7047EB] to-[#2583F7] transition-transform duration-200 origin-left ${
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
            className="hidden sm:inline-flex items-center justify-center rounded-xl border border-[#7047EB]/50 bg-gradient-to-r from-[#7047EB] to-[#2583F7] px-4 py-2 text-sm font-semibold text-[#F8FAFC] shadow-[0_8px_24px_-6px_rgba(112,71,235,0.5)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_12px_28px_-6px_rgba(37,131,247,0.6)] whitespace-nowrap shrink-0 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
          >
            {cta.label}
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-[#111A2E] text-[#F8FAFC] transition-colors hover:border-[#7047EB]/50 hover:bg-[#172238] md:hidden focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#7047EB]"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <nav
          aria-label="Mobile navigation"
          className="border-t border-white/10 bg-[#111A2E] px-4 py-4 shadow-2xl md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((item) => {
              const isActive = activeSection === item.sectionId;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileOpen(false)}
                  className={`flex min-h-[44px] items-center rounded-xl px-3.5 text-base font-medium transition-colors ${
                    isActive
                      ? 'bg-[#7047EB]/20 text-[#A78BFA] font-semibold'
                      : 'text-[#AAB6CC] hover:bg-[#172238] hover:text-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
            <a
              href={cta.href}
              onClick={() => setMobileOpen(false)}
              className="mt-2 flex min-h-[44px] items-center justify-center rounded-xl bg-gradient-to-r from-[#7047EB] to-[#2583F7] px-4 py-2.5 text-base font-semibold text-[#F8FAFC]"
            >
              {cta.label}
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
