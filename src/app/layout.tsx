import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import SmoothScroll from '@/components/layout/SmoothScroll';
import CustomCursor from '@/components/layout/CustomCursor';
import Preloader from '@/components/layout/Preloader';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'FINGUARD — Secure Your Financial Future | Premium Digital Banking',
  description:
    'Trusted protection and expert guidance for your finances. Re-imagining modern fintech with high-yield savings, real-time monitoring, and instant global transactions.',
  keywords: [
    'Fintech',
    'Digital Banking',
    'Financial Security',
    'Savings',
    'Finguard',
    'Wealth Management',
    'International Banking',
  ],
  authors: [{ name: 'Finguard Inc.' }],
  openGraph: {
    title: 'FINGUARD — Secure Your Financial Future',
    description: 'Trusted protection and expert guidance for your finances.',
    url: 'https://finguard.com',
    siteName: 'Finguard',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FINGUARD — Secure Your Financial Future',
    description: 'Trusted protection and expert guidance for your finances.',
  },
  icons: {
    icon: '/favicon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} antialiased dark`}>
      <body className="bg-black text-white selection:bg-[#FF4A0A] selection:text-white font-sans min-h-screen flex flex-col">
        <Preloader />
        <CustomCursor />
        <SmoothScroll>
          <Navbar />
          <main className="flex-grow pt-20">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
