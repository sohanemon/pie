import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Text } from '@/components/ui/text';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <>
      <div className={cn('', className, {})} {...props}>
        <Text intent={'heading'} className="text-white">
          如果你还没得到Picoin，那么就先吃点PIE吧！毕竟这是小菜一碟！
        </Text>
      </div>
    </>
  );
}
