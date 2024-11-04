"use client";

import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { RaspberryPiLogo } from "../svg/raspberry-pi-logo";

function NavLink({
  href,
  title,
  pathName,
}: {
  href: string;
  title: string;
  pathName: string;
}) {
  return (
    <Link
      className={cn("hover:underline hover:opacity-80 underline-offset-[6px]", {
        "underline underline-offset-[6px] opacity-80": href == pathName,
      })}
      href={href}
    >
      {title}
    </Link>
  );
}

export function Navbar() {
  const pathName = usePathname();

  return (
    <div className="flex flex-row justify-start items-center w-full py-2 px-4">
      <Link
        href="/"
        className="flex items-center justify-center mr-6 mb-[2px] font-bold text-lg hover:underline underline-offset-4 decoration-2"
      >
        flexcards
      </Link>
      <div className="flex justify-between w-full items-center font-extralight">
        <div className="flex justify-start gap-4 items-center">
          <NavLink href="/dashboard" title="Dashboard" pathName={pathName} />
          <NavLink href="/study" title="Study" pathName={pathName} />
          <NavLink href="/editor" title="Editor" pathName={pathName} />
          <NavLink href="/discover" title="Discover" pathName={pathName} />
          {/* <NavLink href="/analytics" title="Analytics" pathName={pathName} /> */}
        </div>
        <div className="flex gap-4 items-center">
          <div className="flex items-center text-xs font-mono gap-2 opacity-70">powered by a raspberry pi<RaspberryPiLogo className='w-4 h-4 mb-[1px]'/></div>
          {/* <div className="flex">Help</div> */}
          <div className="flex mb-[3px]">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
              <SignInButton />
            </SignedOut>
          </div>
        </div>
      </div>
    </div>
  );
}
