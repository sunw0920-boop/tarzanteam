
import { useState } from 'react';

interface ContactFormProps {
  type: 'consultation' | 'order';
  onClose: () => void;
}

export default function ContactForm({ type, onClose }: ContactFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '',
    currentTier: '',
    targetTier: '',
    gameId: '',
    service: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const submitUrl = type === 'consultation' 
        ? 'https://readdy.ai/api/form/d3h6r0d4ikgvg63iu3k0'
        : 'https://readdy.ai/api/form/d3h6r0d4ikgvg63iu3jg';

      const formDataToSend = new FormData();
      Object.entries(formData).forEach(([key, value]) => {
        if (value) formDataToSend.append(key, value);
      });

      const response = await fetch(submitUrl, {
        method: 'POST',
        body: new URLSearchParams(formDataToSend as any)
      });

      if (response.ok) {
        setSubmitStatus('success');
        setTimeout(() => {
          onClose();
          setSubmitStatus('idle');
          setFormData({
            name: '',
            contact: '',
            currentTier: '',
            targetTier: '',
            gameId: '',
            service: '',
            message: ''
          });
        }, 2000);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-gray-800 rounded-xl p-6 w-full max-w-md max-h-[90vh] overflow-y-auto">
        <div className="flex items-center justify-between mb-6">
          <h3 className="text-xl font-bold text-white">
            {type === 'consultation' ? '상담 신청' : '대리 신청'}
          </h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white cursor-pointer"
          >
            <i className="ri-close-line text-2xl"></i>
          </button>
        </div>

        <form onSubmit={handleSubmit} data-readdy-form id={type === 'consultation' ? 'consultation-form' : 'order-form'}>
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                이름 *
              </label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                placeholder="이름을 입력하세요"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                연락처 *
              </label>
              <input
                type="text"
                name="contact"
                value={formData.contact}
                onChange={handleChange}
                required
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                placeholder="카카오톡 ID 또는 전화번호"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                게임 아이디
              </label>
              <input
                type="text"
                name="gameId"
                value={formData.gameId}
                onChange={handleChange}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500"
                placeholder="발로란트 게임 아이디"
              />
            </div>

            {type === 'order' && (
              <>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    현재 티어
                  </label>
                  <select
                    name="currentTier"
                    value={formData.currentTier}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500 pr-8"
                  >
                    <option value="">선택하세요</option>
                    <option value="아이언">아이언</option>
                    <option value="브론즈">브론즈</option>
                    <option value="실버">실버</option>
                    <option value="골드">골드</option>
                    <option value="플래티넘">플래티넘</option>
                    <option value="다이아몬드">다이아몬드</option>
                    <option value="어센던트">어센던트</option>
                    <option value="이모탈">이모탈</option>
                    <option value="레디언트">레디언트</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    목표 티어
                  </label>
                  <select
                    name="targetTier"
                    value={formData.targetTier}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500 pr-8"
                  >
                    <option value="">선택하세요</option>
                    <option value="아이언">아이언</option>
                    <option value="브론즈">브론즈</option>
                    <option value="실버">실버</option>
                    <option value="골드">골드</option>
                    <option value="플래티넘">플래티넘</option>
                    <option value="다이아몬드">다이아몬드</option>
                    <option value="어센던트">어센던트</option>
                    <option value="이모탈">이모탈</option>
                    <option value="레디언트">레디언트</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">
                    서비스 종류
                  </label>
                  <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500 pr-8"
                  >
                    <option value="">선택하세요</option>
                    <option value="듀오랭크">듀오랭크</option>
                    <option value="티어대리">티어대리</option>
                    <option value="배치고사">배치고사</option>
                    <option value="1:1강의">1:1강의</option>
                  </select>
                </div>
              </>
            )}

            <div>
              <label className="block text-sm font-medium text-gray-300 mb-2">
                추가 메시지
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                maxLength={500}
                className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-lg text-white text-sm focus:outline-none focus:border-red-500 resize-none"
                rows={3}
                placeholder="요청사항이나 문의사항을 입력하세요 (최대 500자)"
              />
              <div className="text-xs text-gray-400 mt-1">
                {formData.message.length}/500
              </div>
            </div>
          </div>

          <div className="mt-6 flex space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 bg-gray-600 hover:bg-gray-700 text-white rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              취소
            </button>
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.contact}
              className="flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 disabled:bg-gray-600 text-white rounded-lg transition-colors whitespace-nowrap cursor-pointer"
            >
              {isSubmitting ? '전송중...' : '신청하기'}
            </button>
          </div>

          {submitStatus === 'success' && (
            <div className="mt-4 p-3 bg-green-600/20 border border-green-600 rounded-lg">
              <p className="text-green-400 text-sm text-center">
                신청이 완료되었습니다! 곧 연락드리겠습니다.
              </p>
            </div>
          )}

          {submitStatus === 'error' && (
            <div className="mt-4 p-3 bg-red-600/20 border border-red-600 rounded-lg">
              <p className="text-red-400 text-sm text-center">
                전송에 실패했습니다. 다시 시도해주세요.
              </p>
            </div>
          )}
        </form>
      </div>
    </div>
  );
}
