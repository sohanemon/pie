import { fontFamily } from 'tailwindcss/defaultTheme';
import plugin from 'tailwindcss/plugin';

import colors from '../../config/colors';

export const theme = plugin(
  ({ addBase }) => {
    addBase({
      ':root': colors,
    });
  },
  {
    darkMode: ['class'],
    theme: {
      container: {
        center: true,
        padding: '1rem',
        screens: {
          '2xl': '1240px',
        },
      },
      extend: {
        colors: {
          border: 'hsl(var(--border))',
          input: 'hsl(var(--input))',
          ring: 'hsl(var(--ring))',
          background: 'hsl(var(--background))',
          foreground: 'hsl(var(--foreground))',
          primary: {
            DEFAULT: 'hsl(var(--primary))',
            foreground: 'hsl(var(--primary-foreground))',
          },
          muted: {
            DEFAULT: 'hsl(var(--muted))',
            foreground: 'hsl(var(--muted-foreground))',
          },

          card: {
            DEFAULT: 'hsl(var(--card))',
            foreground: 'hsl(var(--card-foreground))',
          },
        },
        fontFamily: {
          sans: ['var(--font-sans)', ...fontFamily.sans],
          mono: ['var(--font-mono)', ...fontFamily.mono],
        },
      },
    },
  }
);
