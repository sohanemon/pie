import { Knewave as FontMono } from 'next/font/google';
import localFont from 'next/font/local';

export const fontSans = localFont({
  src: './HuXiaoBao-SaoBao Regular.otf',
  preload: true,
  variable: '--font-sans',
});

export const fontMono = FontMono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: '400',
});
