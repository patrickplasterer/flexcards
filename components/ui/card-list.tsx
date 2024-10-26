import { CardPreview } from "@/components/ui/card-preview";
import * as React from 'react'

export function CardList({ cards }: {cards: Array<object>}) {

    return (
        <div className="flex flex-col p-4 gap-2 w-[20vw]">
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
    )
}