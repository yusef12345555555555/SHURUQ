import React from 'react';

interface ChapterHeaderProps {
  number: string;
  titleAr: string;
  subtitleAr: string;
  labelEn: string;
  accentColor?: 'cyan' | 'blue' | 'violet' | 'magenta' | 'amber' | 'emerald';
}

export const ChapterHeader: React.FC<ChapterHeaderProps> = ({
  number,
  titleAr,
  subtitleAr,
  labelEn,
  accentColor = 'cyan'
}) => {
  const colorMap = {
    cyan: {
      line: 'bg-cyan-500',
      glow: 'shadow-[0_0_20px_#06b6d4]',
      badge: 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300',
      num: 'text-cyan-500/10 border-cyan-500/20'
    },
    blue: {
      line: 'bg-blue-500',
      glow: 'shadow-[0_0_20px_#3b82f6]',
      badge: 'bg-blue-950/60 border-blue-500/40 text-blue-300',
      num: 'text-blue-500/10 border-blue-500/20'
    },
    violet: {
      line: 'bg-violet-500',
      glow: 'shadow-[0_0_20px_#8b5cf6]',
      badge: 'bg-violet-950/60 border-violet-500/40 text-violet-300',
      num: 'text-violet-500/10 border-violet-500/20'
    },
    magenta: {
      line: 'bg-fuchsia-500',
      glow: 'shadow-[0_0_20px_#d946ef]',
      badge: 'bg-fuchsia-950/60 border-fuchsia-500/40 text-fuchsia-300',
      num: 'text-fuchsia-500/10 border-fuchsia-500/20'
    },
    amber: {
      line: 'bg-amber-500',
      glow: 'shadow-[0_0_20px_#f59e0b]',
      badge: 'bg-amber-950/60 border-amber-500/40 text-amber-300',
      num: 'text-amber-500/10 border-amber-500/20'
    },
    emerald: {
      line: 'bg-emerald-500',
      glow: 'shadow-[0_0_20px_#10b981]',
      badge: 'bg-emerald-950/60 border-emerald-500/40 text-emerald-300',
      num: 'text-emerald-500/10 border-emerald-500/20'
    },
  };

  const theme = colorMap[accentColor] || colorMap.cyan;

  return (
    <div className="relative py-12 mb-8 overflow-hidden select-none">
      {/* Giant Architectural Cropped Chapter Number */}
      <div 
        className={`absolute -top-10 -right-6 sm:right-4 text-[130px] sm:text-[180px] md:text-[220px] font-mono font-black select-none pointer-events-none opacity-15 tracking-tighter leading-none ${theme.num}`}
        style={{
          WebkitTextStroke: '1.5px currentColor',
          color: 'transparent'
        }}
      >
        {number}
      </div>

      {/* Volumetric Vertical Accent Light Line */}
      <div className="relative z-10 space-y-4 text-right pr-4 border-r-2 border-slate-800">
        <div className={`w-1 h-6 rounded-full ${theme.line} ${theme.glow}`} />

        {/* English Technical Label & Badge */}
        <div className="flex flex-wrap items-center gap-3">
          <span className={`px-3 py-0.5 rounded-full border text-[11px] font-mono tracking-widest ${theme.badge}`}>
            CHAPTER {number} // {labelEn}
          </span>
          <span className="text-xs font-mono text-slate-500">TEBA ACADEMY RESEARCH</span>
        </div>

        {/* Dominant Arabic Titles */}
        <div className="space-y-2">
          <h2 className="text-xl sm:text-2xl font-bold text-slate-400">
            {titleAr}
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black text-slate-100 leading-tight">
            {subtitleAr}
          </h1>
        </div>
      </div>
    </div>
  );
};
