import React from 'react';
import { motion } from 'motion/react';
import { Database, Binary, Server, Layers, FileSpreadsheet, HardDrive, CheckCircle2 } from 'lucide-react';

export const DataSectionVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-blue-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background glow & matrix grid */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 -right-10 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -left-10 w-48 h-48 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none" />

      {/* Header Badge */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-blue-500/20 text-blue-400 flex items-center justify-center border-blue-500/40">
            <Database className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">طبيعة ومصادر البيانات الخام</span>
            <span className="text-[10px] text-blue-300 font-mono">Raw Data Classification</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-blue-300 border-blue-500/30">
          DATA INGESTION
        </span>
      </div>

      {/* Center Interactive Visual Diagram: Structured vs Unstructured data flowing into Ingestion Gateway */}
      <div className="relative z-10 grid grid-cols-3 gap-3 my-auto items-center">
        
        {/* Column 1: Unstructured Sources */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-amber-300 font-ibm block text-center mb-1">
            بيانات غير مهيكلة
          </span>
          <div className="p-2.5 rounded-xl glass border-amber-500/30 text-right bg-amber-500/5">
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-ibm mb-0.5">
              <FileSpreadsheet className="w-3.5 h-3.5" />
              <span>نصوص وتعليقات</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono block">Text & Logs (80%)</span>
          </div>
          <div className="p-2.5 rounded-xl glass border-amber-500/30 text-right bg-amber-500/5">
            <div className="flex items-center gap-1.5 text-amber-300 text-xs font-bold font-ibm mb-0.5">
              <Binary className="w-3.5 h-3.5" />
              <span>حساسات وكاميرات</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono block">IoT Streams & Media</span>
          </div>
        </div>

        {/* Column 2: Central Ingestion Gateway */}
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div 
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-cyan-400 p-0.5 shadow-[0_0_30px_rgba(59,130,246,0.5)] flex items-center justify-center"
          >
            <div className="w-full h-full bg-slate-950/90 rounded-2xl flex flex-col items-center justify-center text-cyan-300">
              <Server className="w-6 h-6 sm:w-7 sm:h-7" />
            </div>
          </motion.div>
          <span className="text-[11px] font-bold text-white font-ibm mt-2">بوابة الجمع المركزية</span>
          <span className="text-[9px] text-slate-400 font-mono">ETL & Ingestion</span>
        </div>

        {/* Column 3: Structured Data Warehouse */}
        <div className="space-y-2">
          <span className="text-[10px] font-bold text-emerald-300 font-ibm block text-center mb-1">
            بيانات مهيكلة ومنظمة
          </span>
          <div className="p-2.5 rounded-xl glass border-emerald-500/30 text-right bg-emerald-500/5">
            <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold font-ibm mb-0.5">
              <HardDrive className="w-3.5 h-3.5" />
              <span>قواعد البيانات (SQL)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono block">Relational Records</span>
          </div>
          <div className="p-2.5 rounded-xl glass border-emerald-500/30 text-right bg-emerald-500/5">
            <div className="flex items-center gap-1.5 text-emerald-300 text-xs font-bold font-ibm mb-0.5">
              <Layers className="w-3.5 h-3.5" />
              <span>مستودع التحليل (DWH)</span>
            </div>
            <span className="text-[10px] text-slate-400 font-mono block">Indexed & Ready</span>
          </div>
        </div>

      </div>

      {/* Footer Insight */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
          <span className="text-[11px] font-light">القيمة لا تكمن في كثرة البيانات، بل في جودتها وقابليتها للتحليل.</span>
        </div>
        <span className="text-[10px] font-mono text-cyan-300 font-bold hidden sm:inline">99.9% INTEGRITY</span>
      </div>

    </div>
  );
};
