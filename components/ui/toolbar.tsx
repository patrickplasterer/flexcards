
import {GripHorizontalIcon} from 'lucide-react'
import { DeckList } from "./deck-list"
import * as React from 'react'
import { Deck } from '@/db/types'
import { DeckTools } from './deck-tools'


export function Toolbar({ workspace, decks, deckId, userId }: {workspace: string, decks: Array<Deck>, deckId: string | undefined, userId: string}) {

    const deck = decks.find(({ id }) => id == Number(deckId))

    return (
            <div className="flex flex-col flex-grow overflow-hidden w-[20vw]">
                <div className="flex h-[3vh] min-h-10 flex-none items-center justify-start md:justify-center">
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
                    <h1 className='font-bold text-sm'>My Decks:</h1>
                    <DeckList decks={decks} workspace={workspace}/>
                </div>
                <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                <div className={"flex flex-col basis-1/2 px-2 py-4"}>
                    <DeckTools userId={userId} deck={deck} workspace={workspace}/>
                </div>
            </div>
    )
}