'use client';

import * as React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Logo } from '@/components/layout/logo';
import { NavLinks } from '@/components/layout/nav-links';
import { MobileNav } from '@/components/layout/mobile-nav';
import { useScrollPosition } from '@/hooks/use-scroll-position';

export function Navbar() {
  const pathname = usePathname();
  const isScrolled = useScrollPosition();

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 w-full transition-all duration-300',
        isScrolled
          ? 'bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-900/80'
          : 'bg-white dark:bg-gray-900'
      )}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <Link href="/" className="flex items-center space-x-2">
              <Logo />
              <span className="font-bold text-xl">ShrapnelTech</span>
            </Link>
          </div>
          <NavLinks currentPath={pathname} />
          <MobileNav currentPath={pathname} />
        </div>
      </div>
    </nav>
  );
}