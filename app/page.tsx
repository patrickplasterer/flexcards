import { PopUp } from "@/components/ui/popup";


export default function Home() {
  return (
   <div className="flex flex-col h-dvh w-full p-6 overflow-auto">
      <div className="flex flex-col text-9xl md:text-[15rem] font-black leading-none mb-12">flexcards helps you study.</div>
      <div className="flex flex-col text-6xl md:text-8xl leading-none"><div>A completely free, open-source online flashcard app built with <span className="font-bold">React</span>, <span className="font-bold">Next.js</span> and <span className="font-bold">Tailwind</span>.</div></div>
   </div>
  );
}