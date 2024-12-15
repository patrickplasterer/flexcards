"use client"

import { UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { updatePublic } from "@/lib/actions"
import { useSearchParams, useRouter } from "next/navigation"


export function DeckButton({ title, isPublic, deckId, workspace }: {title: string, isPublic: boolean, deckId: number, workspace: string}) {
    
    const searchParams = useSearchParams();
    const router = useRouter();

    function handlePublic(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        updatePublic(deckId);
    }

    function handleClick() {
        router.push(`/${workspace}/?deck=${deckId}`)
    }

    const activeDeck = searchParams.get('deck');

    return (
            <button onClick={handleClick} className={cn("flex px-4 py-2 text-sm w-full hover:bg-accent hover:text-accent-foreground justify-start font-bold rounded-xl", {'bg-accent text-accent-foreground': deckId == Number(activeDeck)})}>
                <div className='flex w-full justify-between gap-4'>
                    <div className='flex truncate'>{title}</div>
                    <div className={cn('flex rounded-lg opacity-50 hover:opacity-100 z-10 active:opacity-50', {'opacity-100': isPublic == true, 'hidden': workspace == 'study'})} onClick={handlePublic}>
                        <UsersIcon className='w-4 h-4 mt-[3px]'/>
                    </div>
                </div>
            </button>
    )
}