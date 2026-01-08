
export interface OracleResult {
  name: string;
  protocol: string;
  tone: string;
  bio: string;
  tags: string[];
  imageUrl: string;
  verified: boolean;
}

export enum AnalysisProtocol {
  DESTINY_MATRIX = '운명 분석 (Destiny Matrix)',
  TAROT_ALGO = '타로 시뮬레이션 (Tarot Algorithm)',
  PREDICTIVE = '미래 예측 (Predictive Engine)',
  REALITY = '현실 재구성 (Reality Reconfigurator)',
  NOMENCLATURE = '명칭 최적화 (Nomenclature Optimizer)'
}

export enum OutputTone {
  PRECISE = '정밀 분석',
  INTUITIVE = '직관적',
  TRANSCENDENT = '초월적'
}
