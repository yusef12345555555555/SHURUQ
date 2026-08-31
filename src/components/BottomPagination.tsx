import React from 'react';
import { PresentationStage } from '../types';
import { CHAPTERS } from '../data/presentationData';
import { ChevronRight, ChevronLeft, Home, Award } from 'lucide-react';

interface BottomPaginationProps {
  currentStage: PresentationStage;
  onSelectStage: (stage: PresentationStage) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const BottomPagination: React.FC<BottomPaginationProps> = ({
  currentStage,
  onSelectStage,
  onNext,
  onPrev,
}) => {
  const isIntro = currentStage === 'intro';
  const isOutro = currentStage === 'outro';

  // Do not show bottom pagination during full-screen Intro & Outro
  if (isIntro || isOutro) {
    return null;
  }

  // Get active chapter index
  const activeChapterIndex = CHAPTERS.findIndex((c) => c.stage === currentStage);
  const isFirstChapter = activeChapterIndex === 0;
  const isLastChapter = activeChapterIndex === CHAPTERS.length - 1;

  return (
    <nav
      aria-label="شريط التنقل السفلي"
      className="fixed bottom-4 sm:bottom-6 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none flex justify-center font-ibm"
    >
      <div className="pointer-events-auto max-w-2xl w-full mx-auto flex items-center justify-between gap-2 p-2 sm:p-2.5 rounded-2xl sm:rounded-3xl glass-panel border border-white/20 shadow-[0_10px_35px_rgba(0,0,0,0.6)] backdrop-blur-2xl">
        
        {/* Previous Button */}
        <button
          id="pagination-btn-prev"
          type="button"
          onClick={onPrev}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer glass text-slate-200 hover:text-white hover:bg-white/15 border-white/10 hover:border-white/25 active:scale-95 shadow-md"
          title="الانتقال إلى الفصل السابق"
        >
          <ChevronRight className="w-4 h-4 text-blue-400" />
          <span>السابق</span>
        </button>

        {/* Center: Sequence of Chapter Pages 01 to 06 */}
        <div className="flex items-center justify-center gap-1.5 sm:gap-2 flex-wrap">
          {CHAPTERS.map((ch, idx) => {
            const isActive = currentStage === ch.stage;
            const paddedNumber = `0${idx + 1}`;
            return (
              <button
                id={`pagination-btn-page-${idx + 1}`}
                key={ch.id}
                type="button"
                onClick={() => onSelectStage(ch.stage)}
                title={`${ch.title} — ${ch.titleEn}`}
                className={`relative min-w-[34px] sm:min-w-[40px] h-[34px] sm:h-[38px] px-2 rounded-xl font-mono text-xs sm:text-sm font-black transition-all duration-200 cursor-pointer flex items-center justify-center ${
                  isActive
                    ? 'glow-btn text-white scale-110 shadow-lg shadow-blue-500/40 ring-2 ring-blue-400/50 border border-white/30 z-10'
                    : 'glass text-slate-400 hover:text-white hover:bg-white/15 border-white/10 hover:border-white/20'
                }`}
              >
                <span>{paddedNumber}</span>
                {isActive && (
                  <span className="absolute -top-1 -right-1 w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee] animate-ping" />
                )}
              </button>
            );
          })}
        </div>

        {/* Next Button */}
        <button
          id="pagination-btn-next"
          type="button"
          onClick={onNext}
          className="flex items-center gap-1 sm:gap-2 px-3 sm:px-4 py-2 rounded-xl sm:rounded-2xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer glow-btn text-white hover:bg-white/20 border-white/20 active:scale-95 shadow-lg shadow-blue-500/20"
          title="الانتقال إلى الفصل التالي"
        >
          <span>التالي</span>
          <ChevronLeft className="w-4 h-4 text-white" />
        </button>

      </div>
    </nav>
  );
};
