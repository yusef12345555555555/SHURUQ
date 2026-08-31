import React from 'react';
import { Sparkles } from 'lucide-react';

interface PresenterSignatureProps {
  className?: string;
  variant?: 'floating' | 'inline' | 'compact';
}

export const PresenterSignature: React.FC<PresenterSignatureProps> = ({
  className = '',
  variant = 'inline',
}) => {
  if (variant === 'compact') {
    return (
      <div className={`flex items-center gap-2.5 px-3 py-1.5 rounded-full glass border-amber-500/30 shadow-[0_0_15px_rgba(245,158,11,0.15)] ${className}`}>
        <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        <span className="text-xs text-amber-200/80 font-ibm font-medium">إعداد وتقديم:</span>
        <span className="flex items-center gap-2 bg-gradient-to-r from-amber-200 via-yellow-300 to-amber-400 bg-clip-text text-transparent">
          <span className="font-signature-ar text-base font-bold">شروق رفاعي</span>
          <span className="font-signature-en text-base font-bold">Shorouk Refaay</span>
        </span>
      </div>
    );
  }

  return (
    <div
      id="presenter-golden-signature"
      className={`relative flex flex-col items-center justify-center text-center select-none py-3 px-6 ${className}`}
    >
      {/* Subtle Golden Glow behind the signature */}
      <div className="absolute inset-0 bg-gradient-to-r from-amber-500/0 via-amber-500/10 to-amber-500/0 rounded-3xl blur-xl pointer-events-none" />

      {/* Decorative Gold Header Line with Arabic only */}
      <div className="relative z-10 flex items-center gap-2.5 mb-1.5 opacity-90">
        <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-r from-transparent via-amber-400/50 to-amber-400" />
        <div className="flex items-center gap-1.5 text-amber-400">
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
          <span className="text-xs font-bold tracking-wider text-amber-300 font-ibm">
            إعداد وتقديم
          </span>
          <Sparkles className="w-3.5 h-3.5 text-amber-400 animate-pulse" />
        </div>
        <div className="h-[1px] w-8 sm:w-14 bg-gradient-to-l from-transparent via-amber-400/50 to-amber-400" />
      </div>

      {/* Golden Signature (Arabic + English side by side) */}
      <div className="relative z-10 flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
        <span className="font-signature-ar text-2xl sm:text-4xl font-bold bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(245,158,11,0.45)]">
          شروق رفاعي
        </span>
        <span className="hidden sm:inline-block w-px h-7 bg-gradient-to-b from-transparent via-amber-400/50 to-transparent" />
        <span className="font-signature-en text-2xl sm:text-4xl font-bold bg-gradient-to-r from-amber-100 via-amber-300 to-yellow-400 bg-clip-text text-transparent drop-shadow-[0_2px_14px_rgba(245,158,11,0.45)]">
          Shorouk Refaay
        </span>
      </div>
    </div>
  );
};

