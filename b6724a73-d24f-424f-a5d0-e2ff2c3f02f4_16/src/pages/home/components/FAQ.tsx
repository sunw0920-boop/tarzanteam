
import { useState } from 'react';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: '타잔팀은 어떤 팀인가요?',
      answer: '발로란트 대리 전문 업체 타잔팀은 안전은 물론 업계 최고의 실력을 자부하며 전문 기사를 통해 가장 빠르고 완벽한 서비스를 받을 수 있는 대리 진행 서비스 팀입니다.'
    },
    {
      question: '어느 티어까지 대리가 가능한가요?',
      answer: '팀장이 레디언트 1페이지까지 직접 대리 및 강의가 가능합니다. 목표 티어에 대한 제한은 없으며, 기간과 금액에만 차이가 있습니다.'
    },
    {
      question: '결제 후 환불이 가능한가요?',
      answer: '대리가 시작되기 전에는 언제든지 100% 환불이 가능합니다. 또한 기사 측의 잘못으로 인한 문제 발생 시에도 100% 환불 및 보상을 해드립니다.'
    },
    {
      question: '계정이 정지당할 위험은 없나요?',
      answer: '저희는 완벽한 보안 시스템을 통해 계정 안전을 보장합니다. 만약 기사 측 잘못으로 정지가 발생할 시 100% 환불과 함께 계정 보상도 진행해드립니다.'
    },
    {
      question: '원하는 기사를 지정할 수 있나요?',
      answer: '네, 원하는 기사분을 지정하실 수 있습니다. 다만 해당 기사의 스케줄에 따라 대기 시간이 조금 더 걸릴 수 있다는 점 양해 부탁드립니다.'
    },
    {
      question: '진행 상황을 확인할 수 있나요?',
      answer: '네, 실시간으로 진행 상황을 확인하실 수 있습니다. 디스코드를 통한 화면 공유 서비스도 무료로 제공해드리고 있습니다.'
    },
    {
      question: '결제 방법은 어떻게 되나요?',
      answer: '계좌이체와 문화상품권 결제만 가능합니다. 편리한 방법으로 결제하시면 됩니다.'
    },
    {
      question: '상담은 언제 가능한가요?',
      answer: '24시간 언제든지 카카오톡을 통해 상담 받으실 수 있습니다. 빠른 답변과 친절한 상담을 약속드립니다.'
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            자주 묻는 질문
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            고객님들이 자주 문의하시는 내용들을 정리했습니다
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="mb-4 bg-gray-800 rounded-lg border border-gray-700 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-750 transition-colors cursor-pointer"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <i className={`ri-${openIndex === index ? 'subtract' : 'add'}-line text-red-400 text-xl flex-shrink-0`}></i>
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <div className="border-t border-gray-700 pt-4">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-red-600/20 to-orange-600/20 rounded-2xl p-8 border border-red-500/30 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">더 궁금한 점이 있으신가요?</h3>
            <p className="text-gray-300 mb-6">
              언제든지 카카오톡으로 문의해주세요. 친절하고 빠른 답변을 드리겠습니다.
            </p>
            <button 
              className="bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white px-8 py-3 rounded-lg font-semibold transition-all whitespace-nowrap cursor-pointer"
              onClick={() => window.open('https://open.kakao.com/o/sRGND1Vd', '_blank')}
            >
              <i className="ri-message-3-line mr-2"></i>
              카카오톡 상담하기
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
