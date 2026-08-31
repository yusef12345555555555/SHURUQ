import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { DSS_OPTIONS } from "../../data/presentationData";
import {
  BrainCircuit,
  HelpCircle,
  CheckCircle2,
  Plus,
  Equal,
  ArrowLeft,
  ShieldCheck,
  Sparkles,
  UserCheck,
  Target,
  Award,
  Zap,
  CheckCircle,
  TrendingUp,
  DollarSign,
  BookOpen,
} from "lucide-react";
import { PresenterSignature } from "../PresenterSignature";
import { DSSFrameworkVisual } from "../visuals/DSSFrameworkVisual";

interface ChapterProps {
  onNext?: () => void; // Optional trigger
  onPrev?: () => void;
}

export const Chapter6DecisionSupport: React.FC<ChapterProps> = ({
  onNext,
  onPrev,
}) => {
  const [selectedOptionId, setSelectedOptionId] = useState<
    "option-a" | "option-b"
  >("option-b");
  const [hasDecided, setHasDecided] = useState<boolean>(false);

  const activeOption =
    DSS_OPTIONS.find((o) => o.id === selectedOptionId) || DSS_OPTIONS[0];

  return (
    <div
      id="chapter-6-section"
      className="max-w-6xl mx-auto px-4 py-8 sm:py-12 relative"
    >
      {/* Ambient Chapter 6 Glow */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600/15 rounded-full blur-3xl pointer-events-none" />

      {/* Chapter Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-8 relative z-10"
      >
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border-indigo-500/30 text-indigo-300 text-xs font-bold mb-3 shadow-sm">
          <span className="font-mono">الفصل السادس / ٠٦</span>
          <span className="w-1.5 h-1.5 rounded-full bg-indigo-400 shadow-[0_0_8px_#6366f1]" />
          <span>القمة الاستراتيجية: منصة القيادة ودعم القرار</span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-white font-ibm mb-3 tracking-tight">
          نظم دعم القرار (DSS)
        </h2>
        <p className="text-slate-300 text-base sm:text-lg font-light font-ibm">
          "الذكاء الاصطناعي يقترح، والإنسان يقرر."
        </p>
      </motion.div>

      {/* FEATURED CHAPTER HERO IMAGE CARD */}
      <motion.div
        initial={{ opacity: 0, scale: 0.96 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="mb-12 relative rounded-3xl overflow-hidden glass-panel border border-indigo-500/30 shadow-[0_0_40px_rgba(99,102,241,0.25)] group"
      >
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
            alt="Executive Leadership Strategic Decision Architecture"
            className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 brightness-75"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/60 to-transparent" />

          {/* Floating Badges */}
          <div className="absolute top-4 right-4 flex flex-wrap gap-2">
            <div className="glass px-3 py-1.5 rounded-xl border-indigo-500/40 text-[11px] font-mono text-indigo-300 flex items-center gap-1.5 shadow-lg">
              <UserCheck className="w-3.5 h-3.5 text-indigo-400" />
              <span>الإنسان في صميم القرار (Human-in-the-Loop)</span>
            </div>
            <div className="glass px-3 py-1.5 rounded-xl border-amber-500/40 text-[11px] font-mono text-amber-300 flex items-center gap-1.5 shadow-lg">
              <Award className="w-3.5 h-3.5 text-amber-400" />
              <span>القيادة الاستراتيجية والحوكمة</span>
            </div>
          </div>

          <div className="absolute bottom-6 right-6 left-6 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-indigo-400 uppercase tracking-widest block mb-1">
                DECISION SUPPORT SYSTEMS (DSS)
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-white font-ibm">
                دمج بصيرة الإنسان بحسابات الآلة الفائقة
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mt-1 font-light">
                نظم دعم القرار لا تسلب المدير سلطته، بل تقدم له البدائل مع تقييم
                المخاطر والمكاسب، ليتخذ قراره بثقة تامة.
              </p>
            </div>

            <div className="flex items-center gap-3 shrink-0">
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  نمط القيادة
                </span>
                <span className="text-sm sm:text-base font-bold text-indigo-400 font-ibm">
                  موجّه بالبيانات
                </span>
              </div>
              <div className="text-center px-3 py-2 rounded-xl glass border-white/10">
                <span className="text-[10px] text-slate-400 block font-mono">
                  نسبة تقليل المخاطر
                </span>
                <span className="text-sm sm:text-base font-bold text-emerald-400 font-mono">
                  -68%
                </span>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Visual Section Graphic */}
      <div className="mb-10">
        <DSSFrameworkVisual />
      </div>

      {/* The Master Formula Banner */}
      <div className="p-6 sm:p-8 rounded-3xl glass-panel mb-10 shadow-2xl text-center border-indigo-500/30">
        <span className="text-xs font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-4">
          Institutional Success Formula • معادلة النجاح المؤسسي
        </span>

        <div className="flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs sm:text-sm font-bold font-ibm">
          <div className="px-4 py-2.5 rounded-2xl glass border-white/10 text-slate-200">
            البيانات المنظمة (Data)
          </div>

          <Plus className="w-4 h-4 text-indigo-400" />

          <div className="px-4 py-2.5 rounded-2xl glass border-indigo-500/40 text-indigo-300">
            نظام المعلومات (IS)
          </div>

          <Plus className="w-4 h-4 text-purple-400" />

          <div className="px-4 py-2.5 rounded-2xl glass border-purple-500/40 text-purple-300 flex items-center gap-1.5">
            <Sparkles className="w-4 h-4 text-purple-400" />
            تحليل الذكاء الاصطناعي (AI)
          </div>

          <Equal className="w-4 h-4 text-emerald-400" />

          <div className="px-5 py-2.5 rounded-2xl glow-btn text-white font-bold shadow-lg shadow-emerald-500/20 border border-white/20">
            قرار استراتيجي أعلى دقة وأقل خطورة
          </div>
        </div>
      </div>

      {/* 4 Executive Benefits of DSS */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 text-center sm:text-right">
          المكاسب التنفيذية الأربعة للمنظومة الذكية:
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          <div className="p-5 rounded-2xl glass-card border-white/10">
            <div className="w-10 h-10 rounded-xl glass bg-blue-500/20 text-blue-400 flex items-center justify-center mb-3 border-blue-500/30">
              <Zap className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 font-ibm">
              سرعة الاستجابة
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light font-ibm">
              تحويل وقت اتخاذ القرار من أيام وأسابيع إلى ثوانٍ ودقائق معدودة.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10">
            <div className="w-10 h-10 rounded-xl glass bg-indigo-500/20 text-indigo-400 flex items-center justify-center mb-3 border-indigo-500/30">
              <CheckCircle className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 font-ibm">
              دقة التوقع
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light font-ibm">
              تقليل نسب الخطأ البشري بالاعتماد على نماذج احتمالية دقيقة.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10">
            <div className="w-10 h-10 rounded-xl glass bg-purple-500/20 text-purple-400 flex items-center justify-center mb-3 border-purple-500/30">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 font-ibm">
              تقليل المخاطر
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light font-ibm">
              اختبار السيناريوهات ومحاكاتها رقمياً قبل المخاطرة بأموال المنظمة.
            </p>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10">
            <div className="w-10 h-10 rounded-xl glass bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-3 border-emerald-500/30">
              <DollarSign className="w-5 h-5" />
            </div>
            <h4 className="text-sm font-bold text-white mb-1 font-ibm">
              كفاءة التكلفة
            </h4>
            <p className="text-xs text-slate-300 leading-relaxed font-light font-ibm">
              توجيه الميزانيات للمسارات الأعلى عائداً وتفادي الهدر التشغيلي.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Decision Arena: Option A vs Option B */}
      <div className="mb-10 p-6 sm:p-8 rounded-3xl glass-panel shadow-2xl border-white/10">
        <div className="flex items-center justify-between mb-6 pb-3 border-b border-white/10">
          <div>
            <h3 className="text-lg font-bold text-white font-ibm">
              محاكاة اتخاذ القرار: مقارنة البدائل الذكية
            </h3>
            <p className="text-xs text-slate-300 mt-0.5 font-ibm">
              النظام يقارن بين مسارين، والمدير هو من يعتمد الخيار الاستراتيجي
            </p>
          </div>
          <span className="text-xs px-3 py-1 rounded-full glass text-slate-300 font-mono border-white/10">
            Human in the loop
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          {DSS_OPTIONS.map((opt) => {
            const isSelected = selectedOptionId === opt.id;
            return (
              <button
                id={`btn-dss-opt-${opt.id}`}
                key={opt.id}
                type="button"
                onClick={() => {
                  setSelectedOptionId(opt.id);
                  setHasDecided(false);
                }}
                className={`p-5 sm:p-6 rounded-2xl text-right transition-all duration-300 cursor-pointer border ${
                  isSelected
                    ? "glass-panel border-indigo-400 shadow-2xl shadow-indigo-500/20 ring-2 ring-indigo-400/30"
                    : "glass-card border-white/10 hover:border-white/20"
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold font-mono text-indigo-400">
                    {opt.titleEn}
                  </span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full glass text-indigo-300 border-indigo-500/30 font-semibold font-ibm">
                    {opt.recommendationTag}
                  </span>
                </div>

                <h4 className="text-base font-bold text-white mb-1 font-ibm">
                  {opt.title}
                </h4>
                <p className="text-xs text-slate-300 mb-4 leading-relaxed font-light font-ibm">
                  {opt.description}
                </p>

                {/* Metrics */}
                <div className="grid grid-cols-3 gap-2 text-center text-xs py-2.5 px-3 rounded-xl glass border-white/10 mb-3">
                  <div>
                    <span className="text-[10px] text-slate-400 block font-ibm">
                      التكلفة
                    </span>
                    <span className="font-bold text-slate-200 text-[11px] font-mono">
                      {opt.cost}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-ibm">
                      المخاطرة
                    </span>
                    <span className="font-bold text-amber-300 text-[11px] font-mono">
                      {opt.risk}
                    </span>
                  </div>
                  <div>
                    <span className="text-[10px] text-slate-400 block font-ibm">
                      العائد
                    </span>
                    <span className="font-bold text-emerald-400 text-[11px] font-mono">
                      {opt.potentialROI}
                    </span>
                  </div>
                </div>

                <div className="flex items-center justify-between text-xs pt-1 font-ibm">
                  <span className="text-slate-400">
                    تقييم الذكاء الاصطناعي:
                  </span>
                  <span className="font-bold font-mono text-indigo-300">
                    {opt.aiScore} / 100
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* Action Decision Button */}
        <div className="p-4 sm:p-5 rounded-2xl glass border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl glass bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0 border-emerald-500/30">
              <UserCheck className="w-5 h-5" />
            </div>
            <div>
              <p className="text-xs text-slate-400 font-ibm">
                الخيار المعتمد حالياً من قِبل القائد:
              </p>
              <h5 className="text-sm font-bold text-white font-ibm">
                {activeOption.title}
              </h5>
            </div>
          </div>

          <button
            id="btn-confirm-decision"
            onClick={() => setHasDecided(true)}
            className={`px-6 py-3 rounded-2xl font-bold text-xs sm:text-sm transition-all duration-200 cursor-pointer shadow-lg font-ibm border ${
              hasDecided
                ? "glass bg-emerald-600/80 text-white border-emerald-400 shadow-emerald-500/30 flex items-center gap-2"
                : "glow-btn text-white hover:scale-105 border-white/20"
            }`}
          >
            {hasDecided ? (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>تم اعتماد القرار بنجاح بواسطة الإنسان</span>
              </>
            ) : (
              <span>اعتماد وتنفيذ هذا القرار الآن</span>
            )}
          </button>
        </div>
      </div>

      {/* Expanded Academic Explanations */}
      <div className="mb-10">
        <h3 className="text-lg font-bold text-white font-ibm mb-4 flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-indigo-400" />
          <span>المحاور الأكاديمية لشرح الفصل السادس:</span>
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
                ماهية نظم دعم القرار (DSS)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                هي نظم معلومات تفاعلية قائمة على الحاسوب، تدمج{" "}
                <strong>
                  نماذج البيانات المتقدمة وخوارزميات الذكاء الاصطناعي
                </strong>{" "}
                لمساعدة صانعي القرار في حل المشكلات شبه المهيكلة وغير المهيكلة.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-indigo-500/10 border border-indigo-500/20 text-[11px] text-indigo-300 font-ibm">
              <strong>الهدف الأساسي:</strong> تعزيز جودة وفاعلية القرار وليس
              مجرد تسريعه.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-purple-400 flex items-center justify-center font-bold text-xs">
                  ٢
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  حوكمة الذكاء الاصطناعي
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                الإنسان في حلقة القرار (Human-in-the-loop)
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                الأدوار واضحة وصارمة:{" "}
                <strong>الآلة تحلل وتفرز البدائل الرياضية</strong>، بينما{" "}
                <strong>
                  القائد البشري يملك السلطة الأخلاقية والاستراتيجية
                </strong>{" "}
                للمصادقة على القرار وتحمل مسؤوليته.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-purple-500/10 border border-purple-500/20 text-[11px] text-purple-300 font-ibm">
              <strong>القاعدة:</strong> الذكاء الاصطناعي مستشار موثوق لا بديل عن
              الحكمة القيادية.
            </div>
          </div>

          <div className="p-5 rounded-2xl glass-card border-white/10 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="w-7 h-7 rounded-lg glass text-emerald-400 flex items-center justify-center font-bold text-xs">
                  ٣
                </span>
                <span className="text-[10px] font-mono text-slate-400">
                  القيمة الختامية
                </span>
              </div>
              <h4 className="text-base font-bold text-white mb-2 font-ibm">
                الميزة التنافسية المستدامة
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-light mb-3">
                المؤسسات التي تربط{" "}
                <strong>بياناتها المنظمة بنظم معلومات ذكية</strong> تحقق تفوقاً
                استراتيجياً لا يمكن للمنافسين ملاحقته بسهولة بسبب مرونة التكيف
                وسرعة الاستجابة.
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-[11px] text-emerald-300 font-ibm">
              <strong>الخلاصة:</strong> البيانات هي البداية، والقرار الذكي هو
              الغاية.
            </div>
          </div>
        </div>
      </div>

      {/* Key Takeaway Banner */}
      <div className="p-6 rounded-3xl glass-panel text-center mb-6 shadow-2xl border-indigo-500/30">
        <span className="text-[11px] font-mono uppercase tracking-widest text-indigo-400 font-bold block mb-1">
          القاعدة الذهبية للفصل السادس
        </span>
        <p className="text-lg sm:text-2xl font-black text-white font-ibm">
          "الذكاء الاصطناعي لا يتخذ القرار نيابة عن القائد، بل يقدم له الرؤية
          الأوضح ليقود بثقة."
        </p>
      </div>

      {/* Presenter Signature */}
      <div className="pt-2 pb-6 flex justify-center">
        <PresenterSignature />
      </div>
    </div>
  );
};
