'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const DAY_NAMES = ['일', '월', '화', '수', '목', '금', '토'];

interface CalendarProps {
  selectedDate: Date | null;
  onSelect: (date: Date) => void;
}

export default function CalendarPicker({ selectedDate, onSelect }: CalendarProps) {
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  const [viewYear, setViewYear] = useState(today.getFullYear());
  const [viewMonth, setViewMonth] = useState(today.getMonth());

  const firstDay = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();

  const prevMonth = () => {
    if (viewMonth === 0) { setViewYear(y => y - 1); setViewMonth(11); }
    else setViewMonth(m => m - 1);
  };

  const nextMonth = () => {
    if (viewMonth === 11) { setViewYear(y => y + 1); setViewMonth(0); }
    else setViewMonth(m => m + 1);
  };

  const isSameDay = (a: Date, b: Date) =>
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate();

  const cells = Array.from({ length: firstDay + daysInMonth }, (_, i) => {
    if (i < firstDay) return null;
    return new Date(viewYear, viewMonth, i - firstDay + 1);
  });

  return (
    <div>
      {/* 월 이동 헤더 */}
      <div className="flex items-center justify-between mb-4">
        <button
          type="button"
          onClick={prevMonth}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
        >
          <ChevronLeft size={18} />
        </button>
        <span className="text-white font-bold text-sm">
          {viewYear}년 {viewMonth + 1}월
        </span>
        <button
          type="button"
          onClick={nextMonth}
          className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/60 transition-colors"
        >
          <ChevronRight size={18} />
        </button>
      </div>

      {/* 요일 헤더 */}
      <div className="grid grid-cols-7 mb-2">
        {DAY_NAMES.map((d, i) => (
          <div
            key={d}
            className={`text-center text-xs font-semibold py-1 ${
              i === 0 ? 'text-red-400' : i === 6 ? 'text-blue-400' : 'text-slate-400'
            }`}
          >
            {d}
          </div>
        ))}
      </div>

      {/* 날짜 그리드 */}
      <div className="grid grid-cols-7 gap-1">
        {cells.map((date, i) => {
          if (!date) return <div key={`empty-${i}`} />;

          const isPast = date < today;
          const isSelected = selectedDate && isSameDay(date, selectedDate);
          const isToday = isSameDay(date, today);
          const dayOfWeek = date.getDay();

          return (
            <button
              key={date.toISOString()}
              type="button"
              disabled={isPast}
              onClick={() => onSelect(date)}
              className={`
                aspect-square rounded-xl text-sm font-medium transition-all duration-200
                ${isPast ? 'text-slate-700 cursor-not-allowed' : 'hover:bg-slate-700/60'}
                ${isSelected
                  ? 'bg-cyan-500/20 border border-cyan-500/60 text-cyan-300 shadow-sm shadow-cyan-500/20'
                  : isToday && !isPast
                  ? 'border border-white/20 text-white'
                  : !isPast
                  ? dayOfWeek === 0 ? 'text-red-400' : dayOfWeek === 6 ? 'text-blue-400' : 'text-slate-300'
                  : ''}
              `}
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}
