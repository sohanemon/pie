import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';

interface TokenModelProps extends HTMLAttributes<HTMLDivElement> {}

export default function TokenModel({ className, ...props }: TokenModelProps) {
  return (
    <>
      <div
        className={cn('flex flex-col items-center', className, {})}
        {...props}
      >
        <Text intent={'heading'}>代币模型</Text>
        <Img src="/public/assets/images/pie-eaten.svg" className="w-52" />
      </div>
    </>
  );
}
