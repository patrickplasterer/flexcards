import Image from "next/image";
import study from '@/public/study.png'
import editor from '@/public/editor.png'
import discover from '@/public/discover.png'
import Link from "next/link";
import * as React from 'react'

export default function Home() {
  return (
   <div className="flex flex-col h-dvh w-full overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
      <div className="flex flex-col items-center justify-start mb-20">
        <div className="flex flex-col text-4xl md:text-6xl font-black mt-44 mb-20 items-center justify-center">
          <div>
            flexcards helps you <span className="bg-highlighter text-black">study</span>.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-2xl text-slate-300 px-40"><div>A completely free, open source online flashcard app built with <span className="font-bold text-foreground">React</span>, <span className="font-bold text-foreground">Next.js</span> and <span className="font-bold text-foreground">Tailwind</span>.</div></div>
      <Link href='/dashboard' className="mt-8 bg-accent rounded-xl hover:bg-highlighter hover:text-black py-6 px-8 font-bold">
        Get Started
      </Link>
      </div>
      <div className="flex flex-col bg-zinc-900 pb-6">
        <div className="flex flex-col px-36 mt-6 gap-6 items-center text-4xl justify-center">
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center font-bold">
              Create decks of virtual flashcards.
            </div>
            <Image src={editor} alt='Picture of app' className="w-[50vw] border-4 rounded-xl"/>
          </div>
          <div className="flex items-center justify-center gap-6">
            <Image src={study} alt='Picture of app' className="w-[50vw] border-4 rounded-xl"/>
            <div className="flex items-center justify-center font-bold">
              Study your decks with an interactive flashcard viewer.
            </div>
          </div>
          <div className="flex items-center justify-center gap-6">
            <div className="flex items-center justify-center font-bold">
              Share your decks and discover other shared decks.
            </div>
            <Image src={discover} alt='Picture of app' className="w-[50vw] border-4 rounded-xl"/>
          </div>
        </div>
      </div>
   </div>
  );
}