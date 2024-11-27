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
        <div className="relative">
          <div className="absolute left-10 -top-5">
            <Img
              src="/public/assets/images/white-cloud.png"
              className="h-16 md:h-24 w-16 md:w-24"
            />
          </div>
          <div className="flex flex-col gap-5 items-center text-center">
            <div className="flex items-center mb-8">
              <span className="text-primary text-[120px] leading-3 md:text-[180px]">
                100
              </span>
              <span className="text-primary text-[40px] md:text-[50px] mt-6">
                亿
              </span>
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
          </div>
          <div className="absolute right-0 md:-right-24 top-0 flex flex-col items-center">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="h-24 w-24"
            />
            <Img src="/public/assets/images/box.png" className="h-16 w-16" />
          </div>
          <div className="absolute -right-16 md:-right-64 top-24 flex flex-col items-center opacity-50">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="h-24 w-24"
            />
            <Img src="/public/assets/images/box.png" className="h-16 w-16" />
          </div>

          <div className="absolute left-0 md:-left-24 -top-24 flex flex-col items-center opacity-50">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="h-24 w-24"
            />
          </div>
          <div className="absolute -left-16 md:-left-64 top-24 flex flex-col items-center">
            <Img
              src="/public/assets/images/right-cloud.png"
              className="h-24 w-24"
            />
            <Img src="/public/assets/images/box.png" className="h-16 w-16" />
          </div>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
