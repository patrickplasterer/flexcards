import { UsersIcon } from "lucide-react"
import { clsx } from 'clsx';

export function DeckButton({ key, deckID, title, isPublic }: {key: number, deckID: number, title: string, isPublic: boolean}) {
    return (
        <button className="flex px-4 py-2 w-full disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground justify-start font-bold rounded-xl" onClick={handleClick}>
            <div className='flex w-full justify-between gap-4 line-clamp-1'>
                <div className='flex'>{title}</div>
                <div className={clsx('flex rounded-lg opacity-50 hover:opacity-100', {'opacity-100': isPublic === true,},)}><UsersIcon className='w-4 h-4 mt-[3px]'/></div>
            </div>
        </button>
    )
}

// className={clsx(
//     'flex h-[48px] grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3',
//     {
//       'bg-sky-100 text-blue-600': pathname === link.href,
//     },
//   )}