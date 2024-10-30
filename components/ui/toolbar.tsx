"use client"

import { Trash2Icon, DownloadIcon, GripHorizontalIcon, PlusIcon, RefreshCwIcon } from 'lucide-react'
import { DeckList } from "./deck-list"
import { createDeck, deleteDeck, updateDeck } from "@/lib/actions"
import { redirect } from "next/navigation"
import { AddDeckDialog } from "./editor/add-deck-dialog"
import { DeleteDeckDialog } from './editor/delete-deck-dialog'
import { UpdateDeckDialog } from './editor/update-deck-dialog'
import { Button } from "./button"
import { cn } from '@/lib/utils'
import { EditorNavButton } from './editor/editor-nav-button'


export function Toolbar({ decks, workspace, deck, userId }: {decks: Array<object>, workspace: string, deck: object, userId: string}) {

    function handleCreate(formData: FormData) {
        formData.append("userId", userId.toString());
        createDeck(formData);
    }

    function handleUpdate(formData: FormData) {
        formData.append("deckId", deck.id);
        updateDeck(formData);
    }

    function handleDelete() {
        deleteDeck(deck.id);
        redirect('/editor');
    }

    return (
            <div className="flex flex-col flex-grow overflow-hidden w-[20vw]">
                <div className="flex h-[3vh] flex-none items-center justify-start md:justify-center">
                    <div className="flex md:hidden"><EditorNavButton/></div>
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
                    <h1 className='font-bold text-sm'>My Decks:</h1>
                    { decks ? <DeckList decks={decks} workspace={workspace}/> : "You don't have any decks, create one in the editor."}
                </div>
                <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                <div className={cn("flex flex-col basis-1/2 px-2 py-4 gap-2", {'hidden': workspace === 'study'})}>
                    <AddDeckDialog handleClick={handleCreate}><Button variant={'nav'} className='gap-4'><PlusIcon className='w-4 h-4 mb-[2px]'/>Add Deck</Button></AddDeckDialog>
                    <UpdateDeckDialog activeDeck={deck} handleClick={handleUpdate}><Button variant={'nav'} className='gap-4'><RefreshCwIcon className='w-4 h-4 mb-[2px]'/>Update Deck</Button></UpdateDeckDialog>
                    <DeleteDeckDialog handleClick={handleDelete}><Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Delete Deck</Button></DeleteDeckDialog>
                </div>
            </div>
    )
}