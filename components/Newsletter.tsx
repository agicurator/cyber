
import React from 'react';

const Newsletter: React.FC = () => {
  return (
    <section className="py-32 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-2xl mx-auto px-4 text-center relative z-10">
        <h2 className="text-white text-3xl md:text-5xl font-black font-display mb-6 tracking-tight uppercase">가장 먼저 시스템에 연결</h2>
        <p className="text-gray-400 text-lg mb-12">
          지금 이메일을 등록하시면 <span className="text-primary font-bold">'AI 시스템 접근 가이드(PDF)'</span>를<br />
          무료로 제공하고, 정식 출시 시 50% 할인 코드를 드립니다.
        </p>

        <form className="flex flex-col sm:flex-row gap-3" onSubmit={(e) => e.preventDefault()}>
          <input 
            type="email" 
            placeholder="이메일 프로토콜 입력"
            className="flex-1 bg-surface-dark border border-border-dark px-6 h-14 rounded-xl text-primary font-bold focus:border-primary outline-none transition-all shadow-inner"
          />
          <button className="px-8 h-14 bg-primary text-bg-dark font-black rounded-xl shadow-neon-blue hover:brightness-110 transition-all font-display uppercase tracking-widest">
            무료 액세스 받기
          </button>
        </form>
        <p className="text-gray-600 text-xs mt-6 opacity-50">
          * 불필요한 데이터 전송은 없습니다. 언제든 구독을 해지할 수 있습니다.
        </p>
      </div>
    </section>
  );
};

export default Newsletter;
