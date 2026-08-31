import React from 'react';
import { Sparkles } from 'lucide-react';

/**
 * Golden signature footer shown at the bottom of every page/chapter.
 * Arabic name on the right, English name on the left, matching the
 * cinematic gold-gradient signature style used across the presentation.
 */
export const PageSignatureFooter: React.FC = () => {
  return (
    <div className="relative z-10 mt-10 sm:mt-16 pt-6 pb-2 flex items-center justify-center">
      <div className="flex items-center gap-3 sm:gap-5">
        <div className="h-px w-10 sm:w-20 bg-gradient-to-r from-transparent via-amber-400/60 to-amber-400" />

        <div className="flex items-center gap-2.5 sm:gap-3.5 px-4 py-2 rounded-2xl bg-slate-950/60 border border-amber-500/20 shadow-[0_0_30px_-8px_rgba(245,158,11,0.35)] backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse-subtle" />

          <span className="font-signature-ar text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
            شروق رفاعي
          </span>

          <span className="text-amber-500/50 text-sm">•</span>

          <span className="font-signature-en text-xl sm:text-2xl font-bold bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_10px_rgba(245,158,11,0.4)]">
            Shorouk Refaay
          </span>

          <Sparkles className="w-4 h-4 text-amber-400 animate-pulse-subtle" />
        </div>

        <div className="h-px w-10 sm:w-20 bg-gradient-to-l from-transparent via-amber-400/60 to-amber-400" />
      </div>
    </div>
  );
};
