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
          'container mb-8 flex flex-col items-center ',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>领取空投</Text>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-10">
          <Img
            src="/public/assets/images/cloud-box.svg"
            className="md:min-w-full md:basis-1/2 md:-translate-x-20"
          />
          <div className="flex-col items-center max-md:flex">
            <div className="text-primary text-[120px] leading-3 md:text-[160px]">
              200
              <span className="text-2xl ">个</span>
            </div>
            <Text variant="default/default/muted">截至目前空投数量</Text>
            <div className="relative mt-10 min-w-[300px] space-y-2.5">
              <Button full className="border" variant="lg/default">
                点击领取
              </Button>
              <Button full variant="lg/outline">
                链接钱包
              </Button>
              <Img
                src="/public/assets/images/cloud-eye.svg"
                className="absolute -right-3 bottom-[94%] w-12 md:-right-16 md:bottom-[120%] md:w-24"
              />
            </div>
          </div>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
