import {ChevronLeft, ChevronRight, X} from 'lucide-react';
import {type TouchEvent, useCallback, useEffect, useRef} from 'react';
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
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const handlePrev = useCallback(() => {
    if (activeIndex === null || items.length <= 1) return;
    onSelectIndex((activeIndex - 1 + items.length) % items.length);
  }, [activeIndex, items.length, onSelectIndex]);

  const handleNext = useCallback(() => {
    if (activeIndex === null || items.length <= 1) return;
    onSelectIndex((activeIndex + 1) % items.length);
  }, [activeIndex, items.length, onSelectIndex]);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      } else if (event.key === 'ArrowRight') {
        handleNext();
      } else if (event.key === 'ArrowLeft') {
        handlePrev();
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose, handleNext, handlePrev]);

  if (!isOpen || !currentItem || activeIndex === null) {
    return null;
  }

  const handleTouchStart = (event: TouchEvent<HTMLDivElement>) => {
    if (event.touches.length === 1) {
      touchStartX.current = event.touches[0].clientX;
      touchStartY.current = event.touches[0].clientY;
    }
  };

  const handleTouchEnd = (event: TouchEvent<HTMLDivElement>) => {
    if (
      touchStartX.current === null ||
      touchStartY.current === null ||
      event.changedTouches.length === 0
    ) {
      return;
    }

    const deltaX = event.changedTouches[0].clientX - touchStartX.current;
    const deltaY = event.changedTouches[0].clientY - touchStartY.current;
    touchStartX.current = null;
    touchStartY.current = null;

    if (Math.abs(deltaX) > 45 && Math.abs(deltaX) > Math.abs(deltaY)) {
      if (deltaX < 0) {
        handleNext();
      } else {
        handlePrev();
      }
    }
  };

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={currentItem.title}
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0B1020]/90 p-3 backdrop-blur-md sm:p-6"
      onClick={onClose}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      <div
        className="relative flex max-h-[94vh] w-full max-w-5xl flex-col overflow-hidden rounded-2xl border border-white/15 bg-[#111A2E] shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-center justify-between gap-4 border-b border-white/10 px-4 py-3 sm:px-5 sm:py-3.5">
          <div className="min-w-0">
            <p className="truncate text-sm font-semibold text-[#F8FAFC] sm:text-base">
              {currentItem.title}
            </p>
            <p className="truncate text-xs text-[#AAB6CC]">
              {currentItem.client
                ? `${currentItem.client} · ${currentItem.category}`
                : currentItem.category}
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {items.length > 1 && (
              <span className="font-mono text-xs tabular-nums text-[#AAB6CC]">
                {activeIndex + 1} / {items.length}
              </span>
            )}
            <button
              type="button"
              onClick={onClose}
              aria-label="Close preview"
              className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-white/12 bg-[#172238] text-[#F8FAFC] transition-colors hover:border-[#7047EB]/50 hover:text-[#A78BFA] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
            >
              <X className="h-5 w-5" />
            </button>
          </div>
        </div>

        <div className="relative flex flex-1 items-center justify-center overflow-auto bg-[#0B1020] p-3 sm:p-6">
          <img
            src={currentItem.image}
            alt={currentItem.alt}
            referrerPolicy="no-referrer"
            className="max-h-[78vh] h-auto w-auto max-w-full rounded-lg object-contain shadow-lg"
          />

          {items.length > 1 && (
            <>
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous post"
                className="absolute left-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#172238]/95 text-[#F8FAFC] shadow-lg transition-transform hover:scale-105 hover:border-[#7047EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next post"
                className="absolute right-3 top-1/2 -translate-y-1/2 inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-[#172238]/95 text-[#F8FAFC] shadow-lg transition-transform hover:scale-105 hover:border-[#7047EB]/60 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#A78BFA]"
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
