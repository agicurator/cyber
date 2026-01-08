
import React, { useState, useRef } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import SimulationModule from './components/SimulationModule';
import Features from './components/Features';
import Testimonials from './components/Testimonials';
import Newsletter from './components/Newsletter';
import Footer from './components/Footer';
import { OracleResult } from './types';

const App: React.FC = () => {
  const [result, setResult] = useState<OracleResult | null>(null);
  const simulationRef = useRef<HTMLDivElement>(null);

  const scrollToSimulation = () => {
    simulationRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen flex flex-col glitch-bg selection:bg-primary selection:text-bg-dark">
      <Navbar onCtaClick={scrollToSimulation} />
      
      <main className="flex-grow">
        <Hero onStartClick={scrollToSimulation} />
        
        <div ref={simulationRef} className="scroll-mt-20">
          <SimulationModule result={result} onResultUpdate={setResult} />
        </div>
        
        <Features />
        <Testimonials />
        <Newsletter />
      </main>

      <Footer />
      
      {/* Floating CTA for Mobile */}
      <div className="md:hidden fixed bottom-6 left-6 right-6 z-40">
        <button 
          onClick={scrollToSimulation}
          className="w-full py-4 bg-primary text-bg-dark font-bold rounded-xl shadow-neon-blue font-display"
        >
          지금 무료로 시작하기
        </button>
      </div>

      {/* Floating Rocket for Desktop */}
      <div className="hidden md:block fixed bottom-8 right-8 z-40">
        <button 
          onClick={scrollToSimulation}
          className="group flex items-center gap-2 bg-primary hover:bg-opacity-90 text-bg-dark font-bold h-14 px-6 rounded-full shadow-neon-blue transition-all transform hover:-translate-y-1 font-display"
        >
          <span className="text-xl">🚀</span>
          <span>무료로 시스템 액세스</span>
        </button>
      </div>
    </div>
  );
};

export default App;
