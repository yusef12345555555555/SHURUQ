import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowLeft, 
  RotateCcw, 
  FastForward,
  Play,
  Layers,
  Sparkles
} from 'lucide-react';
import { PresenterSignature } from './PresenterSignature';

interface OpeningIntroProps {
  onStart: () => void;
}

type IntroPhase = 
  | 'concept-data'
  | 'concept-info'
  | 'concept-ai'
  | 'concept-decision'
  | 'statement-1'
  | 'statement-2'
  | 'statement-3'
  | 'final-bridge';

export const OpeningIntro: React.FC<OpeningIntroProps> = ({ onStart }) => {
  const [phase, setPhase] = useState<IntroPhase>('concept-data');
  const [decisionStep, setDecisionStep] = useState<number>(0); // 0: 'القرار', 1: 'القرار الذكي'

  // Automatic timed sequence
  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (phase === 'concept-data') {
      timer = setTimeout(() => setPhase('concept-info'), 3200);
    } else if (phase === 'concept-info') {
      timer = setTimeout(() => setPhase('concept-ai'), 3200);
    } else if (phase === 'concept-ai') {
      timer = setTimeout(() => {
        setDecisionStep(0);
        setPhase('concept-decision');
      }, 3400);
    } else if (phase === 'concept-decision') {
      // First reveal 'القرار', then reveal 'الذكي' together
      const subTimer = setTimeout(() => setDecisionStep(1), 1000);
      timer = setTimeout(() => setPhase('statement-1'), 4000);
      return () => {
        clearTimeout(timer);
        clearTimeout(subTimer);
      };
    } else if (phase === 'statement-1') {
      timer = setTimeout(() => setPhase('statement-2'), 2800);
    } else if (phase === 'statement-2') {
      timer = setTimeout(() => setPhase('statement-3'), 2800);
    } else if (phase === 'statement-3') {
      timer = setTimeout(() => setPhase('final-bridge'), 2800);
    }

    return () => clearTimeout(timer);
  }, [phase]);

  const jumpToFinal = () => {
    setPhase('final-bridge');
  };

  const skipIntroDirectly = () => {
    onStart();
  };

  const restartIntro = () => {
    setDecisionStep(0);
    setPhase('concept-data');
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#030712] text-white flex flex-col items-center justify-between p-6 sm:p-10 select-none overflow-hidden font-ibm">
      
      {/* Deep Atmosphere Visual Mesh Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-1/3 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
        <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:32px_32px] opacity-20" />
      </div>

      {/* Top Subtle Academic Identifier */}
      <div className="relative z-10 w-full max-w-4xl flex items-center justify-between opacity-95 pt-2">
        <div className="flex items-center gap-3">
          <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_#22d3ee]" />
          <span className="text-xs tracking-widest text-slate-400 font-mono uppercase hidden sm:inline">
            Academic Presentation • نُظم المعلومات والذكاء الاصطناعي
          </span>
          <PresenterSignature variant="compact" />
        </div>
        <button
          onClick={skipIntroDirectly}
          id="btn-skip-intro-top"
          className="text-xs text-slate-300 hover:text-cyan-300 transition-colors flex items-center gap-1.5 cursor-pointer px-3 py-1.5 rounded-full glass border-white/10 hover:border-cyan-500/40"
          title="تخطي المقدمة والبدء فورًا"
        >
          <span>تخطي المقدمة</span>
          <FastForward className="w-3.5 h-3.5 text-cyan-400" />
        </button>
      </div>

      {/* Main Single-Element Stage */}
      <div className="relative z-10 w-full max-w-4xl min-h-[380px] flex items-center justify-center text-center my-auto">
        <AnimatePresence mode="wait">

          {/* ================= 1. CONCEPT: البيانات ================= */}
          {phase === 'concept-data' && (
            <motion.div
              key="intro-concept-data"
              initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-400 drop-shadow-2xl">
                البيانات
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-2xl text-slate-300 font-light max-w-xl"
              >
                "البيانات وحدها لا تكفي."
              </motion.p>
            </motion.div>
          )}

          {/* ================= 3. CONCEPT: المعلومات ================= */}
          {phase === 'concept-info' && (
            <motion.div
              key="intro-concept-info"
              initial={{ opacity: 0, y: 25, filter: 'blur(10px)' }}
              animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
              exit={{ opacity: 0, y: -25, filter: 'blur(10px)' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-blue-100 to-blue-300 drop-shadow-[0_0_40px_rgba(59,130,246,0.3)]">
                المعلومات
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-2xl text-blue-200/90 font-light max-w-xl"
              >
                "حين نفهم البيانات، تتحول إلى معلومات."
              </motion.p>
            </motion.div>
          )}

          {/* ================= 4. CONCEPT: الذكاء الاصطناعي ================= */}
          {phase === 'concept-ai' && (
            <motion.div
              key="intro-concept-ai"
              initial={{ opacity: 0, scale: 0.85, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.15, filter: 'blur(12px)' }}
              transition={{ duration: 0.65, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-4"
            >
              <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-purple-300 via-fuchsia-300 to-indigo-300 drop-shadow-[0_0_45px_rgba(192,132,252,0.4)]">
                الذكاء الاصطناعي
              </h1>
              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="text-lg sm:text-2xl text-purple-200/90 font-light max-w-xl"
              >
                "والذكاء يساعدنا على اكتشاف ما قد لا نراه."
              </motion.p>
            </motion.div>
          )}

          {/* ================= 5. CONCEPT: القرار الذكي (Two separate animated words) ================= */}
          {phase === 'concept-decision' && (
            <motion.div
              key="intro-concept-decision"
              initial={{ opacity: 0, scale: 0.9, filter: 'blur(12px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.1, filter: 'blur(12px)' }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center gap-5"
            >
              {/* Animate 'القرار' then 'الذكي' to meet together */}
              <div className="flex items-center justify-center gap-3 sm:gap-5 flex-wrap">
                <motion.span
                  initial={{ opacity: 0, x: 40 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, ease: 'easeOut' }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black text-white drop-shadow-[0_0_30px_rgba(255,255,255,0.4)]"
                >
                  القرار
                </motion.span>

                <motion.span
                  initial={{ opacity: 0, x: -40, scale: 0.7 }}
                  animate={{ 
                    opacity: decisionStep >= 1 ? 1 : 0, 
                    x: decisionStep >= 1 ? 0 : -40,
                    scale: decisionStep >= 1 ? 1 : 0.7
                  }}
                  transition={{ duration: 0.6, ease: 'backOut' }}
                  className="text-5xl sm:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 via-teal-200 to-cyan-300 drop-shadow-[0_0_50px_rgba(52,211,153,0.6)]"
                >
                  الذكي
                </motion.span>
              </div>

              <motion.p
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="text-lg sm:text-2xl text-emerald-200/90 font-light max-w-2xl"
              >
                "لأن فهم البيانات يقودنا إلى قرار أفضل."
              </motion.p>
            </motion.div>
          )}

          {/* ================= 6. INSPIRATIONAL STATEMENT 1 ================= */}
          {phase === 'statement-1' && (
            <motion.div
              key="intro-statement-1"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="max-w-3xl"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-white leading-relaxed sm:leading-loose">
                "البيانات وحدها لا تكفي."
              </p>
            </motion.div>
          )}

          {/* ================= 7. INSPIRATIONAL STATEMENT 2 ================= */}
          {phase === 'statement-2' && (
            <motion.div
              key="intro-statement-2"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="max-w-3xl"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-indigo-200 to-cyan-200 leading-relaxed sm:leading-loose">
                "فهمها هو بداية المعرفة."
              </p>
            </motion.div>
          )}

          {/* ================= 8. INSPIRATIONAL STATEMENT 3 ================= */}
          {phase === 'statement-3' && (
            <motion.div
              key="intro-statement-3"
              initial={{ opacity: 0, scale: 0.95, filter: 'blur(8px)' }}
              animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
              exit={{ opacity: 0, scale: 1.05, filter: 'blur(8px)' }}
              transition={{ duration: 0.55, ease: 'easeInOut' }}
              className="max-w-3xl"
            >
              <p className="text-2xl sm:text-4xl lg:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-200 via-teal-200 to-cyan-200 leading-relaxed sm:leading-loose">
                "ومن المعرفة نصنع القرار الذكي."
              </p>
            </motion.div>
          )}

          {/* ================= 9. FINAL BRIDGE & ENTRY BUTTON ================= */}
          {phase === 'final-bridge' && (
            <motion.div
              key="intro-final-bridge"
              initial={{ opacity: 0, y: 20, scale: 0.96 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="w-full max-w-2xl flex flex-col items-center justify-center gap-8"
            >
              {/* Topic Title Badge */}
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-cyan-300">
                <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                <span>المدخل التمهيدي</span>
              </div>

              {/* Final Bridge Sentence */}
              <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-white/10 shadow-2xl backdrop-blur-xl text-center">
                <h2 className="text-2xl sm:text-4xl font-black text-white leading-relaxed mb-3">
                  "لنبدأ من البيانات... ونصل إلى القرار."
                </h2>
                <p className="text-sm sm:text-base text-slate-400 font-light mb-4">
                  نظم المعلومات والذكاء الاصطناعي في خدمة اتخاذ القرار المؤسسي
                </p>
                <div className="pt-2 border-t border-white/10">
                  <PresenterSignature />
                </div>
              </div>

              {/* Enter Main Presentation CTA */}
              <button
                id="btn-enter-presentation"
                onClick={onStart}
                className="group px-10 sm:px-14 py-4 rounded-2xl text-base sm:text-lg font-bold flex items-center gap-3 cursor-pointer text-white bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 shadow-[0_0_35px_rgba(59,130,246,0.5)] hover:shadow-[0_0_50px_rgba(59,130,246,0.8)] border border-white/20 transition-all duration-300 hover:scale-105"
              >
                <span>ابدأ التجربة</span>
                <Play className="w-5 h-5 text-cyan-200 fill-cyan-200 group-hover:scale-110 transition-transform duration-300" />
              </button>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* Bottom Timeline Tracker & Replay Controls */}
      <div className="relative z-10 w-full max-w-md flex items-center justify-between px-4 py-2 rounded-2xl bg-white/5 border border-white/10 text-xs">
        <button
          onClick={restartIntro}
          title="إعادة المشهد من البداية"
          className="text-slate-400 hover:text-white flex items-center gap-1.5 transition cursor-pointer"
        >
          <RotateCcw className="w-3.5 h-3.5" />
          <span className="hidden sm:inline text-[11px]">إعادة</span>
        </button>

        {/* Progress Step Dots */}
        <div className="flex items-center gap-1.5">
          {(['concept-data', 'concept-info', 'concept-ai', 'concept-decision', 'statement-1', 'statement-2', 'statement-3', 'final-bridge'] as IntroPhase[]).map((st) => (
            <button
              key={st}
              onClick={() => {
                if (st === 'concept-decision') setDecisionStep(1);
                setPhase(st);
              }}
              className={`h-1.5 rounded-full transition-all cursor-pointer ${
                phase === st ? 'w-5 bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'w-1.5 bg-white/20 hover:bg-white/40'
              }`}
            />
          ))}
        </div>

        {phase !== 'final-bridge' ? (
          <button
            onClick={skipIntroDirectly}
            className="text-cyan-300 hover:text-cyan-100 font-semibold flex items-center gap-1 transition cursor-pointer"
            title="تخطي والبدء فورًا"
          >
            <span className="text-[11px]">تخطي</span>
            <FastForward className="w-3.5 h-3.5" />
          </button>
        ) : (
          <button
            onClick={onStart}
            className="text-emerald-300 hover:text-emerald-100 font-bold flex items-center gap-1 transition cursor-pointer"
          >
            <span className="text-[11px]">ابدأ الآن</span>
            <Play className="w-3 h-3 fill-emerald-300" />
          </button>
        )}
      </div>

    </div>
  );
};
