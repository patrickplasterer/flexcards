"use client"

import { UsersIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { updatePublic } from "@/lib/actions"
import Link from "next/link"
import { SetStateAction, useReducer } from "react";
import { useSearchParams } from "next/navigation"

export function DeckButton({ title, isPublic, deckId, workspace }: {title: string, isPublic: boolean, deckId: number, workspace: string, deckButton: React.Dispatch<SetStateAction<Event, number>>}) {
    const searchParams = useSearchParams();
    function handleClick(e) {
        e.stopPropagation();
        updatePublic(deckId);
    }

    const activeDeck = searchParams.get('deck');

    return (
        <Link href={`/study?deck=${deckId}`} className={cn("flex px-4 py-2 text-sm w-full hover:bg-accent hover:text-accent-foreground justify-start font-bold rounded-xl", {'bg-accent text-accent-foreground': deckId == activeDeck})}>
            <div className='flex w-full justify-between gap-4'>
                <div className='flex truncate'>{title}</div>
                <div className={cn('flex rounded-lg opacity-50 hover:opacity-100 z-10', {'opacity-100': isPublic == true, 'hidden': workspace == 'study'})} onClick={handleClick}>
                    <UsersIcon className='w-4 h-4 mt-[3px]'/>
                </div>
            </div>
        </Link>
    )
}