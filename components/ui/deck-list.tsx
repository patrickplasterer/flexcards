import { DeckButton } from "@/components/ui/deck-button";
import * as React from 'react'
import { Deck } from "@/db/types";

export function DeckList({ decks, workspace }: {decks: Array<Deck>, workspace: string}) {

    return (
        <>
            {decks.map((deck) => {
                return (
                    <DeckButton key={deck.id} deckId={deck.id} title={deck.name} isPublic={deck.isPublic} workspace={workspace}/>
                );
            })}
        </>
    )
}