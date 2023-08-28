import { cva } from 'class-variance-authority';

export const textVariants = cva(
  ['leading-7 md:leading-normal lg:leading-relaxed'],
  {
    variants: {
      color: {
        default: 'text-foreground',
        primary: 'text-primary',
        white: 'text-white',
        muted: 'text-white/60',
      },
      intent: {
        heading: 'text-2xl text-white md:text-[46px] ',
        title: 'text-2xl md:text-[40px] text-white',
      },
      size: {
        sm: 'text-xs md:text-xl lg:text-[26px]',
        default: 'text-sm md:text-3xl ',
        base: 'text-base md:text-2xl ',
        lg: 'text-xl md:text-[32px]',
      },
      weight: {
        default: 'font-normal',
        light: 'font-light',
        medium: 'font-medium ',
        bold: 'font-bold',
      },
    },
  }
);
