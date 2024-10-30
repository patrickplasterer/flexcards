"use client"

import { Button } from "./button"
import { Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { DeckList } from "./deck-list"
import { createDeck, deleteDeck } from "@/lib/actions"
import { redirect } from "next/navigation"


export function Toolbar({ decks, workspace, deck, userId }: {decks: Array<object>, workspace: string, deck: object, userId: string}) {

    function handleCreate() {
        createDeck(userId);
        console.log('Deck created.')
    }

    function handleDelete() {
        deleteDeck(deck);
        console.log('Deck deleted.');
        redirect('/editor');
    }

    return (
            <div className="flex flex-col flex-grow overflow-hidden w-[20vw]">
                <div className="flex h-[3vh] flex-none items-center justify-center">
                    <div className='flex w-full items-center justify-end gap-2 text-sm p-2'>
                        <button className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]" onClick={handleDelete}>Delete Deck</button>
                        <button className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]" onClick={handleCreate}>Add Deck</button>
                    </div>
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
                    { decks ? <DeckList decks={decks} workspace={workspace}/> : "You don't have any decks, create one in the editor."}
                </div>
                <div className="flex justify-center items-center bg-border h-[1px]"><div className='flex z-10 rounded-lg opacity-50 p-4 hover:opacity-100 cursor-row-resize'><GripHorizontalIcon className='w-4 h-4' /></div></div>
                <div className="flex flex-col basis-1/2 px-2 py-4">
                    <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                    <Button variant={'nav'} className='gap-4'><DownloadIcon className='w-4 h-4 mb-[2px]'/>Export</Button>
                    <Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Trash</Button>
                </div>
            </div>
    )
}