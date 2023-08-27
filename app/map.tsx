import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';
import Motion from '@/components/motion';

interface MapProps extends HTMLAttributes<HTMLDivElement> {}

export default function Map({ className, ...props }: MapProps) {
  return (
    <>
      <div className={cn('container ', className, {})} {...props}>
        <div className="-mb-1 flex ">
          {images.map((item) => (
            <>
              {item.image && (
                <Motion
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  key={item.image!}
                  className={cn(item.className)}
                >
                  <Img
                    src={'/public/assets/images/' + item.image}
                    className="h-16 w-20"
                  />
                </Motion>
              )}
              {item.text && (
                <Text
                  intent={'heading'}
                  className="mx-4 mt-4 grow whitespace-nowrap"
                >
                  {item.text}
                </Text>
              )}
            </>
          ))}
        </div>
        <div className="bg-primary space-y-5 rounded-2xl border px-5 py-8">
          {texts.map((item, idx) => (
            <div key={item.label} className="flex items-start gap-3">
              <p className=" w-8 bg-gradient-to-t from-transparent to-white bg-clip-text text-6xl font-normal leading-9 text-transparent">
                {idx + 1}
              </p>
              <div>
                <Text variant="lg/default/default">{item.label}</Text>
                <Text variant="default/default/default">{item.text}</Text>
              </div>
            </div>
          ))}
        </div>
      </div>
      <br />
      <Images.hr />
    </>
  );
}

const images = [
  {
    image: 'insect.svg',
  },
  {
    text: '路线图',
  },
  {
    image: 'pie-cat.svg',
    className: '[&>div]:scale-[1.3]',
  },
  {
    image: 'pie-frog.svg',
    className: 'relative -z-20',
  },
  {
    image: 'pie-dog.svg',
    className: '[&>div]:scale-[1.3]',
  },
];

const texts = [
  {
    label: '第一阶段',
    text: '发射  Coinmarketcap上架记录  3000+持有者',
  },
  {
    label: '第二阶段',
    text: '建立PIE社区  在推特上增加PIE力量  10K+持有者 封装到其他公链上',
  },
  {
    label: '第三阶段',
    text: '开启NFT质押挖矿  100K+持有者  上线中心化交易所 封装到Pichain链上',
  },
];
