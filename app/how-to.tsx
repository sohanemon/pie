import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface HowToProps extends HTMLAttributes<HTMLDivElement> {}

export default function HowTo({ className, ...props }: HowToProps) {
  return (
    <>
      <div className={cn('container lg:mb-12', className, {})} {...props}>
        <div className="mb-4 flex items-center justify-center gap-2 lg:my-10 ">
          <Text intent={'title'}>如何购买</Text>{' '}
          <Img
            src="/public/assets/images/eyebox.svg"
            className="w-9 md:w-12 lg:w-16"
          />
          ,
        </div>
        <div className="space-y-3.5 lg:space-y-20">
          {cards.map((card) => (
            <div
              key={card.label}
              className="bg-primary flex items-start gap-1 rounded-2xl border px-4 py-3.5 md:px-10 md:py-8 lg:max-h-52"
            >
              <Img
                src={'/public/assets/images/' + card.icon}
                className="h-20 w-20 shrink-0 -translate-x-2 md:h-40 md:w-40 md:-translate-x-7 lg:h-56 lg:w-48 lg:-translate-y-16"
              />
              <div>
                <Text variant="lg/default/default">{card.label}</Text>
                <Text className="lg:text-2xl">{card.text}</Text>
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
    label: '第一步创建钱包',
    icon: 'wallet.svg',
    text: '从应用商店或钱包官网免费下载metamask、欧意钱包或其他加密钱包。PC用户，通过访问metamask.io或okx.com下载谷歌chrome扩展插件。',
  },
  {
    label: '第二步获取ETH',
    icon: 'eth.svg',
    text: '在钱包里存一些ETH (arbitrum链)以兑换&#36;PIE。如果你没有任何ETH (arbitrum链)，你可以直接在metamask上购买，从另一个钱包转账,或者在另一个交易所购买并发送到你的钱包。',
  },
  {
    label: '第三步转到Uniswap',
    icon: 'unicorn.svg',
    text: '连接到Uniswap。在谷歌chrome或Metamask应用程序内的浏览器上访问 app.uniswap.org。连接您的钱包。将&#36;PIE令牌合约地址粘贴到Uniswap中，选择PIE，然后确认。当Metamask或欧意钱包提示您输入钱包签名时，请签名。',
  },
  {
    label: '第四步将ETH兑换为&#36;PIE',
    icon: 'pie.svg',
    text: '将ETH兑换为&#36;PIE。因为链上交易费会有波动，所以注意手续费和滑点。',
  },
];
