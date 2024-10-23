import { PopUp } from "@/components/ui/popup";
import Image from "next/image";
import snapshot from '@/public/snapshot.png'


export default function Home() {
  return (
   <div className="flex flex-col h-dvh w-full p-8 overflow-auto">
      <div className="flex flex-col basis-[40vh] items-center justify-center mb-10">
        <div className="flex flex-col text-4xl md:text-6xl font-black mt-40 mb-20 items-center justify-center">
          <div>
            flexcards helps you <span className="bg-highlighter text-black">study</span>.
          </div>
        </div>
        <div className="flex flex-col items-center justify-center text-2xl text-slate-300 px-40"><div>A completely free, open source online flashcard app built with <span className="font-bold text-foreground">React</span>, <span className="font-bold text-foreground">Next.js</span> and <span className="font-bold text-foreground">Tailwind</span>.</div></div>
      </div>
      <div className="flex flex-col basis-[40vh] px-40">
        <Image src={snapshot} alt='Picture of app'/>
      </div>
   </div>
  );
}