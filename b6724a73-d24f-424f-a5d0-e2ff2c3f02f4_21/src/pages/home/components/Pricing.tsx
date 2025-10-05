
import { useState } from 'react';
import ContactForm from './ContactForm';

export default function Pricing() {
  const [showOrderForm, setShowOrderForm] = useState(false);

  const pricingPlans = [
    {
      title: "실버",
      description: "실버 티어 달성 서비스",
      price: "15,000원",
      originalPrice: null,
      features: [
        "안전한 대리 진행",
        "24시간 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "골드",
      description: "골드 티어 달성 서비스",
      price: "20,000원",
      originalPrice: null,
      features: [
        "전문 기사 배정",
        "48시간 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "추가 코칭 제공"
      ],
      popular: true,
      isInquiry: false
    },
    {
      title: "플래티넘",
      description: "플래티넘 티어 달성 서비스",
      price: "30,000원",
      originalPrice: null,
      features: [
        "최고급 기사 배정",
        "72시간 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "개인 맞춤 전략 제공"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "다이아몬드 1",
      description: "다이아몬드 1 티어 달성",
      price: "35,000원",
      originalPrice: null,
      features: [
        "레디언트급 기사",
        "일주일 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "다이아몬드 2",
      description: "다이아몬드 2 티어 달성",
      price: "38,000원",
      originalPrice: null,
      features: [
        "레디언트급 기사",
        "일주일 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "다이아몬드 3",
      description: "다이아몬드 3 티어 달성",
      price: "40,000원",
      originalPrice: null,
      features: [
        "레디언트급 기사",
        "일주일 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "초월자 1",
      description: "초월자 1 티어 달성",
      price: "42,000원",
      originalPrice: null,
      features: [
        "최고급 레디언트 기사",
        "2주 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "초월자 2",
      description: "초월자 2 티어 달성",
      price: "47,000원",
      originalPrice: null,
      features: [
        "최고급 레디언트 기사",
        "2주 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "초월자 3",
      description: "초월자 3 티어 달성",
      price: "52,000원",
      originalPrice: null,
      features: [
        "최고급 레디언트 기사",
        "2주 내 완료",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함"
      ],
      popular: false,
      isInquiry: false
    },
    {
      title: "불멸",
      description: "불멸 티어 달성 서비스",
      price: "가격 문의",
      originalPrice: null,
      features: [
        "최상급 프로 기사",
        "개별 일정 협의",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함",
        "개인 맞춤 전략"
      ],
      popular: false,
      isInquiry: true
    },
    {
      title: "레디언트",
      description: "레디언트 티어 달성 서비스",
      price: "가격 문의",
      originalPrice: null,
      features: [
        "최상급 프로 기사",
        "개별 일정 협의",
        "진행상황 실시간 보고",
        "100% 환불 보장",
        "전문 코칭 포함",
        "개인 맞춤 전략",
        "VIP 서비스"
      ],
      popular: false,
      isInquiry: true
    }
  ];

  const handleOrderClick = () => {
    window.open('https://open.kakao.com/o/sRGND1Vd', '_blank');
  };

  return (
    <>
      <section id="pricing" className="py-20 bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">가격표</h2>
            <p className="text-gray-400 text-lg">
              합리적인 가격으로 최고의 서비스를 제공합니다
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <div 
                key={index}
                className={`relative bg-gray-900 rounded-xl p-6 border-2 transition-all duration-300 hover:scale-105 ${
                  plan.popular 
                    ? 'border-red-500 shadow-lg shadow-red-500/20' 
                    : plan.isInquiry
                    ? 'border-yellow-500 shadow-lg shadow-yellow-500/20'
                    : 'border-gray-700 hover:border-red-400'
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                      인기
                    </span>
                  </div>
                )}

                {plan.isInquiry && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                    <span className="bg-yellow-500 text-black px-4 py-1 rounded-full text-sm font-bold">
                      프리미엄
                    </span>
                  </div>
                )}

                <div className="text-center mb-6">
                  <h3 className="text-xl font-bold text-white mb-2">{plan.title}</h3>
                  <p className="text-gray-400 text-sm mb-4">{plan.description}</p>
                  <div className="flex items-center justify-center space-x-2">
                    <div className={`text-2xl font-bold ${plan.isInquiry ? 'text-yellow-400' : 'text-red-400'}`}>
                      {plan.price}
                    </div>
                  </div>
                </div>

                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <i className={`ri-check-line ${plan.isInquiry ? 'text-yellow-400' : 'text-red-400'} mr-2`}></i>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <button 
                  className={`w-full py-3 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer ${
                    plan.popular
                      ? 'bg-red-600 hover:bg-red-700 text-white'
                      : plan.isInquiry
                      ? 'bg-yellow-600 hover:bg-yellow-700 text-white'
                      : 'bg-gray-700 hover:bg-gray-600 text-white'
                  }`}
                  onClick={handleOrderClick}
                >
                  {plan.isInquiry ? '문의하기' : '신청하기'}
                </button>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-gray-900 rounded-xl p-6 inline-block">
              <h3 className="text-lg font-bold text-white mb-2">특별 할인 혜택</h3>
              <p className="text-gray-400 mb-4">
                첫 이용 고객 10% 할인 | 재이용 고객 5% 할인
              </p>
              <button 
                className="bg-red-600 hover:bg-red-700 text-white px-8 py-3 rounded-lg font-bold transition-colors whitespace-nowrap cursor-pointer"
                onClick={handleOrderClick}
              >
                지금 신청하기
              </button>
            </div>
          </div>
        </div>
      </section>

      {showOrderForm && (
        <ContactForm 
          type="order" 
          onClose={() => setShowOrderForm(false)} 
        />
      )}
    </>
  );
}
