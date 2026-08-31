import React, { useState, useEffect, useRef } from 'react';
import { RotateCcw, FastForward } from 'lucide-react';

interface OutroCinematicProps {
  onRestart: () => void;
}

export const OutroCinematic: React.FC<OutroCinematicProps> = ({ onRestart }) => {
  // Timeline Stages:
  // 0: Scene 01 - Return & Dimensional Convergence
  // 1: Scene 02.1 - "بدأنا ببيانات متفرقة."
  // 2: Scene 02.2 - "لكن البيانات وحدها لا تكفي."
  // 3: Scene 02.3 - "السؤال الحقيقي..."
  // 4: Scene 02.4 - "ماذا نفعل بها؟"
  // 5: Scene 03.1 - "البيانات"
  // 6: Scene 03.2 - "المعلومات"
  // 7: Scene 03.3 - "الذكاء"
  // 8: Scene 03.4 - "القرار"
  // 9: Scene 04.1 - "بدأنا ببيانات متفرقة."
  // 10: Scene 04.2 - "وانتهينا بقرار واضح."
  // 11: Scene 04.3 - "تلك هي قوة نظم المعلومات."
  // 12: Scene 04.4 - "وتلك هي قيمة الذكاء الاصطناعي عندما يفهم البيانات."
  // 13: Scene 05.1 - "البيانات لا تصنع القرار وحدها..."
  // 14: Scene 05.2 - "الإنسان هو من يمنحها المعنى."
  // 15: Scene 06 & 07 - Master Title & Shorouk Refaie Cinematic Credit
  // 16: Scene 08 - "شكرًا جزيلًا لكم على حسن الاستماع"
  // 17: Scene 09 - Dissolve into pure calm void, ONLY "إعادة التجربة ↻" remains
  const [stage, setStage] = useState<number>(0);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Background Warp & Convergence Particle Canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const particles: Array<{
      x: number;
      y: number;
      z: number;
      radius: number;
      color: string;
      speed: number;
    }> = [];

    const colors = ['#22d3ee', '#818cf8', '#a855f7', '#34d399', '#ffffff'];

    for (let i = 0; i < 180; i++) {
      particles.push({
        x: (Math.random() - 0.5) * width * 2,
        y: (Math.random() - 0.5) * height * 2,
        z: Math.random() * 1000 + 1,
        radius: Math.random() * 2 + 0.8,
        color: colors[Math.floor(Math.random() * colors.length)],
        speed: Math.random() * 2 + 1,
      });
    }

    const render = () => {
      ctx.fillStyle = 'rgba(2, 5, 14, 0.25)';
      ctx.fillRect(0, 0, width, height);

      const cx = width / 2;
      const cy = height / 2;

      particles.forEach((p) => {
        // Reverse movement towards center during outro
        p.z -= p.speed * 2.5;
        if (p.z <= 0) {
          p.z = 1000;
          p.x = (Math.random() - 0.5) * width * 2;
          p.y = (Math.random() - 0.5) * height * 2;
        }

        const k = 350 / p.z;
        const px = p.x * k + cx;
        const py = p.y * k + cy;

        if (px >= 0 && px <= width && py >= 0 && py <= height) {
          const alpha = Math.min(1, (1000 - p.z) / 400);
          ctx.beginPath();
          ctx.arc(px, py, p.radius * k * 0.8, 0, Math.PI * 2);
          ctx.fillStyle = p.color;
          ctx.globalAlpha = alpha * 0.6;
          ctx.fill();
          ctx.globalAlpha = 1;
        }
      });

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Complete Storytelling Timeline Timers
  const timelineTimeoutsRef = useRef<ReturnType<typeof setTimeout>[]>([]);

  useEffect(() => {
    const timeline = [
      { t: 2400, s: 1 },  // بدأنا ببيانات متفرقة.
      { t: 4800, s: 2 },  // لكن البيانات وحدها لا تكفي.
      { t: 7200, s: 3 },  // السؤال الحقيقي...
      { t: 9400, s: 4 },  // ماذا نفعل بها؟
      { t: 11800, s: 5 }, // البيانات
      { t: 13800, s: 6 }, // المعلومات
      { t: 15800, s: 7 }, // الذكاء
      { t: 17800, s: 8 }, // القرار
      { t: 20000, s: 9 }, // بدأنا ببيانات متفرقة.
      { t: 22200, s: 10 },// وانتهينا بقرار واضح.
      { t: 24400, s: 11 },// تلك هي قوة نظم المعلومات.
      { t: 26800, s: 12 },// وتلك هي قيمة الذكاء الاصطناعي عندما يفهم البيانات.
      { t: 29800, s: 13 },// البيانات لا تصنع القرار وحدها...
      { t: 32600, s: 14 },// الإنسان هو من يمنحها المعنى.
      { t: 36000, s: 15 },// Title + Shorouk Refaie credit
      { t: 41000, s: 16 },// شكرًا جزيلًا لكم على حسن الاستماع
      { t: 45000, s: 17 },// Finish -> ONLY "إعادة التجربة ↻" remains
    ];

    timelineTimeoutsRef.current.forEach(clearTimeout);
    timelineTimeoutsRef.current = timeline.map((item) =>
      setTimeout(() => setStage(item.s), item.t)
    );

    return () => {
      timelineTimeoutsRef.current.forEach(clearTimeout);
      timelineTimeoutsRef.current = [];
    };
  }, []);

  // Skip the outro timeline immediately and leave only the restart action.
  const handleSkipToEnd = () => {
    timelineTimeoutsRef.current.forEach(clearTimeout);
    timelineTimeoutsRef.current = [];
    setStage(17);
  };

  return (
    <div
      id="fullscreen-cinematic-outro-overlay"
      className="fixed inset-0 z-50 bg-[#02050e] flex flex-col items-center justify-center text-center px-6 overflow-hidden pointer-events-auto select-none font-sans"
    >
      {/* Dynamic Starfield Convergence Canvas */}
      <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none opacity-70" />

      {/* Atmospheric Radial Light Cone */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[radial-gradient(circle,rgba(6,182,212,0.12)_0%,rgba(147,51,234,0.06)_45%,transparent_70%)] pointer-events-none blur-[100px]" />

      {/* Skip Button during playback */}
      {stage < 17 && (
        <button
          onClick={handleSkipToEnd}
          className="absolute top-6 left-6 z-20 flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-900/60 hover:bg-slate-800/80 border border-slate-800 text-[11px] font-mono text-slate-400 hover:text-slate-200 transition-all cursor-pointer backdrop-blur-sm"
          title="تخطي العرض الختامي والانتقال لزر الإعادة"
        >
          <span>تخطي</span>
          <FastForward className="w-3 h-3" />
        </button>
      )}

      {/* SCENE 01: RETURN & DIMENSIONAL CONVERGENCE */}
      {stage === 0 && (
        <div className="relative z-10 space-y-6 max-w-xl mx-auto animate-fadeIn">
          <div className="w-3 h-3 mx-auto rounded-full bg-cyan-400 shadow-[0_0_25px_#22d3ee] animate-ping" />
          <div className="text-xs font-mono tracking-[0.4em] text-cyan-400/90 uppercase">
            RETURNING THROUGH THE JOURNEY
          </div>
          <p className="text-sm text-slate-300 font-light tracking-wide">
            تتقارب أبعاد البيانات والأنظمة لتعود إلى نقطة الانطلاق...
          </p>
        </div>
      )}

      {/* SCENE 02: THE FIRST STATEMENTS */}
      {stage === 1 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 leading-tight">
            بدأنا ببيانات متفرقة.
          </h2>
        </div>
      )}

      {stage === 2 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-white to-slate-200 leading-tight">
            لكن البيانات وحدها لا تكفي.
          </h2>
        </div>
      )}

      {stage === 3 && (
        <div className="relative z-10 max-w-2xl mx-auto px-4 animate-fadeIn">
          <div className="text-sm font-mono tracking-[0.3em] text-cyan-400 uppercase mb-3">
            THE ESSENTIAL QUESTION
          </div>
          <h2 className="text-3xl sm:text-5xl font-black text-slate-100 leading-tight">
            السؤال الحقيقي...
          </h2>
        </div>
      )}

      {stage === 4 && (
        <div className="relative z-10 max-w-2xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-cyan-400 tracking-tight drop-shadow-[0_0_35px_rgba(34,211,238,0.4)]">
            ماذا نفعل بها؟
          </h2>
        </div>
      )}

      {/* SCENE 03: THE JOURNEY RETURNS (REVERSE PYRAMID) */}
      {stage === 5 && (
        <div className="relative z-10 space-y-4 max-w-xl mx-auto animate-fadeIn">
          <div className="text-xs font-mono tracking-[0.4em] text-cyan-400 uppercase">
            STAGE 01 // THE ESSENCE
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500 tracking-wider">
            البيانات
          </div>
          <p className="text-xs font-mono text-slate-400">RAW SIGNALS & DIGITS</p>
        </div>
      )}

      {stage === 6 && (
        <div className="relative z-10 space-y-4 max-w-xl mx-auto animate-fadeIn">
          <div className="text-xs font-mono tracking-[0.4em] text-blue-400 uppercase">
            STAGE 02 // THE CONTEXT
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-500 tracking-wider">
            المعلومات
          </div>
          <p className="text-xs font-mono text-slate-400">STRUCTURED MEANING</p>
        </div>
      )}

      {stage === 7 && (
        <div className="relative z-10 space-y-4 max-w-xl mx-auto animate-fadeIn">
          <div className="text-xs font-mono tracking-[0.4em] text-violet-400 uppercase">
            STAGE 03 // THE INFERENCE
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-fuchsia-500 tracking-wider">
            الذكاء
          </div>
          <p className="text-xs font-mono text-slate-400">PREDICTIVE PATTERNS</p>
        </div>
      )}

      {stage === 8 && (
        <div className="relative z-10 space-y-4 max-w-xl mx-auto animate-fadeIn">
          <div className="text-xs font-mono tracking-[0.4em] text-emerald-400 uppercase">
            STAGE 04 // THE CLIMAX
          </div>
          <div className="text-5xl sm:text-7xl md:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-300 tracking-wider">
            القرار
          </div>
          <p className="text-xs font-mono text-slate-400">STRATEGIC ACTION</p>
        </div>
      )}

      {/* SCENE 04: THE CORE MESSAGE */}
      {stage === 9 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-100 leading-tight">
            بدأنا ببيانات متفرقة.
          </h2>
        </div>
      )}

      {stage === 10 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-teal-200 to-white leading-tight">
            وانتهينا بقرار واضح.
          </h2>
        </div>
      )}

      {stage === 11 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-blue-300 via-cyan-200 to-white leading-tight">
            تلك هي قوة نظم المعلومات.
          </h2>
        </div>
      )}

      {stage === 12 && (
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-violet-300 via-fuchsia-200 to-cyan-300 leading-tight">
            وتلك هي قيمة الذكاء الاصطناعي عندما يفهم البيانات.
          </h2>
        </div>
      )}

      {/* SCENE 05: FINAL PHILOSOPHICAL STATEMENT */}
      {stage === 13 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-slate-200 leading-tight">
            البيانات لا تصنع القرار وحدها...
          </h2>
        </div>
      )}

      {stage === 14 && (
        <div className="relative z-10 max-w-4xl mx-auto px-4 animate-fadeIn space-y-4">
          <div className="w-16 h-1 mx-auto bg-gradient-to-r from-cyan-400 to-emerald-400 rounded-full" />
          <h2 className="text-4xl sm:text-6xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-cyan-100 to-emerald-300 leading-tight drop-shadow-[0_0_50px_rgba(34,211,238,0.4)]">
            الإنسان هو من يمنحها المعنى.
          </h2>
        </div>
      )}

      {/* SCENE 06 & 07: MASTER TITLE & SHOROUK REFAIE CINEMATIC CREDIT */}
      {stage === 15 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 space-y-12 animate-fadeIn">
          {/* Main Title */}
          <div className="space-y-3">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-slate-100 to-slate-300 leading-tight drop-shadow-lg">
              الذكاء الاصطناعي ونظم المعلومات
            </h1>
            <h2 className="text-xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-emerald-400">
              من البيانات إلى القرار الذكي
            </h2>
          </div>

          {/* Cinematic Credit (NO box, NO card, NO button styling) */}
          <div className="pt-6 space-y-1.5 text-center sm:text-right sm:pr-8">
            <div className="text-xs sm:text-sm font-mono text-cyan-400/90 tracking-widest uppercase">
              مقدم من الطالبة
            </div>
            <div className="text-2xl sm:text-3xl font-black text-slate-100 tracking-tight">
              شروق رفاعي
            </div>
            <div className="text-xs text-slate-400 font-sans">
              أكاديمية طيبة - المعادي
            </div>
          </div>
        </div>
      )}

      {/* SCENE 08: FINAL RESPECTFUL THANK YOU */}
      {stage === 16 && (
        <div className="relative z-10 max-w-3xl mx-auto px-4 animate-fadeIn space-y-4">
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-100 to-slate-200 leading-tight drop-shadow-md">
            شكرًا جزيلًا لكم على حسن الاستماع
          </h2>
          <div className="w-16 h-0.5 mx-auto bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent" />
        </div>
      )}

      {/* SCENE 09: CLEAN FINISH (ALL TEXT DISSOLVED — ONLY "إعادة التجربة ↻" REMAINS) */}
      {stage === 17 && (
        <div className="relative z-10 flex flex-col items-center justify-center space-y-6 animate-fadeIn">
          <button
            id="restart-experience-btn"
            onClick={onRestart}
            className="group flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-emerald-500 hover:from-cyan-400 hover:to-emerald-400 text-slate-950 font-black text-sm sm:text-base shadow-2xl shadow-cyan-500/30 hover:scale-105 active:scale-95 transition-all cursor-pointer pointer-events-auto"
          >
            <RotateCcw className="w-5 h-5 text-slate-950 group-hover:-rotate-180 transition-transform duration-500" />
            <span>إعادة التجربة ↻</span>
          </button>
        </div>
      )}
    </div>
  );
};
