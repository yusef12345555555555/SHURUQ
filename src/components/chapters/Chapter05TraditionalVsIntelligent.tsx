import React, { useState } from 'react';
import { History, Sparkles, Check, X, ArrowLeftRight, Clock, ShieldAlert, Cpu } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';

export const Chapter05TraditionalVsIntelligent: React.FC = () => {
  const [selectedAspect, setSelectedAspect] = useState<number>(0);

  const comparisonData = [
    {
      aspectAr: 'طبيعة التوجه الزمني والرؤية (Time Orientation)',
      traditionalAr: 'استرجاعي للماضي (Retrospective): يصف ماذا حدث بالأمس بناءً على تقارير مجمعة ومتأخرة.',
      intelligentAr: 'استشرافي وتنبؤي لحظي (Predictive & Real-Time): يتوقع ماذا سيحدث غداً ويوصي بالإجراء الأنسب فوراً.',
      tag: 'PARADIGM SHIFT'
    },
    {
      aspectAr: 'نوعية البيانات المدخلة والمقبولة (Data Modalities)',
      traditionalAr: 'تقتصر على الجداول المهيكلة (Structured Data / SQL) والسجلات الرقمية البسيطة.',
      intelligentAr: 'تستوعب البيانات غير المهيكلة: نصوص، صور، فيديو، صوت، وتدفقات إنترنت الأشياء (IoT Stream).',
      tag: 'MULTI-MODAL'
    },
    {
      aspectAr: 'آلية المعالجة والاستجابة (Processing Logic)',
      traditionalAr: 'قواعد جامدة مبرمجة مسبقاً من الإنسان (Hardcoded If-Else Rules) لا تتعلم ذاتياً.',
      intelligentAr: 'شبكات عصبية وخوارزميات تعلم آلي (Machine Learning) تتكيف وتتطور ذاتياً مع كل تفاعل.',
      tag: 'COGNITIVE ADAPTATION'
    },
    {
      aspectAr: 'المخرجات وصناعة القرار (Decision Support)',
      traditionalAr: 'رسوم بيانية ساكنة وتقارير دورية تترك عبء التفسير والقرار بالكامل على كاهل المدير.',
      intelligentAr: 'توصيات معززة بالأسباب (Augmented Decision Support)، تقييم احتمالات المخاطر، وسيناريوهات آلية.',
      tag: 'PRESCRIPTIVE VALUE'
    },
    {
      aspectAr: 'سرعة الاستجابة التشغيلية (Latency & Speed)',
      traditionalAr: 'دفعات دورية (Batch Processing): أسبوعية أو شهرية تتطلب وقتاً طويلاً لرصد الانحرافات.',
      intelligentAr: 'استجابة بالمللي ثانية (Real-Time Streams): معالجة فورية للمخاطر وفرص السوق لحظة وقوعها.',
      tag: 'REAL-TIME OPS'
    }
  ];

  return (
    <section id="chapter-05" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="05"
        titleAr="الفصل الخامس"
        subtitleAr="التحول النموذجي: النظم التقليدية ضد النظم الذكية"
        labelEn="PARADIGM SHIFT COMPARISON"
        accentColor="magenta"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#120619] via-[#1e0a29] to-[#0a0310] border border-fuchsia-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-fuchsia-400 tracking-widest uppercase">THE COGNITIVE EVOLUTION</div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "الأنظمة التقليدية تسجل ما حدث في الماضي... بينما الأنظمة الذكية تستشرف ما سيحدث غداً."
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          يمثل دمج الذكاء الاصطناعي قفزة نوعية في جوهر نظم المعلومات؛ حيث تحولت من مجرد "دفاتر حسابية رقمية" إلى "عقول استراتيجية معاونة".
        </p>
      </div>

      {/* Interactive Comparative Matrix */}
      <div className="space-y-4">
        {comparisonData.map((item, idx) => {
          const isExpanded = selectedAspect === idx;

          return (
            <div
              key={idx}
              onClick={() => setSelectedAspect(idx)}
              className={`p-5 rounded-3xl border transition-all cursor-pointer text-right space-y-4 ${
                isExpanded
                  ? 'bg-[#0e0618] border-fuchsia-500/50 shadow-2xl shadow-fuchsia-950/40 ring-1 ring-fuchsia-500/30'
                  : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-800/40'
              }`}
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono px-2.5 py-0.5 rounded-full bg-slate-950 border border-slate-800 text-fuchsia-400">
                  {item.tag}
                </span>
                <h4 className="text-sm sm:text-base font-bold text-slate-100">{item.aspectAr}</h4>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                {/* Traditional Side */}
                <div className="p-4 rounded-2xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-slate-400">
                    <span className="flex items-center gap-1.5 text-rose-400">
                      <X className="w-3.5 h-3.5" />
                      <span>النظام التقليدي (Legacy IS)</span>
                    </span>
                    <History className="w-3.5 h-3.5 text-slate-600" />
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">
                    {item.traditionalAr}
                  </p>
                </div>

                {/* Intelligent AI Side */}
                <div className="p-4 rounded-2xl bg-fuchsia-950/20 border border-fuchsia-500/30 space-y-2">
                  <div className="flex items-center justify-between text-xs font-bold text-fuchsia-300">
                    <span className="flex items-center gap-1.5 text-emerald-400">
                      <Check className="w-3.5 h-3.5" />
                      <span>النظام الذكي (AI-Augmented IS)</span>
                    </span>
                    <Sparkles className="w-3.5 h-3.5 text-fuchsia-400" />
                  </div>
                  <p className="text-xs text-slate-200 leading-relaxed font-semibold">
                    {item.intelligentAr}
                  </p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};
