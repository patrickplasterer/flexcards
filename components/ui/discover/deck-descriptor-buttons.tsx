'use client';

import { copyDeck, deleteFollow } from "@/lib/actions"
import { Button } from "../button"
import { Deck } from "@/db/schema"
import { createFollow } from "@/lib/actions"
import { getDeckById } from "@/lib/data";


export function DeckDescriptorButtons({ deck, userId, isFollowing }: {deck: Deck, userId: string, isFollowing: boolean}) {

    function handleFollow() {
        createFollow(deck.id, userId);
    }

    function handleDeleteFollow() {
        deleteFollow(userId, deck.id)
    }

    async function handleCopy() {
        const oldDeck = await getDeckById(deck.id);
        copyDeck(userId, oldDeck[0]);
    }

    return (
        <div className="flex gap-2 mt-2">
            {!isFollowing ? <Button variant='default' size='lg' className='text-sm' onClick={handleFollow}>Follow Deck</Button> : <Button variant='default' size='lg' className='text-sm' onClick={handleDeleteFollow}>Unfollow Deck</Button>}
            <Button variant='default' size='lg' className='text-sm' onClick={handleCopy}>Make a Copy</Button>
        </div>
    )
}