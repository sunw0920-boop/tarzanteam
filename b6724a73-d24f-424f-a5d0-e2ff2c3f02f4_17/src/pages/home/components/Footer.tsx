
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Footer() {
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <footer className="bg-gray-900 border-t border-gray-800">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="col-span-1 md:col-span-2">
              <div className="flex items-center space-x-2 mb-4">
                <img 
                  src="https://static.readdy.ai/image/630e54153d4f9a271416f3ac8fed8bcd/62faaf86529afbd09b6f98cc7fb28f8a.png" 
                  alt="타잔팀 로고" 
                  className="w-10 h-10 rounded-lg object-cover"
                />
                <h3 className="text-2xl font-bold text-white" style={{ fontFamily: '"Pacifico", serif' }}>
                  타잔팀
                </h3>
              </div>
              <p className="text-gray-400 mb-6 leading-relaxed">
                발로란트 대리 전문팀 타잔팀은 최고의 실력과 완벽한 보안을 바탕으로<br />
                고객님의 목표 달성을 위해 최선을 다하겠습니다.
              </p>
              <div className="flex space-x-4">
                <button 
                  className="w-10 h-10 bg-yellow-500 hover:bg-yellow-600 rounded-lg flex items-center justify-center transition-colors cursor-pointer"
                  onClick={() => setShowContactForm(true)}
                >
                  <i className="ri-kakao-talk-fill text-white"></i>
                </button>
                <button className="w-10 h-10 bg-blue-600 hover:bg-blue-700 rounded-lg flex items-center justify-center transition-colors cursor-pointer">
                  <i className="ri-discord-fill text-white"></i>
                </button>
              </div>
            </div>

            <div>
              <h4 className="text-white font-bold text-lg mb-4">고객지원</h4>
              <ul className="space-y-2">
                <li><a href="#faq" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">자주 묻는 질문</a></li>
                <li><a href="#pricing" className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer">가격표</a></li>
                <li>
                  <button 
                    className="text-gray-400 hover:text-red-400 transition-colors cursor-pointer"
                    onClick={() => setShowContactForm(true)}
                  >
                    상담하기
                  </button>
                </li>
                <li><span className="text-gray-400">24시간 지원</span></li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm mb-4 md:mb-0">
                © 2024 발로란트 대리 타잔팀. All rights reserved.
              </p>
              <div className="flex items-center space-x-6">
                <span className="text-gray-400 text-sm">안전한 대리 서비스</span>
                <span className="text-gray-400 text-sm">•</span>
                <span className="text-gray-400 text-sm">100% 환불 보장</span>
                <span className="text-gray-400 text-sm">•</span>
                <a 
                  href="https://readdy.ai/?origin=logo" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-red-400 text-sm transition-colors cursor-pointer"
                >
                  Powered by Readdy
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {showContactForm && (
        <ContactForm 
          type="consultation" 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
}
