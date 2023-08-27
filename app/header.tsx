import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface HeaderProps extends HTMLAttributes<HTMLDivElement> {}

export default function Header({ className, ...props }: HeaderProps) {
  return (
    <>
      <div className={cn('container pt-10', className, {})} {...props}>
        <div className="flex -space-x-14">
          <Text intent={'heading'} className=" max-w-[70%]">
            如果你还没得到Picoin，那么就先吃点PIE吧！毕竟这是小菜一碟！
          </Text>
          <Images.header className="grow translate-x-10" />
        </div>
        <div className="bg-primary -mt-14 rounded-full px-4 py-1 ">
          <Text className="max-w-[70%] ">
            PIE是Picoin开源之前的第一个MEME币，真正的PIE。
          </Text>
        </div>
        <div className="mt-8 grid grid-cols-3 gap-x-1 gap-y-4">
          {socials.map((el) => (
            <div key={el.label} className="flex items-center gap-2">
              <Img
                className="w-6 shrink-0"
                src={'/public/assets/images/' + el.icon}
              />
              <Text className="">{el.label}</Text>
            </div>
          ))}
        </div>
      </div>
      <Images.hr />
    </>
  );
}

const socials = [
  {
    label: 'Twitter',
    icon: 'twitter.svg',
    href: '',
  },
  {
    label: 'Telegram',
    icon: 'telegram.svg',
    href: '',
  },
  {
    label: 'Dextools',
    icon: 'dextool.svg',
    href: '',
  },
  {
    label: 'Etherscan',
    icon: 'etherscan.svg',
    href: '',
  },
  {
    label: 'Coinmarke tcap',
    icon: 'coinmarke.svg',
    href: '',
  },
  {
    label: 'New Crypto Space',
    icon: 'crypto-space.svg',
    href: '',
  },
];
