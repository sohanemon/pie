import { HTMLAttributes } from 'react';
import Link from 'next/link';

import { cn } from '@/lib/utils';

import Brand from './brand';
import Img from './ui/img';
import { Text } from './ui/text';

interface FooterProps extends HTMLAttributes<HTMLDivElement> {}

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <>
      <div
        className={cn(
          'container relative flex flex-col items-center overflow-hidden',
          className,
          {}
        )}
        {...props}
      >
        <Img
          src="/public/assets/images/pie-bg.svg"
          className="absolute inset-0"
        />
        <Text intent={'heading'}>代币模型</Text>
        <Brand className="flex-col md:mt-8" />
        <div className="flex items-center ">
          <Img src="/public/assets/images/insect-happy.svg" className="w-52" />
          <Text
            variant="default/default/white"
            className="max-w-sm text-center leading-loose md:max-w-lg md:text-2xl"
          >
            $PIE可能是一种没有内在价值或财务回报预期的模因硬币。
            可能没有正式的团队或路线图。
            这枚硬币可能完全没用，可能只是为了娱乐。
            可能只是为了催促Pinetwork能加快速度。
          </Text>
          <Img src="/public/assets/images/bottle-wow.svg" className="w-52" />
        </div>
        <Img
          src="/public/assets/images/one-eyed-runner.svg"
          className="my-4 h-12 md:h-[75px]"
        />
        <div className="flex items-center justify-center gap-10 md:mt-4 md:gap-16">
          {socials.map((el) => (
            <Link
              href={el.href}
              key={el.label}
              className="flex flex-col items-center gap-2"
            >
              <Img
                className="w-10 shrink-0"
                src={'/public/assets/images/' + el.icon}
              />
              <Text variant="base/bold/white">{el.label}</Text>
            </Link>
          ))}
        </div>
      </div>
      <footer className="mt-8 border-t border-black/10 py-4">
        <Text className="text-center md:text-2xl">
          c 2023 by PIE. All rights reserved!
        </Text>
      </footer>
    </>
  );
}

const socials = [
  {
    label: 'Twitter',
    icon: 'twitter.svg',
    href: 'https://twitter.com/piepiecoin',
  },
  {
    label: 'Telegram',
    icon: 'telegram.svg',
    href: '',
  },
];
