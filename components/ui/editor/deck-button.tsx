import { UsersIcon } from "lucide-react"

export function DeckButton() {
    return (
        <button className="inline-flex items-center whitespace-nowrap rounded-md text-sm transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground justify-start font-bold">
            <div className='flex w-full justify-between'>
                <div className='flex'>Deck 1</div>
                <div className='flex rounded-lg opacity-50 hover:opacity-100'><UsersIcon className='w-4 h-4'/></div>
            </div>
        </button>
    )
}