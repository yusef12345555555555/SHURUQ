import React, { useState } from "react";
import {
  Activity,
  Zap,
  Filter,
  Sparkles,
  Database,
  Layers,
  ArrowRight,
} from "lucide-react";
import { ChapterHeader } from "../common/ChapterHeader";
import { VISUAL_ASSETS } from "../../data/visualAssets";
import { PageSignatureFooter } from '../common/PageSignatureFooter';

export const Chapter01DataDeluge: React.FC = () => {
  const [noiseLevel, setNoiseLevel] = useState<number>(60);
  const [selectedDataStream, setSelectedDataStream] =
    useState<string>("financial");
  const [activePacketIndex, setActivePacketIndex] = useState<number | null>(0);

  const samplePackets = {
    financial: [
      {
        id: "TX-9021",
        raw: "2026-08-19T14:22:01Z,ACC_88192,DR,$4,290.00,CAIRO_EGY,OK",
        parsed: "معاملة مصرفية معتمدة بقيمة 4,290 دولار - فرع القاهرة",
        signalScore: "99%",
      },
      {
        id: "TX-9022",
        raw: "ERR_NULL_POINTER_IN_STREAM_CHANNEL_04_CHECKSUM_FAIL",
        parsed:
          "خطأ إرسال غير مهيكل (تم استبعاده تلقائياً بواسطة خوارزمية التصفية)",
        signalScore: "0%",
      },
      {
        id: "TX-9023",
        raw: "2026-08-19T14:22:04Z,ACC_11209,CR,$18,500.00,MAADI_HUB,FLAGGED",
        parsed: "إيداع نقدي غير معتاد بقيمة 18,500 دولار - يتطلب مراجعة فورية",
        signalScore: "94%",
      },
      {
        id: "TX-9024",
        raw: "2026-08-19T14:22:09Z,ACC_33901,DR,$120.50,ALEX_POS,OK",
        parsed: "شراء نقطة بيع اعتيادية بقيمة 120.50 دولار - الإسكندرية",
        signalScore: "98%",
      },
    ],
    iot: [
      {
        id: "IOT-SENSOR-01",
        raw: "TMP: 78.4C | VIB: 0.82mm/s | RPM: 3400 | STAT: NORMAL",
        parsed:
          "محرك التبريد المركزي: درجة الحرارة والاهتزاز ضمن الحدود الآمنة",
        signalScore: "96%",
      },
      {
        id: "IOT-SENSOR-02",
        raw: "TMP: 114.2C | VIB: 4.19mm/s | RPM: 1200 | STAT: OVERHEAT_CRITICAL",
        parsed:
          "تنبيه حرج: ارتفاع حرارة المحرك الرئيسي 114.2°C - خطر توقف الإنتاج",
        signalScore: "100%",
      },
      {
        id: "IOT-SENSOR-03",
        raw: "CORRUPTED_PACKET_CHECKSUM_0x99AAFF",
        parsed: "بيانات مشوهة ناتجة عن تداخل كهرومغناطيسي (تمت تصفيتها)",
        signalScore: "0%",
      },
    ],
  };

  const currentPackets =
    samplePackets[selectedDataStream as keyof typeof samplePackets];

  return (
    <section
      id="chapter-01"
      className="min-h-screen py-16 px-4 max-w-6xl mx-auto space-y-12"
    >
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="01"
        titleAr="الفصل الأول"
        subtitleAr="عندما يصبح الطوفان صامتاً: هل البيانات وحدها تكفي؟"
        labelEn="RAW DATA & ENTROPY REDUCTION"
        accentColor="cyan"
      />

      {/* Concept Hero Visual + Kinetic Editorial */}
      <div className="relative rounded-3xl overflow-hidden border border-cyan-500/30 shadow-2xl bg-slate-950">
        <div className="relative h-64 sm:h-80 w-full overflow-hidden">
          <img
            src={VISUAL_ASSETS.dataStreamCore}
            alt="Data Streams and Optical Core"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-55 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/70 to-transparent" />

          {/* Floating Editorial Statement over image */}
          <div className="absolute bottom-6 right-6 left-6 text-right space-y-2">
            <div className="text-xs font-mono text-cyan-400 tracking-widest uppercase flex items-center justify-end gap-2">
              <span>RAW DATA ENTROPY</span>
              <Activity className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            <h3 className="text-xl sm:text-3xl md:text-4xl font-black text-slate-100 leading-snug">
              "البيانات لا تتحدث وحدها... نحن من يمنحها المعنى."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed">
              نعيش في عصر يولد كمية هائلة من البيانات يومياً؛ لكن 80% منها مجرد
              فوضى غير مهيكلة (Noise). بدون نظام يفرزها ويحولها إلى سياق، تظل
              البيانات عبئاً إدارياً بدلاً من أصل استراتيجي.
            </p>
          </div>
        </div>
      </div>

      {/* Interactive Data Stream Inspector & Live Simulation */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left: Stream Controller & Real Packet Explorer */}
        <div className="lg:col-span-7 bg-[#050b18] border border-cyan-500/30 rounded-3xl p-6 space-y-5 shadow-2xl text-right">
          <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-slate-800">
            {/* Stream Type Toggle */}
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelectedDataStream("financial");
                  setActivePacketIndex(0);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedDataStream === "financial"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                معاملات مالية ومصرفية
              </button>
              <button
                onClick={() => {
                  setSelectedDataStream("iot");
                  setActivePacketIndex(0);
                }}
                className={`px-3 py-1 rounded-xl text-xs font-bold transition-all ${
                  selectedDataStream === "iot"
                    ? "bg-cyan-500 text-slate-950 shadow-md"
                    : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                }`}
              >
                حساسات صناعية (IoT)
              </button>
            </div>

            <span className="text-xs font-mono text-cyan-400 flex items-center gap-1.5">
              <Database className="w-3.5 h-3.5" />
              <span>LIVE INGESTION STREAM</span>
            </span>
          </div>

          {/* Interactive Packets List */}
          <div className="space-y-2.5">
            <div className="text-xs font-bold text-slate-400">
              انقر على أي حزمة بيانات لتحليلها واستخلاص المعنى:
            </div>
            {currentPackets.map((pkt, idx) => {
              const isSelected = activePacketIndex === idx;

              return (
                <button
                  key={pkt.id}
                  onClick={() => setActivePacketIndex(idx)}
                  className={`w-full p-3.5 rounded-2xl border text-right transition-all flex flex-col gap-1.5 ${
                    isSelected
                      ? "bg-cyan-950/60 border-cyan-500 text-cyan-100 shadow-lg ring-1 ring-cyan-500/40"
                      : "bg-slate-900/60 border-slate-800 text-slate-400 hover:text-slate-200 hover:bg-slate-800/40"
                  }`}
                >
                  <div className="flex items-center justify-between text-[11px] font-mono">
                    <span className="text-cyan-400 font-bold">{pkt.id}</span>
                    <span
                      className={`px-2 py-0.5 rounded ${pkt.signalScore === "0%" ? "bg-rose-950 text-rose-300" : "bg-emerald-950 text-emerald-300"}`}
                    >
                      جودة الإشارة: {pkt.signalScore}
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-slate-500 truncate">
                    {pkt.raw}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Interactive Noise Filter Slider */}
          <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
            <div className="flex items-center justify-between text-xs font-bold text-slate-300">
              <span>تصفية الفوضى والضجيج (Entropy Filtering):</span>
              <span className="text-cyan-400 font-mono">
                {100 - noiseLevel}% إشارة نقية
              </span>
            </div>
            <input
              type="range"
              min="10"
              max="90"
              value={noiseLevel}
              onChange={(e) => setNoiseLevel(Number(e.target.value))}
              className="w-full accent-cyan-400 cursor-pointer"
            />
          </div>
        </div>

        {/* Right: Real Deep Inspection Outcome */}
        <div className="lg:col-span-5 bg-[#070e20] border border-cyan-500/30 rounded-3xl p-6 space-y-5 shadow-2xl text-right">
          <div className="flex items-center justify-between pb-3 border-b border-slate-800">
            <span className="text-xs font-mono text-cyan-400">
              STRUCTURED MEANING
            </span>
            <div className="flex items-center gap-1.5 text-xs font-bold text-slate-200">
              <Sparkles className="w-4 h-4 text-cyan-400" />
              <span>المعنى المستخلص إدارياً:</span>
            </div>
          </div>

          {activePacketIndex !== null && currentPackets[activePacketIndex] ? (
            <div className="space-y-4">
              <div className="p-4 rounded-2xl bg-cyan-950/30 border border-cyan-500/40 text-xs text-slate-200 leading-relaxed font-semibold">
                {currentPackets[activePacketIndex].parsed}
              </div>

              <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2 text-xs">
                <div className="font-bold text-slate-300">
                  التحول من البيانات إلى معلومة:
                </div>
                <p className="text-slate-400 leading-relaxed">
                  تم تحويل النص الخام غير المفهوم للمدير إلى تقرير تنفيذي يحدد
                  القيمة والموقع وحالة الأمان، مما يمكن صانع القرار من التصرف
                  اللحظي.
                </p>
              </div>
            </div>
          ) : (
            <div className="text-xs text-slate-500 p-8 text-center">
              اختر حزمة بيانات لعرض التحليل
            </div>
          )}
        </div>
      </div>
      <PageSignatureFooter />
    </section>
  );
};
