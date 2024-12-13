import { FollowingDeckButton } from './following-deck-button';
import * as React from 'react'
import { Deck } from "@/db/types";

export async function FollowingDeckList({ userId, workspace, decks }: {userId: string, workspace: string, decks: Array<Deck>}) {

    return (
        <>
            {(!decks || decks.length == 0) ? <div className="flex text-sm px-4 mt-2">You don&apos;t have any decks yet. Click Add Deck in the Editor create one.</div> : decks.map((deck) => {
                return (
                    <FollowingDeckButton key={deck.id} userId={userId} deckId={deck.id} title={deck.name} isPublic={deck.isPublic} workspace={workspace}/>
                );
            })}
        </>
    )
}