"use client"

import { MinusIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { deleteFollow } from "@/lib/actions"
import { useSearchParams, useRouter } from "next/navigation"
import * as React from 'react'


export function FollowingDeckButton({ userId, title, deckId, workspace }: {userId: string, title: string, deckId: number, workspace: string}) {
    
    const searchParams = useSearchParams();
    const router = useRouter();

    function handleDeleteFollow(e: React.MouseEvent<HTMLDivElement>) {
        e.stopPropagation();
        deleteFollow(userId, deckId);
    }

    function handleClick() {
        router.push(`/${workspace}/?deck=${deckId}`)
    }

    const activeDeck = searchParams.get('deck');

    return (
            <button onClick={handleClick} className={cn("flex px-4 py-2 text-sm w-full hover:bg-accent hover:text-accent-foreground justify-start font-bold rounded-xl", {'bg-accent text-accent-foreground': deckId == Number(activeDeck)})}>
                <div className='flex w-full justify-between gap-4'>
                    <div className='flex truncate'>{title}</div>
                    <div className='flex rounded-lg opacity-50 hover:opacity-100 z-10 active:opacity-50' onClick={handleDeleteFollow}>
                        <MinusIcon className='w-4 h-4 mt-[3px]'/>
                    </div>
                </div>
            </button>
    )
}