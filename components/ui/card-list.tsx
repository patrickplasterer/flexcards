"use client"

import { CardPreview } from "@/components/ui/card-preview";
import { redirect, useSearchParams } from "next/navigation";
import * as React from 'react'
import { createCard, deleteCard } from "@/lib/actions";
import { cn } from "@/lib/utils";

export function CardList({ cards, isDisabled }: {cards: Array<object>, isDisabled: boolean}) {
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');
    const cardId = searchParams.get('card');

    function handleCreate() {
        createCard(Number(deckId));
    }
    function handleDelete() {
        deleteCard(Number(cardId));
        redirect(`/editor/?${deckId}`)
    }

    return (
        <div className={cn("flex flex-col w-[20vw] flex-grow overflow-hidden", {"pointer-events-none opacity-60": isDisabled === true})}>
            <div className="flex p-2 gap-2 items-center justify-end h-[4vh] flex-none overflow-hidden">
                <div className={cn("flex px-2 py-1 rounded-[0.5rem] bg-primary text-primary-foreground hover:opacity-60", {"pointer-events-none opacity-60": !cardId})} onClick={handleDelete}>
                    Delete Card
                </div>
                <div className="flex px-2 py-1 rounded-[0.5rem] bg-primary text-primary-foreground hover:opacity-60" onClick={handleCreate}>
                    Create card
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