import { cva } from 'class-variance-authority';

export const textVariants = cva([], {
  variants: {
    color: {
      default: 'text-foreground',
      primary: 'text-primary',
      secondary: 'text-secondary',
      muted: 'text-muted',
    },
    intent: {
      heading: 'text-[26px]  ',
      title: 'text-2xl',
    },
    size: {
      sm: 'text-xs ',
      default: 'text-sm ',
      lg: 'text-xl ',
    },
    weight: {
      default: 'font-normal',
      light: 'font-light',
      medium: 'font-medium ',
      bold: 'font-bold',
    },
  },
  defaultVariants: {
    color: 'default',
    size: 'default',
    weight: 'default',
  },
});