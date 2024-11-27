import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface MinerProps extends HTMLAttributes<HTMLDivElement> {}

export default function Miner({ className, ...props }: MinerProps) {
  return (
    <>
      <div
        className={cn(
          'container mb-4 flex flex-col items-center gap-4',
          className,
          {}
        )}
        {...props}
      >
        <Text intent={'heading'}>NFT挖矿</Text>
        <p className="text-white/70 text-[20px] leading-[26px] font-[400] mb-2">
          须知：10天后才能提取，如果不提取就继续挖掘。
        </p>
        <Button variant="xl/outline">链接钱包</Button>
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-x-4 gap-y-12 w-full">
          {cards?.map((card, index) => (
            <div
              key={index}
              className="flex items-center justify-between gap-2.5 rounded-2xl bg-black/10 p-3.5 lg:p-5 h-[126px] sm:h-[200px]"
            >
              <div className="grid grid-cols-2 gap-2.5">
                <Img
                  src={card.imgSrc}
                  className="w-[105.9px] h-[105.9px] sm:w-[168px] sm:h-[168px] rounded-xl"
                />
                <div className="flex flex-col justify-between">
                  <div>
                    <Text variant="lg/default/white">{card.label}</Text>
                    <Text variant="lg/default/white">NFT集合</Text>
                  </div>
                  <Button className="rounded-[10px] border max-sm:text-xs" full>
                    开启挖矿
                  </Button>
                </div>
              </div>
              <div className="bg-white bg-opacity-10 flex flex-col justify-between text-center rounded-[12px] h-[105.9px] sm:h-[168px] px-1 pb-2 sm:px-3">
                <h1 className="text-[46px] sm:text-[74px] leading-none text-primary">
                  10
                </h1>
                <p className="text-[20px] text-white opacity-70">可提数量</p>
                <Button variant="sm/outline">提取代币</Button>
              </div>
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
    label: 'Pifans',
    imgSrc: '/public/assets/images/pifans.png',
  },
  {
    label: 'PiBirds',
    imgSrc: '/public/assets/images/pibirds.png',
  },
  {
    label: 'PioneerPunks',
    imgSrc: '/public/assets/images/pioneer-punks.png',
  },
  {
    label: 'PioneerMiners',
    imgSrc: '/public/assets/images/pioneer-miners.png',
  },
];
