import { HTMLAttributes } from 'react';

import { cn } from '@/lib/utils';
import Img from '@/components/ui/img';
import { Text } from '@/components/ui/text';
import { Images } from '@/components/images';

interface AboutProps extends HTMLAttributes<HTMLDivElement> {}

export default function About({ className, ...props }: AboutProps) {
  return (
    <>
      <div
        className={cn(
          '-ml-12 grid grid-cols-2 items-center gap-7 px-4 md:container lg:mb-32',
          className,
          {}
        )}
        {...props}
      >
        <Img
          src="/public/assets/images/lifebuoy.png"
          className="lg:max-w-[490px]"
        />
        <div>
          <Text className="mb-2 " intent={'title'}>
            项目介绍
          </Text>
          <ul className="list-disc marker:text-white lg:space-y-2">
            <Text as={'li'} variant="sm/default/white">
              你已经挖掘了多年的Picoin，你似乎厌倦了这样漫长的等待和伟大愿景的旅途，我只不过想拥有一点属于自己的PIE。
            </Text>
            <Text as={'li'} variant="sm/default/white">
              PIE会让Pinetwork和MEME更伟大!
            </Text>
            <Text as={'li'} variant="sm/default/white">
              &#36;PIE永远支持Pinetwork，永远属于人民的加密硬币!
            </Text>
            <Text as={'li'} variant="sm/default/white">
              在全球数千万先锋的推动力量下诞生，&#36;PIE为你指明方向，向伟大前进！
            </Text>
          </ul>
        </div>
      </div>
      <Images.hr reverse />
    </>
  );
}
