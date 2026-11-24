import {ChevronLeft, ChevronRight, ImageOff, X} from 'lucide-react';
import {useEffect, useState} from 'react';
import type {GalleryItem} from '../data/content';

interface LightboxProps {
  items: GalleryItem[];
  activeIndex: number | null;
  onClose: () => void;
  onSelectIndex: (index: number) => void;
}

export function Lightbox({
  items,
  activeIndex,
  onClose,
  onSelectIndex,
}: LightboxProps) {
  const isOpen = activeIndex !== null && items[activeIndex] !== undefined;
  const currentItem = isOpen ? items[activeIndex!] : null;
  const [imageFailed, setImageFailed] = useState(false);

  useEffect(() => {
    setImageFailed(false);
  }, [currentItem?.image]);

  useEffect(() => {
    if (!isOpen || activeIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight' && items.length > 1) {
        onSelectIndex((activeIndex + 1) % items.length);
      } else if (event.key === 'ArrowLeft' && items.length > 1) {
        onSelectIndex((activeIndex - 1 + items.length) % items.length);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, activeIndex, items.length, onClose, onSelectIndex]);

  if (!isOpen || !currentItem || activeIndex === null) {
    return null;
  }

  const handlePrev = () => {
    onSelectIndex((activeIndex - 1 + items.length) % items.length);
  };

  const handleNext = () => {
    onSelectIndex((activeIndex + 1) % items.length);
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-950/85 p-4 backdrop-blur-sm sm:p-6"
      onClick={onClose}
    >
      <div
        className="relative flex max-h-[90vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-slate-800 bg-white shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-slate-200 px-5 py-3.5">
          <div className="min-w-0">
            <p className="truncate text-base font-semibold text-slate-900">
              {currentItem.title}
            </p>
            <p className="truncate text-xs text-slate-500">
              {currentItem.client
                ? `${currentItem.client} · ${currentItem.caption}`
                : `${currentItem.category} · ${currentItem.caption}`}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {items.length > 1 && (
              <span className="hidden font-mono text-xs tabular-nums text-slate-500 sm:inline">
                {activeIndex + 1} / {items.length}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-slate-200 text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-900 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-slate-100 p-4 sm:p-6">
          {imageFailed ? (
            <div className="flex min-h-[280px] w-full max-w-md flex-col items-center justify-center rounded-xl border border-slate-200 bg-white p-8 text-center">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-[#0F766E]">
                <ImageOff className="h-6 w-6" aria-hidden="true" />
              </div>
              <p className="mt-4 text-base font-semibold text-slate-900">
                {currentItem.title}
              </p>
              <p className="mt-1 text-sm text-slate-600">
                {currentItem.caption}
              </p>
              <p className="mt-3 font-mono text-xs break-all text-slate-500">
                {currentItem.image}
              </p>
            </div>
          ) : (
            <img
              src={currentItem.image}
              alt={currentItem.alt}
              referrerPolicy="no-referrer"
              onError={() => setImageFailed(true)}
              className="max-h-[68vh] w-auto max-w-full rounded-lg object-contain shadow-sm"
            />
          )}

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous item"
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next item"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-slate-200 bg-white/95 text-slate-800 shadow-md transition-transform hover:scale-105 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#0F766E]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
