import { cn } from '@/lib/utils';

import Img from './ui/img';

export const Images = {
  header: (props: any) => (
    <Img {...props} src="/public/assets/images/header.png" />
  ),
  hr: ({ reverse }: { reverse?: boolean }) => (
    <Img
      className={cn('h-20', { 'scale-x-[-1]': reverse })}
      src="/public/assets/images/hr.svg"
    />
  ),
};
