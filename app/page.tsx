import Image from "next/image";
import snapshot from '@/public/snapshot.png'
import Link from "next/link";

export default function Home() {
  return (
   <div className="flex flex-col h-dvh w-full p-8 overflow-auto">
      <div className="flex flex-col basis-[40vh] items-center justify-center mb-10">
        <div className="flex flex-col text-4xl md:text-6xl font-black mt-44 mb-20 items-center justify-center">
          <div>
            flexcards helps you <span className="bg-highlighter text-black">study</span>.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-2xl text-slate-300 px-40"><div>A completely free, open source online flashcard app built with <span className="font-bold text-foreground">React</span>, <span className="font-bold text-foreground">Next.js</span> and <span className="font-bold text-foreground">Tailwind</span>.</div></div>
      <Link href='/dashboard' className="mt-6 bg-accent rounded-xl hover:bg-highlighter hover:text-black py-6 px-8 font-bold">
        Get Started
      </Link>
      </div>
      <div className="flex flex-col basis-[40vh] px-40">
        <Image src={snapshot} alt='Picture of app'/>
      </div>
   </div>
  );
}