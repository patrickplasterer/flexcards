"use client"

import { Dialog } from '@/components/ui/dialog';
import { Deck } from '@/db/schema';
import { cn, openCloseDataState } from '@/lib/utils';
import { PlusIcon, RefreshCwIcon, Trash2Icon } from 'lucide-react';
import { Button } from './button';
import { AddDeckForm } from './editor/add-deck-form';
import { UpdateDeckForm } from './editor/update-deck-form';
import { DeleteDeckForm } from './editor/delete-deck-form';

export function DeckTools({ userId, deck, workspace }: {userId: string, deck: Deck, workspace: string}) {



    return (
        <div className={cn("flex flex-col gap-2", {"hidden": workspace === 'study'})}>
            
            {/* Add Deck Button and Dialog */}
            <Button variant={'nav'} className='gap-4' onClick={() => openCloseDataState('add-deck-dialog')}><PlusIcon className='w-4 h-4 mb-[2px]'/>Add Deck</Button>
            <Dialog title='Add a Deck' id='add-deck-dialog'><AddDeckForm userId={userId} id='add-deck-dialog'/></Dialog>
            
            {/* Update Deck Button and Dialog */}
            { deck && <Button variant={'nav'} className='gap-4' onClick={() => openCloseDataState('update-deck-dialog')}><RefreshCwIcon className='w-4 h-4 mb-[2px]'/>Update Deck</Button>}
            <Dialog title='Update Deck' id='update-deck-dialog'><UpdateDeckForm activeDeck={deck} userId={userId} id='update-deck-dialog'/></Dialog>
            
            {/* Delete Deck Button and Dialog */}
            { deck && <Button variant={'nav'} className='gap-4' onClick={() => openCloseDataState('delete-deck-dialog')}><Trash2Icon className='w-4 h-4 mb-[2px]'/>Delete Deck</Button>}
            <Dialog id='delete-deck-dialog'><DeleteDeckForm deck={deck} userId={userId} id='delete-deck-dialog'/></Dialog>
            
            {/* { deck ? <DeleteDeckDialog handleClick={handleDelete}><Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Delete Deck</Button></DeleteDeckDialog> : null } */}
        </div>
    )
}