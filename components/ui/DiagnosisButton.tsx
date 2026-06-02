'use client';

interface Props {
  label?: string;
  className?: string;
}

export default function DiagnosisButton({ label = '무료진단 신청하기', className = '' }: Props) {
  return (
    <button
      onClick={() => window.dispatchEvent(new Event('open-diagnosis-modal'))}
      className={`gradient-blue px-8 py-3 rounded-xl font-medium text-sm ${className}`}
    >
      {label}
    </button>
  );
}
