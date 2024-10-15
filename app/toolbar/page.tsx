import { Button } from "@/components/ui/button"
import Flashcard from "@/components/ui/flashcard"
import VaulDrawer from "@/components/ui/drawer";
import { Toolbar } from "@/components/ui/toolbar";


export default function Home() {
  return (
   <div className="flex flex-col w-full">
    <div className="flex flex-row h-screen">
        <Toolbar />
      <div className="flex flex-grow flex-col w-full p-4">
        <Flashcard/>
      </div>
    </div>
   </div>
  );
}