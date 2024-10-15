import { Button } from "@/components/ui/button"
import Flashcard from "@/components/ui/flashcard"
import VaulDrawer from "@/components/ui/drawer";


export default function Home() {
  return (
   <div className="flex flex-col h-screen w-full p-2">
      <VaulDrawer />
      <div className="flex flex-grow flex-col h-[70vh] rounded-xl w-full p-6">
        <Flashcard/>
      </div>
   </div>
  );
}