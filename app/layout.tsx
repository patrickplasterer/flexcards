import type { Metadata } from "next";
import localFont from "next/font/local";
import {
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut,
  UserButton
} from '@clerk/nextjs'
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Flashcards",
  description: "A simple online flashcard app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <ClerkProvider>
        <html lang="en">
          <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
            <div className='flex flex-col h-screen'>
                <div className="flex flex-row justify-start items-center w-full py-2 px-4">
                  <Link href='/' className="flex items-center justify-center mr-6 mb-[2px] font-bold text-lg hover:underline underline-offset-4 decoration-2">
                      flexcards
                  </Link>
                  <div className="flex justify-between w-full items-center font-extralight">
                      <div className="flex justify-start gap-4 items-center">
                          <Link className='hover:underline hover:opacity-90 underline-offset-4' href='./dashboard'>Dashboard</Link>
                          <Link className='hover:underline hover:opacity-90 underline-offset-4' href='/study'>Study</Link>
                          <Link className='hover:underline hover:opacity-90 underline-offset-4' href='/editor'>Editor</Link>
                          <Link className='hover:underline hover:opacity-90 underline-offset-4' href='/discover'>Discover</Link>
                          <Link className='hover:underline hover:opacity-90 underline-offset-4' href='/analytics'>Analytics</Link>
                      </div>
                      <div className="flex gap-4 items-center">
                          <div className="flex">Help</div>
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
              <div className="flex flex-col grow p-1 overflow-hidden">
              {children}
              </div>
            </div>
          </body>
        </html>
      </ClerkProvider>
  );
}
