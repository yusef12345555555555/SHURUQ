import React, { useState } from 'react';
import { Brain, TrendingUp, MessageSquareText, Eye, ShieldCheck, Sparkles, Bot, Play, CheckCircle2, RefreshCw } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';
import { VISUAL_ASSETS } from '../../data/visualAssets';

export const Chapter06AiIntegrationModalities: React.FC = () => {
  const [selectedEngineId, setSelectedEngineId] = useState<string>('predictive');
  const [isProcessing, setIsProcessing] = useState<boolean>(false);
  const [aiDemoOutput, setAiDemoOutput] = useState<{
    pattern: string;
    prediction: string;
    recommendation: string;
    confidence: string;
  } | null>({
    pattern: 'رصد تزايد مطرد في وتيرة الطلب الإقليمي بنسبة +24% خلال عطلات نهاية الأسبوع',
    prediction: 'توقع نفاذ المخزون في الفرع الرئيسي خلال 72 ساعة إذا استمر معدل السحب الحالي',
    recommendation: 'إعادة توجيه 500 وحدة فوراً من المستودع المركزي وتفعيل الخصم الترويجي البديل',
    confidence: '98.4%'
  });

  const aiEngines = [
    {
      id: 'predictive',
      nameAr: 'التحليلات التنبؤية (Predictive Analytics & Time Series)',
      roleAr: 'استقراء الاتجاهات المستقبلية، توقع حجم الطلب والمبيعات، ومعدلات الدوران الوظيفي.',
      techAr: 'Regression Models, LSTM Networks, XGBoost, Prophet',
      demo: {
        pattern: 'رصد تزايد مطرد في وتيرة الطلب الإقليمي بنسبة +24% خلال عطلات نهاية الأسبوع',
        prediction: 'توقع نفاذ المخزون في الفرع الرئيسي خلال 72 ساعة إذا استمر معدل السحب الحالي',
        recommendation: 'إعادة توجيه 500 وحدة فوراً من المستودع المركزي وتفعيل الخصم الترويجي البديل',
        confidence: '98.4%'
      },
      icon: TrendingUp,
      accent: 'border-violet-500 bg-violet-950/40 text-violet-300'
    },
    {
      id: 'nlp',
      nameAr: 'معالجة اللغة الطبيعية والذكاء التوليدي (NLP & GenAI)',
      roleAr: 'استخلاص الرؤى من العقود والتقارير المالية غير المهيكلة، وتلخيص المذكرات التنفيذية.',
      techAr: 'Transformer Architecture, Large Language Models, RAG Search',
      demo: {
        pattern: 'تحليل 1,420 شكوى ومراجعة عملاء كشفت عن تكرار مصطلح "بطء الاستجابة في التسليم"',
        prediction: 'احتمال فقدان 12% من العملاء ذوي القيمة العالية خلال الشهر القادم',
        recommendation: 'تفعيل الرد الآلي للطلبات العاجلة وإعادة توزيع ورديات فريق الدعم الفني',
        confidence: '96.2%'
      },
      icon: MessageSquareText,
      accent: 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
    },
    {
      id: 'cv',
      nameAr: 'الرؤية الحاسوبية (Computer Vision)',
      roleAr: 'فحص جودة المنتجات في خطوط الإنتاج، التعرف على العيوب الميكانيكية، ومراقبة أمن المنشآت.',
      techAr: 'Convolutional Neural Networks (CNN), YOLO, Image Embeddings',
      demo: {
        pattern: 'مسح 10,000 قطعة في خط التجميع كشف عن انحراف دقيق بمقدار 0.03 ملم في عينات التشغيل',
        prediction: 'تجنب تكاليف استرجاع بقيمة 85,000 دولار قبل شحن الدفعة للأسواق',
        recommendation: 'إيقاف خط الإنتاج رقم 3 لمعايرة ذراع التثبيت الآلي فوراً',
        confidence: '99.1%'
      },
      icon: Eye,
      accent: 'border-blue-500 bg-blue-950/40 text-blue-300'
    },
    {
      id: 'anomaly',
      nameAr: 'محركات كشف الاحتيال والشذوذ (Anomaly Detection)',
      roleAr: 'رصد المعاملات المالية المشبوهة واختراقات الشبكة في أجزاء من الثانية.',
      techAr: 'Isolation Forests, Autoencoders, Graph Neural Networks',
      demo: {
        pattern: 'محاولة تسجيل دخول متزامنة لحساب إداري من موقعين جغرافيين متباعدين في دقيقة واحدة',
        prediction: 'اشتباه اختراق بنسبة تطابق نمط هجمات القوة الغاشمة (Brute Force)',
        recommendation: 'تجميد الجلسة تلقائياً ومطالبة المستخدم بمصادقة ثنائية فورية',
        confidence: '99.7%'
      },
      icon: ShieldCheck,
      accent: 'border-rose-500 bg-rose-950/40 text-rose-300'
    },
    {
      id: 'recommender',
      nameAr: 'نظم التوصية والتخصيص (Recommender Systems)',
      roleAr: 'تخصيص العروض التسويقية وتوجيه القرارات التشغيلية بناءً على سوابق السلوك.',
      techAr: 'Collaborative Filtering, Matrix Factorization, Deep Embeddings',
      demo: {
        pattern: 'العملاء الذين اشتروا النظام السحابي يطلبون خدمات التدريب بنسبة 78%',
        prediction: 'زيادة العائد لكل عميل بنسبة +32% عند عرض حزمة التدريب أثناء الشراء',
        recommendation: 'عرض خصم تلقائي 15% على ورش العمل المرافقة للترخيص السنوي',
        confidence: '94.8%'
      },
      icon: Sparkles,
      accent: 'border-amber-500 bg-amber-950/40 text-amber-300'
    },
    {
      id: 'agents',
      nameAr: 'الوكلاء الأذكياء المستقلون (Autonomous AI Agents)',
      roleAr: 'تنفيذ المهام المتعددة الخطوات عبر التفاوض، اتخاذ الإجراءات الفرعية، وتنسيق العمليات.',
      techAr: 'Multi-Agent Orchestration, Tool-Use APIs, Reinforcement Learning',
      demo: {
        pattern: 'انخفاض رصيد المورد الرئيسي بنسبة 80% مع وجود عروض بديلة أرخص بنسبة 12%',
        prediction: 'إمكانية إتمام أمر الشراء الجديد خلال 5 دقائق دون انتظار موافقة يدوية',
        recommendation: 'إصدار أمر شراء آلي للمورد البديل وتحديث قيود اليومية المحاسبية',
        confidence: '97.5%'
      },
      icon: Bot,
      accent: 'border-emerald-500 bg-emerald-950/40 text-emerald-300'
    }
  ];

  const current = aiEngines.find((e) => e.id === selectedEngineId) || aiEngines[0];
  const CurrentIcon = current.icon;

  const handleSelectEngine = (engine: typeof aiEngines[0]) => {
    setSelectedEngineId(engine.id);
    setIsProcessing(true);
    setTimeout(() => {
      setAiDemoOutput(engine.demo);
      setIsProcessing(false);
    }, 450);
  };

  return (
    <section id="chapter-06" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="04"
        titleAr="الفصل الرابع"
        subtitleAr="دخول العقل الرقمي: محركات وتكامل الذكاء الاصطناعي"
        labelEn="AI COGNITIVE ENGINES & PATTERN MINING"
        accentColor="violet"
      />

      {/* Concept Hero Visual + Kinetic Editorial */}
      <div className="relative rounded-3xl overflow-hidden border border-violet-500/30 shadow-2xl bg-slate-950">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={VISUAL_ASSETS.aiNeuralComputation}
            alt="AI Neural Computation and Cognitive Decision Graph"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-55 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/70 to-transparent" />

          {/* Floating Editorial Statement over image */}
          <div className="absolute bottom-6 right-6 left-6 text-right space-y-2">
            <div className="text-xs font-mono text-violet-400 tracking-widest uppercase">
              THE 6 COGNITIVE ENGINES
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-snug">
              "الذكاء الاصطناعي ليس كتلة واحدة صماء... بل هو 6 محركات إدراكية تتكامل داخل شريان النظام."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              لكل نوع من التحديات الإدارية والتشغيلية محرك ذكاء اصطناعي متخصص يعالج البيانات ويقدم الاستدلال والتوصية الأنسب لدعم القيادة.
            </p>
          </div>
        </div>
      </div>

      {/* 6 AI Engines Grid & Live Execution Tester */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 6 Engines Selectable Grid */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {aiEngines.map((engine) => {
            const isSelected = engine.id === selectedEngineId;
            const EngineIcon = engine.icon;

            return (
              <button
                key={engine.id}
                onClick={() => handleSelectEngine(engine)}
                className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-3 ${
                  isSelected
                    ? `${engine.accent} shadow-xl scale-[1.02] ring-1 ring-violet-500/50`
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${isSelected ? 'bg-white/10 text-white' : 'bg-slate-800 text-slate-400'}`}>
                    <EngineIcon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono opacity-50">ENGINE</span>
                </div>
                <div className="text-xs font-bold text-slate-100">{engine.nameAr.split('(')[0]}</div>
              </button>
            );
          })}
        </div>

        {/* Right: Live AI Pipeline Execution Output */}
        <div className="lg:col-span-6 bg-[#0c0824] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-violet-400">COGNITIVE ENGINE TESTER</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{current.nameAr.split('(')[0]}</h3>
              </div>
            </div>
            {aiDemoOutput && (
              <span className="px-3 py-1 rounded-xl bg-emerald-950/80 border border-emerald-500/40 text-xs font-mono text-emerald-300">
                دقة {aiDemoOutput.confidence}
              </span>
            )}
          </div>

          {/* Demonstration Steps */}
          {isProcessing ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-3 text-center">
              <RefreshCw className="w-6 h-6 text-violet-400 animate-spin" />
              <span className="text-xs text-slate-400 font-mono">جاري المعالجة والاستدلال الخوارزمي...</span>
            </div>
          ) : aiDemoOutput ? (
            <div className="space-y-3 text-xs">
              {/* Pattern */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="font-bold text-cyan-400 flex items-center gap-1.5">
                  <span>1. اكتشاف النمط (Pattern Detection):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{aiDemoOutput.pattern}</p>
              </div>

              {/* Prediction */}
              <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
                <div className="font-bold text-violet-400 flex items-center gap-1.5">
                  <span>2. التنبؤ والاستشراف (Prediction):</span>
                </div>
                <p className="text-slate-300 leading-relaxed">{aiDemoOutput.prediction}</p>
              </div>

              {/* Recommendation */}
              <div className="p-3.5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-1">
                <div className="font-bold text-emerald-300 flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>3. التوصية التنفيذية (Prescriptive Recommendation):</span>
                </div>
                <p className="text-slate-200 leading-relaxed font-semibold">{aiDemoOutput.recommendation}</p>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </section>
  );
};
