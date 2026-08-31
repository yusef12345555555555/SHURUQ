import React, { useState } from 'react';
import { TrendingUp, Zap, Clock, ShieldCheck, DollarSign, Award, ArrowUpRight, Sparkles } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';

export const Chapter09AiValueMultipliers: React.FC = () => {
  const [selectedPillarIndex, setSelectedPillarIndex] = useState<number>(0);

  const pillars = [
    {
      id: 'speed',
      titleAr: 'مضاعفة سرعة الاستجابة واتخاذ القرار',
      metric: '4x أسرع',
      descAr: 'تقليص زمن إعداد التحليلات الدورية من أيام وأسابيع إلى ثوانٍ معدودة عبر الرصد الآلي للبيانات.',
      icon: Clock,
      color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
    },
    {
      id: 'accuracy',
      titleAr: 'خفض الأخطاء البشرية والتشغيلية',
      metric: '-75% أخطاء',
      descAr: 'تحييد التحيزات العاطفية والأخطاء اليدوية في إدخال ومطابقة الحسابات وسجلات المستودعات.',
      icon: ShieldCheck,
      color: 'border-blue-500 bg-blue-950/40 text-blue-300'
    },
    {
      id: 'revenue',
      titleAr: 'تعظيم العوائد وهوامش الربحية',
      metric: '+28% أرباح',
      descAr: 'اكتشاف الفرص البيعية الضائعة، تطبيق التسعير الديناميكي، وتحسين الاحتفاظ بالعملاء ذوي القيمة.',
      icon: DollarSign,
      color: 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
    },
    {
      id: 'agility',
      titleAr: 'المرونة والتكيف السريع مع الأزمات',
      metric: '99.8% جاهزية',
      descAr: 'إعادة جدولة سلاسل الإمداد ومسارات التوزيع تلقائياً عند وقوع أي اضطراب مفاجئ في السوق.',
      icon: Zap,
      color: 'border-violet-500 bg-violet-950/40 text-violet-300'
    }
  ];

  return (
    <section id="chapter-09" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="09"
        titleAr="الفصل التاسع"
        subtitleAr="مضاعفات القيمة المؤسسية وعوائد الاستثمار (Value Multipliers)"
        labelEn="BUSINESS ROI & VALUE IMPACT"
        accentColor="emerald"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#041410] via-[#07241c] to-[#030e0b] border border-emerald-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-emerald-400 tracking-widest uppercase">STRATEGIC VALUE ROI</div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "نظم المعلومات الذكية تحول مراكز التكلفة إلى محركات توليد ربح وابتكار تنافسي."
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          وفقاً لدراسات معاهد الإدارة العالمية، تحقق المنظمات التي تدمج الذكاء الاصطناعي في نظم معلوماتها عوائد تفوق منافسيها بمراتب متعددة.
        </p>
      </div>

      {/* 4 Pillars Interactive Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {pillars.map((pillar, idx) => {
          const isSelected = idx === selectedPillarIndex;
          const PillarIcon = pillar.icon;

          return (
            <div
              key={pillar.id}
              onClick={() => setSelectedPillarIndex(idx)}
              className={`p-6 rounded-3xl border transition-all cursor-pointer text-right flex flex-col justify-between gap-4 ${
                isSelected
                  ? `${pillar.color} shadow-2xl scale-[1.02] ring-1 ring-emerald-500/50`
                  : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-xl sm:text-2xl font-black font-mono text-slate-100">{pillar.metric}</span>
                <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  <PillarIcon className="w-5 h-5" />
                </div>
              </div>

              <div className="space-y-1.5">
                <h4 className="text-sm font-bold text-slate-100">{pillar.titleAr}</h4>
                <p className="text-xs text-slate-300 leading-relaxed">{pillar.descAr}</p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
