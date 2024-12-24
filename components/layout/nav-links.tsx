'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { MAIN_NAV_ITEMS } from '@/lib/constants/navigation';
import { NavItem } from '@/lib/types/navigation';

interface NavLinksProps {
  currentPath: string;
}

export function NavLinks({ currentPath }: NavLinksProps) {
  return (
    <div className="hidden md:block">
      <div className="flex items-center space-x-4">
        {MAIN_NAV_ITEMS.map((item: NavItem) => (
          <Link
            key={item.name}
            href={item.href}
            className={cn(
              'px-3 py-2 rounded-md text-sm font-medium transition-colors',
              currentPath === item.href
                ? 'bg-primary text-primary-foreground'
                : 'hover:bg-accent hover:text-accent-foreground'
            )}
          >
            {item.name}
          </Link>
        ))}
        <Button asChild>
          <Link href="/contact">Get Started</Link>
        </Button>
      </div>
    </div>
  );
}