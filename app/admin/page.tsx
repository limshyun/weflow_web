'use client';

import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { LogOut, Trash2, CheckCircle, Clock } from 'lucide-react';

// ── 타입 ──────────────────────────────────────────────
interface Reservation {
  id: string;
  name: string;
  phone: string;
  date: string;
  time: string;
  type: string;
  industry: string;
  createdAt: string;
  status: 'pending' | 'confirmed' | 'completed';
}

interface Inquiry {
  id: string;
  name: string;
  phone: string;
  serviceType: string;
  industry: string;
  message: string;
  createdAt: string;
  status: 'pending' | 'in_progress' | 'completed';
}

// ── 상태 뱃지 ─────────────────────────────────────────
const STATUS_BADGE: Record<string, string> = {
  pending:    'bg-slate-700 text-slate-300',
  confirmed:  'bg-blue-900/50 text-blue-400',
  in_progress:'bg-yellow-900/50 text-yellow-400',
  completed:  'bg-green-900/50 text-green-400',
};

const STATUS_LABEL: Record<string, string> = {
  pending:    '대기중',
  confirmed:  '확인됨',
  in_progress:'진행중',
  completed:  '완료',
};

function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-medium ${STATUS_BADGE[status] ?? STATUS_BADGE.pending}`}>
      {STATUS_LABEL[status] ?? status}
    </span>
  );
}

function formatDate(iso: string) {
  try {
    return new Date(iso).toLocaleDateString('ko-KR', { month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' });
  } catch {
    return iso;
  }
}

// ── 예약 관리 탭 ───────────────────────────────────────
function ReservationTab() {
  const [items, setItems] = useState<Reservation[]>([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('reservations') || '[]'));
  }, []);

  const save = (next: Reservation[]) => {
    setItems(next);
    localStorage.setItem('reservations', JSON.stringify(next));
  };

  const complete = (id: string) =>
    save(items.map((r) => (r.id === id ? { ...r, status: 'completed' } : r)));

  const remove = (id: string) => save(items.filter((r) => r.id !== id));

  if (items.length === 0) {
    return <p className="text-slate-500 text-center py-16">아직 접수된 예약이 없습니다.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/60 text-slate-400 text-xs">
            <th className="px-4 py-3 text-left whitespace-nowrap">접수일</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">이름</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">연락처</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">희망일정</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">제작종류</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">업종</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">상태</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">액션</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.id} className="border-t border-white/[0.05] hover:bg-slate-800/30">
              <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{formatDate(r.createdAt)}</td>
              <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{r.name}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.phone}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap">
                {r.date ? new Date(r.date).toLocaleDateString('ko-KR') : '-'}
                {r.time ? ` ${r.time}` : ''}
              </td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap max-w-32 truncate">{r.type || '-'}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.industry || '-'}</td>
              <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  {r.status !== 'completed' && (
                    <button
                      onClick={() => complete(r.id)}
                      className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-green-900/40 text-green-400 text-xs hover:bg-green-900/60 transition-colors"
                    >
                      <CheckCircle size={12} />
                      완료
                    </button>
                  )}
                  <button
                    onClick={() => remove(r.id)}
                    className="flex items-center gap-1 px-2.5 py-1 rounded-lg bg-red-900/40 text-red-400 text-xs hover:bg-red-900/60 transition-colors"
                  >
                    <Trash2 size={12} />
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 문의 관리 탭 ───────────────────────────────────────
function InquiryTab() {
  const [items, setItems] = useState<Inquiry[]>([]);

  useEffect(() => {
    setItems(JSON.parse(localStorage.getItem('inquiries') || '[]'));
  }, []);

  const save = (next: Inquiry[]) => {
    setItems(next);
    localStorage.setItem('inquiries', JSON.stringify(next));
  };

  const setStatus = (id: string, status: Inquiry['status']) =>
    save(items.map((r) => (r.id === id ? { ...r, status } : r)));

  const remove = (id: string) => save(items.filter((r) => r.id !== id));

  if (items.length === 0) {
    return <p className="text-slate-500 text-center py-16">아직 접수된 문의가 없습니다.</p>;
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-white/[0.07]">
      <table className="w-full text-sm">
        <thead>
          <tr className="bg-slate-800/60 text-slate-400 text-xs">
            <th className="px-4 py-3 text-left whitespace-nowrap">접수일</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">이름</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">연락처</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">제작종류</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">업종</th>
            <th className="px-4 py-3 text-left max-w-48">요청사항</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">상태</th>
            <th className="px-4 py-3 text-left whitespace-nowrap">액션</th>
          </tr>
        </thead>
        <tbody>
          {items.map((r) => (
            <tr key={r.id} className="border-t border-white/[0.05] hover:bg-slate-800/30">
              <td className="px-4 py-3 text-slate-400 whitespace-nowrap">{formatDate(r.createdAt)}</td>
              <td className="px-4 py-3 text-white font-medium whitespace-nowrap">{r.name}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.phone}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap max-w-32 truncate">{r.serviceType || '-'}</td>
              <td className="px-4 py-3 text-slate-300 whitespace-nowrap">{r.industry || '-'}</td>
              <td className="px-4 py-3 text-slate-400 max-w-48 truncate">{r.message || '-'}</td>
              <td className="px-4 py-3"><StatusBadge status={r.status} /></td>
              <td className="px-4 py-3">
                <div className="flex items-center gap-1.5">
                  {r.status === 'pending' && (
                    <button
                      onClick={() => setStatus(r.id, 'in_progress')}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-yellow-900/40 text-yellow-400 text-xs hover:bg-yellow-900/60 transition-colors"
                    >
                      <Clock size={11} />
                      진행중
                    </button>
                  )}
                  {r.status !== 'completed' && (
                    <button
                      onClick={() => setStatus(r.id, 'completed')}
                      className="flex items-center gap-1 px-2 py-1 rounded-lg bg-green-900/40 text-green-400 text-xs hover:bg-green-900/60 transition-colors"
                    >
                      <CheckCircle size={11} />
                      완료
                    </button>
                  )}
                  <button
                    onClick={() => remove(r.id)}
                    className="flex items-center gap-1 px-2 py-1 rounded-lg bg-red-900/40 text-red-400 text-xs hover:bg-red-900/60 transition-colors"
                  >
                    <Trash2 size={11} />
                    삭제
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

// ── 대시보드 ───────────────────────────────────────────
type Tab = 'reservations' | 'inquiries';

export default function AdminPage() {
  const router = useRouter();
  const [ready, setReady] = useState(false);
  const [tab, setTab] = useState<Tab>('reservations');

  useEffect(() => {
    const auth = localStorage.getItem('admin_auth');
    if (auth !== 'true') {
      router.replace('/admin/login');
    } else {
      setReady(true);
    }
  }, [router]);

  const logout = () => {
    localStorage.removeItem('admin_auth');
    router.push('/admin/login');
  };

  if (!ready) return null;

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* 헤더 */}
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-black text-white">관리자 대시보드</h1>
          <p className="text-slate-400 text-sm mt-1">예약 및 문의 내역을 관리합니다</p>
        </div>
        <button
          onClick={logout}
          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800/60 border border-white/[0.08] text-slate-300 text-sm hover:text-white hover:border-white/20 transition-all"
        >
          <LogOut size={15} />
          로그아웃
        </button>
      </div>

      {/* 탭 */}
      <div className="flex gap-1 p-1 bg-slate-900/60 rounded-xl border border-white/[0.07] w-fit mb-6">
        {([
          { key: 'reservations', label: '예약 관리' },
          { key: 'inquiries',    label: '문의 관리' },
        ] as { key: Tab; label: string }[]).map(({ key, label }) => (
          <button
            key={key}
            onClick={() => setTab(key)}
            className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all ${
              tab === key
                ? 'bg-slate-700 text-white shadow-sm'
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {/* 탭 콘텐츠 */}
      {tab === 'reservations' ? <ReservationTab /> : <InquiryTab />}
    </div>
  );
}
