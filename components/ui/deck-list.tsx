import { DeckButton } from "@/components/ui/deck-button";
import * as React from 'react'

export function DeckList({ decks, workspace }: {decks: Array<object>, workspace: string}) {

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