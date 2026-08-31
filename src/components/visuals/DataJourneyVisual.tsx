import React from 'react';
import { motion } from 'motion/react';
import { DownloadCloud, HardDrive, Filter, TrendingUp, PieChart, Target, ArrowLeft } from 'lucide-react';

export const DataJourneyVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-emerald-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background glow & matrix */}
      <div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/4 right-1/4 w-52 h-52 bg-emerald-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-emerald-500/20 text-emerald-400 flex items-center justify-center border-emerald-500/40">
            <TrendingUp className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">خط أنابيب تحويل البيانات (Data Pipeline)</span>
            <span className="text-[10px] text-emerald-300 font-mono">Value Creation Progression</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-emerald-300 border-emerald-500/30">
          6 STAGES OF VALUE
        </span>
      </div>

      {/* Journey Linear Nodes Visual */}
      <div className="relative z-10 my-auto">
        <div className="grid grid-cols-6 gap-2 text-center items-center">
          
          {/* Node 1 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border-slate-500/40 flex items-center justify-center text-slate-300 mb-1.5 shadow-md">
              <DownloadCloud className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white font-ibm">الجمع</span>
            <span className="text-[8px] text-slate-400 font-mono hidden sm:inline">Collection</span>
          </div>

          {/* Node 2 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border-blue-500/40 flex items-center justify-center text-blue-300 mb-1.5 shadow-md">
              <HardDrive className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white font-ibm">التخزين</span>
            <span className="text-[8px] text-blue-300 font-mono hidden sm:inline">Storage</span>
          </div>

          {/* Node 3 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border-purple-500/40 flex items-center justify-center text-purple-300 mb-1.5 shadow-md">
              <Filter className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white font-ibm">التنقية</span>
            <span className="text-[8px] text-purple-300 font-mono hidden sm:inline">Cleansing</span>
          </div>

          {/* Node 4 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border-pink-500/40 flex items-center justify-center text-pink-300 mb-1.5 shadow-md">
              <TrendingUp className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white font-ibm">التحليل</span>
            <span className="text-[8px] text-pink-300 font-mono hidden sm:inline">Analytics</span>
          </div>

          {/* Node 5 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl glass border-cyan-500/40 flex items-center justify-center text-cyan-300 mb-1.5 shadow-md">
              <PieChart className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-white font-ibm">المعلومة</span>
            <span className="text-[8px] text-cyan-300 font-mono hidden sm:inline">Insight</span>
          </div>

          {/* Node 6 */}
          <div className="flex flex-col items-center">
            <div className="w-9 h-9 sm:w-11 sm:h-11 rounded-xl bg-gradient-to-tr from-amber-500 to-emerald-400 p-0.5 shadow-[0_0_20px_rgba(245,158,11,0.5)] mb-1.5">
              <div className="w-full h-full bg-slate-950/90 rounded-xl flex items-center justify-center text-amber-300">
                <Target className="w-4 h-4 sm:w-5 sm:h-5" />
              </div>
            </div>
            <span className="text-[10px] sm:text-xs font-bold text-amber-300 font-ibm">القرار</span>
            <span className="text-[8px] text-amber-400 font-mono hidden sm:inline">Action</span>
          </div>

        </div>

        {/* Progress Bar Ribbon */}
        <div className="w-full h-1.5 bg-slate-800 rounded-full mt-4 overflow-hidden relative">
          <motion.div 
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 via-cyan-500 to-amber-400"
          />
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_6px_#10b981]" />
          <span className="text-[11px] font-light">تتضاعف قيمة البيانات عند كل محطة لتصل إلى ذروتها في قرار واثق.</span>
        </div>
        <span className="text-[10px] font-mono text-emerald-300 font-bold hidden sm:inline">VALUE ACCELERATION</span>
      </div>
    </div>
  );
};
