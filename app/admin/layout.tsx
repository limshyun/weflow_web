export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className="bg-red-950/40 border-b border-red-500/20 py-1.5 px-4 text-center">
        <span className="text-xs text-red-400 font-medium">관리자 전용 페이지</span>
      </div>
      {children}
    </>
  );
}
