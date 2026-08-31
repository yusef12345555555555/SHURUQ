import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { SYSTEM_COMPONENTS } from "../../data/presentationData";
import {
  Database,
  Cpu,
  Users,
  Workflow,
  ArrowLeft,
  Plus,
  CheckCircle2,
  ShieldCheck,
  Laptop,
  Building2,
  Layers,
  Sparkles,
  BookOpen,
  Network,
  Globe,
  Radio,
  Server,
  Sliders,
  ArrowRight,
} from "lucide-react";
import { InfoSystemVisual } from "../visuals/InfoSystemVisual";
import { PresenterSignature } from "../PresenterSignature";

interface ChapterProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const SYSTEM_FLOW_STEPS = [
  {
    id: "in",
    label: "المدخلات (Inputs)",
    desc: "جمع البيانات من نقاط البيع، أجهزة الاستشعار والمستخدمين",
    icon: Database,
    color: "text-amber-400",
    bg: "bg-amber-500/20",
    border: "border-amber-500/40",
  },
  {
    id: "proc",
    label: "المعالجة (Processing)",
    desc: "فرز، حساب، ومطابقة البيانات عبر الخوارزميات وقواعد العمل",
    icon: Cpu,
    color: "text-cyan-400",
    bg: "bg-cyan-500/20",
    border: "border-cyan-500/40",
  },
  {
    id: "store",
    label: "التخزين (Storage)",
    desc: "حفظ مستمر وآمن في قواعد البيانات ومستودعات السحابة",
    icon: Server,
    color: "text-indigo-400",
    bg: "bg-indigo-500/20",
    border: "border-indigo-500/40",
  },
  {
    id: "out",
    label: "المخرجات (Outputs)",
    desc: "تقارير فورية، لوحات تحكم ومؤشرات قياس أداء واضحة",
    icon: Laptop,
    color: "text-emerald-400",
    bg: "bg-emerald-500/20",
    border: "border-emerald-500/40",
  },
  {
    id: "feed",
    label: "التغذية الراجعة (Feedback)",
    desc: "تقييم النتائج وتصحيح انحرافات النظام آلياً وبشرياً",
    icon: Radio,
    color: "text-purple-400",
    bg: "bg-purple-500/20",
    border: "border-purple-500/40",
  },
];

