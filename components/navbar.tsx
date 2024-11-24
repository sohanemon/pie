'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { AnimatePresence } from 'framer-motion';

import { siteConfig } from '@/config/site';

import Brand from './brand';
import { Icons } from './icons';
import Motion from './motion';
import { Button } from './ui/button';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // #note
  return (
    <Motion
      initial={{ y: '-90%' }}
      animate={{ y: 0 }}
      className="bg-background sticky inset-x-0 top-0 z-40 border-b-2 border-black/10"
    >
      <nav className="container flex items-center justify-between px-5 py-4 text-xl">
        <div className="flex items-center gap-3">
          {!isMenuOpen ? (
            <Icons.menu
              onClick={() => setIsMenuOpen(true)}
              size={36}
              className="text-primary cursor-pointer lg:hidden"
            />
          ) : (
            <Icons.x
              onClick={() => setIsMenuOpen(false)}
              size={36}
              className="text-primary cursor-pointer lg:hidden"
            />
          )}
          <div className="flex items-center gap-4">
            <Brand />
          </div>
        </div>
        <NavContent />
        <Button>购买</Button>
        <Button variant="default/ghost" className="max-md:hidden">
          English/中文
        </Button>
      </nav>
      <AnimatePresence>
        {isMenuOpen && <NavContentMob setIsMenuOpen={setIsMenuOpen} />}
      </AnimatePresence>
    </Motion>
  );
}

const NavContent = () => {
  const path = usePathname();
  return (
    <>
      <ul className="ml-20 flex items-center gap-6 max-lg:hidden ">
        {siteConfig.nav.map((_) => (
          <li key={_.title} className="text-primary relative hover:text-white">
            <h3 className="capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </ul>
    </>
  );
};

const NavContentMob = ({ setIsMenuOpen }: { setIsMenuOpen: Function }) => {
  // #note

  return (
    <div>
      <Motion
        key={'header'}
        as={'ul'}
        initial="left"
        animate="visible"
        exit={'right'}
        className="bg-primary absolute inset-x-0 mx-2 flex flex-col items-start gap-4 rounded-xl p-5 shadow-xl lg:hidden"
      >
        {siteConfig.nav.map((_) => (
          <li onClick={() => setIsMenuOpen(false)} key={_.title}>
            <h3 className="hover:text-background capitalize">
              <Link href={_.href}>{_.title}</Link>
            </h3>
          </li>
        ))}
      </Motion>
    </div>
  );
};
