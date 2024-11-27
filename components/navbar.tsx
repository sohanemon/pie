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
        <div className='flex items-center justify-between'>
          <Button>购买</Button>
          <Button variant="default/ghost" className="max-md:hidden">
            English/中文
          </Button>
        </div>
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
        key="mobile-nav"
        as="div"
        initial={{ x: '-100%' }}
        animate={{ x: 0 }}
        exit={{ x: '-100%' }}
        transition={{ duration: 0.3 }}
        className="fixed inset-y-0 left-0 w-4/5 md:w-3/5 min-h-screen bg-[#A45AFFF2]/95 pt-6 z-50 flex flex-col gap-6 text-white"
      >
        {/* Close Button */}
        <div className="flex items-center justify-between pb-6 border-b border-white/20">
          <Brand className="pl-6" />
          <div className="pr-6">
            <Icons.x
              onClick={() => setIsMenuOpen(false)}
              size={36}
              className="text-white cursor-pointer"
            />
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 px-6">
          {siteConfig.nav.map((_) => (
            <li key={_.title}>
              <h3 className="capitalize text-2xl border-b pb-3 border-white/20">
                <Link
                  href={_.href}
                  className="hover:border-b-[3px] border-white pb-4"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {_.title}
                </Link>
              </h3>
            </li>
          ))}
        </ul>
      </Motion>

      {/* Semi-Transparent Background */}
      <Motion
        key="overlay"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 bg-black/40 min-h-screen z-40"
        onClick={() => setIsMenuOpen(false)}
      />
    </div>
  );
};
