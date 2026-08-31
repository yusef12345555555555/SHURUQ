import { ChapterMeta, SystemComponent, DataJourneyStep, AICapability, DSSOption } from '../types';

export const CHAPTERS: ChapterMeta[] = [
  {
    id: 1,
    stage: 'chapter-1',
    numberArabic: '١',
    title: 'هل البيانات وحدها تكفي؟',
    titleEn: 'Data vs. Information',
    subtitle: 'لماذا لا تصنع الأرقام والبيانات الخام قرارات بمفردها؟',
    keyTakeaway: 'البيانات هي البداية، لكنها ليست القرار.',
    iconName: 'Database',
  },
  {
    id: 2,
    stage: 'chapter-2',
    numberArabic: '٢',
    title: 'ما هو نظام المعلومات؟',
    titleEn: 'Information Systems',
    subtitle: 'المحرك الذي يحول البيانات المبعثرة إلى معلومات ذات قيمة.',
    keyTakeaway: 'نظام المعلومات هو الجسر المنظم بين الأرقام الخام والقرارات الفعالة.',
    iconName: 'Cpu',
  },
  {
    id: 3,
    stage: 'chapter-3',
    numberArabic: '٣',
    title: 'رحلة البيانات',
    titleEn: 'The Data Journey',
    subtitle: 'من اللحظة الأولى لجمع البيانات حتى ولادة القرار الصائب.',
    keyTakeaway: 'كلما تم تنظيم البيانات وتحليلها بشكل أفضل، أصبحت القرارات أفضل.',
    iconName: 'GitBranch',
  },
  {
    id: 4,
    stage: 'chapter-4',
    numberArabic: '٤',
    title: 'أين يدخل الذكاء الاصطناعي؟',
    titleEn: 'AI in Information Systems',
    subtitle: 'كيف يُضيف الذكاء الاصطناعي طبقة الفهم والتوقع للنظم التقليدية؟',
    keyTakeaway: 'الذكاء الاصطناعي ينقل النظم من مرحلة (ماذا حدث؟) إلى مرحلة (ماذا سيحدث وكيف نتصرف؟).',
    iconName: 'Sparkles',
  },
  {
    id: 5,
    stage: 'chapter-5',
    numberArabic: '٥',
    title: 'التطبيق العملي — مختبر القرار الذكي',
    titleEn: 'Smart Decision Lab',
    subtitle: 'محاكاة تفاعلية مباشرة لتحليل السوق واتخاذ القرار بالذكاء الاصطناعي.',
    keyTakeaway: 'التحليل التفاعلي الذكي يحول ملايين الاحتمالات إلى خطوات تنفيذية واضحة.',
    iconName: 'Sliders',
  },
  {
    id: 6,
    stage: 'chapter-6',
    numberArabic: '٦',
    title: 'نظم دعم القرار',
    titleEn: 'Decision Support Systems (DSS)',
    subtitle: 'التكامل الحقيقي: الإنسان والذكاء الاصطناعي معاً لصنع أفضل قرار.',
    keyTakeaway: 'الذكاء الاصطناعي يساعد الإنسان على اتخاذ القرار، ولا يتخذ القرار بدلًا منه.',
    iconName: 'BrainCircuit',
  },
];

