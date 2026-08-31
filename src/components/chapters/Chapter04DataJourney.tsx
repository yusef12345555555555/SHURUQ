import React, { useState } from 'react';
import { 
  Database, 
  Filter, 
  Binary, 
  BrainCircuit, 
  LineChart, 
  CheckCircle2, 
  ArrowLeft,
  Sparkles,
  TrendingDown,
  TrendingUp
} from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';
import { PageSignatureFooter } from '../common/PageSignatureFooter';

export const Chapter04DataJourney: React.FC = () => {
  const [activeStageIndex, setActiveStageIndex] = useState<number>(0);

  const stages = [
    {
      id: 'collection',
      number: '01',
      titleAr: 'الالتقاط والتجميع (Data Ingestion)',
      subtitleEn: 'IoT, Webhooks & Transaction Logs',
      descAr: 'استقبال سيل البيانات غير المنظمة من نقاط البيع، أجهزة الاستشعار، والتطبيقات على مدار الساعة.',
      entropyPercent: 95,
      valueScore: 10,
      icon: Database,
      color: 'from-cyan-500 to-blue-500'
    },
    {
      id: 'processing',
      number: '02',
      titleAr: 'المعالجة والتطهير (Cleaning & ETL)',
      subtitleEn: 'Validation, Normalization & Filtering',
      descAr: 'إزالة السجلات المكررة، سد الفجوات والقيم المفقودة، وتوحيد الصيغ الزمنية والمعايير الحسابية.',
      entropyPercent: 70,
      valueScore: 30,
      icon: Filter,
      color: 'from-blue-500 to-indigo-500'
    },
    {
      id: 'organization',
      number: '03',
      titleAr: 'الهيكلة والتخزين (Structuring & Modeling)',
      subtitleEn: 'Relational Schemas & Warehouses',
      descAr: 'بناء العلاقات المنطقية، جداول الأبعاد، وربط العمليات بالسياق الإداري والجغرافي.',
      entropyPercent: 45,
      valueScore: 50,
      icon: Binary,
      color: 'from-indigo-500 to-violet-500'
    },
    {
      id: 'ai-analysis',
      number: '04',
      titleAr: 'التحليل بالذكاء الاصطناعي (AI & Pattern Mining)',
      subtitleEn: 'Machine Learning & Clustering',
      descAr: 'اكتشاف الأنماط غير المرئية، استخراج الاتجاهات الخفية، وربط العلاقات المعقدة بين المتغيرات.',
      entropyPercent: 25,
      valueScore: 75,
      icon: BrainCircuit,
      color: 'from-violet-500 to-purple-500'
    },
    {
      id: 'prediction',
      number: '05',
      titleAr: 'التنبؤ والاستشراف (Predictive Modeling)',
      subtitleEn: 'Time-Series & Scenario Forecasting',
      descAr: 'بناء سيناريوهات مستقبلية دقيقة لحجم الطلب، تدفق السيولة، أو احتمالات الأعطال.',
      entropyPercent: 12,
      valueScore: 90,
      icon: LineChart,
      color: 'from-purple-500 to-fuchsia-500'
    },
    {
      id: 'decision',
      number: '06',
      titleAr: 'القرار والعمل التنفيذي (Prescriptive Action)',
      subtitleEn: 'Augmented Decision Execution',
      descAr: 'تحويل الرؤية إلى قرار عملي محدد يرفع الأرباح، يحصن المنظمة ضد المخاطر، ويقتنص الفرص.',
      entropyPercent: 2,
      valueScore: 100,
      icon: CheckCircle2,
      color: 'from-fuchsia-500 to-emerald-400'
    }
  ];

  const current = stages[activeStageIndex];
  const CurrentIcon = current.icon;

  return (
    <section id="chapter-04" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="03"
        titleAr="الفصل الثالث"
        subtitleAr="رحلة البيانات: من النبضة الخام إلى القرار الذكي"
        labelEn="COGNITIVE TRANSFORMATION PIPELINE"
        accentColor="violet"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#090e24] via-[#120f2e] to-[#080b1e] border border-violet-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-violet-400 tracking-widest uppercase">THE VALUE MULTIPLICATION PIPELINE</div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "في كل مرحلة من خط الأنابيب تنخفض الفوضى (Entropy) بنسبة حادة... وتتضاعف القيمة الاقتصادية والمعرفية."
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          البيانات لا تقفز فجأة إلى قرار؛ بل تمر عبر 6 مراحل متسلسلة تعيد صياغتها وترفع جاهزيتها القيادية.
        </p>
      </div>

      {/* 6 Stages Interactive Horizontal Pipeline Tracker */}
      <div className="space-y-6">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
          {stages.map((stage, idx) => {
            const isSelected = idx === activeStageIndex;
            const StageIcon = stage.icon;

            return (
              <button
                key={stage.id}
                onClick={() => setActiveStageIndex(idx)}
                className={`p-3.5 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? 'bg-violet-950/50 border-violet-500 text-slate-100 shadow-xl shadow-violet-950/40 ring-1 ring-violet-500/50 scale-[1.02]'
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-mono font-bold text-violet-400">{stage.number}</span>
                  <div className={`p-1.5 rounded-lg ${isSelected ? 'bg-violet-500 text-black' : 'bg-slate-800 text-slate-400'}`}>
                    <StageIcon className="w-4 h-4" />
                  </div>
                </div>
                <div className="text-xs font-bold truncate text-slate-200">{stage.titleAr.split('(')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Selected Stage Deep Inspector */}
        <div className="bg-[#080d1e] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-violet-400">STAGE {current.number} / 06</span>
                <h3 className="text-lg font-bold text-slate-100">{current.titleAr}</h3>
                <div className="text-xs text-slate-400 font-mono">{current.subtitleEn}</div>
              </div>
            </div>

            {/* Entropy & Value Indicators */}
            <div className="flex items-center gap-4 bg-slate-950/80 p-3 rounded-2xl border border-slate-800">
              <div className="text-right space-y-0.5">
                <div className="text-[10px] text-slate-500 font-mono">مستوى الفوضى (Entropy)</div>
                <div className="text-sm font-black font-mono text-rose-400 flex items-center gap-1">
                  <TrendingDown className="w-3.5 h-3.5" />
                  <span>{current.entropyPercent}%</span>
                </div>
              </div>
              <div className="h-6 w-px bg-slate-800" />
              <div className="text-right space-y-0.5">
                <div className="text-[10px] text-slate-500 font-mono">القيمة الاستراتيجية (Value)</div>
                <div className="text-sm font-black font-mono text-emerald-400 flex items-center gap-1">
                  <TrendingUp className="w-3.5 h-3.5" />
                  <span>+{current.valueScore}%</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400">الآلية والتحول الذي يحدث في هذه المرحلة:</div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              {current.descAr}
            </p>
          </div>
        </div>
      </div>
      <PageSignatureFooter />
    </section>
  );
};
