
import React, { useState } from 'react';
import { AnalysisProtocol, OutputTone, OracleResult } from '../types';
import { generateBranding } from '../services/geminiService';

interface SimulationModuleProps {
  result: OracleResult | null;
  onResultUpdate: (res: OracleResult) => void;
}

const SimulationModule: React.FC<SimulationModuleProps> = ({ result, onResultUpdate }) => {
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    protocol: AnalysisProtocol.DESTINY_MATRIX,
    tone: OutputTone.PRECISE
  });

  const handleGenerate = async () => {
    if (!formData.name) return;
    setLoading(true);
    try {
      const res = await generateBranding(formData.name, formData.protocol, formData.tone);
      onResultUpdate(res);
    } catch (error) {
      console.error(error);
      alert("브랜딩 생성 중 오류가 발생했습니다.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="demo" className="py-24 bg-bg-dark/50 border-y border-primary/10">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="text-center mb-16">
          <span className="text-primary font-bold text-xs tracking-[0.3em] font-display uppercase border border-primary/20 px-4 py-1.5 rounded-full bg-primary/5 shadow-neon-blue inline-block mb-4">
            DATA SIMULATION MODULE
          </span>
          <h2 className="text-white text-3xl md:text-5xl font-bold font-display tracking-tight">
            AI 엔진, <span className="text-secondary drop-shadow-[0_0_8px_rgba(255,0,255,0.6)]">초고속 통찰</span>로 완성
          </h2>
          <p className="text-gray-400 mt-4 text-lg max-w-2xl mx-auto">AI가 당신의 데이터를 분석하여 즉시 디지털 인사이트를 제공합니다.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 items-stretch">
          {/* Form */}
          <div className="w-full lg:w-5/12">
            <div className="flex items-center gap-3 mb-6">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-bg-dark font-bold font-display shadow-neon-blue">1</div>
              <h3 className="text-white font-bold text-xl font-display">입력 파라미터</h3>
            </div>
            
            <div className="bg-surface-dark p-8 rounded-2xl border border-border-dark hover:border-primary/50 transition-all shadow-xl group">
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="text-gray-400 text-xs font-bold uppercase font-display tracking-wider">활동명 입력</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    placeholder="예: CYBER SEER"
                    className="w-full bg-bg-dark border border-border-dark focus:border-primary outline-none px-4 py-4 rounded-xl text-primary font-bold placeholder:text-gray-800 transition-all"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-xs font-bold uppercase font-display tracking-wider">분석 프로토콜</label>
                  <select 
                    value={formData.protocol}
                    onChange={(e) => setFormData({...formData, protocol: e.target.value as AnalysisProtocol})}
                    className="w-full bg-bg-dark border border-border-dark focus:border-primary outline-none px-4 py-4 rounded-xl text-primary font-bold appearance-none cursor-pointer"
                  >
                    {Object.values(AnalysisProtocol).map(p => <option key={p} value={p}>{p}</option>)}
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-gray-400 text-xs font-bold uppercase font-display tracking-wider">출력 톤 (Output Tone)</label>
                  <div className="grid grid-cols-3 gap-2">
                    {Object.values(OutputTone).map(t => (
                      <button 
                        key={t}
                        onClick={() => setFormData({...formData, tone: t})}
                        className={`py-3 rounded-lg font-display text-xs font-bold transition-all ${
                          formData.tone === t 
                            ? 'bg-primary/20 border-primary border text-primary shadow-neon-blue' 
                            : 'bg-bg-dark border-border-dark border text-gray-500 hover:text-gray-300'
                        }`}
                      >
                        {t}
                      </button>
                    ))}
                  </div>
                </div>

                <button 
                  onClick={handleGenerate}
                  disabled={loading || !formData.name}
                  className="w-full py-5 bg-gradient-to-r from-primary to-secondary hover:brightness-110 disabled:grayscale transition-all rounded-xl text-bg-dark font-black text-lg font-display uppercase tracking-widest shadow-neon-blue flex items-center justify-center gap-3"
                >
                  {loading ? (
                    <div className="w-6 h-6 border-4 border-bg-dark border-t-transparent rounded-full animate-spin"></div>
                  ) : (
                    <>
                      <span>🌀</span> 인사이트 생성
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className="hidden lg:flex flex-col justify-center text-primary/30">
            <span className="text-4xl">→</span>
          </div>

          {/* Result Output */}
          <div className="w-full lg:w-7/12">
            <div className="flex items-center gap-3 mb-6 lg:justify-end">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-accent text-bg-dark font-bold font-display shadow-neon-accent">2</div>
              <h3 className="text-white font-bold text-xl font-display">실시간 데이터 피드</h3>
            </div>

            <div className="relative h-full">
              <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-2xl blur opacity-20 animate-pulse"></div>
              <div className="relative h-full bg-surface-dark rounded-2xl border border-border-dark overflow-hidden flex flex-col group">
                {result ? (
                  <>
                    <div className="h-40 bg-bg-dark relative overflow-hidden">
                      <img src={result.imageUrl} alt="Cover" className="w-full h-full object-cover opacity-50 scale-110 blur-sm group-hover:scale-100 group-hover:blur-0 transition-all duration-700" />
                      <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent"></div>
                      <div className="absolute top-4 right-4">
                        <span className="px-3 py-1 bg-bg-dark/80 backdrop-blur rounded-full border border-primary/30 text-primary text-[10px] font-bold uppercase font-display tracking-widest">Live Feed</span>
                      </div>
                    </div>

                    <div className="px-8 pb-8 -mt-16 flex-1 flex flex-col relative z-10">
                      <div className="flex justify-between items-end mb-6">
                        <div className="w-32 h-32 rounded-full border-4 border-surface-dark bg-bg-dark overflow-hidden shadow-2xl relative">
                          <img src={result.imageUrl} alt="Profile" className="w-full h-full object-cover" />
                          <div className="absolute inset-0 bg-primary/10 mix-blend-overlay"></div>
                        </div>
                        <div className="flex gap-2 mb-2">
                          <button className="p-2 rounded-full bg-bg-dark border border-border-dark text-primary hover:border-primary transition-all">
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path d="M5 5h14v14H5z"/></svg>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-6">
                        <div>
                          <div className="flex items-center gap-2">
                            <h4 className="text-3xl font-black text-white font-display uppercase tracking-tight">{result.name}</h4>
                            <span className="text-primary text-xl">✔️</span>
                          </div>
                          <p className="text-xs text-gray-500 font-bold font-display mt-1">{result.protocol} • 분석 완료</p>
                        </div>

                        <div className="bg-bg-dark/60 p-6 rounded-2xl border border-primary/20 relative">
                          <span className="absolute -top-3 -left-2 text-4xl text-primary/20 font-display">"</span>
                          <p className="text-gray-300 leading-relaxed italic text-base md:text-lg">
                            {result.bio}
                          </p>
                        </div>

                        <div className="flex flex-wrap gap-2">
                          {result.tags.map(tag => (
                            <span key={tag} className="px-3 py-1.5 bg-primary/10 text-primary text-xs font-bold rounded-lg border border-primary/30 font-display">
                              {tag}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="mt-auto pt-10 text-center border-t border-white/5">
                        <p className="text-[10px] text-gray-700 font-bold font-display tracking-[0.4em] uppercase">Powered by Cyber Oracle AI</p>
                      </div>
                    </div>
                  </>
                ) : (
                  <div className="flex-1 flex flex-col items-center justify-center p-12 text-center text-gray-700">
                    <div className="w-20 h-20 rounded-full border-2 border-dashed border-gray-800 flex items-center justify-center mb-6 animate-pulse">
                      <span className="text-4xl">⚡</span>
                    </div>
                    <p className="font-display font-bold uppercase tracking-widest text-sm">데이터 입력을 기다리는 중...</p>
                    <p className="text-xs mt-2 opacity-50">시스템을 연결하여 미래를 해독하십시오.</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SimulationModule;
