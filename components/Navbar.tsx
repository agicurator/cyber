
import React from 'react';

interface NavbarProps {
  onCtaClick: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ onCtaClick }) => {
  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border-dark bg-bg-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 md:px-10 h-16 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-primary text-2xl">✨</span>
          <h1 className="text-white text-lg font-bold tracking-tighter font-display uppercase">
            Cyber Oracle AI
          </h1>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a href="#features" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">시스템 기능</a>
            <a href="#demo" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">시뮬레이션</a>
            <a href="#reviews" className="text-gray-400 hover:text-primary transition-colors text-sm font-medium">사용자 로그</a>
          </div>
          <button 
            onClick={onCtaClick}
            className="px-5 h-9 bg-primary hover:bg-opacity-80 transition-all text-bg-dark text-sm font-bold rounded shadow-neon-blue font-display uppercase"
          >
            액세스 시작
          </button>
        </div>

        <div className="md:hidden text-primary">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
