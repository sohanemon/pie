import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';

interface MapProps extends HTMLAttributes<HTMLDivElement> {}

export default function Map({ className, ...props }: MapProps) {
  return (
    <>
      <div className={cn('', className, {})} {...props}></div>
    </>
  );
}
