import { Button } from "@/components/ui/button"
import Flashcard from "@/components/ui/flashcard"
import VaulDrawer from "@/components/ui/drawer";


export default function Home() {
  return (
   <div className="flex flex-col h-screen w-full p-2 gap-2">
      <div className="flex flex-row p-4 items-center rounded-xl">
        <h1 className="text-3xl font-bold">flexcards</h1>
      </div>
   </div>
  );
}