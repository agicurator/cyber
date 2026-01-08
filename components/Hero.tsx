
import React from 'react';

interface HeroProps {
  onStartClick: () => void;
}

const Hero: React.FC<HeroProps> = ({ onStartClick }) => {
  return (
    <section className="relative pt-12 md:pt-24 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,255,0.05)_0%,transparent_100%)] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 md:px-10 flex flex-col lg:flex-row items-center gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-flex items-center px-3 py-1 mb-6 rounded-full bg-primary/10 border border-primary/20">
            <span className="text-accent text-[10px] md:text-xs font-bold uppercase tracking-widest font-display">SYSTEM ONLINE // CORE v3.1</span>
          </div>
          
          <h1 className="text-white text-4xl md:text-6xl font-black leading-tight mb-6 font-display tracking-tight">
            운명은 읽어도 <br />
            <span className="text-primary drop-shadow-[0_0_8px_rgba(0,229,255,0.6)]">브랜딩</span>이 어렵다면?
          </h1>
          
          <p className="text-gray-400 text-base md:text-xl max-w-xl mx-auto lg:mx-0 mb-10 leading-relaxed font-light">
            'CYBER ORACLE AI'는 복잡한 운세 데이터를 단 10초 만에 분석하여, 
            당신만의 초월적 디지털 페르소나를 구축합니다.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button 
              onClick={onStartClick}
              className="px-8 py-4 bg-primary text-bg-dark font-black rounded-lg shadow-neon-blue hover:scale-105 transition-all font-display uppercase text-lg"
            >
              데이터 해독 시작
            </button>
            <button className="px-8 py-4 bg-surface-dark border border-border-dark text-white font-medium rounded-lg hover:border-primary transition-all font-display uppercase">
              시스템 문서 보기
            </button>
          </div>
        </div>

        <div className="flex-1 w-full max-w-2xl group">
          <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-border-dark bg-surface-dark shadow-2xl scanline">
            <div className="absolute top-0 w-full h-8 bg-bg-dark/80 flex items-center px-4 gap-1.5 border-b border-border-dark">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/30"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-green-500/30"></div>
              <span className="ml-auto text-[10px] font-display text-gray-500 tracking-widest uppercase">oracle_v3.bin</span>
            </div>
            
            <div className="p-8 mt-4">
              <div className="flex items-center gap-4 mb-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-primary to-secondary animate-pulse"></div>
                <div className="space-y-2 flex-1">
                  <div className="h-4 bg-white/5 rounded w-3/4"></div>
                  <div className="h-4 bg-white/5 rounded w-1/2"></div>
                </div>
              </div>
              
              <div className="p-6 rounded-xl bg-bg-dark/50 border border-primary/20 backdrop-blur-sm">
                <div className="flex items-center gap-2 mb-4 text-primary text-xs font-display font-bold">
                  <span>🧠</span> ORACLE AI OUTPUT
                </div>
                <div className="space-y-3">
                  <div className="h-2.5 bg-white/10 rounded w-full"></div>
                  <div className="h-2.5 bg-white/10 rounded w-full"></div>
                  <div className="h-2.5 bg-white/10 rounded w-4/5"></div>
                  <div className="h-2.5 bg-white/10 rounded w-2/3"></div>
                </div>
              </div>
            </div>
            
            <div className="absolute bottom-4 right-4 flex gap-2">
              <div className="px-2 py-1 bg-primary/10 border border-primary/20 rounded text-[8px] text-primary font-bold">STABLE</div>
              <div className="px-2 py-1 bg-accent/10 border border-accent/20 rounded text-[8px] text-accent font-bold">144.2 FPS</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
