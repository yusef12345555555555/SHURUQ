import React, { useState } from "react";
import {
  Users,
  Database,
  Server,
  Code2,
  GitBranch,
  Network,
  Sparkles,
  CheckCircle2,
  Play,
  RefreshCw,
  Layers,
  Activity,
  Cpu,
  Zap,
  HardDrive,
  Radio,
} from "lucide-react";
import { ChapterHeader } from "../common/ChapterHeader";
import { VISUAL_ASSETS } from "../../data/visualAssets";

export const Chapter02InfoSystemCore: React.FC = () => {
  const [selectedPillarId, setSelectedPillarId] = useState<string>("data");
  const [isSimulating, setIsSimulating] = useState<boolean>(false);
  const [simStep, setSimStep] = useState<number>(0);

  const pillars = [
    {
      id: "data",
      num: "01",
      nameAr: "البيانات",
      titleEn: "DATA",
      subAr: "المادة الخام الأساسية لإنتاج المعرفة",
      definitionAr:
        "البيانات هي المادة الخام (Raw Facts) والتدفقات الرقمية التي يستقبلها النظام ويخضعها للمعالجة ليحولها إلى معلومات ذات سياق وقيمة لاتخاذ القرارات.",
      connections: [
        {
          target: "الأجهزة (Hardware)",
          relation: "تُخزن في وسائط التخزين السريع ومصفوفات SAN",
        },
        {
          target: "البرمجيات (Software)",
          relation: "تُعالج وتُستعلم عبر محركات قواعد البيانات",
        },
        {
          target: "الأفراد (People)",
          relation: "يُدخلها الموظفون ويحللها صناع القرار",
        },
        {
          target: "الإجراءات (Procedures)",
          relation: "تخضع لسياسات التحقق وتطهير البيانات",
        },
        {
          target: "الشبكات (Networks)",
          relation: "تنتقل لحظياً عبر الواجهات البرمجية (APIs)",
        },
      ],
      interactiveData: {
        rawInput: '{ "tx_id": 90812, "amount": 4250, "status": "PENDING" }',
        processedOutput:
          "معاملة مالية معتمدة | مؤشر تدفق السيولة: +14.2% | الفرع: القاهرة",
        metric: "320+ Exabytes / يومياً",
        qualityScore: "99.98% دقة",
      },
      icon: Database,
      accentBorder: "border-cyan-500",
      accentBg: "bg-cyan-950/40",
      accentText: "text-cyan-300",
      accentRing: "ring-cyan-500/50",
    },
    {
      id: "hardware",
      num: "02",
      nameAr: "الأجهزة والعتاد",
      titleEn: "HARDWARE",
      subAr: "البنية المادية لمعالجة وتخزين ونقل البيانات",
      definitionAr:
        "الأجهزة هي العتاد المادي والحوسبي (الخوادم، المعالجات المركزية، وحدات الرسوميات، وسائط التخزين) التي تنفذ العمليات الحسابية وتوفر بيئة التشغيل المستقرة.",
      connections: [
        {
          target: "البيانات (Data)",
          relation: "تستقر فعلياً في مصفوفات التخزين (NVMe SSD)",
        },
        {
          target: "البرمجيات (Software)",
          relation: "تنفذ الشيفرات البرمجية على شرائح الـ CPU و GPU",
        },
        {
          target: "الأفراد (People)",
          relation: "يتفاعلون معها عبر واجهات الإدخال والشاشات",
        },
        {
          target: "الإجراءات (Procedures)",
          relation: "تخضع لخطط الصيانة والتعافي من الكوارث",
        },
        {
          target: "الشبكات (Networks)",
          relation: "تتصل عبر كوابل الألياف البصرية ومحولات التوجيه",
        },
      ],
      interactiveData: {
        rawInput: "القدرة الحسابية: 14.2 TFLOPS",
        processedOutput:
          "معدل الجاهزية التشغيلية (Uptime): 99.999% | زمن الاستجابة: 1.2ms",
        metric: "128 Cores Cloud CPUs",
        qualityScore: "Tier-4 Data Center",
      },
      icon: Server,
      accentBorder: "border-blue-500",
      accentBg: "bg-blue-950/40",
      accentText: "text-blue-300",
      accentRing: "ring-blue-500/50",
    },
    {
      id: "software",
      num: "03",
      nameAr: "البرمجيات",
      titleEn: "SOFTWARE",
      subAr: "التعليمات والخوارزميات التي تدير المنظومة",
      definitionAr:
        "البرمجيات هي حزمة التعليمات المنطقية، أنظمة التشغيل، نظم إدارة قواعد البيانات (DBMS)، والتطبيقات المؤسسية (ERP/CRM) التي تترجم أهداف العمل إلى عمليات رقمية.",
      connections: [
        {
          target: "البيانات (Data)",
          relation: "تتحكم في هيكلة وتخزين واسترجاع السجلات",
        },
        {
          target: "الأجهزة (Hardware)",
          relation: "توجه المعالجات وتدير الذاكرة والموارد",
        },
        {
          target: "الأفراد (People)",
          relation: "توفر واجهات سهلة الاستخدام ولوحات قيادة تفاعلية",
        },
        {
          target: "الإجراءات (Procedures)",
          relation: "تبرمج السياسات المؤسسية داخل قواعد الكود",
        },
        {
          target: "الشبكات (Networks)",
          relation: "تتبادل الرسائل عبر بروتوكولات RESTful و WebSockets",
        },
      ],
      interactiveData: {
        rawInput: "executeDecisionPipeline(dataStream)",
        processedOutput:
          "تم توليد التقرير التحليلي | الأداء: 42ms | التحسين التلقائي نشط",
        metric: "< 45ms API Latency",
        qualityScore: "100% Logic Integrity",
      },
      icon: Code2,
      accentBorder: "border-violet-500",
      accentBg: "bg-violet-950/40",
      accentText: "text-violet-300",
      accentRing: "ring-violet-500/50",
    },
    {
      id: "people",
      num: "04",
      nameAr: "الأفراد",
      titleEn: "PEOPLE",
      subAr: "العنصر البشري: المستخدمون وصناع القرار",
      definitionAr:
        "الأفراد هم العنصر الجوهري؛ فهم الذين يحددون أهداف النظام، يدخلون البيانات، يراجعون التحليلات، ويتخذون القرارات الاستراتيجية التي تقود المؤسسة.",
      connections: [
        {
          target: "البيانات (Data)",
          relation: "يقومون بإدخالها والتحقق من صحتها وتفسير دلالاتها",
        },
        {
          target: "الأجهزة (Hardware)",
          relation: "يستخدمون المحطات الطرفية والأجهزة الذكية",
        },
        {
          target: "البرمجيات (Software)",
          relation: "يتفاعلون مع الواجهات ويعتمدون التوصيات",
        },
        {
          target: "الإجراءات (Procedures)",
          relation: "يلتزمون بمسارات العمل وسياسات الصلاحيات",
        },
        {
          target: "الشبكات (Networks)",
          relation: "يتواصلون ويتعاونون عبر فرق عمل موزعة",
        },
      ],
      interactiveData: {
        rawInput: 'طلب استشاري من الإدارة: "أفضل سيناريو تسعير للربع القادم؟"',
        processedOutput:
          "اعتماد القرار البشري بناءً على توصية الخوارزمية مع هامش أمان 5%",
        metric: "Human-in-the-Loop",
        qualityScore: "100% قيادة واعية",
      },
      icon: Users,
      accentBorder: "border-emerald-500",
      accentBg: "bg-emerald-950/40",
      accentText: "text-emerald-300",
      accentRing: "ring-emerald-500/50",
    },
    {
      id: "procedures",
      num: "05",
      nameAr: "الإجراءات",
      titleEn: "PROCEDURES",
      subAr: "السياسات والضوابط ومسارات العمل الحاكمة",
      definitionAr:
        "الإجراءات هي القواعد المعيارية، سياسات الأمان، مسارات الاعتماد، وخطط استمرارية الأعمال التي تحدد بدقة من يفعل ماذا، ومتى، وكيف داخل النظام.",
      connections: [
        {
          target: "البيانات (Data)",
          relation: "تفرض قواعد تنظيف وتصنيف وتشفير السجلات",
        },
        {
          target: "الأجهزة (Hardware)",
          relation: "تحدد بروتوكولات النسخ الاحتياطي والصيانة",
        },
        {
          target: "البرمجيات (Software)",
          relation: "تتحول إلى قيود وشروط برمجية في الكود",
        },
        {
          target: "الأفراد (People)",
          relation: "تنظم صلاحيات الوصول وتوزع المسؤوليات",
        },
        {
          target: "الشبكات (Networks)",
          relation: "تحدد معايير التشفير وسياسات الجدار الناري",
        },
      ],
      interactiveData: {
        rawInput: "سياسة الأمان SEC-801: فحص دوري لمطابقة معايير ISO-27001",
        processedOutput:
          "اكتمال التدقيق الأمني بنجاح | لا توجد ثغرات | مسار الاعتماد موثق",
        metric: "ISO 27001 Certified",
        qualityScore: "100% امتثال تنظيمي",
      },
      icon: GitBranch,
      accentBorder: "border-amber-500",
      accentBg: "bg-amber-950/40",
      accentText: "text-amber-300",
      accentRing: "ring-amber-500/50",
    },
    {
      id: "networks",
      num: "06",
      nameAr: "الشبكات والاتصالات",
      titleEn: "NETWORKS",
      subAr: "البنية الاتصالية لربط الفروع والسحابة والـ APIs",
      definitionAr:
        "الشبكات هي الشريان الاتصالي (سلكي ولاسلكي، بروتوكولات TCP/IP، شبكات VPN، وواجهات APIs) الذي يتيح تدفق البيانات الفوري بين كافة عناصر المنظومة.",
      connections: [
        {
          target: "البيانات (Data)",
          relation: "تنقل الحزم الرقمية والرسائل بين مراكز البيانات",
        },
        {
          target: "الأجهزة (Hardware)",
          relation: "تربط الخوادم والحواسيب عبر المحولات وأجهزة التوجيه",
        },
        {
          target: "البرمجيات (Software)",
          relation: "تتيح تكامل الخدمات المصغرة (Microservices) عبر APIs",
        },
        {
          target: "الأفراد (People)",
          relation: "تمنح المستخدمين وصولاً آمناً وسريعاً من أي مكان",
        },
        {
          target: "الإجراءات (Procedures)",
          relation: "تطبق معايير الأمان صفرية الثقة (Zero Trust)",
        },
      ],
      interactiveData: {
        rawInput: "إرسال حزمة مشفرة عبر نفق VPN بتشفير AES-256",
        processedOutput:
          "وصول البيانات للخادم خلال 3.4ms بدون فقد (0% Packet Loss)",
        metric: "10 Gbps High Throughput",
        qualityScore: "Zero-Trust Secure",
      },
      icon: Network,
      accentBorder: "border-teal-500",
      accentBg: "bg-teal-950/40",
      accentText: "text-teal-300",
      accentRing: "ring-teal-500/50",
    },
  ];

  const current = pillars.find((p) => p.id === selectedPillarId) || pillars[0];
  const CurrentIcon = current.icon;

  const handleSelectPillar = (id: string) => {
    setSelectedPillarId(id);
    setIsSimulating(false);
    setSimStep(0);
  };

  const handleRunSimulation = () => {
    setIsSimulating(true);
    setSimStep(1);

    setTimeout(() => setSimStep(2), 1000);
    setTimeout(() => setSimStep(3), 2000);
    setTimeout(() => setSimStep(4), 3000);
    setTimeout(() => {
      setIsSimulating(false);
    }, 4200);
  };

  return (
    <section
      id="chapter-02"
      className="min-h-screen py-12 px-4 max-w-7xl mx-auto space-y-8 relative"
    >
      {/* Chapter Marker Header */}
      <ChapterHeader
        number="02"
        titleAr="الفصل الثاني"
        subtitleAr="عندما تتحول البيانات إلى نظام: ما هو نظام المعلومات؟"
        labelEn="SOCIO-TECHNICAL SYSTEM CORE"
        accentColor="blue"
      />

      {/* Concept Hero Visual + Kinetic Editorial */}
      <div className="relative rounded-3xl overflow-hidden border border-blue-500/30 shadow-2xl bg-slate-950">
        <div className="relative h-48 sm:h-60 w-full overflow-hidden">
          <img
            src={VISUAL_ASSETS.isControlRoom}
            alt="Information System Operations Control Room"
            className="w-full h-full object-cover object-center opacity-40 hover:opacity-55 transition-all duration-700 scale-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#02050e] via-[#02050e]/70 to-transparent" />

          {/* Floating Editorial Statement over image */}
          <div className="absolute bottom-5 right-6 left-6 text-right space-y-1.5">
            <div className="text-[11px] font-mono text-cyan-400 tracking-widest uppercase">
              THE 6 SOCIO-TECHNICAL PILLARS
            </div>
            <h3 className="text-lg sm:text-2xl md:text-3xl font-black text-slate-100 leading-snug">
              "نظام المعلومات ليس مجرد خوادم صامتة... بل هو كائن حي يجمع الإنسان
              والتقنية لإنتاج البصيرة."
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 max-w-3xl leading-relaxed hidden sm:block">
              اختر أي ركن من الأركان الستة أدناه لتشغيل المعاينة المجاورة
              واستكشاف البنية المعمارية ودورة الترابط بين المكونات.
            </p>
          </div>
        </div>
      </div>

      {/* Section Title Bar */}
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 border-b border-slate-800 pb-2.5">
        <div>
          <h3 className="text-base font-bold text-slate-100 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-pulse" />
            <span>أركان نظام المعلومات الستة</span>
            <span className="text-xs font-normal text-slate-400 font-sans"></span>
          </h3>
        </div>
        <span className="text-xs font-mono text-cyan-400 px-3 py-0.5 rounded-full bg-cyan-950/60 border border-cyan-800/60">
          2 × 3 GRID & ADJACENT LAB VIEW
        </span>
      </div>

      {/* 2-COLUMN CARD GRID (3 ROWS) + HARMONIOUS VIEWPORT-FITTING DETAIL PANEL */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
        {/* LEFT: 6 COMPONENT CARDS (2x3 GRID) */}
        <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            const isSelected = selectedPillarId === pillar.id;

            return (
              <button
                key={pillar.id}
                id={`pillar-card-${pillar.id}`}
                onClick={() => handleSelectPillar(pillar.id)}
                className={`p-3.5 sm:p-4 rounded-2xl border text-right transition-all duration-200 flex flex-col justify-between gap-2.5 group cursor-pointer relative overflow-hidden ${
                  isSelected
                    ? `${pillar.accentBg} ${pillar.accentBorder} ${pillar.accentRing} shadow-xl scale-[1.02] ring-2`
                    : "bg-slate-900/80 border-slate-800/90 text-slate-300 hover:text-white hover:bg-slate-800/70 hover:border-slate-700 hover:scale-[1.01] shadow-md"
                }`}
              >
                {/* Active Indicator Glow Pip */}
                {isSelected && (
                  <div className="absolute top-2.5 left-2.5 flex items-center gap-1 px-1.5 py-0.5 rounded-full bg-white/10 border border-white/20 text-[9px] font-mono text-cyan-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
                    <span>نشط</span>
                  </div>
                )}

                {/* Top Row: Icon + Number */}
                <div className="flex items-center justify-between w-full">
                  <div
                    className={`p-2 rounded-xl transition-all ${
                      isSelected
                        ? "bg-white/15 text-white shadow-inner"
                        : "bg-slate-800 text-cyan-400 group-hover:bg-cyan-500/20"
                    }`}
                  >
                    <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                  </div>
                  <span className="text-[10px] font-mono font-bold text-slate-500 px-1.5 py-0.5 rounded bg-slate-950/80 border border-slate-800/80">
                    {pillar.num}
                  </span>
                </div>

                {/* Body Content */}
                <div className="space-y-1 w-full">
                  <div className="flex items-center justify-between">
                    <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                      {pillar.nameAr}
                    </h4>
                    <span className="text-[9px] font-mono text-slate-500 uppercase">
                      {pillar.titleEn}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-400 leading-snug line-clamp-2">
                    {pillar.subAr}
                  </p>
                </div>

                {/* Bottom Status Bar */}
                <div
                  className={`pt-2 border-t text-[10px] font-mono flex items-center justify-between transition-colors ${
                    isSelected
                      ? "border-cyan-500/30 text-cyan-300"
                      : "border-slate-800/80 text-slate-500 group-hover:text-slate-300"
                  }`}
                >
                  <span className="font-bold">
                    {isSelected ? "المعاينة معروضة ◀" : "معاينة المكون ➔"}
                  </span>
                  <span className="text-[9px] font-sans opacity-75">
                    {pillar.interactiveData.qualityScore}
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        {/* RIGHT: COMPACT, VIEWPORT-FITTING ADJACENT DETAIL & PREVIEW PANEL */}
        <div className="lg:col-span-6 bg-[#060e20] border border-cyan-500/40 rounded-2xl p-4 sm:p-5 shadow-2xl flex flex-col justify-between space-y-3.5 text-right relative ring-1 ring-cyan-500/30 overflow-hidden">
          {/* Top Bar: Icon + Arabic Title + English Label + Metric */}
          <div className="flex items-center justify-between gap-3 pb-2.5 border-b border-slate-800">
            <div className="flex items-center gap-2.5">
              <div className="p-2.5 rounded-xl bg-cyan-950 text-cyan-400 border border-cyan-800/80 shadow-md">
                <CurrentIcon className="w-5 h-5" />
              </div>
              <div>
                <div className="text-[10px] font-mono text-cyan-400 tracking-wider uppercase">
                  COMPONENT {current.num} // {current.titleEn}
                </div>
                <h3 className="text-lg sm:text-xl font-black text-slate-100">
                  {current.nameAr}
                </h3>
              </div>
            </div>

            <span className="px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 text-slate-300 font-mono text-[10px]">
              {current.interactiveData.metric}
            </span>
          </div>

          {/* 1. Concise Academic Explanation */}
          <div className="p-3 rounded-xl bg-cyan-950/20 border border-cyan-500/25 space-y-0.5">
            <div className="text-[11px] font-bold text-cyan-300 flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-cyan-400" />
              <span>التعريف والشرح الأكاديمي:</span>
            </div>
            <p className="text-xs text-slate-200 leading-relaxed font-semibold">
              "{current.definitionAr}"
            </p>
          </div>

          {/* 2. Compact Interactive Visual Diagram & Simulation */}
          <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-[11px] font-bold text-slate-300 flex items-center gap-1">
                <Activity className="w-3.5 h-3.5 text-cyan-400" />
                <span>المخطط البصري والمعالجة الحية:</span>
              </span>

              <button
                id="run-component-simulation-btn"
                onClick={handleRunSimulation}
                disabled={isSimulating}
                className="px-2.5 py-1 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-slate-950 font-black text-[10px] flex items-center gap-1 shadow-sm hover:scale-105 transition-all cursor-pointer disabled:opacity-50"
              >
                {isSimulating ? (
                  <RefreshCw className="w-3 h-3 animate-spin" />
                ) : (
                  <Play className="w-3 h-3" />
                )}
                <span></span>
              </button>
            </div>

            {/* Visual Per Pillar */}
            {current.id === "data" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-cyan-900/50 font-mono text-[10px] space-y-1.5">
                <div className="flex items-center justify-between text-[9px] text-slate-400 pb-1 border-b border-slate-800">
                  <span className="text-rose-400 font-bold">1. مدخلات خام</span>
                  <span>➔</span>
                  <span className="text-cyan-400 font-bold">
                    2. هيكلة وتنظيم
                  </span>
                  <span>➔</span>
                  <span className="text-emerald-400 font-bold">
                    3. قرار ذكي
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]">
                  <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 text-cyan-300 truncate">
                    {current.interactiveData.rawInput}
                  </div>
                  <div
                    className={`p-1.5 rounded border transition-all ${
                      isSimulating
                        ? "bg-emerald-950/60 border-emerald-500 text-emerald-200"
                        : "bg-slate-900/80 border-slate-800 text-slate-300"
                    }`}
                  >
                    {current.interactiveData.processedOutput}
                  </div>
                </div>
              </div>
            )}

            {current.id === "hardware" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-blue-900/50 text-[10px] space-y-1.5">
                <div className="grid grid-cols-4 gap-1.5 text-center font-mono">
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <Cpu className="w-3.5 h-3.5 text-blue-400 mx-auto" />
                    <span className="text-slate-200 font-bold block text-[9px]">
                      128-Core
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <Zap className="w-3.5 h-3.5 text-violet-400 mx-auto" />
                    <span className="text-slate-200 font-bold block text-[9px]">
                      GPU AI
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <HardDrive className="w-3.5 h-3.5 text-emerald-400 mx-auto" />
                    <span className="text-slate-200 font-bold block text-[9px]">
                      NVMe SAN
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-slate-900 border border-slate-800">
                    <Radio className="w-3.5 h-3.5 text-cyan-400 mx-auto" />
                    <span className="text-slate-200 font-bold block text-[9px]">
                      100G Switch
                    </span>
                  </div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 border border-slate-800 text-[10px] text-slate-300">
                  <span className="text-blue-300 font-bold ml-1">
                    حالة العتاد:
                  </span>
                  <span>{current.interactiveData.processedOutput}</span>
                </div>
              </div>
            )}

            {current.id === "software" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-violet-900/50 text-[10px] space-y-1">
                <div className="flex items-center justify-between p-1 rounded bg-slate-900 text-slate-300">
                  <span className="text-violet-300 font-bold">
                    1. واجهات وتطبيقات:
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">
                    ERP, CRM, Cockpit
                  </span>
                </div>
                <div className="flex items-center justify-between p-1 rounded bg-slate-900 text-slate-300">
                  <span className="text-cyan-300 font-bold">
                    2. محركات وذكاء:
                  </span>
                  <span className="font-mono text-[9px] text-slate-400">
                    DBMS, AI Inference
                  </span>
                </div>
                <div className="p-1 rounded bg-slate-900/80 text-slate-300 font-mono text-[10px]">
                  <span className="text-emerald-400 font-bold">الأداء: </span>
                  <span>{current.interactiveData.processedOutput}</span>
                </div>
              </div>
            )}

            {current.id === "people" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-emerald-900/50 text-[10px] space-y-1.5">
                <div className="flex items-center justify-between text-[10px]">
                  <span className="text-emerald-300 font-bold">
                    حلقة التفاعل البشري:
                  </span>
                  <span className="font-mono text-emerald-400 text-[9px]">
                    Human-in-the-Loop
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5 text-[10px]">
                  <div className="p-1.5 rounded bg-slate-900/90 text-slate-300">
                    <span className="text-[9px] text-slate-500 block">
                      طلب القيادة:
                    </span>
                    <span className="text-slate-200">
                      {current.interactiveData.rawInput}
                    </span>
                  </div>
                  <div className="p-1.5 rounded bg-emerald-950/30 text-emerald-200 border border-emerald-500/30">
                    <span className="text-[9px] text-emerald-400 block">
                      المسؤولية التنفيذية:
                    </span>
                    <span className="font-semibold">
                      {current.interactiveData.processedOutput}
                    </span>
                  </div>
                </div>
              </div>
            )}

            {current.id === "procedures" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-amber-900/50 text-[10px] space-y-1.5">
                <div className="grid grid-cols-4 gap-1 text-center font-mono text-[9px]">
                  <div className="p-1 rounded bg-slate-900 text-slate-300">
                    1. إدخال
                  </div>
                  <div className="p-1 rounded bg-slate-900 text-amber-300">
                    2. تدقيق
                  </div>
                  <div className="p-1 rounded bg-slate-900 text-cyan-300">
                    3. معالجة
                  </div>
                  <div className="p-1 rounded bg-slate-900 text-emerald-300">
                    4. اعتماد
                  </div>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 text-[10px] text-slate-300">
                  <span className="text-amber-400 font-bold ml-1">
                    ضابط الحوكمة:
                  </span>
                  <span>{current.interactiveData.processedOutput}</span>
                </div>
              </div>
            )}

            {current.id === "networks" && (
              <div className="p-2.5 rounded-lg bg-[#030814] border border-teal-900/50 text-[10px] space-y-1.5">
                <div className="flex items-center justify-between font-mono text-[9px] text-slate-400 border-b border-slate-800 pb-1">
                  <span className="text-cyan-400">Terminal</span>
                  <span>➔ [TLS 1.3] ➔</span>
                  <span className="text-teal-400">API Gateway</span>
                  <span>➔</span>
                  <span className="text-emerald-400">Core DB</span>
                </div>
                <div className="p-1.5 rounded bg-slate-900/80 text-[10px] text-slate-300">
                  <span className="text-teal-400 font-bold ml-1">
                    البث المشفر:
                  </span>
                  <span>{current.interactiveData.processedOutput}</span>
                </div>
              </div>
            )}
          </div>

          {/* 3. System Connection Matrix: Linkages with other 5 components */}
          <div className="space-y-1.5">
            <div className="flex items-center justify-between text-[11px] font-bold text-slate-300">
              <span className="flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-cyan-400" />
                <span>الارتباط بأركان المنظومة الأخرى:</span>
              </span>
              <span className="text-[9px] font-mono text-slate-500">
                SYSTEM MESH
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
              {current.connections.slice(0, 4).map((conn, idx) => (
                <div
                  key={idx}
                  className="p-2 rounded-lg bg-slate-900/70 border border-slate-800/80 text-right space-y-0.5 text-[10px]"
                >
                  <div className="font-bold text-cyan-300 flex items-center gap-1">
                    <CheckCircle2 className="w-2.5 h-2.5 text-emerald-400 shrink-0" />
                    <span>{conn.target}</span>
                  </div>
                  <p className="text-[10px] text-slate-400 leading-snug font-sans">
                    {conn.relation}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Component Switcher Pill Bar */}
          <div className="pt-2 border-t border-slate-800 flex items-center justify-between gap-1.5">
            <span className="text-[10px] text-slate-500 font-mono">
              التبديل السريع:
            </span>
            <div className="flex items-center gap-1">
              {pillars.map((p) => (
                <button
                  key={p.id}
                  onClick={() => handleSelectPillar(p.id)}
                  className={`px-2 py-0.5 rounded text-[9px] font-bold transition-all cursor-pointer ${
                    selectedPillarId === p.id
                      ? "bg-cyan-500 text-slate-950 font-black shadow-sm"
                      : "bg-slate-900 text-slate-400 hover:text-slate-200 border border-slate-800"
                  }`}
                >
                  {p.nameAr.split(" ")[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
