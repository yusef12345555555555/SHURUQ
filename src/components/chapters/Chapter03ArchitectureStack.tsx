import React, { useState } from 'react';
import { Database, Cpu, BrainCircuit, LayoutDashboard, ArrowUp, Zap, Sparkles } from 'lucide-react';
import { ChapterHeader } from '../common/ChapterHeader';

export const Chapter03ArchitectureStack: React.FC = () => {
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(2);
  const [pulseActive, setPulseActive] = useState<boolean>(false);

  const layers = [
    {
      level: 4,
      nameAr: 'طبقة العرض والواجهة التنفيذية (Presentation / UI)',
      nameEn: 'Executive Dashboards & Decision Cockpits',
      roleAr: 'لوحات القيادة التفاعلية، التقارير البصرية، وتنبيهات الأجهزة الذكية للقادة والمديرين.',
      techAr: 'React, D3.js, BI Cockpits, Real-Time Executive Feeds',
      icon: LayoutDashboard,
      color: 'border-fuchsia-500 bg-fuchsia-950/40 text-fuchsia-300'
    },
    {
      level: 3,
      nameAr: 'طبقة الذكاء الاصطناعي والاستدلال (AI & Analytics Engine)',
      nameEn: 'Cognitive & Predictive Layer',
      roleAr: 'محركات التعلم الآلي، التنبؤ بالسلاسل الزمنية، واكتشاف الشذوذ والانحرافات التشغيلية.',
      techAr: 'Machine Learning Models, Neural Networks, Decision Rules',
      icon: BrainCircuit,
      color: 'border-violet-500 bg-violet-950/40 text-violet-300'
    },
    {
      level: 2,
      nameAr: 'طبقة المعالجة ومنطق الأعمال (Processing & Business Logic)',
      nameEn: 'ETL Pipelines & Application Servers',
      roleAr: 'تطبيق قواعد العمل المحاسبية والتنظيمية، تنظيف وتجهيز البيانات، وحساب المعادلات التشغيلية.',
      techAr: 'Event Streams (Kafka), Microservices, REST / gRPC APIs',
      icon: Cpu,
      color: 'border-blue-500 bg-blue-950/40 text-blue-300'
    },
    {
      level: 1,
      nameAr: 'طبقة البنية التحتية والبيانات (Data Storage & Ingestion)',
      nameEn: 'Data Lakes & Relational Databases',
      roleAr: 'تخزين السجلات التاريخية، قواعد البيانات العلائقية والموزعة، ومستودعات البيانات الضخمة.',
      techAr: 'PostgreSQL, Distributed Cloud Storage, Data Warehouses',
      icon: Database,
      color: 'border-cyan-500 bg-cyan-950/40 text-cyan-300'
    }
  ];

  const handleSendPulse = () => {
    setPulseActive(true);
    setTimeout(() => setPulseActive(false), 2000);
  };

  const currentLayer = layers[activeLayerIndex];
  const CurrentIcon = currentLayer.icon;

  return (
    <section id="chapter-03" className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12">
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="03"
        titleAr="الفصل الثالث"
        subtitleAr="الهندسة الطبقية لنظم المعلومات (4-Tier Architecture)"
        labelEn="LAYERED ENTERPRISE STACK"
        accentColor="violet"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#090b1c] via-[#10102b] to-[#060815] border border-violet-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-violet-400 tracking-widest uppercase">ENTERPRISE SYSTEM STACK</div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "الهيكلية الطبقية تضمن انتقال البيانات من عمق السجلات التخزينية إلى قمة القرار القيادي بسلاسة وأمان."
        </h3>
        <div className="flex flex-wrap items-center justify-between gap-4 pt-2">
          <p className="text-sm text-slate-300 max-w-2xl leading-relaxed">
            تتوزع نظم المعلومات الحديثة عبر 4 طبقات محكمة، حيث تتكامل كل طبقة مع سابقتها لتحويل النبضات الرقمية الخام إلى رؤى استراتيجية واضحة.
          </p>
          <button
            onClick={handleSendPulse}
            disabled={pulseActive}
            className="flex items-center gap-2 px-5 py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500 to-violet-600 text-slate-950 font-bold text-xs sm:text-sm shadow-lg shadow-violet-500/20 hover:scale-105 transition-all"
          >
            <Zap className="w-4 h-4" />
            <span>محاكاة إرسال معاملة ذكية عبر الطبقات</span>
          </button>
        </div>
      </div>

      {/* 4-Tier Interactive Architectural Stack */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
        {/* Left: 4 Vertical Stack Layers */}
        <div className="lg:col-span-7 space-y-3">
          {layers.map((layer, idx) => {
            const isSelected = idx === activeLayerIndex;
            const LayerIcon = layer.icon;

            return (
              <button
                key={layer.level}
                onClick={() => setActiveLayerIndex(idx)}
                className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-4 relative overflow-hidden ${
                  isSelected
                    ? `${layer.color} shadow-xl scale-[1.02] ring-1 ring-violet-500/50`
                    : 'bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40 hover:border-slate-700'
                }`}
              >
                {/* Pulse wave highlight */}
                {pulseActive && (
                  <div 
                    className="absolute inset-0 bg-gradient-to-r from-cyan-400/20 via-violet-500/30 to-transparent animate-pulse"
                    style={{ animationDelay: `${(4 - layer.level) * 350}ms` }}
                  />
                )}

                <div className="flex items-center gap-3.5 relative z-10">
                  <div className={`p-2.5 rounded-xl ${isSelected ? 'bg-white/15 text-white font-bold' : 'bg-slate-800 text-slate-400'}`}>
                    <LayerIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs sm:text-sm font-bold text-slate-100">{layer.nameAr}</div>
                    <div className="text-[11px] opacity-70 font-mono">{layer.nameEn}</div>
                  </div>
                </div>

                <span className="text-xs font-mono font-bold px-2.5 py-1 rounded-lg bg-slate-950/80 border border-slate-800 text-slate-300 relative z-10">
                  TIER 0{layer.level}
                </span>
              </button>
            );
          })}
        </div>

        {/* Right: Selected Layer Deep Detail Card */}
        <div className="lg:col-span-5 bg-[#0a0d1e] border border-violet-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-violet-950 text-violet-400 border border-violet-800">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-violet-400">STACK LAYER 0{currentLayer.level}</span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">{currentLayer.nameAr.split('(')[0]}</h3>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400">الوظيفة التشغيلية والمعمارية:</div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              {currentLayer.roleAr}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-800/40 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>التقنيات والمعايير البرمجية المستخدمة:</span>
            </div>
            <p className="text-xs font-mono text-slate-300">
              {currentLayer.techAr}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
