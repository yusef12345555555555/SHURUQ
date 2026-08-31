import React, { useState } from 'react';
import { Target, TrendingUp, AlertTriangle, CheckCircle2, Sparkles, UserCheck, ShieldCheck } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';
import { VISUAL_ASSETS } from '../../data/visualAssets';

export const Chapter08DssSimulation: React.FC = () => {
  const [selectedScenarioIndex, setSelectedScenarioIndex] = useState<number>(0);
  const [selectedDecisionOption, setSelectedDecisionOption] = useState<'traditional' | 'ai' | 'human_override'>('ai');

  const scenarios = [
    {
      id: 'market-expansion',
      titleAr: 'سيناريو 1: التوسع الجغرافي السريع',
      challengeAr: 'فتح 5 فروع جديدة في أسواق إقليمية ذات منافسة شديدة مع تقلبات في سلاسل الإمداد.',
      traditionalVerdictAr: 'الرفض استناداً لبيانات الربع السنوي السابق خوفاً من تآكل السيولة المالية.',
      aiRecommendationAr: 'الموافقة المشروطة بفتح 3 فروع ذكية ذات تكلفة تشغيلية منخفضة واستخدام التوزيع المشترك.',
      humanOverrideAr: 'الموافقة على فتح فرعين فقط في العاصمة وتأجيل البقية لحين استقرار أسعار الشحن.',
      growthScore: '+34%',
      riskLevel: 'معتدل (32%)',
      confidence: '92%'
    },
    {
      id: 'supply-chain-reroute',
      titleAr: 'سيناريو 2: أزمة سلاسل التوريد واللوجستيات',
      challengeAr: 'ارتفاع مفاجئ بنسبة 45% في تكاليف الشحن البحري وتأخر وصول المواد الخام لخطوط الإنتاج.',
      traditionalVerdictAr: 'إيقاف خطوط الإنتاج جزئياً لتقليل الخسائر التشغيلية المباشرة.',
      aiRecommendationAr: 'إعادة توجيه المسار اللوجستي نحو 3 موردين محليين تم تقييمهم تلقائياً، وتعديل جدول الورديات.',
      humanOverrideAr: 'شراء حصة طوارئ من المورد المحلي مع التفاوض على خصم كمية للحفاظ على وتيرة العمل.',
      growthScore: '+12%',
      riskLevel: 'منخفض جداً (14%)',
      confidence: '96%'
    },
    {
      id: 'dynamic-pricing',
      titleAr: 'سيناريو 3: التسعير الديناميكي للمنتجات',
      challengeAr: 'دخول منافس جديد بتخفيضات سعرية حادة بنسبة 20% لجذب الحصة السوقية للشركة.',
      traditionalVerdictAr: 'تخفيض عام وشامل للأسعار مما يقلل هامش الربح الإجمالي بنسبة 30%.',
      aiRecommendationAr: 'تطبيق تسعير مرن بحسب شريحة العميل وحجم الولاء، مع عروض حزم مخصصة تحافظ على هامش الربح.',
      humanOverrideAr: 'تثبيت السعر الأساسي وتقديم سنة ضمان إضافية مجانية للحفاظ على القيمة السوقية للعلامة.',
      growthScore: '+22%',
      riskLevel: 'منخفض (18%)',
      confidence: '94%'
    }
  ];

  const current = scenarios[selectedScenarioIndex];

  return (
    <section id="chapter-08" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="06"
        titleAr="الفصل السادس"
        subtitleAr="نظم دعم القرار المعززة بالذكاء الاصطناعي (Cognitive DSS)"
        labelEn="AUGMENTED DECISION SUPPORT"
        accentColor="blue"
      />

      {/* Concept Hero Visual + Kinetic Editorial */}
      <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-slate-950">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={VISUAL_ASSETS.humanAiCollaboration}
            alt="Executive Human and AI Decision Collaboration"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-55 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/70 to-transparent" />

          {/* Floating Editorial Statement over image */}
          <div className="absolute bottom-6 right-6 left-6 text-right space-y-2">
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
              HUMAN-IN-THE-LOOP COGNITION
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-snug">
              "النظام لا يسلب القائد سلطته... بل يمنحه منظاراً يرى من خلاله عواقب القرار قبل اعتماده."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              تنتقل نظم دعم القرار (DSS) مع الذكاء الاصطناعي من مجرد عرض الرسوم البيانية إلى تقديم بدائل استراتيجية موثقة باحتمالات النجاح وتكلفة المخاطر المحسوبة.
            </p>
          </div>
        </div>
      </div>

      {/* Scenarios Selector Tabs */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {scenarios.map((sc, idx) => {
          const isSelected = idx === selectedScenarioIndex;

          return (
            <button
              key={sc.id}
              onClick={() => setSelectedScenarioIndex(idx)}
              className={`p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-2 ${
                isSelected
                  ? 'bg-blue-950/60 border-blue-500 text-blue-200 shadow-xl ring-1 ring-blue-500/50'
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <span className="text-xs font-bold">{sc.titleAr}</span>
              <Target className={`w-4 h-4 ${isSelected ? 'text-blue-400' : 'text-slate-600'}`} />
            </button>
          );
        })}
      </div>

      {/* Interactive Dilemma Solver */}
      <div className="bg-[#071026] border border-blue-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
        <div className="space-y-2 pb-4 border-b border-slate-800">
          <span className="text-xs font-mono text-blue-400">DECISION DILEMMA</span>
          <h4 className="text-base sm:text-lg font-bold text-slate-100">{current.challengeAr}</h4>
        </div>

        {/* 3 Interactive Decision Paths */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* 1. Traditional */}
          <button
            onClick={() => setSelectedDecisionOption('traditional')}
            className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
              selectedDecisionOption === 'traditional'
                ? 'bg-rose-950/40 border-rose-500 text-rose-200 shadow-lg ring-1 ring-rose-500/40'
                : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-rose-400">1. القرار التقليدي</span>
              <AlertTriangle className="w-4 h-4 text-rose-400" />
            </div>
            <p className="text-xs leading-relaxed">{current.traditionalVerdictAr}</p>
          </button>

          {/* 2. AI Prescriptive */}
          <button
            onClick={() => setSelectedDecisionOption('ai')}
            className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
              selectedDecisionOption === 'ai'
                ? 'bg-cyan-950/50 border-cyan-500 text-cyan-100 shadow-lg ring-1 ring-cyan-500/40'
                : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-cyan-300">2. توصية الذكاء الاصطناعي</span>
              <Sparkles className="w-4 h-4 text-cyan-400" />
            </div>
            <p className="text-xs leading-relaxed">{current.aiRecommendationAr}</p>
          </button>

          {/* 3. Human in the Loop Override */}
          <button
            onClick={() => setSelectedDecisionOption('human_override')}
            className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
              selectedDecisionOption === 'human_override'
                ? 'bg-emerald-950/40 border-emerald-500 text-emerald-100 shadow-lg ring-1 ring-emerald-500/40'
                : 'bg-slate-950/80 border-slate-800 text-slate-400 hover:text-slate-300'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-emerald-300">3. الاعتماد البشري المرن</span>
              <UserCheck className="w-4 h-4 text-emerald-400" />
            </div>
            <p className="text-xs leading-relaxed">{current.humanOverrideAr}</p>
          </button>
        </div>

        {/* Selected Strategy Outcome Bar */}
        <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="text-xs text-slate-400">المسار المختار:</span>
            <span className="text-xs font-bold text-cyan-300">
              {selectedDecisionOption === 'traditional' ? 'القرار التقليدي المتحفظ' : selectedDecisionOption === 'ai' ? 'توصية الذكاء الاصطناعي الذكية' : 'القرار التوافقي بين الإنسان والآلة'}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <div className="text-xs font-bold text-emerald-400">معدل النمو: {current.growthScore}</div>
            <div className="text-xs font-bold text-blue-300">المخاطرة: {current.riskLevel}</div>
          </div>
        </div>
      </div>

      <div id="chapter-08-end-trigger" aria-hidden="true" className="h-10" />
    </section>
  );
};
