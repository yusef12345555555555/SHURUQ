import React from 'react';
import { motion } from 'motion/react';
import { Sparkles, BrainCircuit, LineChart, Network, Lightbulb, Zap, ArrowRight } from 'lucide-react';

export const AIEngineVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-purple-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#a855f7_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 left-1/4 w-52 h-52 bg-purple-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-purple-500/20 text-purple-400 flex items-center justify-center border-purple-500/40">
            <BrainCircuit className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">محرك الذكاء الاصطناعي التوليدي والتحليلي</span>
            <span className="text-[10px] text-purple-300 font-mono">Cognitive & Predictive Intelligence</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-purple-300 border-purple-500/30">
          PREDICTIVE & PRESCRIPTIVE
        </span>
      </div>

      {/* Center 4 Cognitive AI Modules */}
      <div className="relative z-10 grid grid-cols-2 sm:grid-cols-4 gap-2.5 my-auto">
        
        {/* Module 1: Prediction */}
        <div className="p-3 rounded-2xl glass border-purple-500/30 bg-purple-500/5 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-purple-500/20 text-purple-300 flex items-center justify-center mb-1.5 border-purple-500/40">
            <LineChart className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white font-ibm">التنبؤ المستقبلي</span>
          <span className="text-[9px] text-purple-300 font-mono mt-0.5">Forecast & Trends</span>
        </div>

        {/* Module 2: Pattern Recognition */}
        <div className="p-3 rounded-2xl glass border-indigo-500/30 bg-indigo-500/5 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-indigo-500/20 text-indigo-300 flex items-center justify-center mb-1.5 border-indigo-500/40">
            <Network className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white font-ibm">اكتشاف الأنماط</span>
          <span className="text-[9px] text-indigo-300 font-mono mt-0.5">Deep Correlation</span>
        </div>

        {/* Module 3: Recommendations */}
        <div className="p-3 rounded-2xl glass border-cyan-500/30 bg-cyan-500/5 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border-cyan-500/40">
            <Lightbulb className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white font-ibm">توليد التوصيات</span>
          <span className="text-[9px] text-cyan-300 font-mono mt-0.5">Smart Prescriptions</span>
        </div>

        {/* Module 4: Automation */}
        <div className="p-3 rounded-2xl glass border-pink-500/30 bg-pink-500/5 text-center flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-pink-500/20 text-pink-300 flex items-center justify-center mb-1.5 border-pink-500/40">
            <Zap className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-white font-ibm">الأتمتة المعرفية</span>
          <span className="text-[9px] text-pink-300 font-mono mt-0.5">Autonomous Execution</span>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <Sparkles className="w-4 h-4 text-purple-400 shrink-0" />
          <span className="text-[11px] font-light">يحلل ملايين السيناريوهات في أجزاء من الثانية لتقديم نصيحة دقيقة.</span>
        </div>
        <span className="text-[10px] font-mono text-purple-300 font-bold hidden sm:inline">COGNITIVE ENGINE</span>
      </div>
    </div>
  );
};
