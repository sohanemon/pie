import { cva } from 'class-variance-authority';

// #note
export const buttonVariants = cva(
  [
    'inline-flex items-center justify-center font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background whitespace-nowrap',
  ],
  {
    variants: {
      intent: {
        default: 'bg-primary text-primary-foreground hover:bg-primary/90',
        destructive:
          'bg-destructive text-destructive-foreground hover:bg-destructive/90',
        outline: 'border border-primary hover:bg-accent text-primary',
        secondary:
          'bg-secondary text-secondary-foreground hover:bg-secondary/80',
        ghost: 'text-white hover:text-primary',
        link: 'underline-offset-4 underline text-foreground',
      },
      size: {
        default: 'h-[34px] py-2.5 min-w-[100px] text-base px-4 rounded-lg',
        sm: 'h-8 px-3 rounded-md',
        lg: 'h-12 px-8 rounded-[10px] md:h-14 text-xl md:text-2xl',
        xl: 'h-12 px-16 rounded-[6px] md:h-[60px] text-[24px]',
        icon: 'h-10 w-10',
      },
    },
  }
);
