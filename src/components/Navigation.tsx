import React, { useState } from 'react';
import { PresentationStage } from '../types';
import { CHAPTERS } from '../data/presentationData';
import { Maximize, Minimize, BookOpen } from 'lucide-react';

interface NavigationProps {
  currentStage: PresentationStage;
  onSelectStage: (stage: PresentationStage) => void;
  onNext: () => void;
  onPrev: () => void;
}

export const Navigation: React.FC<NavigationProps> = ({
  currentStage,
  onSelectStage,
}) => {
  const [isFullscreen, setIsFullscreen] = useState(false);

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen().catch(() => {});
      setIsFullscreen(true);
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen().catch(() => {});
        setIsFullscreen(false);
      }
    }
  };

  // Get active chapter info
  const activeChapterIndex = CHAPTERS.findIndex((c) => c.stage === currentStage);
  const activeChapter = activeChapterIndex >= 0 ? CHAPTERS[activeChapterIndex] : null;

  return (
    <header className="fixed top-0 inset-x-0 z-40 px-3 sm:px-6 py-2.5 sm:py-3 pointer-events-none font-ibm">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 pointer-events-auto">
        
        {/* Right (RTL right): Academic Presentation Title */}
        <div 
          onClick={() => onSelectStage('intro')}
          className="flex items-center gap-3 glass px-3.5 sm:px-4 py-2 rounded-2xl shadow-xl shadow-black/40 border-white/10 cursor-pointer hover:bg-white/10 transition-all duration-200"
        >
          <div className="w-9 h-9 rounded-xl glass flex items-center justify-center border-blue-500/30 shadow-inner shrink-0 text-blue-400">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs sm:text-sm font-bold tracking-wide text-white">
                الذكاء الاصطناعي ونظم المعلومات
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              من البيانات إلى القرار الذكي
            </p>
          </div>
        </div>

        {/* Center: Dynamic Active Stage Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 glass px-4 py-2 rounded-2xl shadow-lg border-white/10">
          {activeChapter && (
            <div className="flex items-center gap-2 text-xs">
              <span className="px-2 py-0.5 rounded-md glass text-cyan-300 font-mono font-bold border-cyan-500/30">
                الفصل ٠{activeChapter.id}
              </span>
              <span className="text-slate-200 font-medium">
                {activeChapter.title}
              </span>
            </div>
          )}
        </div>

        {/* Left (RTL left): Fullscreen Toggle */}
        <div className="flex items-center gap-3">
          {/* Fullscreen Toggle */}
          <button
            id="nav-btn-fullscreen"
            onClick={toggleFullscreen}
            title={isFullscreen ? 'إنهاء وضع ملء الشاشة' : 'ملء الشاشة للعرض'}
            className="p-2.5 glass rounded-2xl text-slate-300 hover:text-white hover:bg-white/15 transition shadow-lg cursor-pointer border-white/10"
          >
            {isFullscreen ? (
              <Minimize className="w-4 h-4" />
            ) : (
              <Maximize className="w-4 h-4" />
            )}
          </button>
        </div>

      </div>
    </header>
  );
};
