
import React from 'react';

const REVIEWS = [
  {
    name: 'Agent K-10',
    role: '데이터 분석가',
    text: '콘텐츠 생성이 너무 어려워 포기 상태였는데, 이 시스템을 사용하고 나서 매일 데이터를 업로드하고 있습니다. 상호작용이 2배나 증가했습니다.',
    avatar: 'https://picsum.photos/100/100?random=1'
  },
  {
    name: 'Oracle S-7',
    role: '예측 엔진 전문가',
    text: '제 출력 톤을 정확히 파악하여 데이터를 생성하는 것이 경이롭습니다. 핵심 작업에만 집중할 수 있어서 매우 만족합니다.',
    avatar: 'https://picsum.photos/100/100?random=2'
  },
  {
    name: 'Cyber Sage L-9',
    role: '시스템 아키텍트',
    text: '시각적 인터페이스가 엉망이었는데, AI가 만들어준 이미지를 쓰고 나서 훨씬 전문적이고 직관적으로 보인다는 평가를 받습니다.',
    avatar: 'https://picsum.photos/100/100?random=3'
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-24 bg-bg-dark border-t border-border-dark">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-white text-3xl font-bold font-display leading-tight mb-2">사용자 데이터 로그<br />성공적인 시스템 적용 사례</h2>
            <p className="text-gray-500">평균 데이터 처리 효율 150% 증가, 지금 확인해보세요.</p>
          </div>
          <div className="flex gap-2">
            <button className="w-12 h-12 rounded-full border border-border-dark text-primary flex items-center justify-center hover:bg-surface-dark transition-all">←</button>
            <button className="w-12 h-12 rounded-full border border-border-dark text-primary flex items-center justify-center hover:bg-surface-dark transition-all">→</button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <div key={i} className="bg-surface-dark p-8 rounded-2xl border border-border-dark hover:border-primary/50 transition-all group">
              <div className="flex gap-1 mb-6 text-accent">
                {Array(5).fill(0).map((_, i) => <span key={i} className="text-lg">★</span>)}
              </div>
              <p className="text-gray-300 mb-8 leading-relaxed italic">"{r.text}"</p>
              <div className="flex items-center gap-4">
                <img src={r.avatar} alt={r.name} className="w-12 h-12 rounded-full grayscale group-hover:grayscale-0 transition-all border border-border-dark" />
                <div>
                  <h4 className="text-white font-bold font-display text-sm uppercase">{r.name}</h4>
                  <p className="text-gray-500 text-[10px] font-bold uppercase">{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
