"use client"

import { CardPreview } from "@/components/ui/card-preview";
import { useSearchParams, useRouter } from "next/navigation";
import * as React from 'react'
import { createCard, deleteCard } from "@/lib/actions";
import { cn } from "@/lib/utils";

export function CardList({ cards, isDisabled }: {cards: Array<object>, isDisabled: boolean}) {
    const router = useRouter();
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');
    const cardId = searchParams.get('card');

    function handleCreate() {
        createCard(Number(deckId));
    }
    
    function handleDelete() {
        deleteCard(Number(cardId));
        router.push(`/editor/?deck=${deckId}`);
        
    }

    return (
        <div className={cn("flex flex-col w-[20vw] flex-grow overflow-hidden", {"pointer-events-none opacity-60": isDisabled === true})}>
            <div className="flex h-[3vh] flex-none items-center justify-center">
                <div className='flex w-full items-center justify-end gap-2 text-sm p-2'>
                    <button className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]" onClick={handleDelete}>Delete Card</button>
                    <button className="flex items-center justify-center px-2 py-1 hover:bg-accent hover: text-accent-foreground rounded-[0.5rem]" onClick={handleCreate}>Add Card</button>
                </div>
            </div>
            <div className="bg-border h-[1px]"></div>
            <div className="flex flex-col p-2 overflow-hidden">
                <div className="flex flex-col">
                    <div className="flex w-full border-2 rounded-[0.5rem] p-1">
                        Search
                    </div>
                </div>
                <div className="flex flex-col flex-grow p-2 gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
                    {cards.map((card) => {
                        return (
                            <CardPreview key={card.id} card={card} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}