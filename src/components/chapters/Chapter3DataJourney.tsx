import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { DATA_JOURNEY_STEPS } from '../../data/presentationData';
import { 
  DownloadCloud, 
  HardDrive, 
  Filter, 
  TrendingUp, 
  PieChart, 
  CheckCircle2, 
  Play, 
  Pause, 
  ArrowLeft, 
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Compass,
  Zap,
  Target,
  BookOpen,
  Activity,
  Gauge,
  Workflow
} from 'lucide-react';
import { PresenterSignature } from '../PresenterSignature';
import { DataJourneyVisual } from '../visuals/DataJourneyVisual';

interface ChapterProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export const Chapter3DataJourney: React.FC<ChapterProps> = ({ onNext, onPrev }) => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const [isPlaying, setIsPlaying] = useState<boolean>(true);

  // Auto progression every 3.8 seconds if playing
  useEffect(() => {
    let timer: any;
    if (isPlaying) {
      timer = setInterval(() => {
        setActiveStep((prev) => (prev >= 6 ? 1 : prev + 1));
      }, 3800);
    }
    return () => clearInterval(timer);
  }, [isPlaying]);

  const getStepIcon = (id: number) => {
    switch (id) {
      case 1: return <DownloadCloud className="w-5 h-5" />;
      case 2: return <HardDrive className="w-5 h-5" />;
      case 3: return <Filter className="w-5 h-5" />;
      case 4: return <TrendingUp className="w-5 h-5" />;
      case 5: return <PieChart className="w-5 h-5" />;
      case 6: return <Target className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getMorphingVisual = (id: number) => {
    switch (id) {
      case 1: // Raw glowing point
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-8 h-8 rounded-full bg-cyan-400 animate-ping opacity-75 mb-2" />
            <span className="text-[11px] font-mono text-cyan-300">نقطة بيانات خام مفردة</span>
          </div>
        );
      case 2: // Storage cube
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-blue-500/30 border-2 border-blue-400 flex items-center justify-center text-blue-300 shadow-[0_0_20px_#3b82f6] mb-2">
              <HardDrive className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-blue-300">مستودع بيانات مفهرس</span>
          </div>
        );
      case 3: // Processing matrix
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-purple-500/30 border-2 border-purple-400 flex items-center justify-center text-purple-300 shadow-[0_0_20px_#a855f7] mb-2 animate-spin" style={{ animationDuration: '8s' }}>
              <Filter className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-purple-300">مصفوفة تنقية ومعالجة</span>
          </div>
        );
      case 4: // Analysis prism
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-pink-500/30 border-2 border-pink-400 flex items-center justify-center text-pink-300 shadow-[0_0_20px_#ec4899] mb-2">
              <TrendingUp className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-pink-300">منشور كشف الأنماط</span>
          </div>
        );
      case 5: // Information dashboard
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/30 border-2 border-emerald-400 flex items-center justify-center text-emerald-300 shadow-[0_0_20px_#10b981] mb-2">
              <PieChart className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono text-emerald-300">لوحة مؤشرات تنفيذية</span>
          </div>
        );
      case 6: // Golden Decision
        return (
          <div className="flex flex-col items-center justify-center">
            <div className="w-14 h-14 rounded-2xl bg-amber-500/30 border-2 border-amber-400 flex items-center justify-center text-amber-300 shadow-[0_0_30px_#f59e0b] mb-2 animate-bounce">
              <Target className="w-7 h-7" />
            </div>
            <span className="text-[11px] font-mono text-amber-300 font-bold">قرار استراتيجي حاسم</span>
          </div>
        );
      default:
        return null;
    }
  };

  const currentStepData = DATA_JOURNEY_STEPS.find((s) => s.id === activeStep) || DATA_JOURNEY_STEPS[0];

  return (
    <div id="chapter-3-section" className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative">
      
      {/* Chapter 3 Ambient Glow */}
      <div className="absolute top-10 right-1/4 w-96 h-96 bg-emerald-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-1/4 w-80 h-80 bg-teal-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-emerald-500/30 text-emerald-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل الثالث / ٠٣</span>
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#10b981]" />
          <span>رحلة التحول من الصفر إلى القرار</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          رحلة البيانات
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm">
          "البيانات تمر برحلة متكاملة حتى تصبح مفهومة ومفيدة لصانع القرار."
        </p>
      </motion.div>

      {/* FEATURED CHAPTER HERO IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative rounded-3xl overflow-hidden glass-panel border border-emerald-500/30 shadow-[0_0_40px_rgba(16,185,129,0.2)] group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Data Analytics Journey Dashboard"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Live Telemetry Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
              <Activity className="w-3.5 h-3.5 text-emerald-400 animate-pulse" />
              <span>خط أنابيب مباشر: 6 مراحل نشطة</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-amber-500/40 text-[11px] font-mono text-amber-300 flex items-center gap-1.5 shadow-lg">
              <Gauge className="w-3.5 h-3.5 text-amber-400" />
              <span>دقة تحويل البيانات 99.8%</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-emerald-400 uppercase tracking-widest block mb-1">
                END-TO-END DATA REFINEMENT PIPELINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                من النقطة الخام إلى الرؤية الاستراتيجية
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                تصفية مستمرة، نمذجة إحصائية، ومحاكاة تنبؤية تحول السجلات المبعثرة إلى أفعال وخطط تنفيذية حاسمة.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">نسبة اختزال الضوضاء</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">-94%</span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">قيمة القرار</span>
                <span className="text-sm sm:text-base font-bold text-amber-400 font-mono">10x ROI</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <DataJourneyVisual />
      </div>

      {/* Control bar */}
      <div className="flex items-center justify-between max-w-4xl mx-auto mb-6 px-2">
        <div className="flex items-center gap-2">
          <button
            id="btn-toggle-journey-play"
            onClick={() => setIsPlaying(!isPlaying)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl glass hover:bg-white/10 text-xs font-semibold text-slate-200 transition cursor-pointer border-white/10 font-ibm"
          >
            {isPlaying ? (
              <>
                <Pause className="w-3.5 h-3.5 text-blue-400" />
                <span>إيقاف الرحلة التلقائية</span>
              </>
            ) : (
              <>
                <Play className="w-3.5 h-3.5 text-emerald-400" />
                <span>تشغيل الرحلة التلقائية</span>
              </>
            )}
          </button>
        </div>

        <div className="text-xs text-slate-400 font-mono glass px-3.5 py-1.5 rounded-xl border-white/10">
          المحطة: <span className="text-emerald-400 font-bold">٠{activeStep}</span> من ٠٦
        </div>
      </div>

      {/* 6-Stage Interactive Visual Pipeline */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl mb-8 relative overflow-hidden border-emerald-500/20">
        
        {/* Visual Flow Track */}
        <div className="relative mb-8 pt-4 pb-2">
          {/* Background Connecting Line */}
          <div className="absolute top-1/2 left-4 right-4 h-1.5 bg-white/10 -translate-y-1/2 hidden md:block rounded-full" />
          
          {/* Active Glowing Line Fill */}
          <div 
            className="absolute top-1/2 right-4 h-1.5 bg-gradient-to-l from-emerald-400 via-cyan-400 to-indigo-500 -translate-y-1/2 hidden md:block rounded-full transition-all duration-500 shadow-[0_0_15px_#10b981]"
            style={{ width: `${((activeStep - 1) / 5) * 92}%` }}
          />

          <div className="grid grid-cols-2 md:grid-cols-6 gap-3 relative z-10">
            {DATA_JOURNEY_STEPS.map((step) => {
              const isActive = activeStep === step.id;
              const isPast = activeStep > step.id;
              return (
                <button
                  id={`btn-journey-step-${step.id}`}
                  key={step.id}
                  onClick={() => {
                    setActiveStep(step.id);
                    setIsPlaying(false);
                  }}
                  className={`p-3.5 rounded-2xl flex flex-col items-center text-center transition-all duration-300 cursor-pointer border ${
                    isActive
                      ? 'glass-panel border-emerald-400 shadow-2xl shadow-emerald-500/30 scale-105 ring-2 ring-emerald-400/40'
                      : isPast
                      ? 'glass border-emerald-500/30 text-slate-200 hover:bg-white/10'
                      : 'glass border-white/5 text-slate-500 hover:border-white/15'
                  }`}
                >
                  <div className={`w-11 h-11 rounded-xl flex items-center justify-center mb-2 transition-colors ${
                    isActive
                      ? 'glass bg-emerald-500/25 text-emerald-300 border-emerald-400/50 shadow-md'
                      : isPast
                      ? 'glass text-emerald-400 border-emerald-500/30'
                      : 'glass text-slate-500 border-white/5'
                  }`}>
                    {getStepIcon(step.id)}
                  </div>
                  <span className="text-[10px] font-mono text-slate-400 mb-0.5">٠{step.id}</span>
                  <h4 className={`text-xs font-bold leading-tight font-ibm ${isActive ? 'text-white' : 'text-slate-300'}`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>
        </div>

        {/* Morphing Data Object Showcase */}
        <div className="my-6 p-6 rounded-2xl glass border border-white/10 flex flex-col md:flex-row items-center justify-around gap-6">
          <div className="flex items-center gap-4">
            <div className="p-4 rounded-2xl glass-card border-white/15 shadow-xl">
              {getMorphingVisual(activeStep)}
            </div>
            <div>
              <span className="text-[10px] font-mono uppercase text-emerald-400 tracking-wider font-bold">
                STAGE 0{activeStep} TRANSFORMATION
              </span>
              <h4 className="text-lg font-bold text-white font-ibm">
                {currentStepData.title}
              </h4>
              <p className="text-xs text-slate-300 font-ibm max-w-md mt-1">
                "{currentStepData.description}"
              </p>
            </div>
          </div>

          <div className="text-right border-t md:border-t-0 md:border-r border-white/10 pt-3 md:pt-0 md:pr-6">
            <span className="text-[11px] text-slate-400 font-mono block">التفصيل العملي:</span>
            <p className="text-xs font-semibold text-emerald-300 max-w-xs mt-0.5">
              {currentStepData.detail}
            </p>
          </div>
        </div>

      </div>

      {/* Presentation Speaking Highlights */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-emerald-400" />
          <span>المحاور الأكاديمية لشرح الفصل الثالث:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-cyan-400 flex items-center justify-center font-bold text-xs">١</span>
                <span className="text-[10px] font-mono text-slate-400">الجمع والتخزين</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">مرحلة التأسيس الرقمي</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                تبدأ بجمع البيانات من شتى المصادر (فواتير، مستشعرات، تفاعلات رقمية) وحفظها في مستودعات آمنة ومهيكلة تضمن عدم ضياع أي سجل.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-[11px] text-cyan-300 font-ibm">
              <strong>الأثر:</strong> توفير قاعدة بيانات نظيفة وخالية من التكرار والشوائب.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">٢</span>
                <span className="text-[10px] font-mono text-slate-400">المعالجة والتحليل</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">مرحلة كشف المعنى</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                تطبيق الخوارزميات والمعادلات الإحصائية لاستخراج الأنماط الخفية والعلاقات الارتباطية بين المتغيرات المختلفة في النشاط.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>الأثر:</strong> الانتقال من مرحلة "ماذا حدث؟" إلى "لماذا حدث؟".
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-amber-400 flex items-center justify-center font-bold text-xs">٣</span>
                <span className="text-[10px] font-mono text-slate-400">العرض واتخاذ القرار</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">مرحلة صناعة الأثر</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                تحويل النتائج التحليلية إلى رسوم بيانية وتنبيهات بصرية ذكية تمكن صانع القرار من المبادرة وحل المشكلات الاستراتيجية فوراً.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-[11px] text-amber-300 font-ibm">
              <strong>النتيجة النهائية:</strong> قرارات مبنية على حقائق راسخة تدفع بالمؤسسة نحو الريادة.
            </div>
          </div>

        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-emerald-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-emerald-400 font-bold block mb-1">
          القاعدة الذهبية للفصل الثالث
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "كلما تم تنظيم البيانات وتحليلها بشكل أفضل، أصبحت القرارات أفضل."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>

    </div>
  );
};


