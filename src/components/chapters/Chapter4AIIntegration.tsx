import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { AI_CAPABILITIES } from '../../data/presentationData';
import { 
  Sparkles, 
  LineChart, 
  Network, 
  Lightbulb, 
  Zap, 
  ArrowLeft, 
  CheckCircle2, 
  History, 
  BrainCircuit,
  Sliders,
  BookOpen,
  Cpu,
  Bot,
  Layers,
  Flame
} from 'lucide-react';
import { PresenterSignature } from '../PresenterSignature';
import { AIEngineVisual } from '../visuals/AIEngineVisual';

interface ChapterProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export const Chapter4AIIntegration: React.FC<ChapterProps> = ({ onNext, onPrev }) => {
  const [selectedCapability, setSelectedCapability] = useState<string>('prediction');

  const getCapabilityIcon = (id: string) => {
    switch (id) {
      case 'prediction': return <LineChart className="w-5 h-5" />;
      case 'patterns': return <Network className="w-5 h-5" />;
      case 'recommendation': return <Lightbulb className="w-5 h-5" />;
      case 'automation': return <Zap className="w-5 h-5" />;
      default: return <Sparkles className="w-5 h-5" />;
    }
  };

  const getCapabilityQuestion = (id: string) => {
    switch (id) {
      case 'prediction': return 'ماذا قد يحدث؟';
      case 'patterns': return 'ما الذي لا نراه بسهولة؟';
      case 'recommendation': return 'ما الخيار الأنسب؟';
      case 'automation': return 'ما الذي يمكن إنجازه تلقائيًا؟';
      default: return '';
    }
  };

  const activeCapData = AI_CAPABILITIES.find((c) => c.id === selectedCapability) || AI_CAPABILITIES[0];

