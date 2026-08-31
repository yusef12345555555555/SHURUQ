import React from 'react';
import { motion } from 'motion/react';
import { Sliders, Activity, Gauge, TrendingUp, Sparkles, Target, BarChart2 } from 'lucide-react';

export const DecisionLabVisual: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[380px] rounded-3xl glass-panel border border-blue-500/30 p-6 flex flex-col justify-between overflow-hidden shadow-2xl">
      {/* Background glow & dynamic wave */}
      <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-15 pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 w-52 h-52 bg-blue-500/15 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl glass bg-blue-500/20 text-blue-400 flex items-center justify-center border-blue-500/40">
            <Activity className="w-4 h-4" />
          </div>
          <div>
            <span className="text-xs font-bold text-white block font-ibm">غرفة المحاكاة واتخاذ القرار الفوري</span>
            <span className="text-[10px] text-blue-300 font-mono">Live Simulation & Decision Cockpit</span>
          </div>
        </div>
        <span className="text-[10px] font-mono glass px-2.5 py-1 rounded-full text-blue-300 border-blue-500/30">
          REAL-TIME TELEMETRY
        </span>
      </div>

      {/* Center Dynamic Telemetry Metrics */}
      <div className="relative z-10 grid grid-cols-3 gap-3 my-auto">
        
        {/* Metric 1 */}
        <div className="p-3.5 rounded-2xl glass border-white/10 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-mono mb-1">
            <Gauge className="w-3 h-3 text-cyan-400" />
            <span>ثقة النموذج الإحصائي</span>
          </div>
          <span className="text-xl sm:text-2xl font-black text-cyan-300 font-mono block">94.2%</span>
          <span className="text-[9px] text-emerald-400 font-ibm mt-0.5 block">مستوى دقة مرتفع جدًا</span>
        </div>

        {/* Metric 2 */}
        <div className="p-3.5 rounded-2xl glass border-blue-500/30 bg-blue-500/5 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-blue-300 font-mono mb-1">
            <BarChart2 className="w-3 h-3 text-blue-400" />
            <span>العائد المالي المتوقع</span>
          </div>
          <span className="text-xl sm:text-2xl font-black text-white font-mono block">+42.8%</span>
          <span className="text-[9px] text-blue-300 font-ibm mt-0.5 block">بناء على حركة السوق</span>
        </div>

        {/* Metric 3 */}
        <div className="p-3.5 rounded-2xl glass border-white/10 text-center">
          <div className="flex items-center justify-center gap-1 text-[10px] text-slate-400 font-mono mb-1">
            <Target className="w-3 h-3 text-amber-400" />
            <span>مؤشر المخاطرة المحسوبة</span>
          </div>
          <span className="text-xl sm:text-2xl font-black text-amber-300 font-mono block">16.5%</span>
          <span className="text-[9px] text-slate-400 font-ibm mt-0.5 block">ضمن الحدود الآمنة</span>
        </div>

      </div>

      {/* Footer */}
      <div className="relative z-10 px-3.5 py-2 rounded-xl glass border-white/10 flex items-center justify-between text-xs">
        <div className="flex items-center gap-2 text-slate-300 font-ibm">
          <Sliders className="w-4 h-4 text-blue-400 shrink-0" />
          <span className="text-[11px] font-light">تغيير أي مدخل ينعكس مباشرة على التوصية والإيرادات المتوقعة.</span>
        </div>
        <span className="text-[10px] font-mono text-blue-300 font-bold hidden sm:inline">DYNAMIC ENGINE</span>
      </div>
    </div>
  );
};
