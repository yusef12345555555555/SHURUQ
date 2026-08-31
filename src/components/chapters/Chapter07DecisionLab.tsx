import React, { useState } from "react";
import {
  Sliders,
  Activity,
  Brain,
  ShieldAlert,
  ArrowUpRight,
  TrendingUp,
  Sparkles,
  RefreshCw,
  BarChart3,
  LineChart,
  PackageSearch,
  AlertCircle,
  CheckCircle2,
  Play,
} from "lucide-react";
import { ChapterHeader } from "../common/ChapterHeader";
import { PageSignatureFooter } from '../common/PageSignatureFooter';

export const Chapter07DecisionLab: React.FC = () => {
  const [activeModule, setActiveModule] = useState<
    "cockpit" | "analysis" | "prediction" | "ai_engine"
  >("cockpit");

  // Interactive Simulation Parameters for Cockpit
  const [dataVolume, setDataVolume] = useState<number>(80);
  const [aiConfidence, setAiConfidence] = useState<number>(88);
  const [marketVolatility, setMarketVolatility] = useState<number>(35);

  // Analysis Dataset State
  const [selectedDataPoint, setSelectedDataPoint] = useState<{
    month: string;
    sales: number;
    orders: number;
    inventory: number;
  } | null>({
    month: "مارس 2026",
    sales: 84250,
    orders: 421,
    inventory: 310,
  });

  const demoDataset = [
    { month: "يناير 2026", sales: 62400, orders: 312, inventory: 580 },
    { month: "فبراير 2026", sales: 71800, orders: 359, inventory: 490 },
    { month: "مارس 2026", sales: 84250, orders: 421, inventory: 310 },
    {
      month: "أبريل 2026 (توقع)",
      sales: 98600,
      orders: 493,
      inventory: 180,
      isProjected: true,
    },
    {
      month: "مايو 2026 (توقع)",
      sales: 112400,
      orders: 562,
      inventory: 90,
      isProjected: true,
    },
  ];

  // Calculated Decision Metrics
  const calculatedSuccess = Math.min(
    99,
    Math.max(
      15,
      Math.round(
        dataVolume * 0.4 + aiConfidence * 0.5 - marketVolatility * 0.3,
      ),
    ),
  );

  const estimatedRoi = Math.round(
    (dataVolume * 1.8 + aiConfidence * 2.2 - marketVolatility) * 1.5,
  );
  const riskIndex = Math.max(5, Math.round(100 - calculatedSuccess));

  // Dynamic Decision Logic
  const isInventoryLow = (selectedDataPoint?.inventory || 310) < 200;
  const isSalesRising = (selectedDataPoint?.sales || 84250) > 75000;

  let dynamicRecommendation =
    "استمرار عمليات التوريد الاعتيادية مع مراقبة مؤشرات الأداء الأسبوعية.";
  if (isInventoryLow && isSalesRising) {
    dynamicRecommendation =
      "تنبيه استراتيجي عاجل: ارتفاع وتيرة الطلب مع انخفاض حاد في المخزون. يوصى بمراجعة مستوى المخزون وإصدار أمر شراء فوري لـ 500 وحدة لتجنب فوات الفرص البيعية.";
  } else if (isSalesRising) {
    dynamicRecommendation =
      "الطلب في مسار صاعد قوي (+24%). يوصى بزيادة ميزانية التسويق الرقمي وتوسيع خطوط التوزيع.";
  }

  return (
    <section
      id="chapter-07"
      className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12"
    >
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="05"
        titleAr="الفصل الخامس"
        subtitleAr="مختبر صناعة القرار والتحليل التنبؤي (Interactive Decision Lab)"
        labelEn="AI DECISION & ANALYTICS LAB"
        accentColor="cyan"
      />

      {/* Kinetic Statement */}
      <div className="relative p-6 sm:p-10 rounded-3xl bg-gradient-to-r from-[#04101e] via-[#081a33] to-[#030d1a] border border-cyan-500/20 text-right space-y-4 shadow-2xl">
        <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase">
          INTERACTIVE EXPERIMENTATION LAB
        </div>
        <h3 className="text-2xl sm:text-4xl font-black text-slate-100 leading-snug">
          "مختبر عملي يربط جودة البيانات، نماذج التنبؤ، والتحليل الحسابي لإنتاج
          توصية تنفيذية موثوقة."
        </h3>
        <p className="text-sm text-slate-300 max-w-3xl leading-relaxed">
          تنقل بين أدوات المختبر الأربعة لتجربة محاكاة القرارات، تحليل السلاسل
          الزمنية، وتوقع اتجاهات الطلب على البيانات التجريبية للمنظمة.
        </p>
      </div>

      {/* Lab Navigation Switcher */}
      <div className="flex flex-wrap items-center gap-2 p-1.5 rounded-2xl bg-slate-900/90 border border-slate-800">
        <button
          onClick={() => setActiveModule("cockpit")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeModule === "cockpit"
              ? "bg-cyan-500 text-slate-950 shadow-md font-black"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Sliders className="w-4 h-4" />
          <span>1. محاكاة القرار (Decision Cockpit)</span>
        </button>

        <button
          onClick={() => setActiveModule("analysis")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeModule === "analysis"
              ? "bg-cyan-500 text-slate-950 shadow-md font-black"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <BarChart3 className="w-4 h-4" />
          <span>2. تحليل البيانات (Data Analysis)</span>
        </button>

        <button
          onClick={() => setActiveModule("prediction")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeModule === "prediction"
              ? "bg-cyan-500 text-slate-950 shadow-md font-black"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <TrendingUp className="w-4 h-4" />
          <span>3. توقع الطلب (Predictive Forecast)</span>
        </button>

        <button
          onClick={() => setActiveModule("ai_engine")}
          className={`flex-1 py-2.5 px-4 rounded-xl text-xs font-bold transition-all cursor-pointer flex items-center justify-center gap-2 ${
            activeModule === "ai_engine"
              ? "bg-cyan-500 text-slate-950 shadow-md font-black"
              : "text-slate-400 hover:text-slate-200"
          }`}
        >
          <Brain className="w-4 h-4" />
          <span>4. محرك الاستدلال الذكي (AI Reasoning)</span>
        </button>
      </div>

      {/* MODULE 1: COCKPIT */}
      {activeModule === "cockpit" && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center animate-fade-in">
          {/* Left Controls */}
          <div className="lg:col-span-6 bg-[#061022] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-2xl text-right">
            <div className="flex items-center justify-between pb-3 border-b border-slate-800">
              <span className="text-xs font-mono text-cyan-400">
                INPUT PARAMETERS
              </span>
              <div className="flex items-center gap-2 text-xs font-bold text-slate-300">
                <Sliders className="w-4 h-4 text-cyan-400" />
                <span>محددات بيئة القرار:</span>
              </div>
            </div>

            {/* Control 1 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-cyan-400 font-mono">
                  {dataVolume}% اكتمال
                </span>
                <span className="text-slate-300">
                  حجم ونظافة البيانات (Data Completeness):
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="100"
                value={dataVolume}
                onChange={(e) => setDataVolume(Number(e.target.value))}
                className="w-full accent-cyan-400 cursor-pointer"
              />
            </div>

            {/* Control 2 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-violet-400 font-mono">
                  {aiConfidence}% دقة
                </span>
                <span className="text-slate-300">
                  دقة نموذج الذكاء الاصطناعي (Model Accuracy):
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="100"
                value={aiConfidence}
                onChange={(e) => setAiConfidence(Number(e.target.value))}
                className="w-full accent-violet-400 cursor-pointer"
              />
            </div>

            {/* Control 3 */}
            <div className="space-y-2">
              <div className="flex justify-between text-xs font-bold">
                <span className="text-rose-400 font-mono">
                  {marketVolatility}% تقلب
                </span>
                <span className="text-slate-300">
                  تقلبات السوق والغموض الخارجي (Market Volatility):
                </span>
              </div>
              <input
                type="range"
                min="10"
                max="90"
                value={marketVolatility}
                onChange={(e) => setMarketVolatility(Number(e.target.value))}
                className="w-full accent-rose-400 cursor-pointer"
              />
            </div>

            <div className="pt-2 text-[11px] text-slate-500 font-mono flex items-center justify-between">
              <span>ALGORITHM: BAYESIAN INFERENCE</span>
              <span className="text-emerald-400">STATUS: CONVERGED</span>
            </div>
          </div>

          {/* Right Gauges */}
          <div className="lg:col-span-6 space-y-4 text-right">
            <div className="p-6 sm:p-8 rounded-3xl bg-[#08142b] border border-cyan-500/40 shadow-2xl space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-[11px] font-mono px-3 py-1 rounded-full bg-cyan-950 text-cyan-400 border border-cyan-800">
                  PROBABILITY SCORE
                </span>
                <div className="text-xs font-bold text-slate-400">
                  احتمالية نجاح القرار الاستراتيجي:
                </div>
              </div>

              <div className="flex items-baseline justify-between">
                <div className="text-4xl sm:text-6xl font-black font-mono text-cyan-300">
                  {calculatedSuccess}%
                </div>
                <div
                  className={`text-xs font-bold px-3 py-1 rounded-xl ${
                    calculatedSuccess > 75
                      ? "bg-emerald-950 text-emerald-300 border border-emerald-500/40"
                      : calculatedSuccess > 50
                        ? "bg-amber-950 text-amber-300 border border-amber-500/40"
                        : "bg-rose-950 text-rose-300 border border-rose-500/40"
                  }`}
                >
                  {calculatedSuccess > 75
                    ? "قرار مؤكد عالي الجدوى"
                    : calculatedSuccess > 50
                      ? "قرار معتدل المخاطرة"
                      : "قرار عالي المخاطر وغير موصى به"}
                </div>
              </div>

              <div className="w-full h-3 rounded-full bg-slate-900 overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-emerald-400 transition-all duration-500"
                  style={{ width: `${calculatedSuccess}%` }}
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="p-4 rounded-2xl bg-[#061022] border border-slate-800 space-y-1">
                <div className="text-[10px] text-slate-400 font-mono">
                  العائد الاستثماري المتوقع (ROI)
                </div>
                <div className="text-xl font-bold font-mono text-emerald-400">
                  +{estimatedRoi}%
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-[#061022] border border-slate-800 space-y-1">
                <div className="text-[10px] text-slate-400 font-mono">
                  مؤشر المخاطر التشغيلية (Risk)
                </div>
                <div className="text-xl font-bold font-mono text-rose-400">
                  {riskIndex}%
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* MODULE 2: DATA ANALYSIS */}
      {activeModule === "analysis" && (
        <div className="bg-[#071026] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-mono text-cyan-400">
              DETERMINISTIC DATA ANALYSIS
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              تحليل المبيعات وحركة المخزون للمنظمة
            </h4>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400">
                إجمالي المبيعات المحققة
              </span>
              <div className="text-lg font-bold font-mono text-cyan-300">
                218,450 EGP
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400">
                متوسط قيمة الطلب
              </span>
              <div className="text-lg font-bold font-mono text-emerald-300">
                200.5 EGP
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400">
                المنتج الأكثر أداءً
              </span>
              <div className="text-lg font-bold text-violet-300">
                نظام Cloud ERP
              </div>
            </div>
            <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-1">
              <span className="text-[11px] text-slate-400">
                معدل النمو الشهري
              </span>
              <div className="text-lg font-bold font-mono text-cyan-400">
                +17.3%
              </div>
            </div>
          </div>

          {/* Interactive Data Points Table */}
          <div className="space-y-2">
            <div className="text-xs font-bold text-slate-400">
              انقر على أي شهر لاستعراض تفاصيل النقطة ومؤشرات المخزون:
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
              {demoDataset.map((item) => {
                const isSelected = selectedDataPoint?.month === item.month;

                return (
                  <button
                    key={item.month}
                    onClick={() => setSelectedDataPoint(item)}
                    className={`p-4 rounded-2xl border text-right transition-all flex flex-col justify-between gap-2 cursor-pointer ${
                      isSelected
                        ? "bg-cyan-950/80 border-cyan-400 text-cyan-100 ring-2 ring-cyan-500/50 scale-[1.03]"
                        : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                    }`}
                  >
                    <div className="text-xs font-bold text-slate-200">
                      {item.month}
                    </div>
                    <div className="text-sm font-black font-mono text-cyan-300">
                      {item.sales.toLocaleString()} EGP
                    </div>
                    <div className="text-[10px] text-slate-500 font-mono">
                      {item.orders} طلب | رصيد {item.inventory}
                    </div>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Dynamic Insight for selected point */}
          {selectedDataPoint && (
            <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/30 flex items-center justify-between gap-4">
              <div className="space-y-1">
                <span className="text-xs font-bold text-cyan-300">
                  تحليل النقطة المختارة ({selectedDataPoint.month}):
                </span>
                <p className="text-xs text-slate-300">
                  سجلت المبيعات {selectedDataPoint.sales.toLocaleString()} جنيه
                  عبر {selectedDataPoint.orders} طلباً، مع توفر{" "}
                  {selectedDataPoint.inventory} وحدة بالمستودعات.
                </p>
              </div>
              <span className="text-[10px] font-mono px-3 py-1 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                VERIFIED REAL DEMO
              </span>
            </div>
          )}
        </div>
      )}

      {/* MODULE 3: PREDICTION (توقع الطلب) */}
      {activeModule === "prediction" && (
        <div className="bg-[#071026] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-mono text-violet-400">
              TIME-SERIES FORECASTING
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              توقع الطلب المستقبلي وتدفق الإيرادات
            </h4>
          </div>

          {/* Visual Prediction Chart */}
          <div className="p-6 rounded-2xl bg-slate-950 border border-slate-800 space-y-4">
            <div className="flex items-center justify-between text-xs text-slate-400 font-mono">
              <span>FORECAST HORIZON: Q2 2026</span>
              <div className="flex items-center gap-4">
                <span className="flex items-center gap-1.5 text-cyan-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-cyan-400" />
                  بيانات تاريخية محققة
                </span>
                <span className="flex items-center gap-1.5 text-violet-400">
                  <span className="w-2.5 h-2.5 rounded-full bg-violet-400 border border-dashed" />
                  توقعات الذكاء الاصطناعي
                </span>
              </div>
            </div>

            {/* Bars Visualization */}
            <div className="h-44 flex items-end justify-between gap-3 pt-6 px-4 border-b border-slate-800">
              {demoDataset.map((d) => {
                const heightPercent = Math.round((d.sales / 120000) * 100);
                const isProj = d.isProjected;

                return (
                  <div
                    key={d.month}
                    className="flex-1 flex flex-col items-center gap-2 group"
                  >
                    <span className="text-[10px] font-mono text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity">
                      {d.sales.toLocaleString()} EGP
                    </span>
                    <div
                      className={`w-full rounded-t-xl transition-all duration-500 cursor-pointer ${
                        isProj
                          ? "bg-gradient-to-t from-violet-900 to-violet-400 border-t-2 border-violet-300"
                          : "bg-gradient-to-t from-cyan-900 to-cyan-400 border-t-2 border-cyan-300"
                      }`}
                      style={{ height: `${heightPercent}%` }}
                    />
                    <span className="text-[10px] font-mono text-slate-400 truncate w-full text-center">
                      {d.month.split(" ")[0]}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="p-4 rounded-2xl bg-violet-950/20 border border-violet-500/30 space-y-1 text-xs">
            <span className="font-bold text-violet-300">
              الاستنتاج التنبؤي الأكاديمي:
            </span>
            <p className="text-slate-300 leading-relaxed">
              "تشير السلسلة الزمنية ونموذج الانحدار الخطي إلى استمرار الاتجاه
              الصاعد في الطلب بنسبة +33% خلال الربع القادم، مما يستوجب تأمين
              سلاسل التوريد مسبقاً."
            </p>
          </div>
        </div>
      )}

      {/* MODULE 4: AI REASONING & DECISION SUPPORT */}
      {activeModule === "ai_engine" && (
        <div className="bg-[#071026] border border-cyan-500/30 rounded-3xl p-6 sm:p-8 shadow-2xl space-y-6 text-right animate-fade-in">
          <div className="flex items-center justify-between pb-4 border-b border-slate-800">
            <span className="text-xs font-mono text-emerald-400">
              PRESCRIPTIVE DECISION ENGINE
            </span>
            <h4 className="text-base sm:text-lg font-bold text-slate-100">
              مسار التحول من البيانات إلى القرار
            </h4>
          </div>

          {/* 5-Step Pipeline */}
          <div className="grid grid-cols-1 sm:grid-cols-5 gap-2.5 font-mono text-xs">
            <div className="p-3 rounded-2xl bg-cyan-950/40 border border-cyan-500/40 text-cyan-300 space-y-1">
              <div className="font-bold">1. DATA</div>
              <div className="text-[10px] text-slate-400 font-sans">
                سجلات المبيعات والمخزون اللحظي
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-blue-950/40 border border-blue-500/40 text-blue-300 space-y-1">
              <div className="font-bold">2. PATTERNS</div>
              <div className="text-[10px] text-slate-400 font-sans">
                تسارع وتيرة الشراء +24%
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-violet-950/40 border border-violet-500/40 text-violet-300 space-y-1">
              <div className="font-bold">3. ANALYSIS</div>
              <div className="text-[10px] text-slate-400 font-sans">
                تآكل رصيد المستودع لـ 310 وحدة
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-fuchsia-950/40 border border-fuchsia-500/40 text-fuchsia-300 space-y-1">
              <div className="font-bold">4. PREDICTION</div>
              <div className="text-[10px] text-slate-400 font-sans">
                نفاذ المخزون خلال 14 يوماً
              </div>
            </div>
            <div className="p-3 rounded-2xl bg-emerald-950/50 border border-emerald-500 text-emerald-200 space-y-1 ring-1 ring-emerald-500/40">
              <div className="font-bold">5. DECISION</div>
              <div className="text-[10px] text-emerald-300 font-sans font-bold">
                توليد توصية الشراء الاستباقية
              </div>
            </div>
          </div>

          {/* Dynamic Generated Recommendation Box */}
          <div className="p-5 rounded-2xl bg-emerald-950/30 border border-emerald-500/40 space-y-2">
            <div className="flex items-center gap-2 text-xs font-bold text-emerald-300">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <span>التوصية التنفيذية المقترحة لمتخذ القرار:</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-100 font-semibold leading-relaxed">
              "{dynamicRecommendation}"
            </p>
          </div>
        </div>
      )}
      <PageSignatureFooter />
    </section>
  );
};
