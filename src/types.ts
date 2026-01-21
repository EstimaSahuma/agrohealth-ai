
export const severity = {
  LOW: 'Low',
  MEDIUM: 'Medium',
  HIGH: 'High'
} as const;

export type Severity = typeof severity[keyof typeof severity];

export const issueType = {
  PEST: 'Pest',
  DISEASE: 'Disease',
  DEFICIENCY: 'Nutrient Deficiency',
  HEALTHY: 'Healthy',
  UNKNOWN: 'Unknown'
} as const;

export type IssueType = typeof issueType[keyof typeof issueType];

export interface PlantAnalysis {
  plantName: string;
  issueType: IssueType;
  diagnosis: string;
  symptoms: string[];
  explanation: string;
  severity: Severity;
  treatmentPlan: string[];
  preventionTips: string[];
}

export interface MediaItem {
  file: File;
  preview: string;
  type: 'image' | 'video';
}