export const SYSTEM_COMPONENTS: SystemComponent[] = [
  {
    id: 'people',
    name: 'الأشخاص (People)',
    nameEn: 'Users & Decision Makers',
    description: 'الأشخاص الذين يستخدمون النظام ويتخذون القرارات النهائية.',
    details: 'المستخدمون، المحللون، والمديرون الذين يحددون الأهداف ويستفيدون من مخرجات النظام لتوجيه المنظمة.',
    icon: 'Users',
    color: 'from-blue-500/20 to-cyan-500/20 border-cyan-500/30 text-cyan-300',
  },
  {
    id: 'data',
    name: 'البيانات (Data)',
    nameEn: 'Raw Inputs & Facts',
    description: 'المعلومات الخام والأرقام التي يستقبلها ويدخلها النظام.',
    details: 'سجلات المبيعات، حركات المخزون، تفاعلات العملاء، وقراءات الحساسات قبل معالجتها.',
    icon: 'Database',
    color: 'from-amber-500/20 to-orange-500/20 border-amber-500/30 text-amber-300',
  },
  {
    id: 'technology',
    name: 'التكنولوجيا (Technology)',
    nameEn: 'Hardware & Software',
    description: 'الأجهزة والبرامج وقواعد البيانات والشبكات التي تدير النظام.',
    details: 'الخوادم، المنصات السحابية، لغات البرمجة، وقنوات الاتصال التي تؤمن سرعة وكفاءة التشغيل.',
    icon: 'Server',
    color: 'from-purple-500/20 to-indigo-500/20 border-purple-500/30 text-purple-300',
  },
  {
    id: 'processes',
    name: 'العمليات (Processes)',
    nameEn: 'Procedures & Rules',
    description: 'الخطوات والقواعد الإجرائية التي يتم بها تشغيل وإدارة النظام.',
    details: 'سير العمل، معايير التحقق من الجودة، البروتوكولات الأمنية، وطرق إعداد التقارير الدورية.',
    icon: 'Workflow',
    color: 'from-emerald-500/20 to-teal-500/20 border-emerald-500/30 text-emerald-300',
  },
];

export const DATA_JOURNEY_STEPS: DataJourneyStep[] = [
  {
    id: 1,
    title: 'جمع البيانات',
    titleEn: 'Data Collection',
    description: 'التقاط البيانات الأولية من مختلف المصادر.',
    badge: 'الخطوة الأولى',
    detail: 'نقاط البيع، التطبيقات، استطلاعات الرأي، وحساسات التشغيل.',
    icon: 'DownloadCloud',
  },
  {
    id: 2,
    title: 'التخزين المنظم',
    titleEn: 'Data Storage',
    description: 'حفظ وتأمين البيانات في مستودعات منظمة.',
    badge: 'الخطوة الثانية',
    detail: 'قواعد البيانات المركزية والسحابية لضمان سلامة وسرعة استرجاع البيانات.',
    icon: 'HardDrive',
  },
  {
    id: 3,
    title: 'المعالجة والتنظيف',
    titleEn: 'Data Processing',
    description: 'تنقية البيانات من الأخطاء وترتيبها بدقة.',
    badge: 'الخطوة الثالثة',
    detail: 'إزالة التكرار، معالجة القيم المفقودة، وتوحيد الصيغ القياسية.',
    icon: 'Filter',
  },
  {
    id: 4,
    title: 'التحليل الاستكشافي',
    titleEn: 'Data Analysis',
    description: 'فحص الأرقام واستخراج العلاقات الرياضية.',
    badge: 'الخطوة الرابعة',
    detail: 'حساب المتوسطات، النسب المئوية، والمقارنات الإحصائية بين الفترات.',
    icon: 'TrendingUp',
  },
  {
    id: 5,
    title: 'المعلومات القيمة',
    titleEn: 'Information Output',
    description: 'تحويل الأرقام إلى معنى سياقي مفهوم.',
    badge: 'الخطوة الخامسة',
    detail: 'لوحات مؤشرات الأداء (Dashboards) والتقارير التنفيذية التفاعلية.',
    icon: 'PieChart',
  },
  {
    id: 6,
    title: 'صنع القرار',
    titleEn: 'Actionable Decision',
    description: 'اتخاذ الإجراء الاستراتيجي الصحيح في وقته.',
    badge: 'الهدف النهائي',
    detail: 'توجيه الميزانيات، إطلاق منتج جديد، أو تحسين تجربة العميل بثقة.',
    icon: 'CheckCircle2',
  },
];

