import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface PledgeProps extends HTMLAttributes<HTMLDivElement> {}

export default function Pledge({ className, ...props }: PledgeProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-4 flex flex-col items-center  gap-4',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>领取空头</Text>
        <Button variant="lg/outline">链接钱包</Button>
        <div className="mt-12 grid grid-cols-2 gap-x-4 gap-y-12">
          {cards.map((card) => (
            <div
              key={card.tag}
              className="flex flex-col items-center gap-2.5 rounded-2xl bg-black/10 p-3.5"
            >
              <Img
                src="/public/assets/images/pie.svg"
                className="-mt-12 h-24 w-32"
              />
              <Text
                variant="sm/default/white"
                className="rounded-full px-3 ring-2 ring-white"
              >
                {card.tag}
              </Text>
              <Text variant="lg/default/white" className="text-center">
                {card.label}
              </Text>
              <Button
                className="rounded-[10px] border text-xs"
                variant="sm/default"
              >
                解除质押，领取奖励
              </Button>
            </div>
          ))}
        </div>
      </div>
      <Images.hr />
    </>
  );
}

const cards = [
  {
    label: '每日领取N个PIE',
    tag: '活期',
  },
  {
    label: '每日领取M个PIE',
    tag: '30天',
  },
  {
    label: '每日领取X个PIE',
    tag: '60天',
  },
  {
    label: '每日领取Y个PIE',
    tag: '90天',
  },
];
