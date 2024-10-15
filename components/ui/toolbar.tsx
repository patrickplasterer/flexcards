import { PlusCircleIcon } from "lucide-react"
import { Button } from "./button"

export function Toolbar() {
    return (
        <div className="flex flex-col p-4 bg-accent w-80 gap-4 items-center">
            <div className="font-bold text-4xl mb-5 text-white mt-4">flexcards</div>
            <div className="flex flex-col gap-4 w-full">
                <div className="flex flex-col gap-2">
                    <h1>Current Deck</h1>
                    <div className= "bg-gray-600 p-1 shadow-inner max-h-[15vh] overflow-auto hover:ring-2 hover:ring-white">
                        <ul>
                            <li>Card 1</li>
                            <li>Card 2</li>
                            <li>Card 3</li>
                            <li>Card 1</li>
                            <li>Card 2</li>
                            <li>Card 3</li>
                            <li>Card 1</li>
                            <li>Card 2</li>
                            <li>Card 3</li>
                        </ul>
                    </div>
                    <div className="text-sm hover:bg-gray-500">Add a card <PlusCircleIcon className="h-4 w-4 inline-block"/></div>
                </div>
                <div className="flex flex-col gap-2">
                    <h1>Most Missed Cards:</h1>
                    <div className= "bg-gray-600 p-1 shadow-inner overflow-auto">
                        <ul>
                            <li>Card 1</li>
                            <li>Card 2</li>
                            <li>Card 3</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex flex-col mt-4 gap-2 w-full">
                <h1>Decks:</h1>
                <div className="bg-gray-600 p-1 flex-grow shadow-inner">
                    <ul>
                        <li>Deck 1</li>
                        <li>Deck 2</li>
                        <li>Deck 3</li>
                    </ul>
                </div>
                <div className="text-sm hover:bg-gray-500">Add a card <PlusCircleIcon className="h-4 w-4 inline-block"/></div>
            </div>
            <Button className={'text-lg mt-4'}>Save to file</Button>
        </div>
    )
}