export const AI_CAPABILITIES: AICapability[] = [
  {
    id: 'prediction',
    title: 'التوقع الذكي',
    titleEn: 'Prediction',
    description: 'يتوقع ما قد يحدث في المستقبل بناءً على الأنماط التاريخية.',
    example: 'توقع حجم الطلب على المنتجات للشهر القادم بدقة 94%.',
    metric: '94% دقة التنبؤ',
    icon: 'LineChart',
  },
  {
    id: 'patterns',
    title: 'اكتشاف الأنماط',
    titleEn: 'Pattern Detection',
    description: 'يكتشف علاقات خفية بين المتغيرات قد يصعب على الإنسان ملاحظتها.',
    example: 'اكتشاف ارتباط غير متوقع بين تغير الطقس وزيادة مبيعات صنف معين.',
    metric: 'تحليل ملايين العلاقات فورياً',
    icon: 'Network',
  },
  {
    id: 'recommendation',
    title: 'اقتراح التوصيات',
    titleEn: 'Recommendation',
    description: 'يقترح أفضل الخيارات والمسارات العملية المتاحة للمدير.',
    example: 'اقتراح إعادة توزيع المخزون للمستودعات الأقرب للطلب المتزايد.',
    metric: 'توليد خطط بديلة ذكية',
    icon: 'Lightbulb',
  },
  {
    id: 'automation',
    title: 'الأتمتة المتقدمة',
    titleEn: 'Automation',
    description: 'ينفذ المهام المتكررة المعقدة فورياً وبدون أخطاء بشرية.',
    example: 'تصنيف آلاف المعاملات اليومية وإرسال التنبيهات الفورية.',
    metric: 'أسرع بـ 100 ضعف',
    icon: 'Zap',
  },
];

export const DSS_OPTIONS: DSSOption[] = [
  {
    id: 'option-a',
    title: 'الخيار (أ): التوسع التدريجي الحذر',
    titleEn: 'Option A: Moderate Scale-Up',
    description: 'زيادة الميزانية بنسبة 15% مع التركيز على العملاء الحاليين وتقليل المخاطرة المالية.',
    cost: 'تكلفة منخفضة ($20,000)',
    risk: 'مخاطرة منخفضة (18%)',
    potentialROI: '+22% عائد متوقع',
    timeframe: 'تنفيذ خلال شهرين',
    aiPros: [
      'حماية كاملة للسيولة النقدية للشركة',
      'نسبة نجاح مؤكدة بناءً على البيانات السابقة تتجاوز 91%',
      'عدم الحاجة لتوظيف كوادر جديدة حالياً'
    ],
    aiCons: [
      'معدل نمو معتدل قد يستغله المنافسون',
      'حصة سوقية محدودة التوسع'
    ],
    aiScore: 84,
    recommendationTag: 'الخيار الأكثر استقراراً وأماناً'
  },
  {
    id: 'option-b',
    title: 'الخيار (ب): التوسع الهجومي الرقمي',
    titleEn: 'Option B: Aggressive Market Expansion',
    description: 'استثمار ميزانية مكثفة لفتح قنوات رقمية جديدة واستهداف فئات ديموغرافية جديدة بالكامل.',
    cost: 'تكلفة مرتفعة ($65,000)',
    risk: 'مخاطرة متوسطة/عالية (42%)',
    potentialROI: '+68% عائد متوقع',
    timeframe: 'تنفيذ خلال 4 أشهر',
    aiPros: [
      'فرصة لمضاعفة الحصة السوقية خلال نصف عام',
      'استباق تحركات المنافسين في السوق الإقليمي',
      'بناء أصول رقمية طويلة الأجل للمؤسسة'
    ],
    aiCons: [
      'تتطلب مراقبة يومية دقيقة لإدارة السيولة',
      'حساسية أعلى لتقلبات أسعار السوق'
    ],
    aiScore: 89,
    recommendationTag: 'الخيار ذو العائد الأقصى'
  }
];
