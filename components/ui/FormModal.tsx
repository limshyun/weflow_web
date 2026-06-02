'use client';

import { useEffect, useState } from 'react';
import { X } from 'lucide-react';
import type { DiagnosisForm } from '@/types';
import { SERVICE_TYPE_OPTIONS } from '@/data/commonText';

const INITIAL_FORM: DiagnosisForm = {
  name: '',
  phone: '',
  serviceType: 'landing',
  industry: '',
  message: '',
  agreePrivacy: false,
};

const inputClass =
  'w-full bg-slate-800/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:border-cyan-500/50 text-sm';

export default function FormModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState<DiagnosisForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const handler = () => setIsOpen(true);
    window.addEventListener('open-diagnosis-modal', handler);
    return () => window.removeEventListener('open-diagnosis-modal', handler);
  }, []);

  const close = () => {
    setIsOpen(false);
    setSubmitted(false);
    setForm(INITIAL_FORM);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiry = {
      ...form,
      id: Date.now().toString(),
      createdAt: new Date().toISOString(),
      status: 'pending',
    };
    const existing = JSON.parse(localStorage.getItem('inquiries') || '[]');
    localStorage.setItem('inquiries', JSON.stringify([...existing, inquiry]));
    setSubmitted(true);
    setTimeout(close, 2500);
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      onClick={(e) => e.target === e.currentTarget && close()}
    >
      <div className="bg-slate-900 border border-white/10 rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto">
        {/* 헤더 */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-white/10">
          <h2 className="text-white font-bold text-lg">무료진단 후 견적받기</h2>
          <button onClick={close} className="text-slate-400 hover:text-white transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* 완료 메시지 */}
        {submitted ? (
          <div className="p-10 text-center">
            <p className="text-cyan-400 text-lg font-semibold mb-2">접수가 완료되었습니다!</p>
            <p className="text-slate-400 text-sm">빠른 시간 내에 연락드리겠습니다.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="px-6 py-6 space-y-4">
            <input
              type="text"
              placeholder="이름"
              required
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
              className={inputClass}
            />
            <input
              type="tel"
              placeholder="연락처"
              required
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className={inputClass}
            />
            <select
              required
              value={form.serviceType}
              onChange={(e) =>
                setForm({ ...form, serviceType: e.target.value as DiagnosisForm['serviceType'] })
              }
              className={inputClass}
            >
              {SERVICE_TYPE_OPTIONS.map((opt) => (
                <option key={opt.value} value={opt.value} className="bg-slate-800">
                  {opt.label}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="업종 입력"
              value={form.industry}
              onChange={(e) => setForm({ ...form, industry: e.target.value })}
              className={inputClass}
            />
            <textarea
              placeholder="추가요청사항"
              rows={3}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className={`${inputClass} resize-none`}
            />
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                required
                checked={form.agreePrivacy}
                onChange={(e) => setForm({ ...form, agreePrivacy: e.target.checked })}
                className="mt-0.5 accent-cyan-400 w-4 h-4"
              />
              <span className="text-slate-400 text-xs leading-relaxed">
                개인정보 수집 및 상담 동의{' '}
                <span className="text-cyan-400">(필수)</span>
              </span>
            </label>
            <button type="submit" className="gradient-blue w-full py-3 rounded-xl font-medium text-sm">
              무료 견적 신청하기
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
