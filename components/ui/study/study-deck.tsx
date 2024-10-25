'use client'

import { Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { Button } from '../button'
import Flashcard from '../flashcard'
import { clsx } from 'clsx'
import { useState } from 'react'
import { DeckList } from '../deck-list'
import { getCards } from '@/lib/data'
import { CardList } from '../card-list'


export function StudyDeck({decks, cards}: {decks: Array<object>, cards: Array<object>}) {

    const [isHidden, setIsHidden] = useState(false);
    const [activeDeck, setActiveDeck] = useState(decks[0].id);
    const [activeCards, setActiveCards] = useState(cards);

    function handleHide(e) {
        e.stopPropagation();
        if (!isHidden) {
            setIsHidden(true);
        } else {setIsHidden(false)};
    }

    async function handleDeckButton(deckId) {
        setActiveDeck(deckId);
        const newCards = getCards(activeDeck);
        setActiveCards(newCards)
    }
 

    return (

            <div className="flex flex-row rounded-xl border-2 h-dvh w-full flex-none overflow-hidden">
                <div className={clsx('flex', {'hidden': isHidden === true})}>
                    <div className="flex flex-col basis-60 shrink-0">
                        <div className="flex flex-col h-10 shrink-0 items-center justify-center p-2">
                            <div className='flex rounded-xl w-full items-center justify-center gap-2'>
                                <Button>Editor</Button>
                                <Button>View</Button>
                                <Button>Analytics</Button>
                            </div>
                        </div>
                        <div className="bg-border h-[1px]"></div>
                            <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
                                <DeckList decks={decks} workspace={'study'} deckButton={handleDeckButton} activeDeck={activeDeck}/>
                            </div>
                        <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                        <div className="flex flex-col basis-1/2 px-2 py-4">
                            <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                            <Button variant={'nav'} className='gap-4'><DownloadIcon className='w-4 h-4 mb-[2px]'/>Export</Button>
                            <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                        </div>
                    </div>
                <div className="flex flex-col justify-center items-center bg-border w-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-col-resize'><GripVerticalIcon className='w-4 h-4'/></div></div>
                </div>
                <div className="flex flex-col basis-1/2 grow p-2">
                    <Flashcard handleHide={handleHide} isHidden={isHidden} cards={activeCards}/>
                </div>
            </div>
    )
}

