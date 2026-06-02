'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Lock } from 'lucide-react';

const ADMIN_PASSWORD = process.env.NEXT_PUBLIC_ADMIN_PASSWORD ?? 'weflow2026';

export default function AdminLoginPage() {
  const router = useRouter();
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (password === ADMIN_PASSWORD) {
      localStorage.setItem('admin_auth', 'true');
      router.push('/admin');
    } else {
      setError('비밀번호가 올바르지 않습니다.');
      setPassword('');
    }
  };

  return (
    <div className="min-h-[80vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-blue-500/10 border border-blue-500/20 mb-4">
            <Lock size={24} className="text-cyan-400" />
          </div>
          <h1 className="text-2xl font-black text-white">관리자 로그인</h1>
          <p className="text-slate-400 text-sm mt-1">WEFLOW 관리자 페이지</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-slate-900/60 border border-white/[0.07] rounded-2xl p-6 space-y-4">
          <div>
            <label className="block text-xs text-slate-400 mb-1.5 font-medium">비밀번호</label>
            <input
              type="password"
              value={password}
              onChange={(e) => { setPassword(e.target.value); setError(''); }}
              placeholder="비밀번호를 입력하세요"
              autoFocus
              required
              className="w-full bg-slate-800/60 border border-white/[0.08] rounded-xl px-4 py-3 text-white placeholder:text-slate-600 text-sm"
            />
          </div>
          {error && <p className="text-red-400 text-xs">{error}</p>}
          <button type="submit" className="gradient-blue w-full py-3 rounded-xl font-bold text-white text-sm">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
}
