import React from "react";
import { ChevronRight, ChevronLeft, MousePointer } from "lucide-react";
import { ChapterMeta } from "../../types";

interface PresentationControlsProps {
  currentIndex: number;
  totalChapters: number;
  currentChapter: ChapterMeta;
  onNext: () => void;
  onPrev: () => void;
  isPresentationMode: boolean;
  laserActive: boolean;
  onToggleLaser: () => void;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentIndex,
  totalChapters,
  currentChapter,
  onNext,
  onPrev,
  isPresentationMode,
  laserActive,
  onToggleLaser,
}) => {
  // During Cinematic Intro, completely hide the bottom controls for maximum cinematic immersion
  if (currentIndex === 0) {
    return null;
  }

  const isFirst = currentIndex === 0;
  const isLast = currentIndex === totalChapters - 1;

  return (
    <div
      id="bottom-presentation-hud"
      className={`fixed bottom-4 inset-x-0 z-40 transition-all duration-300 pointer-events-none flex justify-center px-4`}
    >
      <div
        className={`pointer-events-auto flex items-center gap-2 sm:gap-4 p-2 sm:p-2.5 rounded-2xl bg-[#030712]/90 backdrop-blur-xl border border-slate-800/90 shadow-2xl shadow-black/80 transition-all duration-300 ${
          isPresentationMode
            ? "scale-105 border-violet-500/50 bg-[#060b1e]/95 shadow-violet-950/40"
            : ""
        }`}
      >
        {/* Previous Button */}
        <button
          id="prev-chapter-btn"
          onClick={() => {
            if (!isFirst) onPrev();
          }}
          disabled={isFirst}
          title="المحطة السابقة (السهم الأيسر ←)"
          className={`flex items-center gap-1.5 px-3 sm:px-4 py-2 rounded-xl font-bold text-xs transition-all ${
            isFirst
              ? "opacity-30 cursor-not-allowed bg-slate-900/50 text-slate-600"
              : "bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 border border-slate-800 hover:border-cyan-500/40"
          }`}
        >
          <ChevronRight className="w-4 h-4" />
          <span className="hidden sm:inline">السابق</span>
        </button>

        {/* Chapter Progress Indicators (Dots) */}
        <div className="flex items-center gap-1 px-1 sm:px-2">
          {Array.from({ length: totalChapters }).map((_, idx) => {
            const isActive = idx === currentIndex;
            return (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  isActive
                    ? "w-6 bg-gradient-to-r from-cyan-400 to-violet-500 shadow-sm shadow-cyan-400/50"
                    : idx < currentIndex
                      ? "w-2 bg-slate-600"
                      : "w-1.5 bg-slate-800"
                }`}
                title={`المحطة ${idx}`}
              />
            );
          })}
        </div>

        {/* Chapter Meta Pill */}
        <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-950/80 border border-slate-800/80 text-right">
          <span className="text-[11px] font-mono text-cyan-400">
            {currentChapter.number}
          </span>
          <span className="text-xs font-bold text-slate-200 max-w-[160px] truncate">
            {currentChapter.titleAr}
          </span>
        </div>

        {/* Laser Pointer Tool for Presentation */}
        <button
          id="laser-pointer-toggle-btn"
          onClick={onToggleLaser}
          title={
            laserActive
              ? "تعطيل مؤشر الليزر التفاعلي"
              : "تفعيل مؤشر الليزر التفاعلي للشرح"
          }
          className={`p-2 rounded-xl border text-xs transition-all ${
            laserActive
              ? "bg-rose-950/60 border-rose-500 text-rose-300 shadow-sm shadow-rose-500/30 ring-2 ring-rose-500/20"
              : "bg-slate-900 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800"
          }`}
        >
          <MousePointer
            className={`w-4 h-4 ${laserActive ? "text-rose-400 animate-pulse" : ""}`}
          />
        </button>

        {/* Next Button */}
        <button
          id="next-chapter-btn"
          onClick={() => {
            onNext();
          }}
          title=" التالي (السهم الأيمن → أو المسافة)"
          className="flex items-center gap-1.5 px-4 sm:px-5 py-2 rounded-xl font-bold text-xs transition-all shadow-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 shadow-cyan-500/25 hover:shadow-cyan-500/40 scale-100 hover:scale-[1.02]"
        >
          <span>{isLast ? "عرض النهاية" : "التالي "}</span>
          <ChevronLeft className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
