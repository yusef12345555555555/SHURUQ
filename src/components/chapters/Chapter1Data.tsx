import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
  Database,
  TrendingUp,
  Sparkles,
  AlertCircle,
  ArrowLeft,
  CheckCircle2,
  Layers,
  RefreshCw,
  BarChart3,
  Binary,
  Shuffle,
  ArrowRight,
  BookOpen,
  Lightbulb,
  Compass,
  HelpCircle,
  HardDrive,
  FileText,
  Image as ImageIcon,
  Server,
  Activity,
} from "lucide-react";
import { DataSectionVisual } from "../visuals/DataSectionVisual";
import { PresenterSignature } from "../PresenterSignature";

interface ChapterProps {
  onNext?: () => void;
  onPrev?: () => void;
}

const RAW_FLOATING_DATA = [
  {
    id: 1,
    text: "TXN#9041",
    val: "$420.00",
    top: "15%",
    left: "10%",
    delay: 0,
  },
  { id: 2, text: "NULL_VAL", val: "0.00", top: "25%", left: "75%", delay: 0.2 },
  {
    id: 3,
    text: "USER_881",
    val: "2026-08",
    top: "65%",
    left: "15%",
    delay: 0.4,
  },
  {
    id: 4,
    text: "QTY: 14",
    val: "#CAT_B",
    top: "75%",
    left: "60%",
    delay: 0.1,
  },
  {
    id: 5,
    text: "BRANCH_3",
    val: "NORTH_NW",
    top: "35%",
    left: "45%",
    delay: 0.3,
  },
  {
    id: 6,
    text: "LAT: 30.04",
    val: "LNG: 31.23",
    top: "80%",
    left: "35%",
    delay: 0.5,
  },
  {
    id: 7,
    text: "ERR_LOG_0",
    val: "TIMEOUT",
    top: "15%",
    left: "85%",
    delay: 0.6,
  },
  {
    id: 8,
    text: "SKU_9942",
    val: "$890.00",
    top: "50%",
    left: "80%",
    delay: 0.3,
  },
];

const DATA_TYPES = [
  {
    id: "structured",
    title: "البيانات المهيكلة (Structured)",
    ratio: "20%",
    color: "from-blue-500 to-cyan-500",
    borderColor: "border-blue-500/40",
    desc: "بيانات منظمة في جداول وصفوف وأعمدة سهلة المعالجة والبحث.",
    example: "جداول SQL، أرقام المبيعات، كشوف المرتبات، سجلات المعاملات.",
    icon: Database,
  },
  {
    id: "semi-structured",
    title: "البيانات شبه المهيكلة (Semi-Structured)",
    ratio: "15%",
    color: "from-purple-500 to-indigo-500",
    borderColor: "border-purple-500/40",
    desc: "تحتوي على وسوم ومفاتيح دلالية دون جدول صارم.",
    example: "ملفات JSON، سجلات XML، رسائل البريد الإلكتروني، بيانات NoSQL.",
    icon: FileText,
  },
  {
    id: "unstructured",
    title: "البيانات غير المهيكلة (Unstructured)",
    ratio: "65%",
    color: "from-rose-500 to-amber-500",
    borderColor: "border-rose-500/40",
    desc: "تشكل النسبة العظمى عالمياً، وتتطلب ذكاءً اصطناعياً لاستخراج معانيها.",
    example: "مقاطع الفيديو، الصور الطبية، المنشورات الصوتية، محادثات الدعم.",
    icon: ImageIcon,
  },
];

