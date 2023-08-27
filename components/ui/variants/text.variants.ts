import { cva } from 'class-variance-authority';

export const textVariants = cva(['leading-7'], {
  variants: {
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      white: 'text-white',
      muted: 'text-white/60',
    },
    intent: {
      heading: 'text-2xl text-white  ',
      title: 'text-2xl text-white',
    },
    size: {
      sm: 'text-xs ',
      default: 'text-sm ',
      base: 'text-base ',
      lg: 'text-xl ',
    },
    weight: {
      default: 'font-normal',
      light: 'font-light',
      medium: 'font-medium ',
      bold: 'font-bold',
    },
  },
});
