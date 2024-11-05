"use client"

import * as React from 'react';
import { Button } from '../button';
import { useRouter } from 'next/navigation';
import { updateCard } from '@/lib/actions';
import { Card } from '@/db/types';

export function CardEditorButtons({ card }: {card: Card}) {
    let isDisabled = true;
    if (card) {isDisabled = false}

    const router = useRouter();

    function handleSave() {
        const [front, back] = document.querySelectorAll('[data-slate-string');
        const frontText = front.innerHTML;
        const backText = back.innerHTML;
        const cardId = card.id
        updateCard(frontText, backText, cardId);
    }
    
    function handleReset() {
      router.refresh();
    }

    return (
        <div className="flex p-2 gap-2 items-center justify-end h-[3vh] min-h-10 flex-none overflow-hidden">
            <Button onClick={handleReset} disabled={isDisabled}>
                Reset
            </Button>
            <Button onClick={handleSave} disabled={isDisabled}>
                Save
            </Button>
        </div>
    )
}