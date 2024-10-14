import { Button } from "@/components/ui/button"
import Flashcard from "@/components/ui/flashcard"


export default function Home() {
  return (
   <div className="flex flex-col h-screen w-full p-4 gap-4">
      <div className="flex flex-row gap-2 bg-gray-400 p-2 rounded-xl">
        <div className="flex items-center text-3xl p-4">Flashcard App</div>
        <div className="flex bg-gray-500 rounded-xl p-2">
          <ul>
            <li>
              Deck 1
            </li>
            <li>
              Deck 2
            </li>
            <li>
              Deck 3
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-xl w-full p-6">
        <Flashcard/>
      </div>
   </div>
  );
}
