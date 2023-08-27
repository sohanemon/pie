import { HtmlHTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import { Icons } from './icons';

interface CompType {}

export default function Brand({
  className,
  ...props
}: HtmlHTMLAttributes<HTMLAnchorElement> & CompType) {
  return (
    <Link
      href={'/'}
      {...props}
      className={cn('flex items-center gap-1', {}, className)}
    >
      <div className="relative h-9 w-12 md:h-12 md:w-20">
        <Icons.pie />
      </div>
      <h1 className="text-primary fobo font-mono text-3xl font-bold italic tracking-widest md:text-5xl">
        pie
      </h1>
    </Link>
  );
}
