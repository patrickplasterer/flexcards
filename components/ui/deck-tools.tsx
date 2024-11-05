"use client"

import { createDeck, deleteDeck, updateDeck } from '@/lib/actions';
import { redirect } from 'next/navigation';
import * as React from 'react';
import { AddDeckDialog } from './editor/add-deck-dialog';
import { Button } from './button';
import { PlusIcon, RefreshCwIcon, Trash2Icon } from 'lucide-react';
import { UpdateDeckDialog } from './editor/update-deck-dialog';
import { DeleteDeckDialog } from './editor/delete-deck-dialog';
import { Deck } from '@/db/types';
import { cn } from '@/lib/utils';

export function DeckTools({ userId, deck, workspace }: {userId: string, deck: Deck | undefined, workspace: string}) {

    console.log(deck)

    function handleCreate(formData: FormData) {
        formData.append("userId", userId.toString());
        createDeck(formData);
    }

    function handleUpdate(formData: FormData) {
        formData.append("deckId", deck.id.toString());
        updateDeck(formData);
    }

    function handleDelete() {
        deleteDeck(deck.id);
        redirect('/editor');
    }

    return (
        <div className={cn("flex flex-col gap-2", {"hidden": workspace === 'study'})}>
            <AddDeckDialog handleClick={handleCreate}><Button variant={'nav'} className='gap-4'><PlusIcon className='w-4 h-4 mb-[2px]'/>Add Deck</Button></AddDeckDialog>
            { deck ? <UpdateDeckDialog activeDeck={deck} handleClick={handleUpdate}><Button variant={'nav'} className='gap-4'><RefreshCwIcon className='w-4 h-4 mb-[2px]'/>Update Deck</Button></UpdateDeckDialog> : null}
            { deck ? <DeleteDeckDialog handleClick={handleDelete}><Button variant={'nav'} className='gap-4'><Trash2Icon className='w-4 h-4 mb-[2px]'/>Delete Deck</Button></DeleteDeckDialog> : null }
        </div>
    )
}