import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import GlobalStyleWrapper from '@/components/GlobalStyle';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'My Movies',
  description: 'Your personal movie collection',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <GlobalStyleWrapper />
        {children}
      </body>
    </html>
  );
}
