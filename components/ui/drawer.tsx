'use client';

import { Drawer } from 'vaul';
import { SquareMenu } from 'lucide-react';
import { NavBarItem } from './navbar';
import { Button } from './button';
import Link from 'next/link';

export default function VaulDrawer() {
  return (
    <Drawer.Root direction="left">
      <Drawer.Trigger className="relative flex h-10 flex-shrink-0 items-center justify-start gap-2 overflow-hidden rounded-full px-4 text-lg font-medium shadow-sm transition-all">
        <SquareMenu className='hover:stroke-orange-500' />
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content
          className="left-2 top-2 bottom-2 fixed z-10 outline-none w-[310px] flex"
          style={{ '--initial-transform': 'calc(100% + 8px)' } as React.CSSProperties}
        >
          <div className="bg-zinc-50 h-full w-full grow p-5 flex flex-col rounded-[16px] justify-between">
              <div className='flex flex-col justify-start gap-2 items-center'>
                <div className="font-bold text-4xl mb-4 text-zinc-900 mx-auto mt-4">flexcards</div>
                <Link href={'./'} className='text-black font-bold text-xl rounded-xl hover:bg-accent p-2 w-full'>Home</Link>
              </div>
              <p className='text-gray-600 text-xs mx-auto font-mono'>Created by Patrick Plasterer</p>
          </div>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}