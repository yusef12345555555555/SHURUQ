import React, { useState } from 'react';
import { Shield, Lock, Eye, Scale, UserCheck, AlertOctagon, Sparkles } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';

export const Chapter10EthicsAndGovernance: React.FC = () => {
  const [activeTabId, setActiveTabId] = useState<string>('bias');

  const governancePillars = [
    {
      id: 'bias',
      titleAr: 'تحييد التحيز الخوارزمي (Algorithmic Bias Mitigation)',
      challengeAr: 'عندما تدرب النماذج على بيانات تاريخية تحمل تحيزات بشرية، فقد تكرر وتضخم هذا التحيز في قرارات التوظيف أو الائتمان.',
      solutionAr: 'مراجعة خوارزمية دورية للبيانات، اختبارات العدالة الإحصائية (Fairness Metrics)، وتعديل أوزان المتغيرات الحساسة.',
      icon: Scale,
      color: 'border-amber-500 bg-amber-950/40 text-amber-300'
    },
    {
      id: 'xai',
      titleAr: 'قابلية التفسير والشفافية (Explainable AI - XAI)',
      challengeAr: 'معضلة "الصندوق الأسود" (Black Box) حيث تعجز الإدارة عن فهم سبب خروج الخوارزمية بقرار معين، مما يهدد الامتثال القانوني.',
      solutionAr: 'استخدام نماذج تفسيرية مثل (SHAP / LIME) لتوضيح نسبة مساهمة كل متغير في القرار النهائي للمدير والمراجع.',
      icon: Eye,
      color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
    },
    {
      id: 'privacy',
      titleAr: 'خصوصية البيانات والأمن السيبراني (Data Privacy & Zero Trust)',
      challengeAr: 'مخاطر تسريب بيانات العملاء الحساسة أو استهداف مستودعات المنظمة بهجمات الفدية وحقن البيانات المسمومة.',
      solutionAr: 'تشفير شامل، سياسات وصول صفرية الثقة (Zero Trust Architecture)، والامتثال لمعايير GDPR وحماية البيانات الوطنية.',
      icon: Lock,
      color: 'border-rose-500 bg-rose-950/40 text-rose-300'
    },
    {
      id: 'hitl',
      titleAr: 'الرقابة والمسؤولية البشرية (Human-in-the-Loop)',
      challengeAr: 'المخاطرة باتخاذ قرارات مصيرية مؤتمتة بنسبة 100% دون تدخل بشري في المواقف غير المسبوقة ذات الأثر الأخلاقي العالي.',
      solutionAr: 'إبقاء الإنسان في حلقة القرار (Human-in-the-Loop)؛ الذكاء الاصطناعي يقترح ويحلل، والإنسان يعتمد ويتحمل المسؤولية القانونية.',
      icon: UserCheck,
      color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
    }
  ];

  const current = governancePillars.find((p) => p.id === activeTabId) || governancePillars[0];
  const CurrentIcon = current.icon;

  return (
    <section id="chapter-10" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="10"
        titleAr="الفصل العاشر"
        subtitleAr="الحوكمة، الأخلاقيات والمسؤولية الإنسانية (Ethics & Governance)"
        labelEn="AI GOVERNANCE & ETHICAL FRAMEWORK"
        accentColor="amber"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#181105] via-[#241a08] to-[#0f0b03] border border-amber-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-amber-400 tracking-widest uppercase">ETHICAL COMMANDMENTS</div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "لا قيمة لقرار سريع وذكي... إذا كان يفتقر إلى العدالة والشفافية والمسؤولية الأخلاقية."
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          الذكاء الاصطناعي أداة تمكين فائقة، لكنه يحتاج إلى إطار حوكمة صارم يضمن بقاء السيطرة والمسؤولية في يد الإنسان دائماً.
        </p>
      </div>

      {/* 4 Pillars Interactive Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 4 Pillars Selectable Grid */}
        <div className="lg:col-span-6 space-y-3">
          {governancePillars.map((p) => {
            const isSelected = p.id === activeTabId;
            const PillarIcon = p.icon;

            return (
              <button
                key={p.id}
                onClick={() => setActiveTabId(p.id)}
                className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 ${
                  isSelected
                    ? `${p.color} shadow-xl scale-[1.02] ring-1 ring-amber-500/50`
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <PillarIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">{p.titleAr.split('(')[0]}</span>
                </div>
                <span className="text-[10px] font-mono opacity-60">ETHICS</span>
              </button>
            );
          })}
        </div>

        {/* Right: Detailed Challenge & Solution Card */}
        <div className="lg:col-span-6 bg-[#120d04] border border-amber-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-amber-950 text-amber-400 border border-amber-800">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-amber-400">ETHICAL PRINCIPLE</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{current.titleAr.split('(')[0]}</h3>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-rose-400 flex items-center gap-1.5">
              <AlertOctagon className="w-4 h-4" />
              <span>التحدي والمخاطرة المحتملة:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              {current.challengeAr}
            </p>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
              <Shield className="w-4 h-4" />
              <span>الحل والمعيار الحاكم للمنظومة:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-amber-950/20 p-4 rounded-2xl border border-amber-800/40 font-semibold">
              {current.solutionAr}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
