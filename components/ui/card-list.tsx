import { CardPreview } from "@/components/ui/card-preview";
import * as React from 'react'

export function CardList({ cards, handleClick }: {cards: Array<object>, handleClick: React.MouseEventHandler<HTMLButtonElement>}) {

    return (
        <>
            {cards.map((card) => {
                return (
                    <CardPreview key={card.id} cardId={card.id} front={card.front} back={card.back} handleClick={handleClick} />
                );
            })}
        </>
    )
}