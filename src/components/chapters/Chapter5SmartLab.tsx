import React, { useState, useMemo } from 'react';
import { motion } from 'motion/react';
import { 
  Sliders, 
  TrendingUp, 
  TrendingDown, 
  Sparkles, 
  BrainCircuit, 
  CheckCircle2, 
  AlertTriangle, 
  DollarSign, 
  Layers, 
  ArrowLeft,
  RefreshCw,
  Zap,
  Target,
  BarChart2,
  Activity,
  Gauge,
  BookOpen
} from 'lucide-react';
import { PresenterSignature } from '../PresenterSignature';
import { DecisionLabVisual } from '../visuals/DecisionLabVisual';

interface ChapterProps {
  onNext?: () => void;
  onPrev?: () => void;
}

export const Chapter5SmartLab: React.FC<ChapterProps> = ({ onNext, onPrev }) => {
  // Live Simulation Inputs
  const [salesLevel, setSalesLevel] = useState<number>(70); // 10 to 100
  const [demandGrowth, setDemandGrowth] = useState<number>(25); // -30% to +60%
  const [budget, setBudget] = useState<number>(50); // $10k to $100k
  const [riskTolerance, setRiskTolerance] = useState<'low' | 'balanced' | 'aggressive'>('balanced');

  const sim = useMemo(() => {
    const currentRevenue = Math.round(salesLevel * 1250 + budget * 400);
    
    let multiplier = 1 + (demandGrowth / 100);
    if (riskTolerance === 'aggressive') multiplier += 0.14;
    if (riskTolerance === 'low') multiplier -= 0.06;

    const projectedRevenue = Math.round(currentRevenue * multiplier);
    const growthPercent = Math.round(((projectedRevenue - currentRevenue) / currentRevenue) * 100);
    const confidenceScore = Math.min(97, Math.max(76, Math.round(93 - Math.abs(demandGrowth) * 0.12 + (salesLevel > 50 ? 3 : -2))));

    let whatWeKnow = '';
    let whatAIPredicts = '';
    let whatAIRecommends = '';
    let recommendedActionPill = '';

    if (demandGrowth >= 20) {
      whatWeKnow = `المبيعات الحالية عند ${salesLevel}% ومؤشر الطلب يشهد ارتفاعاً متسارعاً بنسبة +${demandGrowth}%. السيولة المتاحة تبلغ $${budget}k.`;
      whatAIPredicts = `يتوقع النظام استمرار موجة النمو لتبلغ الإيرادات $${projectedRevenue.toLocaleString()} مع احتمالية نفاد المخزون خلال 14 يوماً إذا لم يتم تعزيزه.`;
      whatAIRecommends = `زيادة المخزون بنسبة 25% فوراً، وتوجيه $${Math.round(budget * 0.45)}k لتعزيز قنوات التوزيع الأكثر نشاطاً.`;
      recommendedActionPill = 'زيادة المخزون والتوسع الفوري';
    } else if (demandGrowth >= 0) {
      whatWeKnow = `معدلات شراء مستقرة عند ${salesLevel}% مع وتيرة نمو هادئة بنسبة +${demandGrowth}%. لا توجد ضغوطات على سلاسل الإمداد.`;
      whatAIPredicts = `يتوقع النظام ثبات الأداء وتحقيق إيراد $${projectedRevenue.toLocaleString()} (نمو معتدل بنسبة +${growthPercent}%).`;
      whatAIRecommends = `إعادة استهداف العملاء الحاليين وتخصيص $${Math.round(budget * 0.3)}k للعروض المجمعة لرفع متوسط الفاتورة.`;
      recommendedActionPill = 'تحسين الكفاءة وتعظيم العائد';
    } else {
      whatWeKnow = `انخفاض في الطلب بنسبة ${demandGrowth}% مع حساسية عالية للأسعار وركود جزئي في بعض الأصناف.`;
      whatAIPredicts = `يتوقع النظام انكماشاً مؤقتاً في العوائد ($${projectedRevenue.toLocaleString()}) إذا استمرت التكاليف التشغيلية على وضعها الحالي.`;
      whatAIRecommends = `حماية السيولة النقدية، تقليل طلبات التوريد الجديدة، وتقديم خصومات ترويجية ذكية لتصريف المخزون الراكد.`;
      recommendedActionPill = 'حماية السيولة وتصريف المخزون';
    }

    return {
      currentRevenue,
      projectedRevenue,
      growthPercent,
      confidenceScore,
      whatWeKnow,
      whatAIPredicts,
      whatAIRecommends,
      recommendedActionPill,
    };
  }, [salesLevel, demandGrowth, budget, riskTolerance]);

  return (
    <div id="chapter-5-section" className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative">
      
      {/* Ambient background glow */}
      <div className="absolute top-20 right-10 w-96 h-96 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-emerald-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-blue-500/30 text-blue-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل الخامس / ٠٥</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
          <span>المختبر التفاعلي: محاكاة السيناريوهات الحية</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          مختبر القرار الذكي
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm">
          "محاكاة حية: كيف يتفاعل الذكاء الاصطناعي مع مدخلات السوق ليصنع التوصية في لحظات؟"
        </p>
      </motion.div>

      {/* FEATURED CHAPTER HERO IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative rounded-3xl overflow-hidden glass-panel border border-blue-500/30 shadow-[0_0_40px_rgba(59,130,246,0.2)] group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80"
            alt="Smart Analytics Control Room Dashboard"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-blue-500/40 text-[11px] font-mono text-blue-300 flex items-center gap-1.5 shadow-lg">
              <Activity className="w-3.5 h-3.5 text-blue-400 animate-pulse" />
              <span>محاكاة فورية متعددة المتغيرات (Real-Time Sandbox)</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-emerald-500/40 text-[11px] font-mono text-emerald-300 flex items-center gap-1.5 shadow-lg">
              <Zap className="w-3.5 h-3.5 text-emerald-400" />
              <span>توليد قرارات استراتيجية آلية</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-400 uppercase tracking-widest block mb-1">
                DECISION SIMULATION ENGINE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                غرفة العمليات الذكية ومحاكاة "ماذا لو؟"
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                جرّب تغيير مستويات المبيعات، ومعدلات نمو السوق، وميزانية المؤسسة لتشاهد استجابة الذكاء الاصطناعي الفورية.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">حالة المحرك</span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">Active</span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">زمن الاستجابة</span>
                <span className="text-sm sm:text-base font-bold text-blue-400 font-mono">0.08 ثانية</span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <DecisionLabVisual />
      </div>

      {/* Main Intelligent Control Room Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 mb-10">
        
        {/* Left 5 Cols: Live Parameter Controls */}
        <div className="lg:col-span-5 p-6 sm:p-7 rounded-3xl glass-card border-white/10 flex flex-col justify-between shadow-2xl">
          <div>
            <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
              <h3 className="text-base font-bold text-white font-ibm flex items-center gap-2">
                <Sliders className="w-5 h-5 text-blue-400" />
                <span>لوحة التحكم المباشرة</span>
              </h3>
              <span className="text-[10px] font-mono text-blue-400 font-bold glass px-2.5 py-1 rounded-md">
                LIVE INPUTS
              </span>
            </div>

            {/* Parameter 1: Sales Level */}
            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300 font-ibm">١. مستوى المبيعات الحالي:</span>
                <span className="text-blue-400 font-mono font-bold">{salesLevel}%</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={salesLevel}
                onChange={(e) => setSalesLevel(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-blue-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>10% (منخفض)</span>
                <span>100% (طاقة قصوى)</span>
              </div>
            </div>

            {/* Parameter 2: Demand Growth */}
            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300 font-ibm">٢. وتيرة نمو الطلب:</span>
                <span className={`font-mono font-bold ${demandGrowth >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {demandGrowth >= 0 ? `+${demandGrowth}%` : `${demandGrowth}%`}
                </span>
              </div>
              <input
                type="range"
                min="-30"
                max="60"
                value={demandGrowth}
                onChange={(e) => setDemandGrowth(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-emerald-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>-30% (انكماش)</span>
                <span>+60% (طفرة طلب)</span>
              </div>
            </div>

            {/* Parameter 3: Budget */}
            <div className="mb-5">
              <div className="flex justify-between text-xs font-bold mb-2">
                <span className="text-slate-300 font-ibm">٣. الميزانية المخصصة:</span>
                <span className="text-purple-300 font-mono font-bold">${budget},000</span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
                className="w-full h-2 bg-white/10 rounded-lg appearance-none cursor-pointer accent-purple-400"
              />
              <div className="flex justify-between text-[10px] text-slate-500 font-mono mt-1">
                <span>$10k</span>
                <span>$100k</span>
              </div>
            </div>

            {/* Parameter 4: Risk Tolerance */}
            <div className="mb-4">
              <label className="text-xs font-bold text-slate-300 block mb-2 font-ibm">
                ٤. مستوى تقبل المخاطر:
              </label>
              <div className="grid grid-cols-3 gap-2">
                {(['low', 'balanced', 'aggressive'] as const).map((lvl) => (
                  <button
                    key={lvl}
                    type="button"
                    onClick={() => setRiskTolerance(lvl)}
                    className={`py-2 px-1 rounded-xl text-xs font-bold transition cursor-pointer border font-ibm ${
                      riskTolerance === lvl
                        ? 'glass bg-blue-500/20 border-blue-400 text-blue-300 shadow-md'
                        : 'glass border-white/5 text-slate-400 hover:border-white/15'
                    }`}
                  >
                    {lvl === 'low' ? 'حذر وآمن' : lvl === 'balanced' ? 'متوازن' : 'هجومي ونمو'}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-3 border-t border-white/10 text-[11px] text-slate-400 flex items-center gap-1.5 font-mono">
            <Activity className="w-3.5 h-3.5 text-blue-400 shrink-0 animate-pulse" />
            <span>محرك التنبؤ يعمل بالوقت الحقيقي (Real-Time Sim)</span>
          </div>
        </div>

        {/* Right 7 Cols: The 3 Core Storytelling Answers (ماذا نعرف؟ - ماذا يتوقع؟ - ماذا يقترح؟) */}
        <div className="lg:col-span-7 space-y-4">
          
          {/* Answer 1: ماذا نعرف؟ (التحليل الحالي) */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card border-blue-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg glass bg-blue-500/20 text-blue-300 border-blue-500/40 flex items-center justify-center text-xs font-bold font-mono">
                  ١
                </div>
                <h4 className="text-sm sm:text-base font-bold text-blue-300 font-ibm">
                  ماذا نعرف؟ (التحليل الراهن للبيانات)
                </h4>
              </div>
              <span className="text-xs font-mono font-bold text-white glass px-2.5 py-0.5 rounded-lg">
                ${sim.currentRevenue.toLocaleString()} إيراد حالي
              </span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-ibm">
              {sim.whatWeKnow}
            </p>
          </div>

          {/* Answer 2: ماذا يتوقع النظام؟ (التنبؤ الذكي) */}
          <div className="p-5 sm:p-6 rounded-3xl glass-card border-purple-500/30 shadow-xl">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg glass bg-purple-500/20 text-purple-300 border-purple-500/40 flex items-center justify-center text-xs font-bold font-mono">
                  ٢
                </div>
                <h4 className="text-sm sm:text-base font-bold text-purple-300 font-ibm">
                  ماذا يتوقع النظام؟ (التنبؤ الذكي)
                </h4>
              </div>
              <div className="flex items-center gap-2">
                <span className={`text-xs font-mono font-bold glass px-2.5 py-0.5 rounded-lg ${sim.growthPercent >= 0 ? 'text-emerald-400' : 'text-rose-400'}`}>
                  {sim.growthPercent >= 0 ? `+${sim.growthPercent}%` : `${sim.growthPercent}%`}
                </span>
                <span className="text-[11px] font-mono text-purple-300">
                  ثقة {sim.confidenceScore}%
                </span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed font-ibm">
              {sim.whatAIPredicts}
            </p>
          </div>

          {/* Answer 3: ماذا يقترح؟ (التوصية الذكية) */}
          <div className="p-6 sm:p-7 rounded-3xl glass-panel border-emerald-500/40 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-1/4 w-36 h-36 bg-emerald-500/15 rounded-full blur-2xl pointer-events-none" />

            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg glass bg-emerald-500/25 text-emerald-300 border-emerald-500/40 flex items-center justify-center text-xs font-bold font-mono shadow-md">
                  ٣
                </div>
                <h4 className="text-base font-bold text-emerald-300 font-ibm">
                  ماذا يقترح الذكاء الاصطناعي؟ (التوصية الاستراتيجية)
                </h4>
              </div>
              <span className="text-[10px] font-bold glass text-emerald-300 border-emerald-500/30 px-2.5 py-1 rounded-full font-ibm">
                {sim.recommendedActionPill}
              </span>
            </div>

            <p className="text-xs sm:text-sm font-semibold text-white leading-relaxed font-ibm mb-3">
              "{sim.whatAIRecommends}"
            </p>

            <div className="p-3 rounded-xl glass border-white/10 flex items-center justify-between text-xs font-ibm">
              <span className="text-slate-400">الهدف:</span>
              <span className="text-emerald-300 font-bold">تمكين الإنسان من اتخاذ القرار الأعلى عائداً والأقل مخاطرة</span>
            </div>
          </div>

        </div>

      </div>

      {/* Expanded Academic Explanations for Presentation */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-400" />
          <span>المحاور الأكاديمية لشرح الفصل الخامس:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-blue-400 flex items-center justify-center font-bold text-xs">١</span>
                <span className="text-[10px] font-mono text-slate-400">مفهوم الذكاء القراري</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">ذكاء القرار (Decision Intelligence)</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                هو <strong>علم تطبيق الذكاء الاصطناعي ونظم المعلومات</strong> لتصميم واختبار ومحاكاة القرارات المعقدة في بيئة رقمية آمنة قبل تطبيقها على أرض الواقع.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-ibm">
              <strong>الفائدة:</strong> تجنب القرارات الانفعالية أو العشوائية المكلفة.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">٢</span>
                <span className="text-[10px] font-mono text-slate-400">محاكاة سيناريوهات "ماذا لو؟"</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">What-If Analysis</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                يقوم النظام باختبار <strong>مئات المتغيرات الفورية</strong> (كتغير الأسعار، تقلبات العرض، والميزانيات) ويعرض تأثير كل خيار على الربحية والمخاطر.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>مثال واقعي:</strong> قياس أثر خفض الأسعار بنسبة 10% على صافي الأرباح السنوية.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-emerald-400 flex items-center justify-center font-bold text-xs">٣</span>
                <span className="text-[10px] font-mono text-slate-400">التوصية الموجهة</span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">دعم الإدارة بالتوصيات</h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                لا يكتفي المحرك بسرد الأرقام، بل يقدم <strong>إرشادات واضحة قابلة للتنفيذ الفوري</strong> تساعد القيادة على اقتناص الفرص السوقية قبل المنافسين.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-ibm">
              <strong>النتيجة:</strong> زيادة كفاءة توظيف الموارد وحماية الاستثمارات المالية.
            </div>
          </div>

        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-blue-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
          القاعدة الذهبية للفصل الخامس
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "التحليل التفاعلي الذكي يحول ملايين الاحتمالات إلى خطوات تنفيذية واضحة في ثوانٍ."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>

    </div>
  );
};