export const Chapter2InfoSystem: React.FC<ChapterProps> = ({
  onNext,
  onPrev,
}) => {
  const [selectedComponentId, setSelectedComponentId] =
    useState<string>("data");
  const [activeFlowStep, setActiveFlowStep] = useState<number>(1);

  const selectedComponent =
    SYSTEM_COMPONENTS.find((c) => c.id === selectedComponentId) ||
    SYSTEM_COMPONENTS[0];

  const getComponentIcon = (id: string) => {
    switch (id) {
      case "data":
        return <Database className="w-5 h-5" />;
      case "technology":
        return <Laptop className="w-5 h-5" />;
      case "people":
        return <Users className="w-5 h-5" />;
      case "processes":
        return <Workflow className="w-5 h-5" />;
      default:
        return <Cpu className="w-5 h-5" />;
    }
  };

  return (
    <div
      id="chapter-2-section"
      className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative"
    >
      {/* Dynamic Background Ambient Aura for Chapter 2 */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-purple-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-indigo-500/30 text-indigo-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل الثاني / ٠٢</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#818cf8]" />
          <span>المعمارية الرقمية لنظم المعلومات</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          ما هو نظام المعلومات؟
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm">
          "نظم المعلومات تنظم البيانات، وتربط العناصر، وتحول الأرقام إلى قرارات
          ذكية."
        </p>
      </motion.div>

      {/* FEATURED CHAPTER HERO IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative rounded-3xl overflow-hidden glass-panel border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.2)] group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1200&q=80"
            alt="Global Information System Grid"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Holographic Telemetry Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-indigo-500/40 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5 shadow-lg">
              <Network className="w-3.5 h-3.5 text-indigo-400 animate-pulse" />
              <span>ترابط سحابي متكامل 99.99%</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
              <Globe className="w-3.5 h-3.5 text-cyan-400" />
              <span>معمارية المؤسسة الذكية (Enterprise IS)</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                CONNECTED ENTERPRISE ARCHITECTURE
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                المعمارية المؤسسية: الشريان النابض بالمعلومات
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                تكامل تام بين الأجهزة، البرمجيات، قواعد البيانات، الكوادر
                البشرية، وإجراءات العمل لإدارة الموارد بمرونة فائقة.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  زمن الاستجابة
                </span>
                <span className="text-sm sm:text-base font-bold text-indigo-400 font-mono">
                  &lt; 15 ms
                </span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  توافق العمليات
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                  100%
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <InfoSystemVisual />
      </div>

      {/* Visual Architectural Equation */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border-indigo-500/20 relative overflow-hidden">
        {/* Background Architectural Grid Lines */}
        <div className="absolute inset-0 bg-[radial-gradient(#818cf8_1px,transparent_1px)] [background-size:24px_24px] opacity-10 pointer-events-none" />

        <div className="text-center mb-6">
          <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
            System Equation • معادلة بناء المنظومة
          </span>
          <h3 className="text-xl font-bold text-white font-ibm">
            كيف تتكامل أركان المنظومة في كيان واحد؟
          </h3>
        </div>

        {/* The Equation Ribbon */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 max-w-4xl mx-auto mb-6">
          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border-amber-500/30 text-amber-300 text-xs sm:text-sm font-bold font-ibm">
            <Database className="w-4 h-4 text-amber-400" />
            <span>البيانات (Data)</span>
          </div>

          <Plus className="w-4 h-4 text-slate-500" />

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border-purple-500/30 text-purple-300 text-xs sm:text-sm font-bold font-ibm">
            <Laptop className="w-4 h-4 text-purple-400" />
            <span>التكنولوجيا (Tech)</span>
          </div>

          <Plus className="w-4 h-4 text-slate-500" />

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border-blue-500/30 text-blue-300 text-xs sm:text-sm font-bold font-ibm">
            <Users className="w-4 h-4 text-blue-400" />
            <span>الأشخاص (People)</span>
          </div>

          <Plus className="w-4 h-4 text-slate-500" />

          <div className="flex items-center gap-2 px-4 py-2.5 rounded-2xl glass border-emerald-500/30 text-emerald-300 text-xs sm:text-sm font-bold font-ibm">
            <Workflow className="w-4 h-4 text-emerald-400" />
            <span>العمليات (Processes)</span>
          </div>

          <span className="text-xl font-bold text-indigo-400 mx-1">=</span>

          <div className="flex items-center gap-2 px-5 py-2.5 rounded-2xl glow-btn text-white text-xs sm:text-sm font-bold font-ibm shadow-lg shadow-indigo-500/20">
            <Building2 className="w-4 h-4 text-indigo-200" />
            <span>نظام معلومات متكامل</span>
          </div>
        </div>
      </div>

      {/* Interactive System Life Cycle Pipeline (Inputs -> Processing -> Storage -> Outputs -> Feedback) */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl glass-panel border-white/15 shadow-xl">
        <div className="flex items-center justify-between mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-indigo-400 font-bold uppercase tracking-wider block mb-0.5">
              Life Cycle Flow • دورة تدفق ومعالجة النظام
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-ibm flex items-center gap-2">
              <Sliders className="w-5 h-5 text-indigo-400" />
              <span>مراحل دورة الحياة الوظيفية لنظم المعلومات</span>
            </h3>
          </div>
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            (انقر على أي مرحلة لاستعراض تفاصيلها)
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2.5 mb-6">
          {SYSTEM_FLOW_STEPS.map((step, idx) => {
            const Icon = step.icon;
            const isCurrent = activeFlowStep === idx;
            return (
              <button
                key={step.id}
                onClick={() => setActiveFlowStep(idx)}
                className={`p-3.5 rounded-2xl text-center transition-all duration-300 cursor-pointer border ${
                  isCurrent
                    ? `glass-panel ${step.border} shadow-[0_0_20px_rgba(99,102,241,0.3)] scale-[1.03]`
                    : "glass border-white/10 opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-9 h-9 mx-auto rounded-xl flex items-center justify-center mb-2 ${step.bg} ${step.color}`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <h4 className="text-xs font-bold text-white font-ibm truncate">
                  {step.label}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detail Box */}
        {(() => {
          const step = SYSTEM_FLOW_STEPS[activeFlowStep];
          const Icon = step.icon;
          return (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 rounded-2xl glass border border-white/10 flex items-center gap-3.5"
            >
              <div
                className={`w-10 h-10 rounded-xl flex items-center justify-center shrink-0 ${step.bg} ${step.color}`}
              >
                <Icon className="w-5 h-5" />
              </div>
              <div>
                <span className={`text-xs font-bold font-ibm ${step.color}`}>
                  {step.label}
                </span>
                <p className="text-xs sm:text-sm text-slate-200 font-light mt-0.5">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          );
        })()}
      </div>

      {/* 4 Interactive Architectural Pillars */}
      <div className="mb-10">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-white font-ibm flex items-center gap-2">
            <Layers className="w-5 h-5 text-indigo-400" />
            <span>استكشاف ركائز المنظومة الأربعة</span>
          </h3>
          <span className="text-xs text-indigo-400 font-mono">
            (اضغط لتفعيل وفحص أي ركيزة)
          </span>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {SYSTEM_COMPONENTS.map((comp) => {
            const isSelected = selectedComponentId === comp.id;
            return (
              <button
                id={`btn-pillar-${comp.id}`}
                key={comp.id}
                onClick={() => setSelectedComponentId(comp.id)}
                className={`p-4 sm:p-5 rounded-2xl text-right transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "glass-panel border-indigo-400 shadow-2xl shadow-indigo-500/20 scale-[1.03]"
                    : "glass-card border-white/10 hover:border-indigo-500/30 hover:bg-white/10"
                }`}
              >
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center mb-3 ${
                    isSelected
                      ? "glass bg-indigo-500/20 text-indigo-300 border-indigo-500/40"
                      : "glass text-slate-400 border-white/10"
                  }`}
                >
                  {getComponentIcon(comp.id)}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-white mb-1 font-ibm">
                  {comp.name}
                </h4>
                <p className="text-[11px] text-slate-400 font-light leading-relaxed line-clamp-2">
                  {comp.description}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Component Spotlight Architecture View */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedComponent.id}
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.3 }}
            className="p-6 sm:p-8 rounded-3xl glass-panel border-indigo-500/30 shadow-2xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6"
          >
            <div className="flex items-start gap-4">
              <div className="w-14 h-14 rounded-2xl glass border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0 shadow-lg">
                {getComponentIcon(selectedComponent.id)}
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-xs font-mono text-indigo-400 font-bold uppercase">
                    {selectedComponent.nameEn}
                  </span>
                  <span className="text-xs px-2.5 py-0.5 rounded-full glass text-indigo-300 border-indigo-500/30">
                    ركيزة نشطة
                  </span>
                </div>
                <h4 className="text-xl font-bold text-white font-ibm mb-1">
                  {selectedComponent.name}
                </h4>
                <p className="text-sm text-indigo-300 font-semibold mb-2">
                  "{selectedComponent.description}"
                </p>
                <p className="text-xs sm:text-sm text-slate-300 max-w-2xl leading-relaxed">
                  {selectedComponent.details}
                </p>
              </div>
            </div>

            <div className="shrink-0 w-full md:w-auto flex md:flex-col items-center justify-end gap-2 text-left md:text-right border-t md:border-t-0 md:border-r border-white/10 pt-3 md:pt-0 md:pr-6">
              <span className="text-[11px] text-slate-400 block font-mono">
                دور العنصر في النظام:
              </span>
              <span className="text-xs font-bold text-emerald-400 flex items-center gap-1">
                <CheckCircle2 className="w-4 h-4" />
                تحويل البيانات لقرار
              </span>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Expanded Academic Presentation Points */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span>المحاور الأكاديمية لشرح الفصل الثاني:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-indigo-400 flex items-center justify-center font-bold text-xs">
                  ١
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  التعريف{" "}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                تعريف نظام المعلومات
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                هو <strong>منظومة متكاملة من العناصر المترابطة</strong> (أجهزة،
                برمجيات، بيانات، أشخاص، وإجراءات) تعمل معاً لجمع ومعالجة وتخزين
                واسترجاع المعلومات لتسهيل التخطيط والتحكم.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-ibm">
              <strong>أهميته:</strong> بدون نظام معلومات، تظل بيانات المؤسسة
              حبيسة الأدراج وجزر البيانات المعزولة.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">
                  ٢
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  آلية العمل
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                دورة الحياة الوظيفية
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                تبدأ بـ <strong>المدخلات (Inputs)</strong>، ثم{" "}
                <strong>المعالجة المنطقية (Processing)</strong>، ثم إنتاج{" "}
                <strong>المخرجات (Outputs)</strong> مع وجود حلقة{" "}
                <strong>تغذية راجعة (Feedback)</strong> لتصحيح المسار.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>مثال واقعي:</strong> نظام ERP في المستشفيات يربط ملف
              المريض بالصيدلية والمختبر وغرفة العمليات لحظياً.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ٣
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  القيمة المضافة
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                تحقيق الميزة التنافسية
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                نظام المعلومات الناجح{" "}
                <strong>يقلل التكلفة التشغيلية، يسرع وتيرة العمليات</strong>،
                ويوفر للإدارة رؤية فورية وشفافة عن سير العمل بالمؤسسة.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-ibm">
              <strong>النتيجة:</strong> تمكين القيادات من اتخاذ قرارات مدروسة في
              دقائق معدودة بدلاً من الانتظار لأسابيع.
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-indigo-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
          القاعدة الذهبية للفصل الثاني
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "نظام المعلومات هو الجسر المنظم بين الأرقام الخام والقرارات الفعالة."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>
    </div>
  );
};
