import type { Metadata } from "next";
import localFont from "next/font/local";
import { Navbar } from "@/components/ui/navbar";
import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";


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
              <Navbar />
              <div className="flex flex-col grow p-1 overflow-hidden">
              {children}
              </div>
            </div>
          </body>
        </html>
      </ClerkProvider>
  );
}
