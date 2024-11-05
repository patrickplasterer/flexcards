"use client"
import * as React from 'react';
import { Button } from '../button';
import { createCard, deleteCard } from '@/lib/actions';
import { useRouter, useSearchParams } from 'next/navigation';

export function CardListButtons() {
    const router = useRouter();
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');
    const cardId = searchParams.get('card');
    let isDeleteDisabled = true;
    let isAddDisabled = true;
    if(deckId) {isAddDisabled = false};
    if(cardId) {isDeleteDisabled = false};


    function handleCreate() {
        createCard(Number(deckId));
    }

    function handleDelete() {
        deleteCard(Number(cardId));
        router.push(`/editor/?deck=${deckId}`);
        
    }

    return (
        <div className='flex w-full items-center justify-end gap-1 text-sm p-2'>
            <Button onClick={handleDelete} disabled={isDeleteDisabled}>Delete Card</Button>
            <Button onClick={handleCreate} disabled={isAddDisabled}>Add Card</Button>
        </div>
    )
}