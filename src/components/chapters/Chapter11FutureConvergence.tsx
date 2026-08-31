import React, { useState } from "react";
import { Network, Bot, Radio, Cpu, Sparkles, ArrowLeft } from "lucide-react";
import { ChapterHeader } from "../common/ChapterHeader";
import { VISUAL_ASSETS } from "../../data/visualAssets";

interface Chapter11Props {
  onGoToOutro?: () => void;
}

export const Chapter11FutureConvergence: React.FC<Chapter11Props> = ({
  onGoToOutro,
}) => {
  const [activeTechId, setActiveTechId] = useState<string>("agents");

  const convergenceTechnologies = [
    {
      id: "agents",
      nameAr: "الأنظمة والوكلاء الذاتيون (Autonomous Multi-Agents)",
      descAr:
        "أسراب من وكلاء الذكاء الاصطناعي تتفاوض، تدير المشتريات، وتنسق المخازن دون حاجة لتدخل بشري دقيق في التفاصيل اليومية.",
      impactAr:
        "تحول المنظمة إلى كائن رقمي حي يتفاعل مع تقلبات السوق في أجزاء من الثانية.",
      icon: Bot,
      color: "border-fuchsia-500 bg-fuchsia-950/40 text-fuchsia-300",
    },
    {
      id: "edge",
      nameAr: "الحوسبة الطرفية الفائقة (Edge AI & IoT)",
      descAr:
        "معالجة البيانات والذكاء الاصطناعي مباشرة على أجهزة الاستشعار ونقاط الاتصال دون إرسالها إلى الخوادم المركزية.",
      impactAr: "زمن استجابة يقترب من الصفر مع أمان أعلى لبيانات المنشأة.",
      icon: Radio,
      color: "border-cyan-500 bg-cyan-950/40 text-cyan-300",
    },
    {
      id: "quantum",
      nameAr: "الحوسبة الكمية ونظم المعلومات (Quantum IS)",
      descAr:
        "حل أعقد مشكلات التحسين اللوجستي وتشفير البيانات التي تستغرق الخوادم التقليدية آلاف السنين لحلها.",
      impactAr:
        "كسر القيود الحسابية أمام محاكاة الأسواق وسلاسل الإمداد العالمية.",
      icon: Cpu,
      color: "border-violet-500 bg-violet-950/40 text-violet-300",
    },
    {
      id: "autonomous-org",
      nameAr: "المنظمات ذاتية الإدارة (Autonomous Enterprises)",
      descAr:
        "اندماج كامل بين الحوسبة السحابية وإنترنت الأشياء والذكاء الاصطناعي لتشغيل مؤسسات كاملة بكفاءة ذاتية عالية.",
      impactAr:
        "انتقال دور القيادة البشرية إلى التوجيه الفلسفي والأخلاقي والاستراتيجي البحت.",
      icon: Network,
      color: "border-emerald-500 bg-emerald-950/40 text-emerald-300",
    },
  ];

  const current =
    convergenceTechnologies.find((t) => t.id === activeTechId) ||
    convergenceTechnologies[0];
  const CurrentIcon = current.icon;

  const handleNextClick = () => {
    if (onGoToOutro) {
      onGoToOutro();
    } else {
      const outroEl = document.getElementById("chapter-outro");
      if (outroEl) {
        outroEl.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  };

  return (
    <section
      id="chapter-11"
      className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12 relative"
    >
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="11"
        titleAr="الفصل الحادي عشر"
        subtitleAr="المستقبل والتقارب التقني: نحو النظم الإدراكية المستقلة"
        labelEn="FUTURE CONVERGENCE & AUTONOMOUS ENTERPRISE"
        accentColor="magenta"
      />

      {/* Concept Hero Visual + Kinetic Editorial */}
      <div className="relative rounded-3xl overflow-hidden border border-fuchsia-500/30 shadow-2xl bg-slate-950">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={VISUAL_ASSETS.futureTechConvergence}
            alt="Future Connected Enterprise Ecosystem"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-55 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/70 to-transparent" />

          {/* Floating Editorial Statement over image */}
          <div className="absolute bottom-6 right-6 left-6 text-right space-y-2">
            <div className="text-xs font-mono text-fuchsia-400 tracking-widest uppercase">
              THE EXPANDING HORIZON
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-snug">
              "نحن لا نتجه نحو أنظمة تقدم المشورة فحسب... بل نحو منظومات إدراكية
              ذاتية التعلم والتنفيذ."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              تقارب الذكاء الاصطناعي مع الحوسبة السحابية وإنترنت الأشياء
              والحوسبة الكمية يعيد صياغة مفهوم المؤسسات إلى الأبد.
            </p>
          </div>
        </div>
      </div>

      {/* 4 Technologies Interactive Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: 4 Tech Modules */}
        <div className="lg:col-span-6 space-y-3">
          {convergenceTechnologies.map((t) => {
            const isSelected = t.id === activeTechId;
            const TechIcon = t.icon;

            return (
              <button
                key={t.id}
                onClick={() => setActiveTechId(t.id)}
                className={`w-full p-4 rounded-2xl border text-right transition-all flex items-center justify-between gap-3 cursor-pointer ${
                  isSelected
                    ? `${t.color} shadow-xl scale-[1.02] ring-1 ring-fuchsia-500/50`
                    : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div
                    className={`p-2 rounded-xl ${isSelected ? "bg-white/10 text-white" : "bg-slate-800 text-slate-400"}`}
                  >
                    <TechIcon className="w-5 h-5" />
                  </div>
                  <span className="text-xs sm:text-sm font-bold text-slate-100">
                    {t.nameAr.split("(")[0]}
                  </span>
                </div>
                <span className="text-[10px] font-mono opacity-60">FUTURE</span>
              </button>
            );
          })}
        </div>

        {/* Right: Focused Tech Deep Detail */}
        <div className="lg:col-span-6 bg-[#12051a] border border-fuchsia-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right relative overflow-hidden">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <div className="flex items-center gap-3">
              <div className="p-3 rounded-2xl bg-fuchsia-950 text-fuchsia-400 border border-fuchsia-800">
                <CurrentIcon className="w-6 h-6" />
              </div>
              <div>
                <span className="text-[11px] font-mono text-fuchsia-400">
                  TECHNOLOGY VECTOR
                </span>
                <h3 className="text-base sm:text-lg font-bold text-slate-100">
                  {current.nameAr.split("(")[0]}
                </h3>
              </div>
            </div>
          </div>

          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400">
              طبيعة التقنية وآلية عملها:
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed bg-slate-900/60 p-4 rounded-2xl border border-slate-800">
              {current.descAr}
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-fuchsia-950/20 border border-fuchsia-800/40 space-y-1.5">
            <div className="flex items-center gap-2 text-xs font-bold text-cyan-300">
              <Sparkles className="w-3.5 h-3.5" />
              <span>الأثر الجذري على مستقبل الأعمال والإدارة:</span>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed">
              {current.impactAr}
            </p>
          </div>
        </div>
      </div>

      {/* Culmination Bridge Sentinel & Next Station Action */}
      <div
        id="chapter-11-end-trigger"
        className="pt-8 pb-4 text-center space-y-5"
      >
        <div className="w-16 h-1 mx-auto bg-gradient-to-r from-transparent via-fuchsia-500/60 to-transparent rounded-full animate-pulse" />

        <div className="flex flex-col items-center justify-center gap-3">
          <div className="text-xs font-mono tracking-widest text-slate-400 uppercase">
            ✦ اكتمال محطات البحث الأكاديمي ✦
          </div>

          {/* Explicit " التالي: الخاتمة " Button */}
          <button
            id="chapter-11-next-to-outro-btn"
            onClick={handleNextClick}
            className="group flex items-center gap-3 px-8 py-3.5 rounded-2xl bg-gradient-to-r from-fuchsia-600 via-violet-600 to-cyan-600 hover:from-fuchsia-500 hover:to-cyan-500 text-white font-black text-xs sm:text-sm shadow-xl shadow-fuchsia-950/50 hover:scale-105 transition-all cursor-pointer"
          >
            <span> : الخاتمة </span>
            <ArrowLeft className="w-4 h-4 text-cyan-200 group-hover:-translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
