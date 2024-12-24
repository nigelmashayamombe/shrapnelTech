'use client';

import { useState } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import { MAIN_NAV_ITEMS } from '@/lib/constants/navigation';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface MobileNavProps {
  currentPath: string;
}

export function MobileNav({ currentPath }: MobileNavProps) {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden">
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <SheetTitle className="text-lg font-semibold mb-4">Navigation</SheetTitle>
        <nav className="flex flex-col gap-4">
          {MAIN_NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                'block px-2 py-1 text-lg transition-colors hover:text-primary',
                currentPath === item.href
                  ? 'font-medium text-primary'
                  : 'text-muted-foreground'
              )}
            >
              {item.name}
            </Link>
          ))}
          <Button asChild className="mt-4">
            <Link href="/contact">Get Started</Link>
          </Button>
        </nav>
      </SheetContent>
    </Sheet>
  );
}