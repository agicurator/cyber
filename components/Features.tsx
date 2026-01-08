
import React from 'react';

const FEATURES = [
  {
    icon: '⚡',
    title: '데이터 생성 모듈',
    description: '복잡한 텍스트 데이터 생성에 소모되는 시간을 최소화합니다. 핵심 키워드만으로 전문가 수준의 콘텐츠를 완성합니다.',
    color: 'border-primary'
  },
  {
    icon: '👁️',
    title: '시각화 엔진',
    description: '비용과 시간을 절약하여 시각 자료를 생성합니다. AI가 당신의 콘셉트에 최적화된 이미지를 무제한으로 생성합니다.',
    color: 'border-secondary'
  },
  {
    icon: '📈',
    title: '전략적 분석 모듈',
    description: '최적화된 홍보 전략을 자동으로 제안합니다. 정교하게 조정된 문구를 통해 효율적인 마케팅을 지원합니다.',
    color: 'border-accent'
  }
];

const Features: React.FC = () => {
  return (
    <section id="features" className="py-24 max-w-7xl mx-auto px-4 md:px-10">
      <div className="text-center mb-20">
        <h2 className="text-white text-3xl font-bold font-display mb-4">핵심 기능: AI가 당신의 데이터를 최적화합니다.</h2>
        <p className="text-gray-500">데이터 처리의 복잡성은 AI에 맡기고, 당신은 핵심 활동에 집중하세요.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {FEATURES.map((f, i) => (
          <div key={i} className={`p-10 rounded-3xl bg-surface-dark border ${f.color}/30 border-2 hover:border-white transition-all group shadow-xl hover:-translate-y-2`}>
            <div className="w-16 h-16 rounded-2xl bg-white/5 flex items-center justify-center text-3xl mb-8 group-hover:scale-110 transition-transform">
              {f.icon}
            </div>
            <h3 className="text-2xl font-bold text-white mb-4 font-display uppercase">{f.title}</h3>
            <p className="text-gray-400 leading-relaxed text-sm">
              {f.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
