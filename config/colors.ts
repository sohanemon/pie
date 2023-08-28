import { cssColorVariable } from '../lib/utils';

const colors = {
  background: 'hsla(267, 100%, 68%, 1)',
  foreground: 'hsla(0, 0%, 0%, 1)',
  muted: 'hsla(0, 0%, 100%, 1 )',
  mutedForeground: 'hsla(225, 7%, 36%, 1)',
  primary: 'hsla(47, 100%, 48%, 1) ',
  primaryForeground: 'hsla(0, 0%, 0%, 1)',
  accent: 'hsla(240, 4.8%, 95.9%, 1)',
  accentForeground: 'hsla(240, 5.9%, 10%, 1)',
  card: 'hsla(0, 0%, 0%, 1)',
  cardForeground: 'hsla(0, 0%, 100%, 1)',
  border: 'hsla(0, 0%, 0%, 1)',
};

export default cssColorVariable(colors);
