import { Button } from "@/components/ui/button"
import Flashcard from "@/components/ui/flashcard"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from "@/components/ui/navigation-menu"



export default function Home() {
  return (
   <div className="flex flex-col h-screen w-full p-4 gap-4"> 
      <div className="flex flex-col border-2 border-white h-[70vh] rounded-xl w-full p-6">
        <Flashcard/>
      </div>
   </div>
  );
}
