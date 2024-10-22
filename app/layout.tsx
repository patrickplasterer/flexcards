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
                  <Link href='./' className="flex items-center justify-center mr-6 font-bold text-lg">
                      flexcards
                  </Link>
                  <div className="flex justify-between w-full items-center">
                      <div className="flex justify-start gap-4 font-extralight items-center">
                          <div>Editor</div>
                          <div>Discover</div>
                          <div>Analytics</div>
                      </div>
                      <div className="flex gap-4 items-center">
                          <div className="flex">Help</div>
                          <div className="flex">
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
