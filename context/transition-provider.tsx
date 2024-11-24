'use client';

import Motion from '../components/motion';

export default function TransitionProvider({
  children,
  initial = 'hidden',
}: {
  children: React.ReactNode;
  initial?: string;
}) {
  return (
    <Motion className="" initial={initial} transition={{ duration: 0.4 }}>
      {children}
    </Motion>
  );
}
