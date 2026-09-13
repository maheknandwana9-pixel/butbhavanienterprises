import type { Metadata } from 'next';
import { Playfair_Display, Inter } from 'next/font/google';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import './globals.css';

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  display: 'swap',
});

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
  display: 'swap',
});

export const metadata: Metadata = {
  title: {
    default: 'But Bhavani Enterprises | Premium Sequin & Fancy Yarn Manufacturer',
    template: '%s | But Bhavani Enterprises',
  },
  description:
    'But Bhavani Enterprises is a leading manufacturer of premium sequin yarns, fancy yarns and decorative materials for fashion, textiles, embroidery and creative applications based in Surat, Gujarat.',
  keywords: [
    'sequin yarn',
    'fancy yarn',
    'decorative yarn',
    'sequin material',
    'textile manufacturer',
    'Surat',
    'Gujarat',
    'embroidery yarn',
    'glitter yarn',
    'metallic yarn',
  ],
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    siteName: 'But Bhavani Enterprises',
    title: 'But Bhavani Enterprises | Premium Sequin & Fancy Yarn Manufacturer',
    description:
      'Manufacturers of premium sequin yarns, fancy yarns and decorative materials for fashion, textiles and more.',
  },
  icons: {
    icon: '/images/logo.jpg',
    apple: '/images/logo.jpg',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${playfair.variable} ${inter.variable}`}>
      <body className="min-h-screen flex flex-col antialiased">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
