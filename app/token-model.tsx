import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface TokenModelProps extends HTMLAttributes<HTMLDivElement> {}

export default function TokenModel({ className, ...props }: TokenModelProps) {
  return (
    <>
      <div
        className={cn('container flex flex-col items-center', className, {})}
        {...props}
      >
        <Text intent={'heading'}>代币模型</Text>
        <Img src="/public/assets/images/pie-eaten.svg" className="w-52" />
        <div>
          <div className="bg-primary relative -mt-4 rounded-2xl border p-5">
            <div className="bg-primary absolute inset-x-0 top-0 mx-auto -mt-2 h-3.5 w-3.5  rotate-45 border-l border-t" />
            <Text variant="base/default/default">
              用数学公式描述出经济活动参与者在约束下的最大化行为，推导出可以回答特定问题的定性结论（变大还是变小）。
              经验模型
              用现实生活中的数据检验由理论模型得出的结论，并且给出精确的数字作为定量结论（变了多少）。
            </Text>
          </div>
          <Img
            src="/public/assets/images/guiter.svg"
            className="relative -mt-12 ml-auto mr-3 h-28 w-20 "
          />
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
