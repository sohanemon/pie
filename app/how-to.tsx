import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

interface HowToProps extends HTMLAttributes<HTMLDivElement> {}

export default function HowTo({ className, ...props }: HowToProps) {
  return (
    <>
      <div className={cn('container', className, {})} {...props}>
        <div className="flex items-center justify-center gap-2 ">
          <Text intent={'title'}>如何购买</Text>{' '}
          <Img src="/public/assets/images/eyebox.svg" className="w-9" />
        </div>
      </div>
    </>
  );
}
