import { useState } from "react"
import { DeckButton } from "./deck-button"
import { getDecks } from "@/lib/data"
import * as React from 'react';

export async function DeckList({ decks }: {decks: }) {

    return (
        <div className="flex flex-col">
            {decks.map((deck) => {
                return (
                    <DeckButton key={deck.id} deckID={deck.id} title={deck.name} isPublic={deck.isPublic} handleClick={handleClick}/>
                );
            })}
        </div>
    )
}