  return (
    <div id="chapter-4-section" className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative">
      
      {/* Chapter 4 Ambient Neural Aura */}
      <div className="absolute top-16 left-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-fuchsia-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-purple-500/30 text-purple-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل الرابع / ٠٤</span>
          <span className="w-1.5 h-1.5 rounded-full bg-purple-400 shadow-[0_0_8px_#a855f7]" />
          <span>المحرك الذكي: نقطة التحول الكبرى</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          أين يدخل الذكاء الاصطناعي؟
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm">
          "الذكاء الاصطناعي ينقل النظم من مرحلة (ماذا حدث في الماضي؟) إلى (ماذا سيحدث وكيف نتصرف؟)."
        </p>
      </motion.div>

      {/* FEATURED CHAPTER HERO IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative rounded-3xl overflow-hidden glass-panel border border-purple-500/30 shadow-[0_0_40px_rgba(168,85,247,0.2)] group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1200&q=80"
            alt="AI Neural Brain Integration"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Neural Telemetry Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-purple-500/40 text-[11px] font-mono text-purple-300 flex items-center gap-1.5 shadow-lg">
              <BrainCircuit className="w-3.5 h-3.5 text-purple-400 animate-pulse" />
              <span>معالجة عصبية تنبؤية (Neural Reasoning)</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-pink-500/40 text-[11px] font-mono text-pink-300 flex items-center gap-1.5 shadow-lg">
              <Sparkles className="w-3.5 h-3.5 text-pink-400" />
              <span>خوارزميات استشراف الفرص والمخاطر</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-purple-400 uppercase tracking-widest block mb-1">
                PREDICTIVE & PRESCRIPTIVE REASONING
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                تحويل الأنظمة من "سجلات صامتة" إلى "عقول مفكرة"
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                نقلة نوعية من التحليل الوصفي للأحداث السابقة إلى استشراف سيناريوهات الغد وتوليد القرارات البديلة تلقائياً.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">دقة التنبؤ</span>
                <span className="text-sm sm:text-base font-bold text-purple-400 font-mono">96.4%</span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">زمن التوصية</span>
                <span className="text-sm sm:text-base font-bold text-cyan-400 font-mono">فوري (Live)</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <AIEngineVisual />
      </div>

      {/* Split-Screen Visual Comparison: Traditional vs Intelligent */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border-purple-500/25 relative overflow-hidden">
        
        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
            System Comparison • مقارنة المنظومتين
          </span>
          <h3 className="text-2xl font-black text-white font-ibm">
            هنا يبدأ الفرق الحقيقي بين الماضي والمستقبل.
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          
          {/* Side A: Traditional */}
          <div className="p-6 rounded-2xl glass border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl glass text-slate-400 border-white/10 flex items-center justify-center">
                    <History className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-200 font-ibm">النظام التقليدي</h4>
                    <span className="text-[10px] text-slate-500 font-mono">Traditional System</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full glass text-slate-400 border-white/10 font-mono">
                  تسجيل الماضي
                </span>
              </div>

              {/* Flow Steps */}
              <div className="space-y-2 mb-4 font-ibm text-xs text-slate-300">
                <div className="p-2.5 rounded-xl glass border-white/5 flex items-center justify-between">
                  <span>١. جمع البيانات (Collect)</span>
                  <span className="text-slate-500">نقطة البداية</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-white/5 flex items-center justify-between">
                  <span>٢. تخزين مركزي (Store)</span>
                  <span className="text-slate-500">حفظ في جداول</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-white/5 flex items-center justify-between">
                  <span>٣. معالجة وتجميع (Process)</span>
                  <span className="text-slate-500">حساب المجاميع</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-white/5 flex items-center justify-between">
                  <span>٤. تقرير ثابت (Report)</span>
                  <span className="text-slate-500">ماذا حدث في الماضي؟</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl glass border-white/10 text-xs text-slate-400">
              <span className="text-slate-300 font-semibold block mb-0.5 font-ibm">حدود النظام:</span>
              يكتفي بإخبارك بما خسرته أو ربحته سابقاً دون تقديم حل للمستقبل.
            </div>
          </div>

          {/* Side B: Intelligent AI System */}
          <div className="p-6 rounded-2xl glass-card border-purple-500/50 shadow-2xl shadow-purple-500/10 flex flex-col justify-between relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-32 h-32 bg-purple-500/20 rounded-full blur-2xl pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2.5">
                  <div className="w-9 h-9 rounded-xl glass bg-purple-500/20 text-purple-300 border-purple-500/40 flex items-center justify-center shadow-[0_0_15px_rgba(168,85,247,0.3)]">
                    <BrainCircuit className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-white font-ibm">النظام الذكي</h4>
                    <span className="text-[10px] text-purple-300 font-mono">AI-Powered System</span>
                  </div>
                </div>
                <span className="text-xs px-2.5 py-0.5 rounded-full glass text-purple-300 border-purple-500/40 font-mono font-bold">
                  استشراف وتوصية
                </span>
              </div>

              {/* Intelligent Flow */}
              <div className="space-y-2 mb-4 font-ibm text-xs">
                <div className="p-2.5 rounded-xl glass border-white/10 flex items-center justify-between text-slate-200">
                  <span>١. جمع مستمر فوري (Collect)</span>
                  <span className="text-purple-300 font-mono">Real-time</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-purple-500/30 flex items-center justify-between text-purple-200">
                  <span>٢. تحليل الأنماط الخفية (Analyze)</span>
                  <span className="text-purple-300 font-mono">Deep Insight</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-blue-500/30 flex items-center justify-between text-blue-200">
                  <span>٣. التنبؤ بالمستقبل (Predict)</span>
                  <span className="text-blue-300 font-mono">94% Confidence</span>
                </div>
                <div className="p-2.5 rounded-xl glass border-emerald-500/40 flex items-center justify-between text-emerald-200 font-bold">
                  <span>٤. اقتراح أفضل قرار (Recommend)</span>
                  <span className="text-emerald-300 font-mono">Action Plan</span>
                </div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl glass border-purple-500/30 text-xs text-purple-200">
              <span className="text-white font-bold block mb-0.5 font-ibm">قوة الذكاء الاصطناعي:</span>
              يتوقع التحدي قبل وقوعه ويقترح على المدير أفضل خطة عمل تنفيذية.
            </div>
          </div>

        </div>

      </div>

      {/* 4 Core AI Superpowers (Interactive Cards) */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white font-ibm flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-400" />
            <span>القدرات الأربع للذكاء الاصطناعي</span>
          </h3>
          <span className="text-xs text-purple-400 font-mono">
            (اضغط لاستكشاف كل قدرة)
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {AI_CAPABILITIES.map((cap) => {
            const isSelected = selectedCapability === cap.id;
            return (
              <button
                id={`btn-ai-cap-${cap.id}`}
                key={cap.id}
                onClick={() => setSelectedCapability(cap.id)}
                className={`p-4 sm:p-5 rounded-2xl text-right transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? 'glass-panel border-purple-400 shadow-2xl shadow-purple-500/25 scale-[1.03]'
                    : 'glass-card border-white/10 hover:border-purple-500/30 hover:bg-white/10'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                  isSelected ? 'glass bg-purple-500/20 text-purple-300 border-purple-500/40' : 'glass text-slate-400 border-white/10'
                }`}>
                  {getCapabilityIcon(cap.id)}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-0.5 font-ibm">
                  {cap.title}
                </h4>
                <p className="text-xs text-purple-300 font-ibm font-medium">
                  "{getCapabilityQuestion(cap.id)}"
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Capability Details Spotlight */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCapData.id}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border-purple-500/30 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl glass border-purple-500/30 flex items-center justify-center text-purple-300 shrink-0 shadow-lg">
                {getCapabilityIcon(activeCapData.id)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-purple-400 font-bold uppercase">
                    {activeCapData.titleEn}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full glass text-purple-300 border-purple-500/30">
                    قدرة ذكية
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white font-ibm mb-1">
                  {activeCapData.title}
                </h4>
                <p className="text-sm text-slate-200 font-medium mb-1.5 font-ibm">
                  "{activeCapData.description}"
                </p>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-ibm">
                  <strong className="text-purple-300">مثال تطبيقي:</strong> {activeCapData.example}
                </p>
              </div>
            </div>

            <div className="shrink-0 px-5 py-3 rounded-2xl glass border-purple-500/30 text-center">
              <span className="text-[10px] text-purple-300 block mb-0.5 font-mono">الميزة التنافسية</span>
              <span className="text-xs font-bold text-white font-mono">{activeCapData.metric}</span>
            </div>
          </motion.div>
        </AnimatePresence>

      </div>

      {/* Expanded Academic Presentation Points */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-purple-400" />
          <span>المحاور الأكاديمية لشرح الفصل الرابع:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">١</span>
                <span className="text-[10px] font-mono text-slate-400">التحول الجوهري</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">من الوصف إلى الاستشراف</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                نظم المعلومات التقليدية تكتفي بـ <strong>التحليل الوصفي (Descriptive)</strong> للماضي، بينما الذكاء الاصطناعي يقدم <strong>التحليل التنبؤي (Predictive) والتوجيهي (Prescriptive)</strong>.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>الفرق:</strong> بدلاً من معرفة كم خسرنا، نعرف كيف نتجنب الخسارة قبل وقوعها.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-blue-400 flex items-center justify-center font-bold text-xs">٢</span>
                <span className="text-[10px] font-mono text-slate-400">القدرة الإدراكية</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">معالجة الأنماط غير الخطية</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                يستطيع الذكاء الاصطناعي <strong>اكتشاف الروابط المعقدة بين آلاف المتغيرات</strong> التي يعجز العقل البشري والجداول التقليدية عن ملاحظتها مجتمعة.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-ibm">
              <strong>مثال واقعي:</strong> التنبؤ بتعطل ماكينة المصنع قبل 48 ساعة بناءً على اهتزازات طفيفة بالحرارة.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-emerald-400 flex items-center justify-center font-bold text-xs">٣</span>
                <span className="text-[10px] font-mono text-slate-400">التكامل المتناغم</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">علاقة التكامل لا الإلغاء</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                الذكاء الاصطناعي <strong>لا يستغني عن نظم المعلومات</strong>؛ بل يعتمد عليها كلياً في الحصول على بيانات نظيفة، ويمثل هو المحرك الفكري فوق بنيتها التحتية.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-ibm">
              <strong>النتيجة:</strong> نظام متكامل يوفر أمان البيانات وسرعة المعالجة ودقة الاستشراف.
            </div>
          </div>

        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-purple-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-purple-400 font-bold block mb-1">
          القاعدة الذهبية للفصل الرابع
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "الذكاء الاصطناعي لا يلغي نظام المعلومات، بل يمنحه العقل الذي يحلل ويتوقع."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>

    </div>
  );
};


