import React from 'react';
import { motion } from 'motion/react';
import { BrainCircuit, Users, ShieldCheck, CheckCircle, ArrowRight, Zap, Target } from 'lucide-react';

export const DSSFrameworkVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-indigo-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-52 h-52 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-indigo-500/20 text-indigo-400 flex items-center justify-center border-indigo-500/40">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">منظومة الشراكة التفاعلية (Human-in-the-Loop)</span>
            <span className="text-[10px] text-indigo-300 font-mono">Cognitive Symbiosis Framework</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-indigo-300 border-indigo-500/30">
          EXECUTIVE CO-PILOT
        </span>
      </div>

      {/* Center 2 Pillars: AI Analysis + Human Executive Decision */}
      <div className="relative z-10 grid grid-cols-2 gap-4 my-auto items-stretch">
        
        {/* Left Pillar: AI Co-Pilot */}
        <div className="p-4 rounded-2xl glass border-purple-500/30 bg-purple-500/5 text-right flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-purple-300 text-xs font-bold font-ibm">
              <BrainCircuit className="w-4 h-4 text-purple-400" />
              <span>دور الذكاء الاصطناعي</span>
            </div>
            <ul className="text-[11px] text-slate-300 space-y-1.5 font-ibm">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>معالجة ملايين السجلات فورياً</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>حساب احتمالات النجاح والمخاطر</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                <span>تقديم سيناريوهات وتوصيات متعددة</span>
              </li>
            </ul>
          </div>
          <span className="text-[9px] text-purple-300 font-mono block mt-2">
            AI: Analytic & Probabilistic Advisor
          </span>
        </div>

        {/* Right Pillar: Human Executive */}
        <div className="p-4 rounded-2xl glass-card border-indigo-500/40 bg-indigo-500/10 text-right flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2 text-indigo-300 text-xs font-bold font-ibm">
              <Users className="w-4 h-4 text-indigo-400" />
              <span>دور القائد البشري</span>
            </div>
            <ul className="text-[11px] text-slate-300 space-y-1.5 font-ibm">
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>تقدير السياق المؤسسي والأخلاقي</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>المسؤولية التنفيذية والاعتماد</span>
              </li>
              <li className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" />
                <span>توجيه الرؤية والأهداف الاستراتيجية</span>
              </li>
            </ul>
          </div>
          <span className="text-[9px] text-indigo-300 font-mono block mt-2">
            Human: Final Strategy & Authority
          </span>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
          <span className="text-[11px] font-light">أفضل القرارات تُصنع عندما تلتقي قدرة الحوسبة الفائقة مع الحكمة البشرية.</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 font-bold hidden sm:inline">PERFECT HARMONY</span>
      </div>
    </div>
  );
};
