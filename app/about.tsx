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
          '-ml-12 grid grid-cols-2 items-center gap-7 px-4 md:container',
          className,
          {}
        )}
        {...props}
      >
        <Img src="/public/assets/images/lifebuoy.png" />
        <div>
          <Text className="mb-2 " intent={'title'}>
            项目介绍
          </Text>
          <ul className="list-disc marker:text-white">
            {list.map((listItem) => (
              <Text as={'li'} variant="sm/default/white" key={listItem}>
                {listItem}
              </Text>
            ))}
          </ul>
        </div>
      </div>
      <Images.hr />
    </>
  );
}

const list = [
  '你已经挖掘了多年的Picoin，你似乎厌倦了这样漫长的等待和和伟大愿景的旅途，我只不过想拥有一点属于自己的PIE。',
  'PIE会让Pinetwork和MEME更伟大!',
  '$PIE永远支持Pinetwork，永远属于人民的加密硬币!',
  '在全球数千万先锋的推动力量下诞生，$PIE为你指明方向，向伟大前进！',
];
