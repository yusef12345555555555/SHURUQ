import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  RotateCcw, 
  FastForward,
  Sparkles,
  Award,
  BookOpen
} from 'lucide-react';
import { PresenterSignature } from './PresenterSignature';

interface FinalOutroProps {
  onRestart: () => void;
}

type OutroPhase = 
  | 'concept-data'
  | 'concept-info'
  | 'concept-ai'
  | 'concept-decision'
  | 'closing-message';

export const FinalOutro: React.FC<FinalOutroProps> = ({ onRestart }) => {
  const [phase, setPhase] = useState<OutroPhase>('concept-data');

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'concept-data') {
      timer = setTimeout(() => setPhase('concept-info'), 2600);
    } else if (phase === 'concept-info') {
      timer = setTimeout(() => setPhase('concept-ai'), 2600);
    } else if (phase === 'concept-ai') {
      timer = setTimeout(() => setPhase('concept-decision'), 2800);
    } else if (phase === 'concept-decision') {
      timer = setTimeout(() => setPhase('closing-message'), 3000);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const jumpToClosing = () => {
    setPhase('closing-message');
  };

  const restartOutro = () => {
    setPhase('concept-data');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030712] text-white flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden font-ibm">
      
      {/* Deep Atmosphere Visual Mesh Background (Matches Intro World) */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-1/4 w-[600px] h-[600px] bg-emerald-600/10 rounded-full blur-[130px]" />
        <div className="absolute bottom-1/3 left-1/4 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[130px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      {/* Top Academic Header */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between opacity-95 pt-2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
          <span className="text-xs tracking-widest text-slate-400 font-mono uppercase hidden sm:inline">
            Academic Conclusion • خاتمة العرض التقديمي
          </span>
          <PresenterSignature variant="compact" />
        </div>
        <button
          onClick={jumpToClosing}
          id="btn-skip-outro-top"
          className="text-xs text-slate-300 hover:text-emerald-300 transition-colors flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full glass border-white/10 hover:border-emerald-500/40"
          title="تخطي الخاتمة والوصول لزر إعادة التجربة"
        >
          <span>تخطي الخاتمة</span>
          <FastForward className="w-3.5 h-3.5 text-emerald-400" />
        </button>
      </div>

      {/* Main Single-Element Stage */}
      <div className="relative z-10 w-full max-w-4xl min-h-[380px] flex items-center justify-center text-center my-auto">
        <AnimatePresence mode="wait">

          {/* ================= 1. CONCEPT: البيانات ================= */}
          {phase === 'concept-data' && (
            <motion.div
              key="outro-concept-data"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400">
                البيانات
              </h2>
              <p className="text-sm sm:text-lg text-slate-400 font-light">
                نقطة البداية لكل منظومة
              </p>
            </motion.div>
          )}

          {/* ================= 3. CONCEPT: المعلومات ================= */}
          {phase === 'concept-info' && (
            <motion.div
              key="outro-concept-info"
              initial={{ opacity: 0, y: 20, filter: 'blur(8px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -20, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300">
                المعلومات
              </h2>
              <p className="text-sm sm:text-lg text-blue-300/80 font-light">
                السياق المنظم والفهم المشترك
              </p>
            </motion.div>
          )}

          {/* ================= 4. CONCEPT: الذكاء الاصطناعي ================= */}
          {phase === 'concept-ai' && (
            <motion.div
              key="outro-concept-ai"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.55, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300">
                الذكاء الاصطناعي
              </h2>
              <p className="text-sm sm:text-lg text-purple-300 font-light">
                الاستكشاف والتنبؤ المتقدم
              </p>
            </motion.div>
          )}

          {/* ================= 5. CONCEPT: القرار الذكي ================= */}
          {phase === 'concept-decision' && (
            <motion.div
              key="outro-concept-decision"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(10px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-3"
            >
              <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 drop-shadow-[0_0_40px_rgba(52,211,153,0.5)]">
                القرار الذكي
              </h2>
              <p className="text-sm sm:text-lg text-emerald-300 font-light">
                الهدف الأسمى لكل تحليل
              </p>
            </motion.div>
          )}

          {/* ================= 6. FINAL CLOSING MESSAGE & RESTART ================= */}
          {phase === 'closing-message' && (
            <motion.div
              key="outro-closing-message"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-2xl flex flex-col items-center justify-center gap-8"
            >
              {/* Academic Cap Icon */}
              <div className="w-16 h-16 rounded-3xl bg-slate-900/90 border border-emerald-500/40 p-1 shadow-2xl flex items-center justify-center text-emerald-400">
                <BookOpen className="w-8 h-8" />
              </div>

              {/* Final Statements */}
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl text-center w-full">
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-relaxed mb-4">
                  "من البيانات تبدأ الحكاية... وبالوعي نصنع القرار."
                </h2>
                <div className="h-[1px] w-24 bg-gradient-to-r from-transparent via-emerald-400 to-transparent mx-auto my-4" />
                <p className="text-xl sm:text-2xl font-bold text-emerald-300 font-ibm">
                  شكرًا لحسن الاستماع
                </p>
                <p className="text-xs sm:text-sm text-slate-400 mt-2 font-light mb-4">
                  نظم المعلومات والذكاء الاصطناعي: من البيانات إلى القرار الذكي
                </p>
                <div className="pt-3 border-t border-white/10">
                  <PresenterSignature />
                </div>
              </div>

              {/* Restart CTA */}
              <button
                id="btn-restart-from-outro"
                onClick={onRestart}
                className="group px-10 py-4 rounded-2xl text-white font-bold text-base sm:text-lg flex items-center gap-3 cursor-pointer bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] border border-white/20 transition-all duration-300 hover:scale-105"
              >
                <RotateCcw className="w-5 h-5 text-cyan-200 group-hover:-rotate-180 transition-transform duration-500" />
                <span>إعادة التجربة من البداية</span>
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Controls */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-between px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs">
        <button
          onClick={restartOutro}
          title="إعادة مشهد الخاتمة"
          className="text-slate-400 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">إعادة الخاتمة</span>
        </button>

        {/* Step dots */}
        <div className="flex items-center gap-1.5">
          {(['concept-data', 'concept-info', 'concept-ai', 'concept-decision', 'closing-message'] as OutroPhase[]).map((st) => (
            <button
              key={st}
              onClick={() => setPhase(st)}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                phase === st ? 'w-5 bg-emerald-400 shadow-[0_0_8px_#34d399]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {phase !== 'closing-message' ? (
          <button
            onClick={jumpToClosing}
            className="text-emerald-300 hover:text-emerald-100 font-semibold flex items-center gap-1 transition cursor-pointer"
            title="تخطي للوصول لزر إعادة التجربة"
          >
            <span className="text-[11px]">تخطي</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onRestart}
            className="text-cyan-300 hover:text-cyan-100 font-bold flex items-center gap-1 transition cursor-pointer"
          >
            <span className="text-[11px]">إعادة التجربة</span>
            <RotateCcw className="w-3 h-3" />
          </button>
        )}
      </div>

    </div>
  );
};
