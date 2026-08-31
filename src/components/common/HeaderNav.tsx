import React from 'react';
import { 
  Maximize2, 
  Minimize2, 
  Layers, 
  GraduationCap
} from 'lucide-react';
import { ChapterMeta } from '../../types';

interface HeaderNavProps {
  currentChapter: ChapterMeta;
  allChapters: ChapterMeta[];
  currentIndex: number;
  totalChapters: number;
  onSelectChapter: (index: number) => void;
  onToggleChapterMenu: () => void;
  isChapterMenuOpen: boolean;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
}

export const HeaderNav: React.FC<HeaderNavProps> = ({
  currentChapter,
  allChapters,
  currentIndex,
  totalChapters,
  onSelectChapter,
  onToggleChapterMenu,
  isChapterMenuOpen,
  isFullscreen,
  onToggleFullscreen,
}) => {
  // During Cinematic Intro, completely hide the header for maximum cinematic immersion
  if (currentIndex === 0) {
    return null;
  }

  const progressPercent = ((currentIndex) / (totalChapters - 1)) * 100;

  return (
    <header 
      id="main-academic-header" 
      className="fixed top-0 inset-x-0 z-40 bg-[#02050e]/80 backdrop-blur-md border-b border-slate-800/80 transition-all duration-300"
    >
      {/* Top progress line */}
      <div className="w-full h-0.5 bg-slate-900 overflow-hidden">
        <div 
          className="h-full bg-gradient-to-r from-cyan-500 via-violet-500 to-emerald-500 transition-all duration-500 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-12 sm:h-14 flex items-center justify-between gap-4">
        {/* Academic Identity & Presenter Title */}
        <div className="flex items-center gap-3">
          <div
            id="academic-identity-badge"
            className="flex items-center gap-2 px-2.5 py-1 rounded-xl bg-slate-900/90 border border-slate-800"
          >
            <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 shadow-sm font-black text-xs">
              <GraduationCap className="w-3.5 h-3.5" />
            </div>
            <div className="text-right">
              <div className="flex items-center gap-1.5">
                <span className="text-xs font-bold text-slate-100 tracking-wide">شروق رفاعي</span>
                <span className="text-[10px] px-1.5 py-0.2 rounded bg-cyan-950 text-cyan-400 border border-cyan-800/60 font-mono">طيبة المعادي</span>
              </div>
            </div>
          </div>

          <div className="hidden md:block h-4 w-px bg-slate-800" />

          {/* Current Chapter Indicator */}
          <button
            id="chapter-menu-toggle-btn"
            onClick={onToggleChapterMenu}
            className="hidden sm:flex items-center gap-2 px-3 py-1 rounded-xl hover:bg-slate-900/80 border border-transparent hover:border-slate-800 transition-all text-slate-300 hover:text-white cursor-pointer"
          >
            <Layers className="w-3.5 h-3.5 text-cyan-400" />
            <span className="text-xs font-mono text-cyan-400/90">[{currentChapter.number}/{String(totalChapters - 1).padStart(2, '0')}]</span>
            <span className="text-xs font-semibold max-w-[200px] truncate text-slate-200">
              {currentChapter.titleAr}
            </span>
          </button>
        </div>

        {/* Header controls */}
        <div className="flex items-center gap-2">
          {/* Fullscreen Toggle */}
          <button
            id="fullscreen-toggle-btn"
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'إنهاء وضع ملء الشاشة (F)' : 'ملء الشاشة (F)'}
            className="p-1.5 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700 transition-all cursor-pointer"
          >
            {isFullscreen ? <Minimize2 className="w-4 h-4 text-amber-400" /> : <Maximize2 className="w-4 h-4" />}
          </button>
        </div>
      </div>

      {/* Chapter Dropdown Navigator if open */}
      {isChapterMenuOpen && (
        <div 
          id="chapter-quick-menu-drawer"
          className="bg-[#02050e]/98 border-b border-slate-800 px-4 py-4 max-h-[70vh] overflow-y-auto shadow-2xl"
        >
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-3">
              <span className="text-xs font-semibold text-slate-400">فهرس المحطات الأكاديمية</span>
              <span className="text-[11px] text-cyan-400 font-mono">اضغط على أي محطة للانتقال الفوري</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
              {allChapters.map((ch, idx) => {
                const isActive = idx === currentIndex;
                return (
                  <button
                    key={ch.id}
                    onClick={() => onSelectChapter(idx)}
                    className={`flex items-start gap-2.5 p-2.5 rounded-xl text-right transition-all border cursor-pointer ${
                      isActive
                        ? 'bg-cyan-950/50 border-cyan-500 text-cyan-200 shadow-md'
                        : 'bg-slate-900/60 border-slate-800/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/50 hover:border-slate-700'
                    }`}
                  >
                    <span className={`text-[11px] font-mono px-1.5 py-0.5 rounded ${
                      isActive ? 'bg-cyan-500 text-slate-950 font-black' : 'bg-slate-800 text-slate-400'
                    }`}>
                      {ch.number}
                    </span>
                    <div className="flex-1 min-w-0">
                      <div className="text-xs font-bold truncate text-slate-200">{ch.titleAr}</div>
                      <div className="text-[10px] text-slate-500 truncate">{ch.titleEn}</div>
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
