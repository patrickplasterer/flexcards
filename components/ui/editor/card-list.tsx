import { CardPreview } from "@/components/ui/editor/card-preview";
import * as React from 'react'
import { getCards } from "@/lib/data";


export async function CardList({ deckId }: {deckId: string | undefined}) {

    const cards = await getCards(Number(deckId))


    return (

        <div className="flex flex-col flex-grow p-2 gap-2 overflow-auto scrollbar-thin scrollbar-track-transparent scrollbar-thumb-accent">
            {cards.length !== 0 ? cards.map((card) => {
                return (
                    <CardPreview key={card.id} card={card} />
                );
            }) : <div className="flex opacity-40 p-2 text-sm">Add cards to this deck and they will appear here.</div>}
        </div>

    )
}