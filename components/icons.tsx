import Image from 'next/image';
import { AlignJustify, Moon, Sun, X } from 'lucide-react';

export const Icons = {
  sun: Sun,
  moon: Moon,
  menu: AlignJustify,
  x: X,
  pie: (props: any) => (
    <Image {...props} src="/assets/images/pie.svg" fill alt="" />
  ),
  brow: (props: any) => (
    <Image
      {...props}
      src="/assets/images/brow.svg"
      width={33}
      height={12}
      alt=""
    />
  ),
  wave: (props: any) => (
    <Image
      {...props}
      src="/assets/images/wave.svg"
      width={40}
      height={8}
      alt=""
    />
  ),
  quoteYellow: (props: any) => (
    <Image
      {...props}
      src="/assets/images/quote-yellow.svg"
      width={10}
      height={19}
      alt=""
    />
  ),
  quoteBlue: (props: any) => (
    <Image
      {...props}
      src="/assets/images/quote-blue.svg"
      width={14}
      height={15}
      alt=""
    />
  ),
};
