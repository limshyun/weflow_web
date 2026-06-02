import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import BottomBar from '@/components/layout/BottomBar';
import FormModal from '@/components/ui/FormModal';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'WEFLOW — 문의로 이어지는 홈페이지를 만듭니다',
  description:
    '랜딩페이지·홈페이지 제작부터 광고 운영·사후관리까지. WEFLOW가 함께합니다.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="min-h-screen flex flex-col">
        <Header />
        <FormModal />
        <main className="flex-1 pt-16">{children}</main>
        <Footer />
        <BottomBar />
      </body>
    </html>
  );
}
