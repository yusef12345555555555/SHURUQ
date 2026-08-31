import React, { useState, useEffect, useRef } from "react";
import { Sparkles, ArrowDown, ChevronDown } from "lucide-react";

interface IntroCinematicProps {
  onStartExperience: () => void;
  isCompleted?: boolean;
}

export const IntroCinematic: React.FC<IntroCinematicProps> = ({
  onStartExperience,
  isCompleted,
}) => {
  const [phase, setPhase] = useState<number>(1);
  const [dotsCount, setDotsCount] = useState<number>(1);
  const [wordStep, setWordStep] = useState<number>(0);
  const [statementStep, setStatementStep] = useState<number>(0);
  const [isWarping, setIsWarping] = useState<boolean>(false);
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // Timeline orchestrator
  useEffect(() => {
    if (isCompleted) {
      setPhase(5);
      return;
    }

    const d2 = setTimeout(() => setDotsCount(2), 1200);
    const d3 = setTimeout(() => setDotsCount(5), 2400);
    const d4 = setTimeout(() => setDotsCount(12), 3600);

    const p2 = setTimeout(() => setPhase(2), 4800);

    const p3 = setTimeout(() => {
      setPhase(3);
      setWordStep(0);
    }, 8500);

    const w1 = setTimeout(() => setWordStep(1), 10500);
    const w2 = setTimeout(() => setWordStep(2), 12600);
    const w3 = setTimeout(() => setWordStep(3), 14700);

    const p4 = setTimeout(() => {
      setPhase(4);
      setStatementStep(0);
    }, 17000);

    const s1 = setTimeout(() => setStatementStep(1), 19200);
    const s2 = setTimeout(() => setStatementStep(2), 21400);
    const s3 = setTimeout(() => setStatementStep(3), 23200);

    const p5 = setTimeout(() => {
      setPhase(5);
    }, 25500);

    return () => {
      clearTimeout(d2);
      clearTimeout(d3);
      clearTimeout(d4);
      clearTimeout(p2);
      clearTimeout(p3);
      clearTimeout(w1);
      clearTimeout(w2);
      clearTimeout(w3);
      clearTimeout(p4);
      clearTimeout(s1);
      clearTimeout(s2);
      clearTimeout(s3);
      clearTimeout(p5);
    };
  }, [isCompleted]);

  // Particle Canvas simulation
  useEffect(() => {
    if (isCompleted) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let w = (canvas.width = window.innerWidth);
    let h = (canvas.height = window.innerHeight);

    const onResize = () => {
      if (!canvas) return;
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    };
    window.addEventListener("resize", onResize);

    const telemetryLabels = [
      "72%",
      "8,421",
      "24.8",
      "2026",
      "94.7%",
      "1,240",
      "0101",
      "λ=0.98",
      "Δ=14.2ms",
    ];

    const particles = Array.from({ length: 80 }, (_, i) => ({
      x: w / 2 + (Math.random() - 0.5) * (w * 0.8),
      y: h / 2 + (Math.random() - 0.5) * (h * 0.8),
      vx: (Math.random() - 0.5) * 0.6,
      vy: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2 + 1,
      alpha: Math.random() * 0.6 + 0.2,
      label:
        i % 7 === 0 ? telemetryLabels[i % telemetryLabels.length] : undefined,
    }));

    const render = () => {
      ctx.clearRect(0, 0, w, h);

      if (phase >= 2) {
        for (let i = 0; i < particles.length; i++) {
          const p = particles[i];
          p.x += isWarping ? p.vx * 8 : p.vx;
          p.y += isWarping ? p.vy * 8 : p.vy;

          if (p.x < 0) p.x = w;
          if (p.x > w) p.x = 0;
          if (p.y < 0) p.y = h;
          if (p.y > h) p.y = 0;

          if (phase === 2 || phase === 3 || phase === 5) {
            for (let j = i + 1; j < particles.length; j++) {
              const p2 = particles[j];
              const dist = Math.hypot(p.x - p2.x, p.y - p2.y);
              if (dist < 110) {
                const alpha = (1 - dist / 110) * 0.12;
                ctx.strokeStyle = `rgba(6, 182, 212, ${alpha})`;
                ctx.lineWidth = 0.5;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.stroke();
              }
            }
          }

          if (p.label && (phase === 2 || phase === 3)) {
            ctx.font = '10px "JetBrains Mono", monospace';
            ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha * 0.8})`;
            ctx.fillText(p.label, p.x, p.y);
          } else {
            ctx.fillStyle = `rgba(34, 211, 238, ${p.alpha})`;
            ctx.beginPath();
            ctx.arc(p.x, p.y, isWarping ? p.size * 2 : p.size, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animId);
    };
  }, [phase, isWarping, isCompleted]);

  const handleTriggerEnter = () => {
    setIsWarping(true);
    setTimeout(() => {
      onStartExperience();
      setIsWarping(false);
    }, 500);
  };

  const morphWords = [
    { text: "DATA", ar: "البيانات", color: "from-cyan-400 to-blue-500" },
    {
      text: "INFORMATION",
      ar: "المعلومات",
      color: "from-blue-400 to-indigo-500",
    },
    {
      text: "INTELLIGENCE",
      ar: "الذكاء الاصطناعي",
      color: "from-violet-400 to-purple-500",
    },
    {
      text: "DECISION",
      ar: "القرار الذكي",
      color: "from-fuchsia-400 to-rose-500",
    },
  ];

  return (
    <div
      id="cinematic-intro-stage"
      className={`min-h-screen w-full relative bg-[#02050e] text-slate-100 flex flex-col items-center justify-center select-none overflow-hidden transition-all duration-700 py-16 ${
        isWarping ? "scale-110 opacity-60 blur-xs" : "scale-100 opacity-100"
      }`}
    >
      {/* Background Particle Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Skip button */}
      {phase < 5 && !isCompleted && (
        <button
          onClick={() => setPhase(5)}
          className="absolute top-6 left-6 text-[11px] font-mono text-slate-400 hover:text-cyan-400 px-4 py-2 rounded-full border border-slate-800 bg-slate-950/80 backdrop-blur-md transition-all z-30 cursor-pointer"
        >
         (Skip to Title) ↵
        </button>
      )}

      {/* PHASE 01: TOTAL DARKNESS & MINIMAL DOTS */}
      {phase === 1 && !isCompleted && (
        <div className="relative z-10 flex items-center justify-center py-20">
          <div className="flex items-center gap-6">
            <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 shadow-[0_0_15px_#22d3ee] animate-ping" />
            {dotsCount >= 2 && (
              <div className="w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_12px_#60a5fa] animate-pulse" />
            )}
            {dotsCount >= 5 && (
              <div className="w-2.5 h-2.5 rounded-full bg-violet-400 shadow-[0_0_15px_#a855f7] animate-pulse" />
            )}
            {dotsCount >= 12 && (
              <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 shadow-[0_0_10px_#67e8f9]" />
            )}
          </div>
        </div>
      )}

      {/* PHASE 02: DATA AWAKENS & TELEMETRY STREAM */}
      {phase === 2 && !isCompleted && (
        <div className="relative z-10 text-center space-y-4 animate-fade-in py-20">
          <div className="inline-flex items-center gap-2 font-mono text-[11px] text-cyan-400/80 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>SYNAPSE CONNECTION DETECTED</span>
          </div>
          <div className="flex flex-wrap justify-center gap-3 font-mono text-xs text-slate-400 max-w-md mx-auto">
            <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-cyan-300">
              72.4 TB/s
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-violet-300">
              8,421 NODES
            </span>
            <span className="px-2 py-0.5 rounded bg-slate-900/80 border border-slate-800 text-emerald-300">
              94.7% ACCURACY
            </span>
          </div>
        </div>
      )}

      {/* PHASE 03: WORDS EMERGENCE */}
      {phase === 3 && !isCompleted && (
        <div className="relative z-10 text-center space-y-3 animate-fade-in py-20">
          <div className="text-[11px] font-mono tracking-[0.3em] text-cyan-400/60 uppercase">
            PHYSICAL DATA FORMATION
          </div>
          <div
            className="text-4xl sm:text-6xl md:text-7xl font-black font-mono tracking-tight text-transparent bg-clip-text bg-gradient-to-r transition-all duration-500 scale-105"
            style={{
              backgroundImage:
                wordStep === 0
                  ? "linear-gradient(to right, #22d3ee, #3b82f6)"
                  : wordStep === 1
                    ? "linear-gradient(to right, #3b82f6, #818cf8)"
                    : wordStep === 2
                      ? "linear-gradient(to right, #a855f7, #c084fc)"
                      : "linear-gradient(to right, #f43f5e, #fb7185)",
            }}
          >
            {morphWords[wordStep]?.text}
          </div>
          <div className="text-sm sm:text-base font-bold text-slate-300">
            {morphWords[wordStep]?.ar}
          </div>
        </div>
      )}

      {/* PHASE 04: THE FIRST STATEMENT */}
      {phase === 4 && !isCompleted && (
        <div className="relative z-10 max-w-3xl mx-auto px-6 text-center space-y-6 animate-fade-in py-20">
          {statementStep === 0 && (
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-slate-100 leading-snug">
              كل شيء يبدأ ببيانات.
            </h2>
          )}
          {statementStep === 1 && (
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-black text-cyan-300 leading-snug">
              لكن البيانات وحدها لا تكفي.
            </h2>
          )}
          {statementStep === 2 && (
            <h3 className="text-xl sm:text-3xl md:text-4xl font-bold text-slate-400 leading-snug">
              السؤال الحقيقي...
            </h3>
          )}
          {statementStep === 3 && (
            <div className="space-y-4 animate-scale-up">
              <div className="text-xs font-mono text-cyan-400 uppercase tracking-widest">
                THE CORE QUESTION
              </div>
              <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-violet-300">
                ماذا نفعل بها؟
              </h1>
            </div>
          )}
        </div>
      )}

      {/* PHASE 05: MONUMENTAL TITLE & SHOROUK REFAIE REVEAL */}
      {(phase === 5 || isCompleted) && (
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center space-y-8 animate-fade-in py-12">
          {/* Subtle Top Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-950/60 border border-cyan-500/40 text-cyan-300 text-xs font-mono">
            <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
            <span>INTERACTIVE ACADEMIC EXPERIENCE</span>
          </div>

          {/* Monumental Titles */}
          <div className="space-y-3">
            <div className="text-lg sm:text-2xl font-bold text-slate-400 font-mono tracking-wide">
              الذكاء الاصطناعي
            </div>
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 tracking-tight leading-tight">
              ونظم المعلومات
            </h1>
            <h2 className="text-xl sm:text-3xl font-extrabold text-cyan-400">
              من البيانات إلى القرار الذكي
            </h2>
            <div className="text-[11px] sm:text-xs font-mono text-slate-500">
              Artificial Intelligence & Information Systems: From Data to
              Intelligent Decisions
            </div>
          </div>

          {/* Presenter Attribution: Shorouk Refaie */}
          <div className="p-5 sm:p-6 rounded-3xl bg-[#070d1c]/90 border border-slate-700/80 shadow-2xl max-w-xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-right">
            <div className="flex items-center gap-3.5">
              <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center text-slate-950 font-black text-lg shadow-lg shadow-cyan-500/30">
                SR
              </div>
              <div>
                <div className="text-[11px] text-slate-400">
                  مقدم من الخريجة :
                </div>
                <div className="text-xl font-black text-slate-100">
                  شروق رفاعي
                </div>
              </div>
            </div>

            <div className="text-center sm:text-left space-y-0.5 border-t sm:border-t-0 sm:border-r border-slate-800 pt-2 sm:pt-0 sm:pr-4">
              <div className="text-xs font-bold text-slate-200">
                أكاديمية طيبة - المعادي
              </div>
              <div className="text-[11px] text-slate-400">
                قسم نظم المعلومات الإدارية (MIS)
              </div>
              <div className="text-[10px] text-cyan-400 font-mono">القاهرة</div>
            </div>
          </div>

          {/* Action Trigger: Enter Experience */}
          <div className="pt-2 flex flex-col items-center space-y-3">
            <button
              id="enter-experience-btn"
              onClick={handleTriggerEnter}
              className="group relative inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-violet-600 hover:from-cyan-400 hover:to-violet-500 text-slate-950 font-black text-sm sm:text-base shadow-xl shadow-cyan-500/20 hover:scale-105 transition-all duration-300 cursor-pointer"
            >
              <span>نبدا الرحلة</span>
              <ArrowDown className="w-4 h-4 group-hover:translate-y-1 transition-transform" />
            </button>
            <div className="text-[11px] text-slate-500 font-mono flex items-center gap-1.5">
              <ChevronDown className="w-3.5 h-3.5 animate-bounce text-cyan-400" />
              <span> </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
