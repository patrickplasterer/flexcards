
import {GripHorizontalIcon} from 'lucide-react'
import { DeckList } from "./deck-list"
import * as React from 'react'
import { Deck } from '@/db/schema'
import { DeckTools } from './deck-tools'
import { FollowingDeckList } from './study/following-deck-list'


export function Toolbar({ workspace, decks, deckId, userId, followedDecks }: {workspace: string, decks: Array<Deck>, deckId: string | undefined, userId: string, followedDecks: Array<Deck>}) {

    const deck = decks.find(({ id }) => id == Number(deckId))
    
    return (
            <div className="flex flex-col flex-grow overflow-hidden w-[20vw]">
                <div className="flex h-[3vh] min-h-10 flex-none items-center justify-start md:justify-center">
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className="flex flex-col basis-1/2 px-1">
                    <div className='flex flex-col py-4 px-2 gap-1'>
                        <h1 className='font-bold text-sm mb-1'>My Decks:</h1>
                        <DeckList decks={decks} workspace={workspace}/>
                    </div>
                    {(workspace == 'editor' || followedDecks.length == 0) ? null :
                        <div className='flex flex-col py-4 px-2 gap-1'>
                            <h1 className='font-bold text-sm mb-1'>My Followed Decks:</h1>
                            <FollowingDeckList userId={userId} decks={followedDecks} workspace={workspace}/>
                        </div>
                    }
                </div>
                <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                <div className={"flex flex-col basis-1/2 px-2 py-4"}>
                    <DeckTools userId={userId} deck={deck} workspace={workspace}/>
                </div>
            </div>
    )
}