
export default function Hero() {
  return (
    <section 
      id="home" 
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.8)), url('https://readdy.ai/api/search-image?query=Professional%20Valorant%20gaming%20setup%20with%20futuristic%20neon%20lighting%2C%20dark%20atmospheric%20background%20with%20red%20and%20orange%20accents%2C%20high-tech%20gaming%20environment%2C%20cyberpunk%20aesthetic%2C%20professional%20esports%20arena%20atmosphere%2C%20dramatic%20lighting%20effects%2C%20modern%20gaming%20workspace%20with%20multiple%20monitors&width=1920&height=1080&seq=hero-bg&orientation=landscape')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-4" style={{ fontFamily: '"Pacifico", serif' }}>
              타잔팀
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-orange-400 mb-6">
              발로란트 대리 전문팀
            </h2>
          </div>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            최고의 실력, 완벽한 보안, 빠른 티어 상승을 약속하는<br />
            프로 게이머들의 전문 대리 서비스
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all transform hover:scale-105 shadow-lg whitespace-nowrap cursor-pointer"
              onClick={() => window.open('https://open.kakao.com/o/sRGND1Vd', '_blank')}
            >
              <i className="ri-message-3-line mr-2"></i>
              지금 상담받기
            </button>
            <button 
              className="bg-gray-800/80 hover:bg-gray-700/80 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all border border-gray-600 whitespace-nowrap cursor-pointer"
              onClick={() => document.getElementById('pricing')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <i className="ri-price-tag-3-line mr-2"></i>
              가격 확인하기
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-red-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-shield-check-line text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">100% 안전보장</h3>
              <p className="text-gray-400">계정 보안과 개인정보 보호를 최우선으로 합니다</p>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-orange-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-flashlight-line text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">빠른 진행</h3>
              <p className="text-gray-400">레디언트급 전문 기사들의 신속한 티어 상승</p>
            </div>
            
            <div className="bg-gray-800/60 backdrop-blur-sm p-6 rounded-lg border border-gray-700">
              <div className="w-12 h-12 bg-yellow-600 rounded-lg flex items-center justify-center mx-auto mb-4">
                <i className="ri-customer-service-2-line text-white text-2xl"></i>
              </div>
              <h3 className="text-white font-bold text-lg mb-2">24시간 상담</h3>
              <p className="text-gray-400">언제든지 편리하게 문의하고 상담받으세요</p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <i className="ri-arrow-down-line text-white text-2xl cursor-pointer" onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}></i>
      </div>
    </section>
  );
}
