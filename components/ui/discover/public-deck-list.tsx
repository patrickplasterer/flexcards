"use client"

import { cn } from "@/lib/utils";
import { useRouter, useSearchParams } from "next/navigation";
import { DeckPreview } from "./deck-preview";

export function PublicDeckList({ decks }: {decks: Array<object>}) {
    
    const router = useRouter();
    const searchParams = useSearchParams();
    const deckId = searchParams.get('deck');


    return (
        <div className="flex flex-col w-[20vw] flex-grow overflow-hidden">
            <div className="flex h-[3vh] flex-none items-center justify-center">
                <div className='flex w-full items-center justify-end gap-1 text-sm p-2'>
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
                    {decks.map((deck) => {
                        return (
                            <DeckPreview key={deck.id} deck={deck} />
                        );
                    })}
                </div>
            </div>
        </div>
    )
}