export const Chapter1Data: React.FC<ChapterProps> = ({ onNext, onPrev }) => {
  const [isOrganized, setIsOrganized] = useState(false);
  const [selectedType, setSelectedType] = useState<string>("structured");

  return (
    <div
      id="chapter-1-section"
      className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative"
    >
      {/* Dynamic Background Ambient Aura for Chapter 1 */}
      <div className="absolute top-20 right-10 w-80 h-80 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-10 w-80 h-80 bg-cyan-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Narrative Scene Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-10 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-blue-500/30 text-blue-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل الأول / ٠١</span>
          <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shadow-[0_0_8px_#3b82f6]" />
          <span>طوفان البيانات والمادة الخام</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          هل البيانات وحدها تكفي؟
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm leading-relaxed">
          "البيانات موجودة في كل مكان، لكن وجودها وحده لا يعني أننا نفهم ما
          يحدث."
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
            src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80"
            alt="Data Center Infrastructure"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Holographic Telemetry Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-cyan-500/40 text-[11px] font-mono text-cyan-300 flex items-center gap-1.5 shadow-lg">
              <Activity className="w-3.5 h-3.5 text-cyan-400 animate-pulse" />
              <span>معدل تدفق البيانات: 4.8 TB/s</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-blue-500/40 text-[11px] font-mono text-blue-300 flex items-center gap-1.5 shadow-lg">
              <Server className="w-3.5 h-3.5 text-blue-400" />
              <span>مراكز الحوسبة السحابية</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-cyan-400 uppercase tracking-widest block mb-1">
                DATA INFRASTRUCTURE & RAW POWER
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                مراكز البيانات: محيط المادة الخام في العصر الرقمي
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                تتولد ملايين التيرا بايت كل ثانية عبر الخوادم، إنترنت الأشياء،
                وسجلات العملاء، في انتظار التحول إلى قيمة نافعة.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  حجم البيانات العالمي
                </span>
                <span className="text-sm sm:text-base font-bold text-cyan-400 font-mono">
                  175 ZB
                </span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  نسبة غير المعالج
                </span>
                <span className="text-sm sm:text-base font-bold text-rose-400 font-mono">
                  80%+
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <DataSectionVisual />
      </div>

      {/* Interactive Data Types Classification Showcase */}
      <div className="mb-12 rounded-3xl glass-panel p-6 sm:p-8 border-white/15 shadow-xl">
        <div className="flex items-center justify-between gap-3 mb-6 border-b border-white/10 pb-4">
          <div>
            <span className="text-xs font-mono text-cyan-400 font-bold uppercase tracking-wider block mb-0.5">
              Classification • تصنيفات البيانات الثلاثة
            </span>
            <h3 className="text-lg sm:text-xl font-bold text-white font-ibm flex items-center gap-2">
              <HardDrive className="w-5 h-5 text-cyan-400" />
              <span>أنواع البيانات في بيئات الأعمال الحديثة</span>
            </h3>
          </div>
        </div>

        {/* 3 Interactive Category Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          {DATA_TYPES.map((dt) => {
            const Icon = dt.icon;
            const isSelected = selectedType === dt.id;
            return (
              <button
                key={dt.id}
                onClick={() => setSelectedType(dt.id)}
                className={`p-5 rounded-2xl text-right transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? `glass-panel ${dt.borderColor} shadow-[0_0_25px_rgba(59,130,246,0.25)] scale-[1.02]`
                    : "glass border-white/10 opacity-75 hover:opacity-100"
                }`}
              >
                <div className="flex items-center justify-between mb-3">
                  <div
                    className={`p-2.5 rounded-xl bg-gradient-to-br ${dt.color} text-white shadow-md`}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-bold px-2 py-0.5 rounded-full glass border-white/10 text-slate-300">
                    {dt.ratio} من الإجمالي
                  </span>
                </div>
                <h4 className="text-sm font-bold text-white font-ibm mb-1">
                  {dt.title}
                </h4>
                <p className="text-xs text-slate-300 font-light line-clamp-2">
                  {dt.desc}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Type Live Deep Dive */}
        {(() => {
          const current =
            DATA_TYPES.find((d) => d.id === selectedType) || DATA_TYPES[0];
          return (
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="p-5 rounded-2xl glass border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
                    <span className="text-xs font-bold text-cyan-300 font-ibm">
                      تفاصيل ومعالجة:
                    </span>
                    <span className="text-xs text-white font-bold">
                      {current.title}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 font-light">
                    {current.desc}
                  </p>
                </div>
                <div className="p-3 rounded-xl glass-panel border-cyan-500/20 text-xs text-cyan-200 font-mono shrink-0 max-w-sm">
                  <span className="text-slate-400 block text-[10px]">
                    أمثلة شائعة:
                  </span>
                  <span>{current.example}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          );
        })()}
      </div>

      {/* Main Interactive Metaphor: Ocean of Raw Data (Chaos to Order) */}
      <div className="relative mb-12 rounded-3xl glass-panel p-6 sm:p-9 shadow-2xl overflow-hidden border-white/15">
        {/* Atmospheric Glow */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />

        {/* Top Control Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8 border-b border-white/10 pb-5">
          <div className="text-center md:text-right">
            <span className="text-xs font-mono text-blue-400 font-bold uppercase tracking-wider block mb-1">
              Interactive Transformation • من الفوضى إلى النظام
            </span>
            <h3 className="text-xl font-bold text-white font-ibm flex items-center justify-center md:justify-start gap-2">
              <Binary className="w-5 h-5 text-blue-400" />
              <span>محيط البيانات المبعثرة (Data Ocean)</span>
            </h3>
          </div>

          <button
            id="btn-organize-chaos"
            onClick={() => setIsOrganized(!isOrganized)}
            className={`glow-btn inline-flex items-center gap-3 px-8 py-3.5 rounded-2xl font-bold text-sm transition-all duration-300 cursor-pointer shadow-xl border border-white/20 ${
              isOrganized ? "bg-gradient-to-r from-emerald-500 to-teal-600" : ""
            }`}
          >
            {isOrganized ? (
              <>
                <RefreshCw className="w-4 h-4 text-white" />
                <span className="font-ibm">
                  إعادة طوفان البيانات الخام (الفوضى)
                </span>
              </>
            ) : (
              <>
                <Sparkles
                  className="w-4 h-4 text-yellow-300 animate-spin"
                  style={{ animationDuration: "3s" }}
                />
                <span className="font-ibm">
                  فرز وتنظيم البيانات مغناطيسياً (الترتيب)
                </span>
              </>
            )}
          </button>
        </div>

        {/* The Dynamic Canvas */}
        <div className="relative min-h-[340px] rounded-2xl glass border border-white/10 p-6 flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            {!isOrganized ? (
              /* CHAOTIC STATE */
              <motion.div
                key="chaos"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="w-full h-full relative min-h-[290px]"
              >
                <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none z-10">
                  <div className="px-5 py-2.5 rounded-2xl glass-panel border-amber-500/30 text-center shadow-lg">
                    <span className="text-xs font-bold text-amber-300 font-ibm flex items-center gap-1.5 justify-center">
                      <AlertCircle className="w-4 h-4 text-amber-400" />
                      البيانات غير المنظمة لا تصنع قراراً
                    </span>
                    <span className="text-[11px] text-slate-400 font-mono block mt-0.5">
                      1,000 سجل مبيعات غير مفهرس = حيرة وصعوبة في الفهم
                    </span>
                  </div>
                </div>

                {/* Floating chaotic tokens */}
                {RAW_FLOATING_DATA.map((item) => (
                  <motion.div
                    key={item.id}
                    animate={{
                      y: [0, -12, 0],
                      x: [0, 8, 0],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 4 + item.id,
                      ease: "easeInOut",
                      delay: item.delay,
                    }}
                    style={{ top: item.top, left: item.left }}
                    className="absolute p-2 sm:p-2.5 rounded-xl glass border-white/10 font-mono text-[10px] sm:text-xs text-slate-300 shadow-md backdrop-blur-md"
                  >
                    <span className="text-blue-400 font-bold block">
                      {item.text}
                    </span>
                    <span className="text-amber-400/80">{item.val}</span>
                  </motion.div>
                ))}
              </motion.div>
            ) : (
              /* ORGANIZED MEANINGFUL STATE */
              <motion.div
                key="ordered"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6 }}
                className="w-full grid grid-cols-1 md:grid-cols-3 gap-4"
              >
                {/* Transformed Result 1 */}
                <div className="p-5 rounded-2xl glass-panel border-emerald-500/40 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-mono text-emerald-400 font-bold">
                        INSIGHT 01
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] glass text-emerald-300 border-emerald-500/30">
                        نمو قوي
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-ibm mb-1">
                      ارتفاع المبيعات الإجمالية
                    </h4>
                    <p className="text-2xl font-black text-emerald-400 font-mono my-2">
                      +15%
                    </p>
                    <p className="text-xs text-slate-300 font-ibm">
                      تحويل 1000 عملية مشتتة إلى مؤشر ربحية واضح يؤكد نجاح
                      الحملة.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-emerald-300 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>تأكيد إحصائي موثوق</span>
                  </div>
                </div>

                {/* Transformed Result 2 */}
                <div className="p-5 rounded-2xl glass-panel border-blue-500/40 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-mono text-blue-400 font-bold">
                        INSIGHT 02
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] glass text-blue-300 border-blue-500/30">
                        الفرع الأفضل
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-ibm mb-1">
                      تركز الطلب في الفرع الشمالي
                    </h4>
                    <p className="text-2xl font-black text-blue-400 font-mono my-2">
                      48%
                    </p>
                    <p className="text-xs text-slate-300 font-ibm">
                      توجيه فوري للمدير لتعزيز مخزون الفرع الشمالي فوراً.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-blue-300 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>توزيع جغرافي ذكي</span>
                  </div>
                </div>

                {/* Transformed Result 3 */}
                <div className="p-5 rounded-2xl glass-panel border-purple-500/40 shadow-xl flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] uppercase font-mono text-purple-400 font-bold">
                        INSIGHT 03
                      </span>
                      <span className="px-2 py-0.5 rounded-full text-[10px] glass text-purple-300 border-purple-500/30">
                        سلوك العميل
                      </span>
                    </div>
                    <h4 className="text-sm font-bold text-white font-ibm mb-1">
                      ذروة الشراء المسائية
                    </h4>
                    <p className="text-2xl font-black text-purple-300 font-mono my-2">
                      6:00 - 10:00 PM
                    </p>
                    <p className="text-xs text-slate-300 font-ibm">
                      جدولة الإعلانات والعروض الترويجية في الفترة المسائية
                      حصراً.
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-white/10 text-[10px] text-purple-300 flex items-center gap-1 font-mono">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>توقيت استراتيجي مدروس</span>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>

      {/* Expanded Academic Presentation Explanations (Presentation-Friendly Cards) */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-blue-400" />
          <span>المحاور الأكاديمية لشرح الفصل الأول:</span>
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Card 1: Definition */}
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-blue-400 flex items-center justify-center font-bold text-xs">
                  ١
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  التعريف{" "}
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                ما هي البيانات؟ (Data)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                البيانات هي{" "}
                <strong>مجموعة من الحقائق والأرقام والرموز الخام</strong> التي
                يتم تسجيلها دون معالجة مسبقة، وتفتقر بذاتها إلى السياق أو المعنى
                الواضح.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-blue-500/10 border border-blue-500/20 text-[11px] text-blue-300 font-ibm">
              <strong>مثال واقعي:</strong> رقم مثل "50" أو رمز "TXN-881" بمفرده
              لا يوضح هل هو ربح، خسارة، أم درجة حرارة.
            </div>
          </div>

          {/* Card 2: Importance & Transformation */}
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">
                  ٢
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  التحول والسياق
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                ما هي المعلومات؟ (Information)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                المعلومات هي{" "}
                <strong>
                  بيانات تمت معالجتها وتنظيمها وترتيبها في سياق محدد
                </strong>
                ، مما يمنحها قيمة ومعنى يمكن للإنسان فهمه واستيعابه.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>مثال واقعي:</strong> "ارتفاع مبيعات الفرع بنسبة 50% خلال
              شهر أغسطس" — هنا أصبحت الأرقام معلومة ذات دلالة.
            </div>
          </div>

          {/* Card 3: Decision Connection */}
          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ٣
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  الأثر والنتيجة
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                العلاقة بصنع القرار
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                اتخاذ القرار بناءً على بيانات مبعثرة يؤدي إلى التخبط، بينما{" "}
                <strong>المعلومات المنظمة هي الأساس المتين</strong> لأي قرار
                مؤسسي ناجح.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-ibm">
              <strong>النتيجة:</strong> معرفة الفرع الأكثر مبيعاً تقود الإدارة
              لزيادة المخزون فيه وتفادي نفاد البضائع.
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-blue-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 font-bold block mb-1">
          القاعدة الذهبية للفصل الأول
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "البيانات هي البداية، لكنها وحدها ليست القرار."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>
    </div>
  );
};
