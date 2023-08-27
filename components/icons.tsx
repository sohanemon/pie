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
};
