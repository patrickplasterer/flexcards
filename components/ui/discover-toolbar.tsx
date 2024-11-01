"use client"

import { Trash2Icon, SquarePlusIcon, UsersIcon, DownloadIcon, GripHorizontalIcon, GripVerticalIcon } from 'lucide-react'
import { DeckList } from "./deck-list"
import { createDeck, deleteDeck } from "@/lib/actions"
import { redirect } from "next/navigation"
import { AddDeckDialog } from "./editor/add-deck-dialog"
import { Button } from "./button"


export function DiscoverToolbar() {


    return (
            <div className="flex flex-col flex-grow overflow-hidden w-[20vw]">
                <div className="flex h-[3vh] flex-none items-center justify-center">
                    <div className='flex w-full items-center justify-end gap-1 text-sm p-2'>
                    </div>
                </div>
                <div className="bg-border h-[1px]"></div>
                <div className='flex flex-col basis-1/2 py-4 px-2 gap-1'>
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