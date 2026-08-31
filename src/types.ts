export type ChapterId = 
  | 'intro'
  | 'ch01-data-deluge'
  | 'ch02-is-definition'
  | 'ch03-system-architecture'
  | 'ch04-data-journey'
  | 'ch05-traditional-vs-intelligent'
  | 'ch06-ai-integration'
  | 'ch07-ai-decision-lab'
  | 'ch08-dss-simulation'
  | 'ch09-ai-value-multipliers'
  | 'ch10-ethics-governance'
  | 'ch11-future-convergence'
  | 'outro';

export interface ChapterMeta {
  id: ChapterId;
  number: string;
  titleAr: string;
  titleEn: string;
  taglineAr: string;
  accentColor: 'cyan' | 'blue' | 'violet' | 'magenta' | 'amber' | 'emerald';
  presenterNotes: string[];
  keyTakeaway: string;
}

export interface SystemComponentNode {
  id: string;
  nameAr: string;
  nameEn: string;
  roleAr: string;
  descriptionAr: string;
  exampleAr: string;
  metricLabel: string;
  metricValue: string;
  iconName: string;
  connections: string[];
}

export interface DataJourneyStep {
  id: string;
  stepNumber: number;
  nameAr: string;
  nameEn: string;
  stateDescriptionAr: string;
  transformationAr: string;
  entropyLevel: number; // 100 to 0
  valueMultiplier: string;
  exampleData: {
    raw: string;
    output: string;
  };
}

export interface SimulationProduct {
  id: string;
  nameAr: string;
  categoryAr: string;
  historicalSales: number[];
  currentStock: number;
  reorderPoint: number;
  leadTimeDays: number;
  anomalyDetected: boolean;
  predictedDemandNextQuarter: number;
  confidenceScore: number;
  recommendedAction: string;
  urgency: 'low' | 'medium' | 'high' | 'critical';
}

export interface DecisionOption {
  id: 'A' | 'B' | 'C' | 'D';
  labelAr: string;
  descriptionAr: string;
  expectedRevenueImpact: string;
  riskLevel: 'منخفض' | 'متوسط' | 'مرتفع' | 'حرج';
  riskScore: number; // 0-100
  accuracyScore: number; // 0-100
  strategicAlignment: string;
  dssVerdictAr: string;
  isAiRecommended?: boolean;
}

export interface GovernancePillar {
  id: string;
  titleAr: string;
  titleEn: string;
  challengeAr: string;
  solutionAr: string;
  academicPrincipleAr: string;
  riskSeverity: 'high' | 'critical' | 'essential';
  icon: string;
}
