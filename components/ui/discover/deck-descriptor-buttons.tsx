'use client';

import { deleteFollow } from "@/lib/actions"
import { Button } from "../button"
import { Deck } from "@/db/types"
import { createFollow } from "@/lib/actions"


export function DeckDescriptorButtons({ deck, userId, isFollowing }: {deck: Deck, userId: string, isFollowing: boolean}) {

    function handleFollow() {
        createFollow(deck.id, userId);
    }

    function handleDeleteFollow() {
        deleteFollow(deck.id, userId)
    }

    function handleCopy() {

        console.log('handleCopy called.')
    }

    return (
        <div className="flex gap-2 mt-2">
            {!isFollowing ? <Button variant='default' size='lg' className='text-sm' onClick={handleFollow}>Follow Deck</Button> : <Button variant='default' size='lg' className='text-sm' onClick={handleDeleteFollow}>Unfollow Deck</Button>}
            <Button variant='default' size='lg' className='text-sm' onClick={handleCopy}>Make a Copy</Button>
        </div>
    )
}