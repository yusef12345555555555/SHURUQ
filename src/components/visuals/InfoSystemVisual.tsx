import React from 'react';
import { motion } from 'motion/react';
import { Cpu, Users, Workflow, Database, Laptop, ArrowRight, ArrowDown, Sparkles } from 'lucide-react';

export const InfoSystemVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-indigo-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(#6366f1_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 left-1/3 w-60 h-60 bg-indigo-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-indigo-500/20 text-indigo-400 flex items-center justify-center border-indigo-500/40">
            <Cpu className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">المعمارية الوظيفية لنظم المعلومات</span>
            <span className="text-[10px] text-indigo-300 font-mono">IS Functional Architecture</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-indigo-300 border-indigo-500/30">
          CLOSED-LOOP SYSTEM
        </span>
      </div>

      {/* Center Flow Diagram: Input -> Processing & Storage -> Output -> Feedback */}
      <div className="relative z-10 grid grid-cols-4 gap-2 my-auto items-center text-center">
        
        {/* Step 1: Input */}
        <div className="p-3 rounded-2xl glass border-amber-500/30 bg-amber-500/5 flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-amber-500/20 text-amber-300 flex items-center justify-center mb-1.5 border-amber-500/40">
            <Database className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-white font-ibm">المدخلات (Inputs)</span>
          <span className="text-[9px] text-slate-400 font-mono mt-0.5">بيانات وحركات خام</span>
        </div>

        {/* Step 2: Processing & Core */}
        <div className="p-3 rounded-2xl glass border-indigo-500/40 bg-indigo-500/10 flex flex-col items-center relative">
          <div className="w-8 h-8 rounded-xl glass bg-indigo-500/30 text-indigo-300 flex items-center justify-center mb-1.5 border-indigo-500/50">
            <Cpu className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-white font-ibm">المعالجة والتخزين</span>
          <span className="text-[9px] text-indigo-300 font-mono mt-0.5">منطق العمليات والبرمجيات</span>
        </div>

        {/* Step 3: Output */}
        <div className="p-3 rounded-2xl glass border-cyan-500/30 bg-cyan-500/5 flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-cyan-500/20 text-cyan-300 flex items-center justify-center mb-1.5 border-cyan-500/40">
            <Laptop className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-white font-ibm">المخرجات (Outputs)</span>
          <span className="text-[9px] text-slate-400 font-mono mt-0.5">تقارير ومؤشرات أداء</span>
        </div>

        {/* Step 4: Decision & Feedback */}
        <div className="p-3 rounded-2xl glass border-emerald-500/30 bg-emerald-500/5 flex flex-col items-center">
          <div className="w-8 h-8 rounded-xl glass bg-emerald-500/20 text-emerald-300 flex items-center justify-center mb-1.5 border-emerald-500/40">
            <Users className="w-4 h-4" />
          </div>
          <span className="text-[11px] font-bold text-white font-ibm">صناع القرار (People)</span>
          <span className="text-[9px] text-emerald-300 font-mono mt-0.5">تغذية راجعة (Feedback)</span>
        </div>

      </div>

      {/* Bottom Sub-Pillars Tag */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <Workflow className="w-4 h-4 text-indigo-400 shrink-0" />
          <span className="text-[11px] font-light">تتكامل التكنولوجيا مع الإجراءات البشرية لضمان استمرارية وكفاءة الأعمال.</span>
        </div>
        <span className="text-[10px] font-mono text-indigo-300 font-bold hidden sm:inline">END-TO-END FLOW</span>
      </div>
    </div>
  );
};
