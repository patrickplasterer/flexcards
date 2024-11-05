import * as React from 'react';
import { Flashcard } from './flashcard';
import { getCards } from '@/lib/data';

export async function FlashcardWrapper({ deckId}: {deckId: string}) {

    const cards = await getCards(Number(deckId))

    return (
        <div className="flex flex-col items-center justify-center w-full">
            {cards.length === 0 ? <div className="flex text-center w-56 opacity-40 text-md">This deck has no cards yet. Add cards in the editor.</div> : <Flashcard cards={cards}/>}
        </div>
    )
}