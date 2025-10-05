
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  return (
    <>
      <header className="bg-gray-900/95 backdrop-blur-sm border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-2">
              <img 
                src="https://static.readdy.ai/image/630e54153d4f9a271416f3ac8fed8bcd/62faaf86529afbd09b6f98cc7fb28f8a.png" 
                alt="타잔팀 로고" 
                className="w-10 h-10 rounded-lg object-cover"
              />
              <h1 className="text-2xl font-bold text-white" style={{ fontFamily: '"Pacifico", serif' }}>
                타잔팀
              </h1>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors whitespace-nowrap cursor-pointer">홈</a>
              <a href="#services" className="text-gray-300 hover:text-red-400 transition-colors whitespace-nowrap cursor-pointer">서비스</a>
              <a href="#pricing" className="text-gray-300 hover:text-red-400 transition-colors whitespace-nowrap cursor-pointer">가격표</a>
              <a href="#faq" className="text-gray-300 hover:text-red-400 transition-colors whitespace-nowrap cursor-pointer">FAQ</a>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors whitespace-nowrap cursor-pointer"
                onClick={() => setShowContactForm(true)}
              >
                상담하기
              </button>
            </nav>

            <button 
              className="md:hidden text-white cursor-pointer"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <i className={`ri-${isMenuOpen ? 'close' : 'menu'}-line text-2xl`}></i>
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-gray-800">
              <nav className="flex flex-col space-y-4">
                <a href="#home" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">홈</a>
                <a href="#services" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">서비스</a>
                <a href="#pricing" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">가격표</a>
                <a href="#faq" className="text-gray-300 hover:text-red-400 transition-colors cursor-pointer">FAQ</a>
                <button 
                  className="bg-red-600 hover:bg-red-700 text-white px-6 py-2 rounded-lg transition-colors w-fit cursor-pointer"
                  onClick={() => setShowContactForm(true)}
                >
                  상담하기
                </button>
              </nav>
            </div>
          )}
        </div>
      </header>

      {showContactForm && (
        <ContactForm 
          type="consultation" 
          onClose={() => setShowContactForm(false)} 
        />
      )}
    </>
  );
}
