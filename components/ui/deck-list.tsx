import { DeckButton } from "@/components/ui/deck-button";
import * as React from 'react'
import { Deck } from "@/db/types";
import { getDecks } from "@/lib/data";

export async function DeckList({ workspace, decks }: {workspace: string, decks: Array<Deck>}) {

    return (
        <>
            {decks.length == 0 ? <div className="flex text-sm px-4 mt-2">You don&apos;t have any decks yet. Click Add Deck in the Editor create one.</div> : decks.map((deck) => {
                return (
                    <DeckButton key={deck.id} deckId={deck.id} title={deck.name} isPublic={deck.isPublic} workspace={workspace}/>
                );
            })}
        </>
    )
}