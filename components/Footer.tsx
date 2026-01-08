
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-bg-dark border-t border-border-dark py-16">
      <div className="max-w-7xl mx-auto px-4 md:px-10">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-10 mb-12">
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-white">
              <span className="text-primary text-2xl">✨</span>
              <h1 className="text-xl font-bold font-display uppercase tracking-tighter">Cyber Oracle AI</h1>
            </div>
            <p className="text-gray-600 text-sm max-w-xs leading-relaxed">최첨단 운명 데이터 분석을 통한 독보적 브랜드 아이덴티티 구축 솔루션</p>
          </div>

          <div className="flex flex-wrap gap-x-12 gap-y-6">
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-xs uppercase font-display tracking-widest mb-2">Legal</span>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">서비스 이용약관</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">개인정보 처리방침</a>
            </div>
            <div className="flex flex-col gap-3">
              <span className="text-white font-bold text-xs uppercase font-display tracking-widest mb-2">Support</span>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">고객 지원</a>
              <a href="#" className="text-gray-500 hover:text-primary transition-colors text-sm">파트너십 문의</a>
            </div>
          </div>
        </div>

        <div className="pt-10 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-700 text-[10px] font-bold uppercase tracking-widest text-center md:text-left">
            (주)사이버 오라클 | 대표: AI-Core_01 | 사업자등록번호: 987-65-43210 <br />
            가상공간 @ CyberGrid-7
          </div>
          <div className="text-gray-700 text-[10px] font-bold uppercase tracking-widest">
            © 2024 Cyber Oracle AI. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
