import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import ClipboardInput from '@/components/clipboard';
import { Images } from '@/components/images';
import ProgressBar from '@/components/progress';

interface DonationProps extends HTMLAttributes<HTMLDivElement> {}

export default function Donation({ className, ...props }: DonationProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-8 flex flex-col items-center gap-4',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>集体捐赠</Text>
        <div className="flex flex-col items-center md:flex-row md:justify-center md:gap-10">
          {/* <Img
            src="/public/assets/images/cloud-box.svg"
            className="md:min-w-full md:basis-1/2 md:-translate-x-20"
          /> */}
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="text-primary text-[120px] leading-3 md:text-[160px]">
              100
              <span className="text-2xl ">亿</span>
            </div>
            <Text variant="sm/default/white" className="opacity-70">
              PIE捐赠池总币量
            </Text>
            <ProgressBar progress={30} label="30亿" />
            <div className="w-[319px] sm:w-[631px]">
              <Text variant="sm/default/white">
                凡是捐赠的用户共同瓜分100亿PIE。
              </Text>
              <Text variant="sm/default/white">
                捐赠时间：2024年12月1日3点14分开始-2024年12月7日3点14分截止。
              </Text>
            </div>
            <ClipboardInput />
            <div className="w-[380px]">
              <Button full className="border" variant="lg/default">
                链接钱包
              </Button>
            </div>
            {/* <Img
                src="/public/assets/images/cloud-eye.svg"
                className="absolute -right-3 bottom-[94%] w-12 md:-right-16 md:bottom-[120%] md:w-24"
              /> */}
          </div>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
