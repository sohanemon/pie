import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface ClaimProps extends HTMLAttributes<HTMLDivElement> {}

export default function Claim({ className, ...props }: ClaimProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-8 flex flex-col items-center',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>领取空头</Text>
        <Img src="/public/assets/images/cloud-box.svg" />
        <div className="text-primary text-[120px] leading-3">
          200
          <span className="text-2xl">个</span>
        </div>
        <Text variant="default/default/muted">截至目前空投数量</Text>
        <div className="mt-10 min-w-[300px] space-y-2.5">
          <Button full className="border" variant="lg/default">
            点击领取
          </Button>
          <Button full variant="lg/outline">
            链接钱包
          </Button>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
